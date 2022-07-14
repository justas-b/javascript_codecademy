const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    //bomb is a cheat code (you will always win!)
    return userInput;
  } else {
    return console.log('Invalid choice! Please pick rock, paper or scissors.');
  }
};

const getComputerChoice = () => {
  computerInput = Math.floor(Math.random() * 3);

  if (computerInput === 0) {
    return 'rock';
  } else if (computerInput === 1) {
    return 'paper';
  } else if (computerInput === 2) {
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return `You both picked ${userChoice} - it\'s a tie!`;
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return `You picked ${userChoice} and the computer picked ${computerChoice} - the computer wins!`;
    } else {
      return `You picked ${userChoice} and the computer picked ${computerChoice} - you win!`;
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return `You picked ${userChoice} and the computer picked ${computerChoice} - the computer wins!`;
    } else {
      return `You picked ${userChoice} and the computer picked ${computerChoice} - you win!`;
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return `You picked ${userChoice} and the computer picked ${computerChoice} - the computer wins!`;
    } else {
      return `You picked ${userChoice} and the computer picked ${computerChoice} - you win!`;
    }
  } else if (userChoice === 'bomb') {
      return `You picked ${userChoice} and the computer picked ${computerChoice} - you win!`
  }
};

const playGame = (choice) => {
  let userChoice = getUserChoice(choice);
  let computerChoice = getComputerChoice();

  return console.log(determineWinner(userChoice, computerChoice));
};

playGame('bomb'); //replace bomb with your own choice
