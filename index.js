// Code your solution in this file!
function distanceTravelledInFeet(block1, block2){
  if (block2 > block1) {
const inFeet = (block2 - block1)*264;
} else if (block1 < block2) {
    const inFeet = (block1 - block2)*264;
  }

return inFeet;
}


function distanceFromHqInBlocks(distance){
const distanceInBlocks = distance/264;
return distanceInBlocks;
}

function distanceFromHqInFeet(){
  distanceFromHqInBlocks();
}