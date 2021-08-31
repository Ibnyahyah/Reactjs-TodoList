import { useState, useEffect } from 'react';
import TodoList from './TodoList';

// const TodoData = [
//     {
//       id: 1,
//       title: 'working on amam application',
//       complete: false
//     },
//     {
//       id: 2,
//       title: 'bring up a new tod app',
//       complete: false
//     },
//     {
//       id: 3,
//       title: 'bring up a new tod app',
//       complete: false
//     }
//   ]
function Todo(){
        const [isLoading, setIsLoading] = useState(true);
        const [loadedTodo, setLoadedTodo] = useState([]);
    
        useEffect(()=>{
            setIsLoading(true);
            fetch('https://my-first-project-a37f4-default-rtdb.firebaseio.com/chat.json')
        
                .then((response)=>{
                    return response.json();
                })
                .then((data) => {
                    const chat = [];
    
                    for(const key in data){
                        const chats = {
                            id : key,
                            ...data[key]
                        };
    
                        chat.push(chats);
                    }
    
                    setIsLoading(false);
                    setLoadedTodo(chat);
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