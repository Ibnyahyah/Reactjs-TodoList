import { useState, useEffect } from 'react';
import TodoList from './TodoList';


function Todo(){
        const [isLoading, setIsLoading] = useState(true);
        const [loadedTodo, setLoadedTodo] = useState([]);
    
        useEffect(()=>{
            setIsLoading(true);
            fetch('https://wedo-diary-default-rtdb.firebaseio.com/docs.json')
        
                .then((response)=>{
                    return response.json();
                })
                .then((data) => {
                    const docs = [];
    
                    for(const key in data){
                        const doc = {
                            id : key,
                            ...data[key]
                        };
    
                        docs.push(doc);
                    }
    
                    setIsLoading(false);
                    setLoadedTodo(docs);
                })
        },[]);
    
        if (isLoading) {
            return (
                <section className="loading">
                    <p>Loading...</p>
                </section>
            )
        }
    return (
            <div>
                <TodoList todos={loadedTodo}/>
        </div>
  )
}

export default Todo;