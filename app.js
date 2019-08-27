// Get a new color when button is clicked
$('#btn').click(function () {
    var symbols = "0123456789ABCDEF";
    var color = "#"

    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    $("body").css("background-color", color);
    $("span").text(color)
})

// Get a new color when page is loaded
$(document).ready(function () {
    var symbols = "0123456789ABCDEF";
    var color = "#"

    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    $("body").css("background-color", color);
    $("span").text(color)
})