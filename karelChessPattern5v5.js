// chess board style karel.ide
function main(){
  chessBoard();
}

function beepThenMove () {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
function moveLeft(){
  turnLeft();
  move();
  turnLeft();
}
function moveRight(){
   turnRight();
   move();
   turnRight();
}
function threeBeeps () {
   beepThenMove();
   move();
   putBeeper();
   moveLeft();
}
function twoBeeps(){
   move();
   beepThenMove();
   moveRight();
}
function lastBeeps () {
   beepThenMove();
   move();
   putBeeper();
}
function chessBoard(){
   threeBeeps();
   twoBeeps();
   threeBeeps();
   twoBeeps();
   lastBeeps();
}
