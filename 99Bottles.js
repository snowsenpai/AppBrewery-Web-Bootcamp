function breakBottles(){
  var beer = 99;
  while (beer >= 0){
    var beerLeft = beer - 1;
    var lyrics1 = beer + " bottles of beer on the wall, " + beer + " bottles of beer. \n";
    var lyrics2 = "Take one down and pass it around, " + beerLeft + " bottles of beer on the wall";
    var oneBottle = beer + " bottle of beer on the wall, " + beer + " bottle of beer. \n";
    var noBeer = beer + " bottles of beer on the wall, " + beer + " bottles of beer. \n";
    var oneBeer = "Take one down and pass it around, " + beerLeft + " bottle of beer on the wall";
    var lastLyrics = "Go to the store and buy some more, 99 bottles of beer on the wall.";
    if(beer === 1){
      lyrics1 = oneBottle;
    }
    if(beer === 0){
      beer = "No more";
      lyrics1 =  noBeer;
    } 
    if (beerLeft === 1){
      lyrics2 = oneBeer;
    }
    if (beerLeft <= 0){      
      beerLeft = "No more";
    }
    if (beer == "No more"){
      lyrics2 = lastLyrics;        
      }
    console.log(lyrics1+ lyrics2);
    beer--;
  }
}