function initListeners() {
    $(".bars").click(function(e){
      $(".bars").toggleClass("active");
      $(".links").toggleClass("active");
    });

    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
      });

      $("#submit").click(function (e) {
        e.preventDefault();
        let title = $("#title").val();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let addressOne = $("#addressOne").val();
        let addressTwo = $("#addressTwo").val();
        let city = $("#city").val();
        let state = $("#state").val();
        let zipCode = $("#zipCode").val();
        let phone = $("#phone").val();
        let email = $("#email").val();   
        let password = $("#password").val();
        console.log("inputs " + title + " " + firstName + " " + lastName + " " + addressOne + " " + addressTwo + " " + city + " " + state + " " + zipCode + " " + phone + " " + email);
    });

    $("#edit").click(function(e) {
        e.preventDefault();

        let userObj = {
            title: "The Rev.",
            fName: "Matthew",
            lName: "Masko",
            addressOne: "1234 Technology Way",
            addressTwo: "Unit 7",
            city: "Avon",
            state: "Indiana",
            zipCode: "46123",
            phone: "8675309",
            email: "masko@masko.com",
        };

        console.log(userObj);
        $("#title").val(userObj.title);
        $("#fName").val(userObj.fName);
        $("#lName").val(userObj.lName);
        $("#addressOne").val(userObj.addressOne);
        $("#addressTwo").val(userObj.addressTwo);
        $("#city").val(userObj.city);
        $("#state").val(userObj.state);
        $("#zipCode").val(userObj.zipCode);
        $("#phone").val(userObj.phone);
        $("#email").val(userObj.email);
        console.log("inputs " + title + " " + firstName + " " + lastName + " " + addressOne + " " + addressTwo + " " + city + " " + state + " " + zipCode + " " + phone + " " + email);
    });
    }

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
        // console.log(hashTag + " " + pageID);
        
if(pageID !="") {
        $.get(`pages/${pageID}/${pageID}.html`, function (data) {
            // console.log("data " + data);
            $("#app").html(data);
                });
    }else {$.get(`pages/home/home.html`, function (data) {
        // console.log("data " + data);
        $("#app").html(data);
            });

    }
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function(){
    initURLListener();
})

$(document).ready(function () {
    initListeners();
});