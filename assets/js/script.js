$(document).ready(function () {

    // get current date with dayjs
    var today = dayjs().format('dddd, MMM D, YYYY h:mm A');
    $("#currentDay").html(today);

    // save text to local storage
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    // retrives text from local storage
    for (var i = 8; i <= 18; ++i) {
      var saved = localStorage.getItem("hour-" + i);
      var textArea = $("#hour-" + i + " .description");

      if (saved !== null) {
        textArea.val(saved)
      }
   }

    // function to change colors of time blocks depending on past, present, future
    function colorTracker() {
         var now = dayjs().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
            
            if (blockTime < now) {
              $(this).addClass("past").removeClass("present future");
            }
            else if (blockTime === now) {
              $(this).addClass("present").removeClass("past future");
            }
            else {
              $(this).addClass("future").removeClass("past present");
            }
        })
    };

    colorTracker();
});

