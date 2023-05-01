const container = document.createElement('div');
container.classList = 'wrapper';
document.body.append(container);

const input = document.createElement('textarea');
input.classList = 'text-area';
input.type = 'text';
input.placeholder = "Ctrl + Alt for switch language";
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
const fourRowAltContent = ['SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'SHIFT'];


const fiftyRow = ['CTRL', 'WIN', 'L ALT', 'SPACE', 'R ALT', '\\', 'CTRL'];

const fiftyRowAltContent = ['CTRL', 'WIN', 'L ALT', 'SPACE', 'R ALT', '|', 'CTRL'];

const allKeys = [...firstRow, ...secondRow, ...thirdRow, ...fourRow, ...fiftyRow];
const allKeysAltContent = [...firstRowAltContent, ...secondRowAltContent, ...thirdRowAltContent, ...fourRowAltContent, ...fiftyRowAltContent];
const allKeysRu = [...firstRowRu, ...secondRowRu, ...thirdRowRu, ...fourRowRu, ...fiftyRow];
const allKeysRuAltContent = [...firstRowRuAltContent, ...secondRowRuAltContent, ...thirdRowRu, ...fourRowRuAltContent, ...fiftyRowAltContent];

let keys = {};

let language = 'en';

class Keyboard {
    createButton(arr) {
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
            const isActiveLShift = document.getElementById('l-shift').classList.contains('active');
            const isActiveRShift = document.getElementById('r-shift').classList.contains('active');
            event.target.classList.toggle('active');
            if (isActiveLShift || isActiveRShift) {
                if (!event.target.classList.contains('active')) {
                    Array.from(document.querySelectorAll('.char'))
                        .map(char => char.textContent = char.textContent.toUpperCase());
                } else {
                    Array.from(document.querySelectorAll('.char'))
                        .map(char => char.textContent = char.textContent.toLowerCase());
                }
            }
            else {
                if (event.target.classList.contains('active')) {
                    Array.from(document.querySelectorAll('.char'))
                        .map(char => char.textContent = char.textContent.toUpperCase());
                } else {
                    Array.from(document.querySelectorAll('.char'))
                        .map(char => char.textContent = char.textContent.toLowerCase());
                }
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
            const isActiveRShift = document.getElementById('r-shift').classList.contains('active');
            const isActiveCaps = document.getElementById('caps-lock').classList.contains('active');
            const isActiveRAlt = document.getElementById('r-alt').classList.contains('active');
            const isActiveLAlt = document.getElementById('l-alt').classList.contains('active');
            const isActiveRCtrl = document.getElementById('r-ctrl').classList.contains('active');
            const isActiveLCtrl = document.getElementById('l-ctrl').classList.contains('active');
            const isActiveWin = document.getElementById('win').classList.contains('active');
            event.target.classList.toggle('active');
            if (!isActiveRShift) {
                if (isActiveCaps) {
                    if (event.target.classList.contains('active')) {
                        if (language === 'ru') this.createButton(allKeysRuAltContent);
                        else this.createButton(allKeysAltContent);
                        let lShift = document.getElementById('l-shift');
                        lShift.classList.add('active');
                        Array.from(document.querySelectorAll('.char'))
                            .map(char => char.textContent = char.textContent.toLowerCase());
                    } else {
                        if (language === 'ru') this.createButton(allKeysRu);
                        else this.createButton(allKeys);
                        Array.from(document.querySelectorAll('.char'))
                            .map(char => char.textContent = char.textContent.toUpperCase());
                    }
                }
                else {
                    if (event.target.classList.contains('active')) {
                        if (language === 'ru') this.createButton(allKeysRuAltContent);
                        else this.createButton(allKeysAltContent);
                        let lShift = document.getElementById('l-shift');
                        lShift.classList.add('active');
                        Array.from(document.querySelectorAll('.char'))
                            .map(char => char.textContent = char.textContent.toUpperCase());
                    } else {
                        if (language === 'ru') this.createButton(allKeysRu);
                        else this.createButton(allKeys);
                        Array.from(document.querySelectorAll('.char'))
                            .map(char => char.textContent = char.textContent.toLowerCase());
                    }
                }
            }
            if (isActiveCaps) document.getElementById('caps-lock').classList.add('active');

            if (isActiveRAlt) document.getElementById('r-alt').classList.add('active');
            if (isActiveLAlt) document.getElementById('l-alt').classList.add('active');
            if (isActiveRCtrl) document.getElementById('r-ctrl').classList.add('active');
            if (isActiveLCtrl) document.getElementById('l-ctrl').classList.add('active');
            if (isActiveWin) document.getElementById('win').classList.add('active');
        }
        keys[52].id = 'r-shift';
        keys[52].onclick = (event) => {
            const isActiveLShift = document.getElementById('l-shift').classList.contains('active');
            const isActiveCaps = document.getElementById('caps-lock').classList.contains('active');
            const isActiveRAlt = document.getElementById('r-alt').classList.contains('active');
            const isActiveLAlt = document.getElementById('l-alt').classList.contains('active');
            const isActiveRCtrl = document.getElementById('r-ctrl').classList.contains('active');
            const isActiveLCtrl = document.getElementById('l-ctrl').classList.contains('active');
            const isActiveWin = document.getElementById('win').classList.contains('active');
            event.target.classList.toggle('active');
            if (!isActiveLShift) {
                if (isActiveCaps) {
                    if (event.target.classList.contains('active')) {
                        if (language === 'ru') this.createButton(allKeysRuAltContent);
                        else this.createButton(allKeysAltContent);
                        let rShift = document.getElementById('r-shift');
                        rShift.classList.add('active');
                        Array.from(document.querySelectorAll('.char'))
                            .map(char => char.textContent = char.textContent.toLowerCase());
                    } else {
                        if (language === 'ru') this.createButton(allKeysRu);
                        else this.createButton(allKeys);
                        Array.from(document.querySelectorAll('.char'))
                            .map(char => char.textContent = char.textContent.toUpperCase());
                    }
                }
                else {
                    if (event.target.classList.contains('active')) {
                        if (language === 'ru') this.createButton(allKeysRuAltContent);
                        else this.createButton(allKeysAltContent);
                        let rShift = document.getElementById('r-shift');
                        rShift.classList.add('active');
                        Array.from(document.querySelectorAll('.char'))
                            .map(char => char.textContent = char.textContent.toUpperCase());
                    } else {
                        if (language === 'ru') this.createButton(allKeysRu);
                        else this.createButton(allKeys);
                        Array.from(document.querySelectorAll('.char'))
                            .map(char => char.textContent = char.textContent.toLowerCase());
                    }
                }
            }
            if (isActiveCaps) document.getElementById('caps-lock').classList.add('active');

            if (isActiveRAlt) document.getElementById('r-alt').classList.add('active');
            if (isActiveLAlt) document.getElementById('l-alt').classList.add('active');
            if (isActiveRCtrl) document.getElementById('r-ctrl').classList.add('active');
            if (isActiveLCtrl) document.getElementById('l-ctrl').classList.add('active');
            if (isActiveWin) document.getElementById('win').classList.add('active');
        }
        keys[53].id = 'l-ctrl';
        keys[53].onclick = (event) => {
            event.target.classList.toggle('active');
            const isActiveLAlt = document.getElementById('l-alt').classList.contains('active');
            if (isActiveLAlt && event.target.classList.contains('active')) {
                if (language === 'en') {
                    localStorage.setItem('language', 'ru');
                    language = 'ru';
                    this.createButton(allKeysRu);
                }
                else {
                    localStorage.setItem('language', 'en');
                    language = 'en';
                    this.createButton(allKeys);
                }
            }
        }
        keys[54].id = 'win';
        keys[54].onclick = (event) => {
            event.target.classList.toggle('active');
        }
        keys[55].id = 'l-alt';
        keys[55].onclick = (event) => {
            event.target.classList.toggle('active');
            const isActiveLCtrl = document.getElementById('l-ctrl').classList.contains('active');
            if (isActiveLCtrl && event.target.classList.contains('active')) {
                if (language === 'en') {
                    localStorage.setItem('language', 'ru');
                    language = 'ru';
                    this.createButton(allKeysRu);
                }
                else {
                    localStorage.setItem('language', 'en');
                    language = 'en';
                    this.createButton(allKeys);
                }
            }
        }
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
        keys[57].onclick = (event) => {
            event.target.classList.toggle('active');
        }
        keys[58].id = 'int-backslash';

        keys[59].id = 'r-ctrl';
        keys[59].onclick = (event) => {
            event.target.classList.toggle('active');
        }
    }
}

window.addEventListener('load', () => {
    language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
    let keyboard = new Keyboard();
    if (language === 'en') keyboard.createButton(allKeys);
    else keyboard.createButton(allKeysRu);
})

//Events on press on physic keyboard
window.addEventListener('keydown', (event) => {
    document.querySelector(".text-area").focus();
    keys = document.querySelectorAll(".keys");
    let key = Array.from(keys).filter(key => key.textContent.replaceAll(' ', '').toUpperCase() === event.key.replaceAll(' ', '').toUpperCase())[0];
    console.log(event.key);
    console.log(event.code);
    switch (event.key) {
        case "Shift":
            if (event.code === 'ShiftLeft') {
                const leftShift = document.getElementById('l-shift');
                leftShift.click();
            }
            else {
                const rightShift = document.getElementById('r-shift');
                rightShift.click();
            }
            break;
        case "Control":
            if (event.code === 'ControlLeft') {
                const leftControl = document.getElementById('l-ctrl');
                leftControl.click();
            }
            else {
                const rightControl = document.getElementById('r-ctrl');
                rightControl.click();
            }
            break;
        case "Meta":
            const meta = document.getElementById('win');
            meta.click();
            break;
        case "Alt":
            if (event.code === "AltLeft") {
                const leftAlt = document.getElementById('l-alt');
                leftAlt.click();
            }
            else {
                const rightAlt = document.getElementById('r-alt');
                rightAlt.click();
            }
            break;
        case " ":
            const space = document.getElementById('space');
            space.classList.add('active');
            space.click();
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
        case 'CapsLock':
            const caps = document.getElementById('caps-lock');
            caps.click();
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
                leftShift.click();
            }
            else {
                const rightShift = document.getElementById('r-shift');
                rightShift.click();
            }
            break;
        case "Control":
            if (event.code === 'ControlLeft') {
                const leftControl = document.getElementById('l-ctrl');
                leftControl.click();
            }
            else {
                const rightControl = document.getElementById('r-ctrl');
                rightControl.click();
            }
            break;
        case "Meta":
            const meta = document.getElementById('win');
            meta.classList.click();
            break;
        case "Alt":
            if (event.code === "AltLeft") {
                const leftAlt = document.getElementById('l-alt');
                leftAlt.click();
            }
            else {
                const rightAlt = document.getElementById('r-alt');
                rightAlt.click();
            }
            break;
        case " ":
            const space = document.getElementById('space');
            space.classList.remove('active');
            space.click();
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
        case 'CapsLock':
            break;
        default:
            key.classList.remove('active');
            break;
    }
})