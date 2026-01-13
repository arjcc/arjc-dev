const m = { '0': '൦', '1': '൧', '2': '൨', '3': '൩', '4': '൪', '5': '൫', '6': '൬', '7': '൭', '8': '൮', '9': '൯' };
let e = '', r = '';



const c = s => String(s).replace(/[0-9]/g, d => m[d]);
const u = () => { const s = document.querySelectorAll('.display span'); s[0].innerText = c(e) || ''; s[1].innerText = c(r); };

function puj() { e += '0'; u(); }
function onn() { e += '1'; u(); }
function rnd() { e += '2'; u(); }
function mun() { e += '3'; u(); }
function nal() { e += '4'; u(); }
function anj() { e += '5'; u(); }
function arr() { e += '6'; u(); }
function ezh() { e += '7'; u(); }
function ett() { e += '8'; u(); }
function omb() { e += '9'; u(); }

function add() { e += ' + '; u(); }
function sub() { e += ' − '; u(); }
function mul() { e += ' × '; u(); }
function div() { e += ' ÷ '; u(); }

function clr() { e = ''; r = ''; u(); }

function sam() {
    try {
        let x = e.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
        let res = eval(x);
        r = Number.isFinite(res) ? res : '0 ഹരിക്കാൻ പറ്റില്ല...';
    } catch (err) { r = 'എന്തോ പിശക് പറ്റി'; }
    u();
}

document.addEventListener('keydown', function(ev) {
    const k = ev.key;
    if (k >= '0' && k <= '9') { e += k; u(); }
    else if (k === '+') add();
    else if (k === '-') sub();
    else if (k === '*') mul();
    else if (k === '/') div();
    else if (k === 'Enter' || k === '=') sam();
    else if (k === 'Escape' || k === 'c' || k === 'C') clr();
    else if (k === 'Backspace') {
        e = e.trimEnd();
        if (e.endsWith(' +') || e.endsWith(' −') || e.endsWith(' ×') || e.endsWith(' ÷')) e = e.slice(0, -2).trimEnd();
        else if (e.length > 0) e = e.slice(0, -1);
        u();
    }
});

u();