const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

const form = document.getElementById('passwordGeneratorform')
const passwordDisplay = document.getElementById('passwordDisplay')

characterAmountRange.addEventListener('input',syncCharacterAmount)
characterAmountNumber.addEventListener('input',syncCharacterAmount)

const LOWER_CHAR_CODES = arrayfromLowtoHigh(97,122)
const UPPER_CHAR_CODES = arrayfromLowtoHigh(65,90)
const NUMBER_CHAR_CODES = arrayfromLowtoHigh(48,57)
const SYMBOL_CHAR_CODES = arrayfromLowtoHigh(33,47).concat(
    arrayfromLowtoHigh(58,64)).concat(arrayfromLowtoHigh(91,96)).concat(arrayfromLowtoHigh(123,126))

form.addEventListener('submit',e =>{
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password= generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols)
    passwordDisplay.innerText = password;
    //console.log(includeNumbers);

})

function generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols){
    let charcodes = LOWER_CHAR_CODES;
    if(includeUppercase){
        charcodes = charcodes.concat(UPPER_CHAR_CODES);
    }
    if(includeNumbers){
        charcodes = charcodes.concat(NUMBER_CHAR_CODES);
    }
    if(includeSymbols){
        charcodes = charcodes.concat(SYMBOL_CHAR_CODES);
    }
    //console.log(charcodes);
    
    const passwordCharacters = [];
    for(let i=0;i<characterAmount;i++){
        const charctercode = charcodes[Math.floor(Math.random()*charcodes.length)];
        passwordCharacters.push(String.fromCharCode(charctercode));
    }
    return passwordCharacters.join('');
    
}

function arrayfromLowtoHigh(low,high){
    const array = []
    for(let i=low;i<=high;i++){
        array.push(i);
    }
    return array;
}


function syncCharacterAmount(e){
    const value=e.target.value;
    characterAmountNumber.value=value;
    characterAmountRange.value=value;
} 