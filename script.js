// Setting time in the header
var time = moment().format("MMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);

// Begin a function using jQuery
$(document).ready(function(){

})

// listen for saveBtn clicks
$(".saveBtn").on("click" function(){
  // Get to local.storage
    
  var value = $(this).sibling(",information").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value)

})

// Updating current time while changing time blocks' colors
function colorUpdater() {
  var currentHour = moment().hours();

  //creating variable for current time value

  //loop over timeblocks
  $(".time-block").each(function() {
    //need something to loop over time blocks
    var blockTime =  //complete variable
  })

  //conditional statement to check hours and apply correct time
  if (blockTime < currentHour) {

} else if () {

} else {

}

}
//call funtion
colorUpdater();

//another way to keep time updated
var interval = setInterval(colorUpdater, 15000);

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