/* Challenge #7: Get Geolocation Data
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding
*/

< script >
    // Only change code below this line.

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
        });
    }

    // Only change code above this line.
    < /script> < div id = "data" >
    < h4 > You are here: < /h4>

< /div>
