var timeElement = document.querySelector(".time");
var dateElement = document.querySelector(".date");
var saveButton = $(".saveBtn");

/**
 * @param {Date} date 
 */
function formatTime(date) {
    var hours12 = date.getHours() % 12 || 12;
    var minutes = date.getMinutes();
    var isAm = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"} `;
}

/**
 * @param {Date} date 
 */
function formatDate(date) {
    var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} `;
}

setInterval(() => {
    var now = new Date();

    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);
}, 300);

$(document).ready(function () {
    $(".savebtn").on("click", function () {
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //Save in local storage
        localStorage.setItem(time, input);
    })

    function scheduler() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (currentTime > blockTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (currentTime === blockTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    $("#hour9 .description").val(localStorage.getItem("9am"));
    $("#hour10 .description").val(localStorage.getItem("10am"));
    $("#hour11 .description").val(localStorage.getItem("11am"));
    $("#hour12 .description").val(localStorage.getItem("12pm"));
    $("#hour13 .description").val(localStorage.getItem("1pm"));
    $("#hour14 .description").val(localStorage.getItem("2pm"));
    $("#hour15 .description").val(localStorage.getItem("3pm"));
    $("#hour16 .description").val(localStorage.getItem("4pm"));
    $("#hour17 .description").val(localStorage.getItem("5pm"));

    scheduler();
})  



       
    