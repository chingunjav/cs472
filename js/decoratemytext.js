
(function(){

    
    
}) ();

window.onload = function () {

    var decorateButton = document.getElementById('decButton');
    var PigLaitButton = document.getElementById('PigLaitButton');
    var MalkovitchButton = document.getElementById('Malkovitch');
    var textArea = document.getElementById('decTextArea');
    var chBox = document.getElementById('chBox');

    textArea.style.fontSize = '12pt';

    var increaseFontSize = function () {
        let cSize = parseInt(textArea.style.fontSize);
        cSize += 2;
        textArea.style.fontSize = cSize + 'pt';
    }

    decorateButton.onclick = function () {
        setInterval(increaseFontSize, 2000);
    }

    chBox.onchange = function () {
        if (chBox.checked == true) {
            textArea.style.fontWeight = 'bold';
            textArea.style.color = 'green';
            textArea.style.textDecoration = 'underline';
            document.getElementById('body').style.backgroundImage = "url('https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        }
        else {
            textArea.style.fontWeight = 'normal';
            textArea.style.color = 'black';
            textArea.style.textDecoration = 'none';
            document.getElementById('body').style.backgroundImage = 'none';
        }
    }

    PigLaitButton.onclick = function () {
        let words = textArea.value.split(' ');
        let newWords = '';
        words.forEach(function (element) {
            if (isVowel(element.charAt(0))) {
                element = element + 'ay'
                newWords += element + ' ';
            }
            else {
                element = element.substr(1, element.lenght) + element.charAt(0) + 'ay'
                newWords += element + ' ';
            }
        });
        textArea.value = newWords;
    }

    MalkovitchButton.onclick = function () {
        let words = textArea.value.split(' ');
        let newWords = ''
        words.forEach(element => {
            if (element.length >= 5)
                element = 'Malkovich';

            newWords += element + ' ';
        });
        textArea.value = newWords;
    }

    function isVowel(x) {
        let result;
        result = x.toLowerCase() == "a" || x.toLowerCase() == "e" || x.toLowerCase() == "i" || x.toLowerCase() == "o" || x.toLowerCase() == "u";
        return result;
    }
}

