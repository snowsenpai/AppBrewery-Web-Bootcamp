function isLeap(year){
    var leap = year % 4;
    var isNotLeap = year % 100;
    var confirmLeap = year % 400;
    var message = "";

    if(leap === 0 && isNotLeap !== 0){
        return message = "Leap year.";
    } if(leap === 0 && isNotLeap === 0 && confirmLeap === 0){
        return message = "Leap year.";
    } else{
        return message = "Not leap year.";
    }
}
isLeap(2050);