let display = document.getElementById('display');
        let currentInput = '';

        function appendChar(char) {
            currentInput += char;
            display.value = currentInput;
        }

        function clearEntry() {
            currentInput = '';
            display.value = '';
            
        }

        function clearAll() {
            currentInput = '';
            display.value = '0';
        }

        function toggleSign() {
            if (currentInput !== '' && currentInput[0] !== '-') {
                currentInput = '-' + currentInput;
            } else if (currentInput !== '' && currentInput[0] === '-') {
                currentInput = currentInput.slice(1);
            }
            display.value = currentInput;
        }

        function calculate() {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = 'Error';
            }
        }