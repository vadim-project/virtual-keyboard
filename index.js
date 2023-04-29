//create page elements

const container = document.createElement('div');
container.classList = 'wrapper';
document.body.append(container);

const input = document.createElement('textarea');
input.classList = 'text-area'
input.type = 'text';
container.append(input);

const keyBoardWrapper = document.createElement('div');
keyBoardWrapper.classList = 'keyboard__wrapper';
container.append(keyBoardWrapper);

const firstRowWrapper = document.createElement('div');
firstRowWrapper.classList = 'firstRowWrapper';
const secondRowWrapper = document.createElement('div');
secondRowWrapper.classList = 'secondRowWrapper';
const thirdRowWrapper = document.createElement('div');
thirdRowWrapper.classList = 'thirdRowWrapper';
const fourRowWrapper = document.createElement('div');
fourRowWrapper.classList = 'fourRowWrapper';
const fiftyRowWrapper = document.createElement('div');
fiftyRowWrapper.classList = 'fiftyRowWrapper';

keyBoardWrapper.append(firstRowWrapper);
keyBoardWrapper.append(secondRowWrapper);
keyBoardWrapper.append(thirdRowWrapper);
keyBoardWrapper.append(fourRowWrapper);
keyBoardWrapper.append(fiftyRowWrapper);

// create button
const firstRow = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPACE'];
const firstRowRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPACE'];

const firstRowAltContent = [`~`, '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'BACKSPACE'];
const firstRowRuAltContent = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'BACKSPACE'];

const secondRow = ['TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
const secondRowRu = ['TAB', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'o', 'з', 'х', 'ъ', '\\'];

const secondRowAltContent = ['TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|'];
const secondRowRuAltContent = ['TAB', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'o', 'з', 'х', 'ъ', '/'];


const thirdRow = ['CAPS LOCK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER'];
const thirdRowRu = ['CAPS LOCK', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER'];

const thirdRowAltContent = ['CAPS LOCK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'ENTER'];

const fourRow = ['SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'SHIFT'];
const fourRowRu = ['SHIFT', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'SHIFT'];

const fourRowRuAltContent = ['SHIFT', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', 'SHIFT'];


const fiftyRow = ['CTRL', 'WIN', 'L ALT', 'SPACE', 'R ALT', '\\', 'CTRL'];

const fiftyRowAltContent = ['CTRL', 'WIN', 'L ALT', 'SPACE', 'R ALT', '|', 'CTRL'];

const allKeys = [...firstRow, ...secondRow, ...thirdRow, ...fourRow, ...fiftyRow];
const allKeysRu = [...firstRowRu, ...secondRowRu, ...thirdRowRu, ...fourRowRu, ...fiftyRow];
const allKeysRuAltContent = [...firstRowRuAltContent, ...secondRowRuAltContent, ...thirdRowRu, ...fourRowRuAltContent, ...fiftyRowAltContent];

let keys = {};


window.addEventListener('load', () => {
    let language = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ru';
    if (language === 'en') createButton(allKeys);
    else createButton(allKeysRu);
})

function createButton(arr) {
    firstRowWrapper.innerHTML = '';
    secondRowWrapper.innerHTML = '';
    thirdRowWrapper.innerHTML = '';
    fourRowWrapper.innerHTML = '';
    fiftyRowWrapper.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const CreateKeys = document.createElement('button');
        CreateKeys.classList.add('keys');
        if (arr[i].length <= 1) CreateKeys.classList.add('char');
        if (i < 14) {
            firstRowWrapper.appendChild(CreateKeys);
        }
        if (i < 28 && i >= 14) {
            secondRowWrapper.appendChild(CreateKeys);
        }
        if (i < 41 && i >= 28) {
            thirdRowWrapper.appendChild(CreateKeys);
        }
        if (i < 53 && i >= 41) {
            fourRowWrapper.appendChild(CreateKeys);
        }
        if (i <= 60 && i >= 53) {
            fiftyRowWrapper.appendChild(CreateKeys);
        }
    }

    keys = document.querySelectorAll('.keys');

    for (let j = 0; j < arr.length; j++) {
        keys[j].textContent = arr[j];
        keys[j].onclick = (event) => {
            const textArea = document.querySelector('.text-area');
            textArea.focus();
            const start = textArea.selectionStart;
            const end = textArea.selectionEnd;
            textArea.value = textArea.value.substring(0, start) + event.target.textContent + textArea.value.substring(end);
            if (start === end) {
                textArea.selectionStart = start + 1;
                textArea.selectionEnd = end + 1;
            }
            else {
                textArea.selectionStart = start + 1;
                textArea.selectionEnd = start + 1;
            }
        }
    }

    keys[0].id = 'tilda';
    keys[13].id = 'backspace';
    keys[13].onclick = () => {
        const textArea = document.querySelector('.text-area');
        textArea.focus();
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        if (start === end) {
            textArea.value = textArea.value.substring(0, start - 1) + textArea.value.substring(end);
            textArea.selectionStart = start - 1;
            textArea.selectionEnd = end - 1;
        }
        else {
            textArea.value = textArea.value.substring(0, start) + textArea.value.substring(end);
            textArea.selectionStart = start;
            textArea.selectionEnd = start;
        }
    }
    keys[14].id = 'tab';
    keys[14].onclick = () => {
        const textArea = document.querySelector('.text-area');
        textArea.focus();
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        textArea.value = textArea.value.substring(0, start) + '\t' + textArea.value.substring(end);
        if (start === end) {
            textArea.selectionStart = start + 1;
            textArea.selectionEnd = end + 1;
        }
        else {
            textArea.selectionStart = start + 1;
            textArea.selectionEnd = start + 1;
        }
    }
    keys[27].id = 'backslash';
    keys[28].id = 'caps-lock';
    keys[28].onclick = (event) => {
        event.target.classList.toggle('active');
        if (event.target.classList.contains('active')) {
            Array.from(document.querySelectorAll('.char'))
                .map(char => char.textContent = char.textContent.toUpperCase());
        } else {
            Array.from(document.querySelectorAll('.char'))
                .map(char => char.textContent = char.textContent.toLowerCase());
        }
    }
    keys[40].id = 'enter';
    keys[40].onclick = () => {
        const textArea = document.querySelector('.text-area');
        textArea.focus();
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        textArea.value = textArea.value.substring(0, start) + '\n' + textArea.value.substring(end);
        if (start === end) {
            textArea.selectionStart = start + 1;
            textArea.selectionEnd = end + 1;
        }
        else {
            textArea.selectionStart = start + 1;
            textArea.selectionEnd = start + 1;
        }
    }
    keys[41].id = 'l-shift';
    keys[41].onclick = (event) => {
        event.target.classList.toggle('active');
        if (event.target.classList.contains('active')) {
            createButton(allKeysRuAltContent);
            let lShift = document.getElementById('l-shift');
            lShift.classList.add('active');
            Array.from(document.querySelectorAll('.char'))
                .map(char => char.textContent = char.textContent.toUpperCase());
        } else {
            createButton(allKeysRu);
            let lShift = document.getElementById('l-shift');
            lShift.classList.remove('active');
            Array.from(document.querySelectorAll('.char'))
                .map(char => char.textContent = char.textContent.toLowerCase());
        }
    } 
    keys[52].id = 'r-shift';
    keys[53].id = 'l-ctrl';
    keys[54].id = 'win';
    keys[55].id = 'l-alt';
    keys[56].id = 'space';
    keys[56].onclick = () => {
        const textArea = document.querySelector('.text-area');
        textArea.focus();
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        textArea.value = textArea.value.substring(0, start) + ' ' + textArea.value.substring(end);
        if (start === end) {
            textArea.selectionStart = start + 1;
            textArea.selectionEnd = end + 1;
        }
        else {
            textArea.selectionStart = start + 1;
            textArea.selectionEnd = start + 1;
        }
    }
    keys[57].id = 'r-alt';
    keys[58].id = 'int-backslash';
    keys[59].id = 'r-ctrl';
}

//Events on press on physic keyboard

window.addEventListener('keydown', (event) => {
    keys = document.querySelectorAll(".keys");
    let key = Array.from(keys).filter(key => key.textContent.replaceAll(' ', '').toUpperCase() === event.key.replaceAll(' ', '').toUpperCase())[0];
    switch (event.key) {
        case "Shift":
            if (event.code === 'ShiftLeft') {
                const leftShift = document.getElementById('l-shift');
                leftShift.classList.add('active');
            }
            else {
                const rightShift = document.getElementById('r-shift');
                rightShift.classList.add('active');
            }
            break;
        case "Control":
            if (event.code === 'ControlLeft') {
                const leftControl = document.getElementById('l-ctrl');
                leftControl.classList.add('active');
            }
            else {
                const rightControl = document.getElementById('r-ctrl');
                rightControl.classList.add('active');
            }
            break;
        case "Meta":
            const meta = document.getElementById('win');
            meta.classList.add('active');
            break;
        case "Alt":
            if (event.code === "AltLeft") {
                const leftAlt = document.getElementById('l-alt');
                leftAlt.classList.add('active');
            }
            else {
                const rightAlt = document.getElementById('r-alt');
                rightAlt.classList.add('active');
            }
            break;
        case " ":
            const space = document.getElementById('space');
            space.classList.add('active');
            break;
        case "\\":
            if (event.code === "Backslash") {
                const backslash = document.getElementById('backslash');
                backslash.classList.add('active');
            }
            else {
                const intBackslash = document.getElementById('int-backslash');
                intBackslash.classList.add('active');
            }
            break;
        default:
            key.classList.add('active');
            break;
    }
})

window.addEventListener('keyup', (event) => {
    keys = document.querySelectorAll(".keys");
    let key = Array.from(keys).filter(key => key.textContent.replaceAll(' ', '').toUpperCase() === event.key.replaceAll(' ', '').toUpperCase())[0];
    switch (event.key) {
        case "Shift":
            if (event.code === 'ShiftLeft') {
                const leftShift = document.getElementById('l-shift');
                leftShift.classList.remove('active');
            }
            else {
                const rightShift = document.getElementById('r-shift');
                rightShift.classList.remove('active');
            }
            break;
        case "Control":
            if (event.code === 'ControlLeft') {
                const leftControl = document.getElementById('l-ctrl');
                leftControl.classList.remove('active');
            }
            else {
                const rightControl = document.getElementById('r-ctrl');
                rightControl.classList.remove('active');
            }
            break;
        case "Meta":
            const meta = document.getElementById('win');
            meta.classList.remove('active');
            break;
        case "Alt":
            if (event.code === "AltLeft") {
                const leftAlt = document.getElementById('l-alt');
                leftAlt.classList.remove('active');
            }
            else {
                const rightAlt = document.getElementById('r-alt');
                rightAlt.classList.remove('active');
            }
            break;
        case " ":
            const space = document.getElementById('space');
            space.classList.remove('active');
            break;
        case "\\":
            if (event.code === "Backslash") {
                const backslash = document.getElementById('backslash');
                backslash.classList.remove('active');
            }
            else {
                const intBackslash = document.getElementById('int-backslash');
                intBackslash.classList.remove('active');
            }
            break;
        default:
            key.classList.remove('active');
            break;
    }
})





