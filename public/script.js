$(document).ready(()=>{

    //Hide error messages
    $("#fnError").hide();
    $("#lnError").hide();
    $("#activeError").hide();
    $("#phoneError").hide();

    //Define name regex
    var nameRegex = /[a-zA-Z]+$/;

    //Check if the submit button is clicked and trigger a function
    $("#submitBtn").click(()=>{

        checkFname();
        checkLname();
        checkActive();
        checkPhone();

    })

    //Check if a first name field is empty if it's a number and show error message
    function checkFname(){
        if($("#firstName").val()=="" || !(nameRegex.test($("#firstName").val()))){
            $("#fnError").text("Invalid first name.Must consist of only letters");
            $("#fnError").show();
        }
        else if($("#firstName").val()!=""){
            $("#fnError").hide();
        }
    }
    //Check if a last name field is empty if it's a number and show error message
    function checkLname(){
        if($("#lastName").val()=="" || !(nameRegex.test($("#lastName").val()))){
            $("#lnError").text("Invalid last name. Must consist of only letters");
            $("#lnError").show();
        }
        else if($("#lastName").val()!=""){
            $("#lnError").hide();
        }
    }

    //Check whether active status is empty
    function checkActive(){
        if($("#active").val()=="" ){
            $("#activeError").text("Invalid active status");
            $("#activeError").show();
        }
        else if($("#active").val()!="" ){
            $("#activeError").hide();
        }

    }
    //Check whether the phone is empty
    function checkPhone(){
        if($("#phoneNumber").val()==""){
            $("#phoneError").text("Invalid phone number. Must be in this format (555)555-5555");
            $("#phoneError").show();
        }
        else if($("#phoneNumber").val()!=""){
            $("#phoneError").hide();
        }
    }

   


})