$(document).ready(function(){

     $.get("/med_history").then(function(data) {

        for (var i = 0; i < data.length; i++) {
            $(".history").append(`<li>
            <p>Event: ${data[i].event}</p>
            <p>Date: ${data[i].date}</p><hr class="uk-divider-small"></li>\n`);
        }
    
        console.log(data);
    });

});

// event: req.body.event,
// date: req.body.date
