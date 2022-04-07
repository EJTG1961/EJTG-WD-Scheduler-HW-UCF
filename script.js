// Setting time in the header
var time = moment().format("MMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);

// Begin a function using jQuery
$(document).ready(function(){

})

// listen for saveBtn clicks
$(".saveBtn").on("click", function(){
  // Get to local.storage
    
  var value = $(this).siblings("information").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value)

})

// // Updating current time while changing time blocks' colors
// function colorUpdater() {
//   var currentHour = moment().hours();

//   //creating variable for current time value

//   //loop over timeblocks
//   $(".time-block").each(function() {
//     //need something to loop over time blocks
//     var blockTime =  //complete variable
//   })

//   //conditional statement to check hours and apply correct time
//   if (blockTime < currentHour) {

// } else if () {

// } else {

// }

// }
// //call funtion
// colorUpdater();
var checkTime = function () {
   var hour = $(".hour");
   console.log(hour);
  var time = moment(hour, "LT");
  console.log(time)



  // for (i = 0; i < hour.length; i++) { 
  //  console.log(hour[i].sibling('textarea')); 
  // }
hour.each(function(index){
  console.log( index + ": " + $( this ).text() )
  var time = $( this ).text().trim()
  var textArea = $( this ).siblings("textArea");
  textArea.removeClass(".present .past .future");
  if (moment().isAfter(time)) {
    textArea.addClass("past");
} else if (moment().isBefore(time)) {
    textArea.addClass("future");
} else {
    textArea.addClass("present");
}
moment.updateLocale('en', {
  /**/
});
})


  //remove any old classes from element
 

  // apply new class if task is near/over due date
 
}

checkTime();

//another way to keep time updated
var interval = setInterval(checkTime, 15000);

// need saved data from local storage
$("#hour-one .information").val(localStorage.getItem("#hour-one"));
$("#hour-two .information").val(localStorage.getItem("#hour-two"));
$("#hour-three .information").val(localStorage.getItem("#hour-three"));
$("#hour-four .information").val(localStorage.getItem("#hour-four"));
$("#hour-five .information").val(localStorage.getItem("#hour-five"));
$("#hour-six .information").val(localStorage.getItem("#hour-six"));
$("#hour-seven .information").val(localStorage.getItem("#hour-seven"));
$("#hour-eight .information").val(localStorage.getItem("#hour-eight"));
$("#hour-nine .information").val(localStorage.getItem("#hour-nine"));
$("#hour-ten .information").val(localStorage.getItem("#hour-ten"));
$("#hour-eleven .information").val(localStorage.getItem("#hour-eleven"));
$("#hour-twelve .information").val(localStorage.getItem("#hour-twelve"));

$("#currentDay").text(moment().format("MMM Do YYYY"));