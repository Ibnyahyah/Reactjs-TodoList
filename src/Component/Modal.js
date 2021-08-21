function Modal(props){

    function onCancel(){
        props.onCancel();
    }
    function onComfirm(){
        props.onComfirm();
    }


    return(
        <section className="modal-container">
            <div className='modal'>
                <p>Are you sure?</p>
                <button className='btn btn--no' onClick={onCancel}>No</button>
                <button className="btn"  onClick={onComfirm}>yes</button>
            </div>
        </section>
    )
}
export default Modal;