// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var saveBtn = $('.saveBtn');
  var inputArea = $('#textInput');
  
  saveBtn.parent(this).on('click', updateInputArea)
    //fil out function
    inputArea.text(localStorage.getItem('content'));

    function updateInputArea() {
      localStorage.setItem('content', inputArea.val())
    }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().format('H');

  //add code to set time to past present or future
  //determine if time is in the past present or the future. if else statement?
  //set the block element to past present or future

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // TODO: Add code to display the current date in the header of the page.
  var dateEl = $('#currentDay')
  var today = dayjs();

  dateEl.text(today.format('dddd, MMMM D'));
});