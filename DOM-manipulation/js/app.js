function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));

}

function byTag() {
console.log(document.getElementsByTagName("p"));
}

function changeBackground() {
    document.getElementById("block1").style.backgroundColor="blue";
}

function increaseFont() {
    document.getElementById("block2").style.fontSize="40px";
}

function changeFontColor() {
    document.getElementById("block3").style.color="green";

}

function revertColor() {
    document.getElementById("block3").style.color="black";
}

function hide() {

    document.getElementById("block4").style.display="none";

}

function changeBackColor(a,b) {

   // $("."+b).css("background-color",a);
   console.log(document.getElementsByClassName(b));
   var  y = document.getElementsByClassName(b);
   var i;
   for(i=0;i<y.length;i++)
   {
       y[i].style.backgroundColor=a;
   }   
}
function changeBack(a,b) {
    console.log(document.getElementsByClassName(b));
    var  y = document.getElementsByClassName(b);
    var i;
    for(i=0;i<y.length;i++)
    {
        y[i].style.backgroundColor=a;
    }   
 }
 function numbersOnly(event){

    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    catch (err) {
        alert(err.Description);
    }
 }
function addAdjacent() {
    var paragraph = document.createElement("p");
    var node = document.createTextNode("I got generated on a new fly....");
    paragraph.appendChild(node);
    //var i = document.getElementById("para2");
    document.getElementById("para2").appendChild(paragraph);
}

function removePara() {

    var x = document.getElementById("para4");
    x.remove();
}

function animatePara() {
    
    var box = document.getElementById("box5");
    var pos =0;
    var t = setInterval(move,10);
    function move(){
        if(pos>=350){
            clearInterval(t);
        }
        else{
            pos++;
            box.style.left=pos+"px";
        }
    }
   
}
function change(){
    document.getElementById("q14").style.backgroundColor="green";
}
document.getElementById("browsers").onchange=function(){
   console.log(document.getElementById("browsers").value); 
}
document.getElementById("inputBox1").onchange=function(){
    document.getElementById("inputBox2").value = document.getElementById("inputBox1").value.toUpperCase();
}

document.getElementById("inputBox3").onchange=function(){
    var str = document.getElementById("inputBox3").value;
    var s1 = str.slice(0,1);
    var s3 = str.slice(1,str.length);
    var s2 = s1.toUpperCase();
    var ans = s2+s3;
    document.getElementById("inputBox3").value=ans;

}
