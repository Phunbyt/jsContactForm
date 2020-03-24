function validated() {
    var name = document.getElementById('name').value;

    var email = document.getElementById('email').value;

    var phone = document.getElementById('phone').value;

    var errorText = document.getElementById('error-plate');

    var message;

    errorText.style.padding = '20px';

    if (name.length < 3) {
        message = "enter a valid name";
        errorText.innerHTML = message;
        return false
    }

    if (email.indexOf('@') == -1 || email.length < 7) {
        message = "enter a valid email address";
        errorText.innerHTML = message;
        return false
    }

    if (isNaN(phone) || phone.length < 11) {
        message = "enter a valid phone number";
        errorText.innerHTML = message;
        return false
    }

    alert("Form submitted successfully");
    return true;
}

function validate() {
    var mname = document.getElementById('mname').value;

    var memail = document.getElementById('memail').value;

    var mphone = document.getElementById('mphone').value;

    var merror = document.getElementById('merror-plate');

    var mText;

    merror.style.padding = '20px';

    if (mname.length < 3) {
        mText = "enter a valid name";
        merror.innerHTML = mText;
        return false
    }

    if (memail.indexOf('@') == -1 || memail.length < 7) {
        mText = "enter a valid email address";
        merror.innerHTML = mText;
        return false
    }

    if (isNaN(mphone) || mphone.length < 11) {
        mText = "enter a valid phone number";
        merror.innerHTML = mText;
        return false
    }

    alert("You're now a Billionaire... lol");
    return true;
}