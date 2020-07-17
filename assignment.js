// feetToMile start

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var mileResult = feetToMile(10560);
console.log(mileResult);

// feetToMile end


// woodCalculator Start

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var woodResult = woodCalculator(6, 3, 2);
console.log(woodResult);

// woodCalculator end


// brickCalculator start











// tinyFriend start

function tinyFriend(names){
    var smallName = names[0].length;
    for(var i = 0; i < names.length; i++){
        var currentName = names[i].length;
        if(currentName < smallName){
            smallName = currentName;
        }
    }
    return smallName;
}
var smallestName = tinyFriend(["arif", "adnan", "arnob", "dev", "jisu", "jit", "ronjit"]);
console.log(smallestName);