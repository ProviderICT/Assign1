let string = ""; //for the inputbar
let clear = "";
let btns = document.querySelectorAll('.button'); //select the button whos class was button
Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            alert(document.querySelector('input').value = string);
            //document.querySelector('input').value = string; //clicked key should be seen in the input box

        }else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string; 
        }else if (e.target.innerHTML == 'Sqr') {
            string = Math.sqrt(string);
            alert(document.querySelector('input').value = string);
        }else if (e.target.innerHTML == 'Sq') {
            string = Math.pow(string,2);
            alert(document.querySelector('input').value = string);
        }else if (e.target.innerHTML == '!') {
            string = "";
            // alert(document.querySelector('input').value = string);
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string; //clicked key should be seen in the input box
            
        }
    })
})
