$(document).ready(function(){

    $.get("/user_appt").then(function(data) {

        for (var i = 0; i < data.length; i++) {
            $(".appointment").append(`<li>
            <p>Date: ${data[i].date}</p>
            <p>Time: ${data[i].time}</p>
            <p>Type: ${data[i].type}</p>
            <p>Reason: ${data[i].reason}</p><hr class="uk-divider-small"></li>\n`);
        }
    
        console.log(data);
    });
});


// date: req.body.date,
// time: req.body.time,
// type: req.body.type,
// reason: req.body.reason

