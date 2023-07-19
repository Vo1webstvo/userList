import './employees-add-form.css';
import {useState} from "react";


const EmployeesAddForm = ({addToBase}) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    const submitToForm = (e) => {
        e.preventDefault();
        if(name.length <= 1 || !salary) return;
        addToBase(name, salary);
        setName('');
        setSalary('');
    }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
            onSubmit={submitToForm}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                value={name}
                    onChange={(e) => setName(e.target.value)}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                value={salary}
                       onChange={(e) => setSalary(e.target.value)}/>

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;