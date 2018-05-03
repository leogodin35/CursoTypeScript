define(["require", "exports", "./ZipCodeValidator", "./LettersOnlyValidator"], function (require, exports, zipValidator, lettersValidator) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Strings para testar
    var strings = ['Hello', '12300056', '101'];
    // Usar os validators
    var validators = {};
    validators['Zip Code'] = new zipValidator();
    validators['Letters Only'] = new lettersValidator();
    // Resultado
    var result = '';
    strings.forEach(function (s) {
        for (var name in validators) {
            result = result + '"' + s + '"' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name + '<br>';
        }
    });
    document.getElementById('content').innerHTML = result;
});
//# sourceMappingURL=app.js.map