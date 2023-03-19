// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    let difference = 42-someValue;
    return Math.abs(difference);
  }

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let difference = start - destination;
    return Math.abs(difference) * 264;
  }


function calculatesFarePrice(start, destination) {
    let difference = distanceTravelledInFeet(start,destination);
    if(difference <= 400){
        return 0;
    }
    else if(difference > 400 && difference <= 2000){
        let absoluteDifference = difference -400;
        return (absoluteDifference*2)/100;
    }

    else if(difference>2000 & difference <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
  }
