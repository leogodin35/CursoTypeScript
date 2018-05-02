var Validation;
(function (Validation) {
    var charsRegexp = /^[A-Za-z]+$/; // Checa se tem somente caracteres
    var cepRegexp = /^[0-9]+$/; // Checa se tem somente números
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isValidate = function (s) {
            return charsRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var CepValidator = /** @class */ (function () {
        function CepValidator() {
        }
        CepValidator.prototype.isValidate = function (s) {
            return s.length === 8 && cepRegexp.test(s);
        };
        return CepValidator;
    }());
    Validation.CepValidator = CepValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=Validation.js.map