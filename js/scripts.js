$(document).ready(function() {
    $("form").submit(function(event) {

        event.preventDefault();
        $("#list").empty();

        var userInput = parseInt($("#input").val());

        for (var count = 1; count <= userInput; count++) {
            if (count % 3 === 0) {
                if (count % 5 === 0) {
                    $('ul#list').append('<li>pingpong</li>');

                } else {
                    $('ul#list').append('<li>ping</li>');
                }

            } else if (count % 5 === 0) {
                $('ul#list').append('<li>pong</li>');
            } else {
                $('ul#list').append('<li>' + count + '</li>');
            }
        }
        $("#results").show();
    });
});
