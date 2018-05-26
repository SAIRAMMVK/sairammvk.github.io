function computeNear(){
    var n = Number(document.getElementById("number").value);
    var i =0;
    var closestvalue=0;
    while(Math.pow(2,i)<n){
        closestvalue=i;
        i++;
    }
    document.getElementById("answer").innerHTML="closestvalue is "+ closestvalue;
}