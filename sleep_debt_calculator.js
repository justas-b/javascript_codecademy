const getSleepHours = (day) => {
  //change these values to the number of hours you slept each day
  switch (day.toLowerCase()) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 5;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 4;
      break;
    default:
      return 'Invalid day!';
      break;    
  }
};

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') +    getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours ('friday') + getSleepHours('saturday') +getSleepHours('sunday');
};

const getIdealSleepHours = (hours) => {
  //set your ideal hours of sleep per night
  return hours * 7;
};

const calculateSleepDebt = (hours) => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(hours);

  if (actualSleepHours === idealSleepHours) {
    return console.log('You got enough sleep this week!');
  } else if (actualSleepHours > idealSleepHours) {
    return console.log(`You slept ${actualSleepHours - idealSleepHours} hours over the ideal number of hours!`);
  } else {
    return console.log(`You slept ${idealSleepHours - actualSleepHours} hours under your weekly goal!`);
  }
};

calculateSleepDebt(9); //change this to your ideal hours of sleep per night
