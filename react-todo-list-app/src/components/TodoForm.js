import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {  //Handle Change
        setInput(e.target.value);
    }

    const handleSubmit = e => { //Handle Submit
        e.preventDefault();

        props.onSubmit({ // Creates a random id and gives text values
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }

    return (
        <form className='todo-form' onSubmit={(handleSubmit)}>
            <input
                type="text" //Gets text
                placeholder='Add a todo' //Before you give any text it gives down a "Add a todo" with low opacity
                value={input}//Value text
                name='text'
                className='todo-input'//ClassName
                onChange={handleChange} //onChange Action then it runs the function handleChange on Line 6
                ref={inputRef}
            />
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default TodoForm