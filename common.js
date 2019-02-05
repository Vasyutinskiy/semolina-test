//Watch widget
function analogWatch() {
    var currentDate, currentHour, currentMinute;
    currentDate = new Date();

    currentHour = 30 * ((currentDate.getHours() % 12) + currentDate.getMinutes() / 60);
    currentMinute = 6 * currentDate.getMinutes();

    setAttr('hour-arrow', currentHour);
    setAttr('minute-arrow', currentMinute);

    currentHour = currentDate.getHours();
    currentMinute = currentDate.getMinutes();
};
function setAttr(id,val) {
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};

setInterval(function() {
    analogWatch();
    }, 1000);
//End Watch widget


//Calculator function
var calcInput = document.getElementById("calc-input");
var buttonSqr = document.getElementById("btn-sqr");
var buttonSqrt = document.getElementById("btn-sqrt");
var buttonLn = document.getElementById("btn-ln");

buttonSqr.addEventListener("click", function() {
    //get Sqr function
    function getSqr(number) {
        var sqrResult = Math.pow(number, 2);
        return sqrResult;
    };
    calcInput.value = getSqr(parseInt(calcInput.value));
});

buttonSqrt.addEventListener("click", function() {
    //get sqrt function
    function getSqrt(number) {
        var sqrtResult = Math.sqrt(number);
        return sqrtResult;
    }
    calcInput.value = getSqrt(parseInt(calcInput.value));
});

buttonLn.addEventListener("click", function() {
    //get ln function
    function getLn(number) {
        var lnResult = Math.log(number);
        return lnResult;
    }
    calcInput.value = getLn(parseInt(calcInput.value));
});
//END Calculator


//Check string function
var stringResultField = document.getElementById("string-result");
var checkedString = document.getElementById("xy-string");
var btnCheckString = document.getElementById("check-string_btn");
var repeatedElx = 0,
    repeatedEly = 0,
    wholeResult = "";

function checkSameElem (string) {
    for (var i = 0; i < string.length; i++) {
        if ((string.charAt(i) == "x") && (string.charAt(i + 1) == "x")) {
            repeatedElx++;
        }
        if ((string.charAt(i) == "y") && (string.charAt(i + 1) == "y")) {
            repeatedEly++;
        }
    }
    if(repeatedElx != 0 && repeatedEly != 0) {
        wholeResult = "You have " + repeatedElx + " matches with x symbol and " + repeatedEly + " matches with y symbol";
    }else {
        wholeResult = "Oooops. There are no matches in this string";
    }
    return stringResultField.innerHTML = wholeResult;
    checkedString.value = "";
    repeatedElx = 0;
    repeatedEly = 0;
};

btnCheckString.addEventListener("click", function() {
    checkSameElem(checkedString.value);
});
//END Check string function
