var characterAmountRange = document.getElementById('characterAmountRange')
var characterAmountNumber = document.getElementById('characterAmountNumber')
var includeUppercaseElement = document.getElementById('includeUppercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var form = document.getElementById('passwordGeneratorForm')
var passwordDisplay = document.getElementById('passwordDisplay')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

var NumberCharCodes = arrayFromLowToHigh(65, 90) 
var LowercaseCharCodes = arrayFromLowToHigh(97, 122)
var SymbolCharCodes= arrayFromLowToHigh(48, 57)
var UppercaseCharCodes = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

form.addEventListener('submit', e => {
    e.preventDefault()
    var characterAmount = characterAmountNumber.value
    var includeUppercase = includeUppercaseElement.checked
    var includeNumbers = includeNumbersElement.checked
    var includeSymbols = includeSymbolsElement.checked
    var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function arrayFromLowToHigh(low, high) {
    var array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    var value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

function generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase) {
    let charCodes = LowercaseCharCodes
    if (includeUppercase) charCodes = charCodes.concat(UppercaseCharCodes)
    if (includeNumbers) charCodes = charCodes.concat(NumberCharCodes)
    if (includeSymbols) charCodes = charCodes.concat(SymbolCharCodes)
    
    var passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}
