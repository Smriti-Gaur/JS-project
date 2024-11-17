const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            result.value = '';
        } else if (button.id === 'delete') {
            result.value = result.value.slice(0, -1);
        } else if (button.id === 'equal') {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = 'Error';
            }
        } else {
            result.value += button.innerText;
        }
    });
});