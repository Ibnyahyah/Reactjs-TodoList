import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){

    const [ modalIsOpen, setModalIsOpen ] = useState();

    function deleteHandler(){
        setModalIsOpen(true);
    }
    function closeModalHandler(){
        setModalIsOpen(false)
    }

    return (
            <div>
            <div className='todo-card'>
                <div className="todos-check" >
                <input type="checkbox" />{' '}
                <p>{props.text}</p>
                </div>
                <button className="btn" onClick={deleteHandler}>Delete</button>
               
            </div>
            { modalIsOpen ? <Modal onCancel={closeModalHandler} onComfirm={closeModalHandler}/> : null}
            { modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null }
            
        </div>
  )
}

export default Todo;