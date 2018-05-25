var quote=['there is no tomorrow or yesterday, there is only one day that is today.so focus today and get your job done',
'Be good to others and do not expect anything in return from others and you will be rewarded in another manner',
'Be a learner everytime rather than a judger',
'Believe in you rather than the words shared by others',
'focus on where you want to go rather than where you are'];

function newQuote(){

var random = Math.floor(Math.random()*(quote.length));
document.getElementById("iquote").innerHTML=quote[random];
}