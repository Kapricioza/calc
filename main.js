const result = document.getElementById("result");
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear'){
            result.innerText = '';
        }
        else if(item.id == 'backspace'){
            let string = result.innerText.toString();
            result.innerText = string.substr(0, string.length - 1);
        }
        else if(result.innerText != '' && item.id == 'equal'){
            result.innerText = eval(result.innerText);
        }
        else if(result.innerText == '' && item.id == 'equal'){
            result.innerText = 'Empty!'
            setTimeout(() => (result.innerText = ''),-2000);
        }
        else{
            result.innerText += item.id; 
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;

themeToggleBtn.onclick = () =>{
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}