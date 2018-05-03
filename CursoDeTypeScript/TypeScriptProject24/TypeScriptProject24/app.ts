// Importar os módulos
import validation = require('./Validation');
import zipValidator = require('./ZipCodeValidator');
import lettersValidator = require('./LettersOnlyValidator');

// Strings para testar
var strings = ['Hello', '12300056', '101'];

// Usar os validators
var validators: { [s: string]: validation.StringValidator; } = {};
validators['Zip Code'] = new zipValidator();
validators['Letters Only'] = new lettersValidator();

// Resultado
var result: string = '';
strings.forEach(s => {
    for (var name in validators) {
        result = result + '"' + s + '"' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name + '<br>';
    }
});

document.getElementById('content').innerHTML = result;

