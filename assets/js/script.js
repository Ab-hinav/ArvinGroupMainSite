const centralEu = document.querySelector('#key-markets .btn-dark');
const easternEu = document.querySelector('#key-markets .btn-primary');
const asia = document.querySelector('#key-markets .btn-secondary');

const panels = document.querySelectorAll('.panel');

console.log(centralEu);
console.log(panels);

centralEu.addEventListener('click', () => {
    panels.forEach(panel => panel.classList.add('hide'));

    panels[0].classList.toggle('hide');

});

easternEu.addEventListener('click', () => {
    panels.forEach(panel => panel.classList.add('hide'));

    panels[1].classList.toggle('hide');
});

asia.addEventListener('click', () => {
    panels.forEach(panel => panel.classList.add('hide'));

    panels[2].classList.toggle('hide');
});



function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://jnr9lnb7cg.execute-api.us-east-1.amazonaws.com/prod/contact-us";

    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name-input").val())) {
        alert("Name can not less than 2 char");
        return;
    }

    if ($("#email-input").val() == "") {
        alert("Please enter your email id");
        return;
    }

    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reeamil.test($("#email-input").val())) {
        alert("Please enter valid email address");
        return;
    }

    var name = $("#name-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var data = {
        name: name,
        email: email,
        desc: desc
    };

    $.ajax({
        type: "POST",
        url: URL,
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),


        success: function () {
            // clear form and show a success message
            alert("Your message sent SucessFully !");
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function () {
            // show an error message
            alert("There was some error , try dropping us an email");
        }
    });
}

function toggleMenu2(){
    const checkBox = document.querySelector('.toggler');
    checkBox.click();
}
