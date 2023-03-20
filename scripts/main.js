// console.dir(document);
// const h1 = document.querySelector('[data-header]');
// // console.log(h1);
// h1.style.color = 'blue';

function counter()
{
const display = document.querySelector('[data-counter-display]')
const buttons = document.querySelectorAll('[data-counter-button]')

// console.log(display);
// console.log(buttons[0]);
// console.log(buttons[1]);

// buttons[0].addEventListener('click', handleClick);
// buttons[1].addEventListener('click', handleClick);
// buttons[2].addEventListener('click', handleClick);


for(const button of buttons)
    {
        button.addEventListener('click', handleClick);
    }

const initialCount = 0;
let count = 0;
updateHtml();
function handleClick(e)
{  
    const which =e.target.dataset.counterButton;
    switch(which){
        case 'increment':
            {
                count++;
                break;
            }
        case 'decrement':
            {
                count--;
                break;
            }
        case 'reset':
            {
                count= initialCount;
                break;
            }
        default:
            {
                // console.warn('The value provided is not valid', which);
                count+= Number(which);
            }
        

    }

    updateHtml();
}



function updateHtml(){
    display.innerText = count;
    display.classList.remove('positive', 'negative')
    if(count > 0){
        //sa se aplica clasa positive
        display.classList.add('positive');
    }else if(count <0)
    {
        //sa se aplice clasa negative
        display.classList.add('negative');
    }
}


}// End counter

counter();