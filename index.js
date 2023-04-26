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

// create button

const firstRow = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPACE'];
const firstRowAltContent = [`~`, '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];

window.addEventListener('load', () => {
    createButton();
})

function createButton() {
    for (let i = 0; i < firstRow.length; i++) {
        const CreateKeys = document.createElement('button');
        CreateKeys.classList = 'keys';
        keyBoardWrapper.appendChild(CreateKeys);
    }

    const keys = document.querySelectorAll('.keys');

    for (let j = 0; j < firstRow.length; j++) {
        keys[j].textContent = firstRow[j];
    }

    for (let x = 0; x < firstRowAltContent.length; x++) {
        const altKeyContent = document.createElement('span');
        altKeyContent.classList = 'altContent';
        altKeyContent.textContent = firstRowAltContent[x];
        keys[x].appendChild(altKeyContent);
    }

    keys[0].id = 'tilda';
    keys[13].id = 'backspace';
}