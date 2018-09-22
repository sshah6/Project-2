$(document).ready(function(){

    $.get("/insurance").then(function(data) {

        for (var i = 0; i < data.length; i++) {
            $(".insurance").append(`<li>
            <p>Type: ${data[i].type}</p>
            <p>Time: ${data[i].carrier}</p>
            <p>Insured Name: ${data[i].insured_name}</p>
            <p>Id Number: ${data[i].id_number}</p>
            <p>Group Plan Number: ${data[i].group_id}</p>
            <p>Date Effective: ${data[i].effective_date}</p><hr class="uk-divider-small"></li>\n`);
        }
    
        console.log(data);
    });
});

// type: req.body.type,
// carrier: req.body.carrier,
// insured_name: req.body.insured_name,
// id_number: req.body.id_number,
// group_id: req.body.group_id,
// effective_date: req.body.effective_date
