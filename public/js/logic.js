$(document).ready(function() {
    //History, variables, functions, & submit==============
    var medHistoryForm = $("form.medHistory");
    var medDateInput = $("input#medHistoryDate");
    var eventInput = $("input#medHistoryEvent");
    function addHistory(obj) {
        $.post("/med_history", obj, function() {
        }).then(function(data) {
            // window.location.replace(data);
            window.location.href = '/home';
            // If there's an error, log the error
        }).catch(function(err) {
            console.log(err);
        });
    }
    medHistoryForm.on("submit", function(event) {
        event.preventDefault();
        // console.log("working");
        var medHistoryData = {    
            event: eventInput.val().trim(),
            date: medDateInput.val().trim()
            
        };
        addHistory(medHistoryData);
        eventInput.val("");
        medDateInput.val("");
    });
    //History, variables, functions, & submit==============

    //Appt variables,functions, & submit===================
        var apptForm = $("form.appt");
        var dateInput = $("input#apptDate");
        var timeInput = $("input#apptTime");
        var typeInput = $("input#apptType");
        var reasonInput = $("input#apptReason");
        function addAppt(obj) {
            $.post("/create_appt", obj, function() {
            }).then(function(data) {
                // window.location.replace(data);
                window.location.href = '/home';
                // If there's an error, log the error
            }).catch(function(err) {
                console.log(err);
            });
        }
        apptForm.on("submit", function(event) {
            event.preventDefault();
            // console.log("working");
            var userData = {    
                date: dateInput.val().trim(),
                time: timeInput.val().trim(),
                type: typeInput.val().trim(),
                reason: reasonInput.val().trim()
            };
            addAppt(userData);
            dateInput.val("");
            timeInput.val("");
            typeInput.val("");
            reasonInput.val("");
        });
    //Appt variables,functions, & submit===================    
        
    //Med variables, function, & submit====================
        var medForm = $("form.meds");
        var medNameInput = $("input#medName");
        var perscriptionInput = $("input#medPerscription");
        var conditionInput = $("input#medCondition");
        var doseInput = $("input#medDose");
        function addMeds(obj) {
            $.post("/new_meds", obj, function() {
            }).then(function(data) {
                // window.location.replace(data);
                window.location.href = '/home';
                // If there's an error, log the error
            }).catch(function(err) {
                console.log(err);
            });
        }
        medForm.on("submit", function(event) {
            event.preventDefault();
            // console.log("working");
            var medData = {    
                name: medNameInput.val().trim(),
                is_prescription: perscriptionInput.val().trim(),
                condition: conditionInput.val().trim(),
                dose: doseInput.val().trim()
            };
            addMeds(medData);
            medNameInput.val("");
            perscriptionInput.val("");
            conditionInput.val("");
            doseInput.val("");
        });
    //Med variables, function, & submit====================
    
    //Insurance variables, functions, & submit=============
    var insuranceForm = $("form.insurance");
    var insuranceTypeInput = $("input#insuranceType");
    var insuranceCarrierInput = $("input#insuranceCarrier");
    var insuranceNameInput = $("input#insuranceName");
    var insuranceIdNumberInput = $("input#insuranceIdNumber");
    var insuranceGroupIdInput = $("input#insuranceGroupId");
    var insuranceEffectiveDateInput = $("input#insuranceEffectiveDate");
    function addInsurance(obj) {
        $.post("/insurance", obj, function() {
        }).then(function(data) {
            // window.location.replace(data);
            window.location.href = '/home';
            // If there's an error, log the error
        }).catch(function(err) {
            console.log(err);
        });
    }
    insuranceForm.on("submit", function(event) {
        event.preventDefault();
        // console.log("working");
        var insuranceData = {    
            type: insuranceTypeInput.val().trim(),
            carrier: insuranceCarrierInput.val().trim(),
            insured_name: insuranceNameInput.val().trim(),
            id_number: insuranceIdNumberInput.val().trim(),
            group_id: insuranceGroupIdInput.val().trim(),
            effective_date: insuranceEffectiveDateInput.val().trim()
        };
        console.log(insuranceData);
        addInsurance(insuranceData);
        insuranceTypeInput.val("");
        insuranceCarrierInput.val("");
        insuranceNameInput.val("");
        insuranceIdNumberInput.val("");
        insuranceGroupIdInput.val("");
        insuranceEffectiveDateInput.val("");
    });
    //Insurance variables, functions, & submit=============
});
