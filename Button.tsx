import React, { useState } from "react";

function Button() {
    const [count, setCount] = useState(0);

    if (count > 5) {
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <p>Count is less than or equal to 5.</p>
            </div>
        );
    }
}

export default Button;
