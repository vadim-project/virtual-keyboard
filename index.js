//create page elements

const container = document.createElement('div');
container.classList = 'wrapper';
document.body.append(container);

const input = document.createElement('input');
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
const firstRowAltContent = [`~`, '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const secondRow = ['TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
const thirdRow = ['CAPS LOCK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ENTER'];
const fourRow = ['SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'SHIFT'];
const fiftyRow = ['CTRL', 'WIN', 'L ALT', 'SPACE', 'R ALT', '\\', 'CTRL'];
const allKeys = [...firstRow, ...secondRow, ...thirdRow, ...fourRow, ...fiftyRow];

window.addEventListener('load', () => {
    createButton();
})

function createButton() {
    for (let i = 0; i < allKeys.length; i++) {
        const CreateKeys = document.createElement('button');
        CreateKeys.classList = 'keys';
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

    const keys = document.querySelectorAll('.keys');

    for (let j = 0; j < allKeys.length; j++) {
        keys[j].textContent = allKeys[j];
    }

    keys[0].id = 'tilda';
    keys[13].id = 'backspace';
    keys[14].id = 'tab';
    keys[27].id = 'backslash';
    keys[28].id = 'caps-lock';
    keys[40].id = 'enter';
    keys[41].id = 'l-shift';
    keys[52].id = 'r-shift';
    keys[53].id = 'l-ctrl';
    keys[54].id = 'win';
    keys[55].id = 'l-alt';
    keys[56].id = 'space';
    keys[57].id = 'r-alt';
    keys[58].id = 'int-backslash';
    keys[59].id = 'r-ctrl';
}

//Events on press on physic keyboard

window.addEventListener('keydown', (event) => {
    let keys = document.querySelectorAll(".keys");
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
    let keys = document.querySelectorAll(".keys");
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




