const TodoListItem = ({ label, onDeleted, onToggleDone, onToggleImportant, done, important }) => {
    let classNames = 'item-list-base';

    if(done) {
        classNames += ' done';
    }

    if(important) {
        classNames += ' important';
    }

    return(
        <div>
            <span onClick={onToggleDone} className={classNames}>
                <span className="label-text">{label}</span>
            </span>
            
            {done ? ( 
                <button type="button" onClick={onToggleDone} className="btn btn-outline-warning my-button mx-1">
                    <i className="fa-solid fa-arrow-left"></i>
                </button> 
            ) : (
                <button type="button" onClick={onToggleDone} className="btn btn-outline-success my-button mx-1">
                    <i className="fa-solid fa-check"></i>
                </button>
            )}
            <button type="button" onClick={onToggleImportant} className="btn btn-outline-primary my-button mx-1">
                <i className="fa-solid fa-exclamation"></i>
            </button> 
            <button type="button" className="btn btn-outline-danger my-button mx-1" onClick={onDeleted}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    )
}

export default TodoListItem;