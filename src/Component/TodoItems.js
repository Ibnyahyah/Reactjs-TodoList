import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function TodoItem(props){
    const [ modalIsOpen, setModalIsOpen ] = useState();

    function deleteHandler(){
        setModalIsOpen(true);
    }
    function closeModalHandler(){
        setModalIsOpen(false)
    }

    return(
        <section>

            <div className='todo-card'>
                <div className="todos-check" key={props.id}>
                    <input className="check" type="checkbox" />
                    <p>{props.title}</p>
                </div>      
                    <button className="btn del" onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen ? <Modal onCancel={closeModalHandler} onComfirm={closeModalHandler}/> : null}
            { modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null }
        </section>
    )
}
export default TodoItem;