let raceNumber = Math.floor(Math.random()* 1000);
let earlyAdults = false;
let runnerAge = 18;
if(earlyAdults && runnerAge >18){
 console.log( raceNumber +=1000);
}
if(earlyAdults && runnerAge >18){
  console.log(`You will race at 09:30 am . Your race number is ${raceNumber}.`);
}else if (!earlyAdults && runnerAge >18){
  console.log(`You will race at 11:00 am . Your race number is ${raceNumber}.`);
}else if(runnerAge <18){
    console.log(`You will race at 12:30 am . Your race number is ${raceNumber}.`);
  } else if(runnerAge ===18){
    console.log(`You will race at 12:30 am . Your race number is ${raceNumber}.`);
  } else{
    console.log('Good luck to everyone!');
  }
  