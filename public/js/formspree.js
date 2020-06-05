$(document).ready( () => {
function success() {
$('#my-button').css('display: none');
$('#my-form-status').html("Thanks!");
$('#my-form').reset();
}

function error() {
    $('#my-form-status').html("Oops! There was a problem with sending your message. Try again");
}

$('#my-form').click( () => {
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
