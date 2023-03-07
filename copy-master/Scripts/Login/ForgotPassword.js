$(document).ready(function () {
    $('#UserName').val('');
    $('#btnpassword').click(function () {
        if ($('#UserName').val() == '') {
            ShowError("Please Enter Email.");
            $('#UserName').focus();
            return false;
        } else if (!validateEmail($('#UserName').val())) {
            ShowError("Please Enter Correct Email Address.");
            $('#UserName').focus();
            return false;
        }
        return true;
    });
});
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
