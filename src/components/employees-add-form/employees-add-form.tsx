import './employees-add-form.css';
import { useState } from 'react';

interface IFuncNewUser {
  addUser: (name: string, salary: number) => void;
}

const EmployeesAddForm = ({ addUser }:IFuncNewUser) => {
  const [name, setName] = useState<string>('');
  const [salary, setSalary] = useState<number | string>('');

  const changeSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(+e.target.value); //будет строка из инпута, делаем из нее число!!!
  };

  const addNewuser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length <= 1 || !salary) return;
    if (typeof salary === 'number') {
      addUser(name, salary);
    }
    setName('');
    setSalary('');
  };

  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex" onSubmit={addNewuser}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          value={salary}
          onChange={changeSalary}
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
