 var today = new Date();
 var hourtoday = today.gethours();
 var greeting;

if (hourtoday < 12){
    greeting ="صباح الخير";
}
else if (hourtoday > 12){
    greeting ="مساء الخير";
}
else{
    greeting ="wrong";
}


