function Validate() {

    var name = document.forms['form']['name'].value;
    if (name == "" || name == null) {
        alert("Name field can't be Empty");
        return false;
    }

    var email = document.forms['form']['email'].value;
    if (email == "" || email == null) {
        alert("Email field can't be Empty");
        return false;
    }

    var subject = document.forms['form']['subject'].value;
    if (subject == "" || subject == null) {
        alert("Subject field can't be Empty");
        return false;
    }

    var message = document.forms['form']['message'].value;
    if (message == "" || message == null) {
        alert("Message field can't be Empty");
        return false;
    }

}