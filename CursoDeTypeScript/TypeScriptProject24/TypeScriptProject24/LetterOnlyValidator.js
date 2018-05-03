define(["require", "exports"], function (require, exports) {
    "use strict";
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettesOnlyValidator = /** @class */ (function () {
        function LettesOnlyValidator() {
        }
        LettesOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettesOnlyValidator;
    }());
    return LettesOnlyValidator;
});
//# sourceMappingURL=LetterOnlyValidator.js.map