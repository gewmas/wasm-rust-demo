import React, {useState, useEffect} from 'react';

import init, {add_numbers, multiply_numbers} from 'wasm_add_number';

function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(null);
    const [multiplyResult, setMultiplyResult] = useState(null);

    useEffect(() => {
        // Initialize the wasm module
        init().then(() => console.log('WASM loaded'));
    }, []);

    const handleAddition = () => {
        const sum = add_numbers(parseInt(num1, 10), parseInt(num2, 10));
        setResult(sum);
    };

    const handleMultiply = () => {
        const result = multiply_numbers(parseInt(num1, 10), parseInt(num2, 10));
        setMultiplyResult(result);
    }

    return (
        <div style={{padding: '2rem'}}>
            <h1>WASM Calculator</h1>
            <div>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                and
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
                <button onClick={handleAddition}>Add</button>
                <button onClick={handleMultiply}>Multiply</button>
            </div>
            {result !== null && <h2>Result (+): {result}</h2>}
            {multiplyResult !== null && <h2>Result (*): {multiplyResult}</h2>}
        </div>
    );
}

export default App;