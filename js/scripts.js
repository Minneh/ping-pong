$(document).ready(function() {
    $("form").submit(function(event) {

        event.preventDefault(); //prevent oage reload
        $("#list").empty(); //empty results list before beginning

        var userInput = parseInt($("#input").val()); //set user input to variable userInput

        // loop as many times as userInput, checking if current number fits any of the conditions and give corresponding output
        for (var count = 1; count <= userInput; count++) {
            if (count % 3 === 0) { //check if current number is divisible by 3
                if (count % 5 === 0) { //check if current number is also divisible by 5; if so, it is divisible by 15 and therefore output is 'pingpong'
                    $('ul#list').append('<li>pingpong</li>');

                } else { //if not divisible by 5, output 'ping' for 3
                    $('ul#list').append('<li>ping</li>');
                }

            } else if (count % 5 === 0) {//check if current number is divisible by 5; if so, output 'pong'
                $('ul#list').append('<li>pong</li>');
            } else {//if current number is divisible by none, output current number
                $('ul#list').append('<li>' + count + '</li>');
            }
        }
        $("#results").show(); //show results window with list data
    });
});
