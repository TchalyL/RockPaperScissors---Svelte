
function computerChoice(){
    let choice = ['ROCK', 'PAPER', 'SCISSORS']
    return choice[Math.floor(Math.random()*choice.length)]
}

export {computerChoice}
