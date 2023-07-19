import './employees-list-item.css';

const EmployeesListItem = ({name, salary, star, increase, onToggleIncrease,onToggleStar, onDelete}) => {
    let clazz = "list-group-item d-flex justify-content-between";
    if(increase) {
        clazz += ' increase'
    }
    if(star) {
        clazz += ' like'
    }



    return (
        <li className= {clazz}>
            <span className="list-group-item-label" onClick={onToggleIncrease}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                onClick={onToggleStar}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;