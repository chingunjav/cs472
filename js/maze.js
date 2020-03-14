
$(document).ready(function(){
    var isWin = -1;
    $('div.boundary').on({
        'mouseover':function(){
            if (isWin === -1){
                $('div.boundary').css('background-color','red');
                alert('Sorry, you lost! :(');
                isWin = 0;
            }
        },
        'mouseleave':function () {
            //$('div.boundary').removeAttr('style');
        }
    });

    $('div#end').on('mouseover',function(){
        if (isWin === -1) {
            alert('You win! :)');
            isWin = 1;
        }
    })

    $('div#start').click(function(){
        isWin = -1;
        $('div.boundary').removeAttr('style');
    })

});
