function computerPlay () {
    const computerChoice = ['ROCK','PAPER','SCISSORS'];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', () => {
    switch(computerPlay()) {
        case 'ROCK':
            alert('Rock ties with rock.');
            break;
        case 'PAPER':
            alert('Paper beats rock, you lose.');
            break;
        case 'SCISSORS':
            alert('Rock beats scissors, you win.');
            break;
        default:
            break;
    }
})

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', () => {
    switch(computerPlay()) {
        case 'ROCK':
            alert('Paper beats rock, you win.');
            break;
        case 'PAPER':
            alert('Paper ties with paper.');
            break;
        case 'SCISSORS':
            alert('Scissors beats paper, you lose.');
            break;
        default:
            break;
    }
})

const btnScissors = document.querySelector('#btn-scissors');
btnScissors.addEventListener('click', () => {
    switch(computerPlay()) {
        case 'ROCK':
            alert('Rock beats scissors, you lose.');
            break;
        case 'PAPER':
            alert('Scissors beat paper, you win.');
            break;
        case 'SCISSORS':
            alert('Scissors tie with scissors.');
            break;
        default:
            break;
    }
})