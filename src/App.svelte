<script>
  import {computerChoice} from '../scripts/computer-choice.js'
  import {checkWinner} from '../scripts/check-winner.js'
  let playerChoice, compChoice, result;
  let hidden = true // dictates whether the paragraphs are hidden or not

  // Initializes the computers choice and compares it to the player
  function play(playerChoice){
    compChoice =  computerChoice()
    hidden = false
    result = checkWinner(playerChoice, compChoice)
  }
</script>

<main>
  <h1>Rock Paper Scissors</h1>
  <p>How to play: ...it's Rock Paper Scissors -_-</p>
  <div class="content-box">
    <h1>Player</h1>
    <p class:hidden>{playerChoice}</p>
    <h1>Computer</h1>
    <p class:hidden>{compChoice}</p>
    <h1>Result</h1>
    <p class:hidden>{result}</p>

    <button class="btn" on:click={()=>{
      playerChoice = 'ROCK' 
      play(playerChoice)
    }}>ROCK</button>
    <button class="btn" on:click={()=>{
      playerChoice = 'PAPER' 
      play(playerChoice)
    }}>PAPER</button>
    <button class="btn" on:click={()=>{
      playerChoice = 'SCISSORS' 
      play(playerChoice)
    }}>SCISSORS</button>
  </div>
</main>

<style>
  :root {    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: rgb(235,235,235);
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin: 0;
  }

  p{
    margin: 0; 
    font-weight: 500;
    margin-bottom: 1em;
  }

  .content-box{
    background-color: rgb(170, 170, 170);
    height: 334px;
    width: 350px;
    padding-top: 1rem;
  }

  .content-box h1 {
    color: white;
    margin-bottom: 4px;
  }

  .hidden {
    visibility: hidden;
  }

  .btn {
    border: 3px solid;
    border-color: rgb(170, 170, 170);
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    background-color: rgb(170, 170, 170);
    cursor: pointer;
    color:white;
    padding: 10px 7px 10px 7px;
    transition: background-color 0.15s;
  }

  .btn:hover {
  background-color: rgb(125, 125, 125);
  }

  .btn:active{
    background-color: rgb(100,100,100);
  }
  
</style>
