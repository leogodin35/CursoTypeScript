window.onload = function () {
    var strings = ['Leonardo', '05021000', '123'];
    var validators = {};
    validators['ZIP code'] = new Validation.CepValidator();
    validators['Letters only'] = new Validation.LettersOnlyValidator();
    var result = "";
    strings.forEach(function (s) {
        for (var name in validators) {
            result = result + '"' + s + '" ' + (validators[name].isValidate(s) ? ' matches ' : ' does not match ') + name + "<br>";
        }
    });
    document.getElementById('content').innerHTML = result;
};
//# sourceMappingURL=app.js.map