$(document).ready(function(){
function success() {
$('#my-button').css('display: none');
$('#my-form-status').html("Thanks!");
}

function error() {
    $('#my-form-status').html("Oops! There was a problem with sending your message. Try again");
}

$('#my-form').submit(function(ev) {
// ev.preventDefault();
$.ajax({
    method: "post",
    url: "https://formspree.io/petrushe4ka@gmail.com",
    data: {
        email: reply_to.value,
        name: name.value,
        message: message.value
    },
    dataType: "json",
    success: success(),
    error: error()
});
});
});
