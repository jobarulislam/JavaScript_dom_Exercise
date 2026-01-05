function subscribe(){
    const buttonElement = document.querySelector('.Subscribe');
    if (buttonElement.innerText === 'Subscribe')
    {
        buttonElement.innerText = 'Subscribed';
    }

    else
    {
        buttonElement.innerText = 'Subscribe';
    }
}

function calculate(){
    const inputElement = document.querySelector('.input');
    const cost = Number(inputElement.value);
    if (cost > 40)
    {
        document.querySelector('.result').innerText = `$${cost}`;

    }
    else
        {
            document.querySelector('.result').innerText = `$${cost + 10}` ;
        }
}
