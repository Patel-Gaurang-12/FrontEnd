//****************** YOUR CUSTOMIZED JAVASCRIPT **********************//

function isNumeric(evt) {
    var charCode = evt.which;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function isNumericDecimal(key) {
    //getting key code of pressed key
    var keycode = (key.which) ? key.which : key.keyCode;
    //comparing pressed keycodes

    if (keycode > 31 && (keycode < 48 || keycode > 57) && keycode != 46) {

        return false;
    }
    else return true;
}
function GetintMonth(StartDate) {
    var d = new Date(StartDate);
    return (d.getMonth() + 1);
}


function LastDayOfMonth(Year, Month) {
    return new Date((new Date(Year, Month, 1)) - 1);
}

/// get DateValidation  or not 
function DateValidation(txtDate, ContentName, AllowFutureDate) {
    if (txtDate == "") {
        return "Please Enter " + ContentName;
    }
    else if (new Date(txtDate) == 'Invalid Date') {
        return "Please Enter Correct " + ContentName;
    }
    else if (!isDate(txtDate)) {
        return "Please Enter Correct " + ContentName;
    }
    else if (new Date(txtDate) < new Date('01/01/1753') ||
             new Date(txtDate) > new Date('12/31/9999')) {
        return "Please Enter " + ContentName + " between 01/01/1753 to 12/31/9999.";
    }
    else if (new Date(txtDate) > new Date() && !AllowFutureDate) {
        return ContentName + " Can't be bigger than today date.";
    }
    else {
        return "";
    }
}

/// CompareDate betweem two dates
function CompareDate(txtFromDate, txtToDate, FirstDate, SecondDate) {
    if (new Date(txtFromDate) > new Date(txtToDate)) {
        return FirstDate + " can't be bigger than " + SecondDate + ".";
    }
    else if (new Date(txtToDate) < new Date(txtFromDate)) {
        return SecondDate + " can't be less than " + FirstDate + ".";
    }
    else {
        return "";
    }
}

///get Datetimeinsetvalidation
function Datetimeinsetvalidation(key, control, value) {

    var keycode = (key.which) ? key.which : key.keyCode;
    if (keycode > 31 && (keycode < 48 || keycode > 57) && keycode != 46) {
        return false;
    }
    else {
        if (control.length > value) { return false }
        else
            return true;
    }
}

///for check date is correct or not
function isDate(DateString) {
    var objDate,  // date object initialized from the DateString string 
        mSeconds, // DateString in milliseconds 
        day,      // day 
        month,    // month 
        year;     // year 
    // date length should be 10 characters (no more no less) 
    if (DateString.length !== 10) {
        return false;
    }
    // third and sixth character should be '/' 
    if (DateString.substring(2, 3) !== '/' || DateString.substring(5, 6) !== '/') {
        return false;
    }
    // extract month, day and year from the DateString (expected format is mm/dd/yyyy) 
    // subtraction will cast variables to integer implicitly (needed 
    // for !== comparing) 
    month = DateString.substring(0, 2) - 1; // because months in JS start from 0 
    day = DateString.substring(3, 5) - 0;
    year = DateString.substring(6, 10) - 0;
    // test year range 
    if (year < 1000 || year > 3000) {
        return false;
    }
    // convert DateString to milliseconds 
    mSeconds = (new Date(year, month, day)).getTime();
    // initialize Date() object from calculated milliseconds 
    objDate = new Date();
    objDate.setTime(mSeconds);
    // compare input date and parts from Date() object 
    // if difference exists then date isn't valid 
    if (objDate.getFullYear() !== year ||
        objDate.getMonth() !== month ||
        objDate.getDate() !== day) {
        return false;
    }
    // otherwise return true 
    return true;
}

/// for change Date Formate 
function parseDate(str) {
    var mdy = str.split('/')
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

///get days betweem two dates
function daydiff(first, second) {
    return (second - first) / (1000 * 60 * 60 * 24);
}

function DatetimeinsetBlurvalidation(control, value) {
    if (control.val() == '') {
        control.val('00');
    }
    if (control.val() > value) {
        control.val('');
        control.focus();
    }
}

function datediff(fromDate, toDate, interval) {


    var second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24, week = day * 7;
    fromDate = new Date(fromDate);
    toDate = new Date(toDate);
    var timediff = toDate - fromDate;

    if (isNaN(timediff)) return NaN;
    switch (interval) {
        case "years": return toDate.getFullYear() - fromDate.getFullYear();
        case "months": return (
          (toDate.getFullYear() * 12 + toDate.getMonth())
          -
          (fromDate.getFullYear() * 12 + fromDate.getMonth())
        );
        case "weeks": return Math.floor(timediff / week);
        case "days": return Math.floor(timediff / day);
        case "hours": return Math.floor(timediff / hour);
        case "minutes": return Math.floor(timediff / minute);
        case "seconds": return Math.floor(timediff / second);
        default: return undefined;
    }
}

function IsNumericPhone(evt) {
    var charCode = evt.which;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        if (charCode == 40 || charCode == 41 || charCode == 43) {
            return true;
        }
        else {
            return false;
        }
    }
    return true;
}

function ShowSuccess(message) {
    jSuccess(
                       message, {
                           HorizontalPosition: 'center',
                           VerticalPosition: 'bottom',
                           TimeShown: 2000,
                           ShowOverlay: true
                       });
}

function ShowError(message) {
    jError(
                            message, {
                                HorizontalPosition: 'center',
                                VerticalPosition: 'bottom',
                                TimeShown: 2000,
                                ShowOverlay: true
                            });


    return false;
}

function GetDateFormated(date) {
    var myDate = (date).toString();
    var splitstr = myDate.split("/");
    var CurrentSystemDate = splitstr[2] + "/" + splitstr[1] + "/" + splitstr[0];
    //alert('   ' + CurrentSystemDate);
    return CurrentSystemDate;
}

function GetDateFormate(date, IsYear) {
    var d = new Date(date);
    if (IsYear == 1 || IsYear == '1') {
        d = new Date(GetDateFormated(date));
    }
    var curr_date = d.getDate();
    var twoDigitDate = d.getDate() + ""; if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
    var curr_month = d.getMonth() + 1 + ""; if (curr_month.length == 1) curr_month = "0" + curr_month;
    var curr_year = d.getFullYear();
    var CurrentSystemDate = twoDigitDate + "/" + curr_month + "/" + curr_year;
    if (IsYear == 1 || IsYear == '1')
        CurrentSystemDate = curr_year + "/" + curr_month + "/" + twoDigitDate;
    else if (IsYear == 0 || IsYear == '0')
        CurrentSystemDate = curr_month + "/" + twoDigitDate + "/" + curr_year;
    return CurrentSystemDate;
}

function ShowSuccessAndRedirect(message, RedirectUrl) {

    window.location = RedirectUrl;
    setTimeout(jSuccess(
                       message, {
                           HorizontalPosition: 'center',
                           VerticalPosition: 'bottom',
                           TimeShown: 7000,
                           ShowOverlay: true
                       }), 600);


}

function GetMonthName(monthNumber) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthNumber - 1];
}


//****************** YOUR CUSTOMIZED JAVASCRIPT **********************//
