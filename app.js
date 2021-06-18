// for( var a = 1 ; a<= 100 ; a= a+10){
//     for( b= a;b< a+10 ; b++){
//         document.write(b + " ");
//     }
//     document.write("<br>")
// }

// var city = prompt("Enter city name ")
// city = city.toLowerCase()
// var arr = [ "karachi","islamabad","pishawar"]
// for (var i=0 ; i < arr.length; i++){
//     if ( arr[i] === city){
//         alert ("City has found")
//     }else{
//         alert("City not found")
//     }
// }

// var city = prompt("Enter city name ")
// city = city.toUpperCase()
// var arr = [ "KARACHI","ISLAMABAD","PISHAWER"]
// for (var i=0 ; i < arr.length; i++){
//     if ( arr[i] === city){
//         alert ("City has found")
//     }else{
//         alert("City not found")
//     }
// }

// var city = prompt("Enter city name ")
// var first = city.slice( 0, 1)
// var other = city.slice (1)
// first = first.toUpperCase()
// other = other.toLowerCase()
// var city=first+other
// console.log(city)
// var arr = [ "Karachi","Islamabad","Pishawar"]
// for (var i=0 ; i < arr.length; i++){
//     if ( arr[i] === city){
//         alert ("City has found")
//     }else{
//         alert("City not found")
//     }
// }

// var word = prompt ("Enter any word")
// var num = word.length
// for (var i =0 ; i < num ; i++){
//      if ( word.slice(i,i+2)=== "  "){
//          alert ("no double space !");
//          break;
//      }
// }

// var text ="the second time i am saying the the ddcndcndcndn world war II do it now i am saying"
// var indexnum = text.indexOf("world war II");
// var first = text.slice(0,indexnum);
// var rep = "the second world war";
// var third = text.slice (indexnum+12);
// console.log(first + rep + third);

// var text ="the new second time i am saying the the ddcndcndcndn world war II do it now i new am saying"
// var indexnum = text.lastIndexOf("new");
// var first = text.slice(0,indexnum);
// var rep = "the second world war";
// var third = text.slice (indexnum+12);
// console.log(first + rep + third);


// var  a = "saimoon"
// document.write(a.charAt(4))

// var para = " this a example text of a program"
// var para1 = para.replace("example","hello")
// document.write(para1)

// var para = " this a example text of a program example"
// var para1 = para.replace(/example/g,"hello")
// document.write(para1)

// var num = 1.5 ;
// var round = Math.round (num)
// document.write(round)

// var num = 1.5 ;
// var round = Math.ceil (num)
// document.write(round)

// var num = 1.5 ;
// var round = Math.floor (num)
// document.write(round)

// Math.random ()

// var headuser= prompt ("enter head username")
// var tailsuser= prompt ("enter tails username")

// var toss = Math.random() *2
// var floor = Math.floor(toss)
// document.write(floor)

// if ( floor === 0){
//     alert("heads "+ headuser + " win the toss") 
// }else{
//     alert("tails "+ tailsuser + " win the toss") 
// }

// var num = 10
// alert(num.toString())

var num = 10.3843846836488
var con = num.toFixed(4)
alert ( con)