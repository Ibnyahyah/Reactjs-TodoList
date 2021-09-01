import { useHistory } from 'react-router-dom';
import React from 'react';
import { useRef } from 'react';
    

function TodoInput(){
    const history = useHistory();

    const TextInputRef = useRef();
    function submitHandler(e){
        e.preventDefault();
        const enterText = TextInputRef.current.value;

        const todoData ={
            title: enterText,
        };
        fetch('https://wedo-diary-default-rtdb.firebaseio.com/docs.json',{
            method: 'POST',
            body: JSON.stringify(todoData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            history.replace('/');
        })
    }
    return( 
        <div>
            <p style={{ textAlign: 'center',color:'rgba(0,0,0,0.75)',fontSize: '20px', marginTop:'100px'}}>keep your document safe with us.</p>
            <form onSubmit={submitHandler}>
                <input 
                type="text"
                name="title"
                placeholder="Enter your Todos"
                ref={TextInputRef}
                /><br/><br/>
                <input type="file"/>
                
                <button>Add</button>
            </form>
        </div>
    ) 
}

export default TodoInput;