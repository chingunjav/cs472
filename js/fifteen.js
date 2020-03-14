"use strict"

let Puzzle = (function (options) {
    let EMPTY_POSITION = {col:3,row:3};
    let MAX_ROW = 4;
    let SQUARE_SIZE = 100;

    let isMovable = function(row,col) {
        let emptyRow = EMPTY_POSITION.row;
        let emptyCol = EMPTY_POSITION.col;
        return (emptyCol === col && (row + 1 === emptyRow || row - 1 === emptyRow))
            || (emptyRow === row  && (col + 1 === emptyCol  || col - 1 === emptyCol));
    };

    let shuffle = function(){
        var items = [];
        for (let i =0; i<MAX_ROW; i++) {
            for(let j=0; j<MAX_ROW; j++) {
                if (isMovable(i,j)){
                    items.push({'row':i,'col':j});
                }
            }
        }
        let index = Math.round(Math.random()  * (items.length -  1));
        const div = $('div#'+ items[index].row +'_'+items[index].col);
        move(div,items[index].row,items[index].col);
    };

    let move = function(item,row,col) {
        item.attr('id',EMPTY_POSITION.row+'_'+EMPTY_POSITION.col);
        item.animate({
            left: (EMPTY_POSITION.row * SQUARE_SIZE) +'px',
            top: (EMPTY_POSITION.col * SQUARE_SIZE) +'px'
        },200);
        EMPTY_POSITION = {col: col,row: row};
    };

    let init = function() {
        $('#puzzlearea div').each(function(index) {
            let row = index % MAX_ROW;
            let col = Math.floor(index/MAX_ROW);
            let x = row * SQUARE_SIZE;
            let y = col * SQUARE_SIZE;
            let id = row +'_' + col;
            $(this).addClass('puzzlepiece');
            $(this).attr("id",id);
            $(this).css('left',x+'px').css('top',y+'px').css('background-image','url("background.jpg")').css('background-position',-x + 'px ' + (-y) + 'px');

            $(this).mouseover(function() {
                let id = $(this).attr("id").split('_');
                let row = parseInt(id[0]);
                let col = parseInt(id[1]);
                if (isMovable(row,col)){
                    $(this).addClass('movablepiece');
                    $(this).css('cursor','move');
                } else {
                    $(this).removeClass('movablepiece');
                }
            });

            $(this).click(function() {
                let id = $(this).attr("id").split('_');
                let row = parseInt(id[0]);
                let col = parseInt(id[1]);
                if (isMovable(row,col)){
                    move($(this),row,col);
                }
            })
        });
    };

    return {
        init: init,
        shuffle:function(number) {
            for (var i=0;i<number;i++){
                shuffle();
            }
        }
    }
})();
