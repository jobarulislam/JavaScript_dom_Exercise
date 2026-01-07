function subscribe(){
    const buttonElement = document.querySelector('.Subscribe');
    if (buttonElement.innerText === 'Subscribe')
    {
        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('Subscribed');
    }

    else
    {
        buttonElement.innerText = 'Subscribe';
        buttonElement.classList.remove('Subscribed')
    }
}
function eventWork(event)
{
    if (event.key === 'Enter')
    {
        calculate();
    }
}

function calculate(){
    const inputElement = document.querySelector('.input');
    const cost = Number(inputElement.value);
    if (cost >= 40)
    {
        document.querySelector('.result').innerText = `$${cost}`;

    }
    else if (cost > 0 && cost < 40 )
        {
            document.querySelector('.result').innerText = `$${cost + 10}` ;
        }
}
