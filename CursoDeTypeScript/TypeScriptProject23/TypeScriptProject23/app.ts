
window.onload = () => {

    var strings = ['Leonardo', '05021000', '123'];

    var validators: { [s: string]: Validation.StringValidator } = {}

    validators['ZIP code'] = new Validation.CepValidator();
    validators['Letters only'] = new Validation.LettersOnlyValidator();

    var result: string = "";
    strings.forEach(s => {
        for (var name in validators) {
            result = result + '"' + s + '" ' + (validators[name].isValidate(s) ? ' matches ' : ' does not match ') + name + "<br>";
        }
    });

    document.getElementById('content').innerHTML = result
};