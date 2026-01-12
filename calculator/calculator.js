const englishToMalayalamNumbers = {
    '0': '൦',
    '1': '൧',
    '2': '൨',
    '3': '൩',
    '4': '൪',
    '5': '൫',
    '6': '൬',
    '7': '൭',
    '8': '൮',
    '9': '൯'
};

let currentExpression = '';
let currentResult = '';

function convertToMalayalam(str) {
    return String(str).replace(/[0-9]/g, digit => englishToMalayalamNumbers[digit]);
}

function updateDisplay() {
    const display = document.querySelector('.display');
    const spans = display.getElementsByTagName('span');
    spans[0].innerText = convertToMalayalam(currentExpression) || '';
    spans[1].innerText = convertToMalayalam(currentResult);
}

// Number buttons
function puj() { currentExpression += '0'; updateDisplay(); }
function onn() { currentExpression += '1'; updateDisplay(); }
function rnd() { currentExpression += '2'; updateDisplay(); }
function mun() { currentExpression += '3'; updateDisplay(); }
function nal() { currentExpression += '4'; updateDisplay(); }
function anj() { currentExpression += '5'; updateDisplay(); }
function arr() { currentExpression += '6'; updateDisplay(); }
function ezh() { currentExpression += '7'; updateDisplay(); }
function ett() { currentExpression += '8'; updateDisplay(); }
function omb() { currentExpression += '9'; updateDisplay(); }

// Operator buttons
function add() { currentExpression += ' + '; updateDisplay(); }
function sub() { currentExpression += ' − '; updateDisplay(); }
function mul() { currentExpression += ' × '; updateDisplay(); }
function div() { currentExpression += ' ÷ '; updateDisplay(); }

// Clear button
function clr() {
    currentExpression = '';
    currentResult = '';
    updateDisplay();
}

// Equals button
function sam() {
    try {
        // Convert expression to evaluable format
        let evalExpression = currentExpression
            .replace(/÷/g, '/')
            .replace(/×/g, '*')
            .replace(/−/g, '-');
        
        let result = eval(evalExpression);
        currentResult = Number.isFinite(result) ? result : '0 കൊണ്ട് ഹരിക്കാൻ പറ്റില്ല...';
    } catch (e) {
        currentResult = 'എന്തോ പിശക് പറ്റി';
    }
    updateDisplay();
}

// Initialize display
updateDisplay();