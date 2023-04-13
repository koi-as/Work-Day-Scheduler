// WELCOME TRAVELER TO MY JAVASCRIPT
// It's a little long, but there are 4 key areas:
//  1: Save textarea data
//  2: Get textarea data
//  3: Track hour of the day
//  4: Display the current day

// $(document).ready(function () {}) waits for the HTML to load before calling the function
$(document).ready(function () {
  // Saves the content of the time block to local storage // * * *   * -   * * * -   * //
  var saveBtn = $('.saveBtn');
  var hour9Input = $('#hour-9 .description');
  var hour10Input = $('#hour-10 .description');
  var hour11Input = $('#hour-11 .description');
  var hour12Input = $('#hour-12 .description');
  var hour13Input = $('#hour-13 .description');
  var hour14Input = $('#hour-14 .description');
  var hour15Input = $('#hour-15 .description');
  var hour16Input = $('#hour-16 .description');
  var hour17Input = $('#hour-17 .description');

  function updateInputArea() {
    localStorage.setItem('hour9content', hour9Input.val())
    localStorage.setItem('hour10content', hour10Input.val())
    localStorage.setItem('hour11content', hour11Input.val())
    localStorage.setItem('hour12content', hour12Input.val())
    localStorage.setItem('hour13content', hour13Input.val())
    localStorage.setItem('hour14content', hour14Input.val())
    localStorage.setItem('hour15content', hour15Input.val())
    localStorage.setItem('hour16content', hour16Input.val())
    localStorage.setItem('hour17content', hour17Input.val())
    console.log(localStorage)
  }

  // Gets the content users saved into the timeblock // - - *   *   - //
  saveBtn.on('click', updateInputArea)
  hour9Input.text(localStorage.getItem('hour9content'));
  hour10Input.text(localStorage.getItem('hour10content'));
  hour11Input.text(localStorage.getItem('hour11content'));
  hour12Input.text(localStorage.getItem('hour12content'));
  hour13Input.text(localStorage.getItem('hour13content'));
  hour14Input.text(localStorage.getItem('hour14content'));
  hour15Input.text(localStorage.getItem('hour15content'));
  hour16Input.text(localStorage.getItem('hour16content'));
  hour17Input.text(localStorage.getItem('hour17content'));

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().format('HH');
  var hour9 = $('#hour-9');
  var hour10 = $('#hour-10');
  var hour11 = $('#hour-11');
  var hour12 = $('#hour-12');
  var hour13 = $('#hour-13');
  var hour14 = $('#hour-14');
  var hour15 = $('#hour-15');
  var hour16 = $('#hour-16');
  var hour17 = $('#hour-17');

  function timeBlockDisplay() {
    if(currentHour == 9) {
      hour9.removeClass('past')
      hour9.removeClass('future')
      hour9.addClass('present')
    } else if(currentHour > 9) {
      hour9.removeClass('present')
      hour9.removeClass('future')
      hour9.addClass('past')
    } else if(currentHour < 9) {
      hour9.removeClass('past')
      hour9.removeClass('present')
      hour9.addClass('future')
    }

    if(currentHour == 10) {
      hour10.removeClass('past')
      hour10.removeClass('future')
      hour10.addClass('present')
    } else if(currentHour > 10) {
      hour10.removeClass('present')
      hour10.removeClass('future')
      hour10.addClass('past')
    } else if(currentHour < 10) {
      hour10.removeClass('past')
      hour10.removeClass('present')
      hour10.addClass('future')
    }

    if(currentHour == 11) {
      hour11.removeClass('past')
      hour11.removeClass('future')
      hour11.addClass('present')
    } else if(currentHour > 11) {
      hour11.removeClass('present')
      hour11.removeClass('future')
      hour11.addClass('past')
    } else if(currentHour < 11) {
      hour11.removeClass('past')
      hour11.removeClass('present')
      hour11.addClass('future')
    }

    if(currentHour == 12) {
      hour12.removeClass('past')
      hour12.removeClass('future')
      hour12.addClass('present')
    } else if(currentHour > 12) {
      hour12.removeClass('present')
      hour12.removeClass('future')
      hour12.addClass('past')
    } else if(currentHour < 12) {
      hour12.removeClass('past')
      hour12.removeClass('present')
      hour12.addClass('future')
    }

    if(currentHour == 13) {
      hour13.removeClass('past')
      hour13.removeClass('future')
      hour13.addClass('present')
    } else if(currentHour > 13) {
      hour13.removeClass('present')
      hour13.removeClass('future')
      hour13.addClass('past')
    } else if(currentHour < 13) {
      hour13.removeClass('past')
      hour13.removeClass('present')
      hour13.addClass('future')
    }

    if(currentHour == 14) {
      hour14.removeClass('past')
      hour14.removeClass('future')
      hour14.addClass('present')
    } else if(currentHour > 14) {
      hour14.removeClass('present')
      hour14.removeClass('future')
      hour14.addClass('past')
    } else if(currentHour < 14) {
      hour14.removeClass('past')
      hour14.removeClass('present')
      hour14.addClass('future')
    }

    if(currentHour == 15) {
      hour15.removeClass('past')
      hour15.removeClass('future')
      hour15.addClass('present')
    } else if(currentHour > 15) {
      hour15.removeClass('present')
      hour15.removeClass('future')
      hour15.addClass('past')
    } else if(currentHour < 15) {
      hour15.removeClass('past')
      hour15.removeClass('present')
      hour15.addClass('future')
    }

    if(currentHour == 16) {
      hour16.removeClass('past')
      hour16.removeClass('future')
      hour16.addClass('present')
    } else if(currentHour > 16) {
      hour16.removeClass('present')
      hour16.removeClass('future')
      hour16.addClass('past')
    } else if(currentHour < 16) {
      hour16.removeClass('past')
      hour16.removeClass('present')
      hour16.addClass('future')
    }

    if(currentHour == 17) {
      hour17.removeClass('past')
      hour17.removeClass('future')
      hour17.addClass('present')
    } else if(currentHour > 17) {
      hour17.removeClass('present')
      hour17.removeClass('future')
      hour17.addClass('past')
    } else if(currentHour < 17) {
      hour17.removeClass('past')
      hour17.removeClass('present')
      hour17.addClass('future')
    }
  }
  console.log(currentHour)
  timeBlockDisplay()

  // Displays the current date onto the webpage // - * *   * -   -   * //
  var dateEl = $('#currentDay')
  var today = dayjs();

  dateEl.text(today.format('dddd, MMMM D'));
});
