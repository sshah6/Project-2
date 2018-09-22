$(document).ready(function(){

    $.get("/user_meds").then(function(data) {

        for (var i = 0; i < data.length; i++) {
            $(".medication").append(`<li>
            <p>Name: ${data[i].name}</p>
            <p>Prescription: ${data[i].is_prescription}</p>
            <p>Condition: ${data[i].condition}</p>
            <p>Dose: ${data[i].dose}</p><hr class="uk-divider-small"></li>\n`);
        }
    
        console.log(data);
    });
});


// name: req.body.name,
// type: req.body.type,
// condition: req.body.type,
// dose: req.body.type
