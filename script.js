const { body } = document;

function changeBackground(number) {
    // check if background already showing
    let previousBAckground;
    if(body.className) {
        previousBAckground = body.className;
    }
    // reset background
    body.className = '';
    switch(number) {
        case '1':
            return (previousBAckground === 'background-1' ? false : body.classList.add('background-1'));
        case '2':
            return (previousBAckground === 'background-2' ? false : body.classList.add('background-2'));
        case '3':
            return (previousBAckground === 'background-3' ? false : body.classList.add('background-3'));
        default:
            break; 
}
}