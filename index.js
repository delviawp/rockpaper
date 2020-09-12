const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput ==='bomb') {
    return userInput
  } else {
    console.log('error message')
  }
}

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0 :
    return 'rock';
    break;
    case 1 :
    return 'paper';
    break;
    case 2 :
    return 'scissors'
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return `This game was tie`
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Sorry computer won!';
    } else {
      return 'Congratulation you won';
    }
  }
  if(userChoice === 'scissor') {
    if(computerChoice === 'rock') {
      return 'Sorry computer won!';
    } else {
      return 'Congratulation you won';
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissor') {
      return 'Sorry computer won!';
    } else {
      return 'Congratulation you won';
    }
  }
  if(userChoice === 'bomb') {
    return `Congratulation you won`
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`Computer threw: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()




















