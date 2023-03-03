let scr = document.getElementById("screen");

let buttons = document.getElementsByClassName("buttons");

let string = "";



for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', (e) => {

        text = e.target.innerText;
        if (text == "AC") {
            string = "";
        }
        else if(text == "="){ 
            string = eval(string);
     
        }
        else if(text=="Del"){
            let n = string.length;
            string = string.substring(0,n-1);
        }
        else {
            string = string + text;
        }
        scr.innerHTML = string;

    }, false)
}

