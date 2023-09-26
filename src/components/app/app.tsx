import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { IDataUsers } from '../../type/dataInterface.ts';
import './app.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const data: IDataUsers[] = [
    { name: 'Ivan', salary: 1000, increase: false, star: true, id: '1' },
    { name: 'Alex', salary: 2000, increase: true, star: true, id: '2' },
    { name: 'Petya', salary: 3000, increase: false, star: true, id: '3' },
    { name: 'Sasha', salary: 4000, increase: false, star: false, id: '4' },
    { name: 'Misha', salary: 5000, increase: false, star: false, id: '5' },
  ];
  const [dataState, dataSetState] = useState<IDataUsers[]>(data);
  const [term, setTerm] = useState<string>('');
  const [btnsName, setBtnsName] = useState<string>('all');

  const onToggleIncrease = (id: string) => {
    dataSetState(
      dataState.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    );
  };

  const onToggleStar = (id: string) => {
    dataSetState(
      dataState.map((item) => {
        if (item.id === id) {
          return { ...item, star: !item.star };
        }
        return item;
      }),
    );
  };

  const deleteUser = (id: string) => {
    dataSetState(dataState.filter((item) => item.id !== id));
  };

  const addUser = (name: string, salary: number) => {
    const newUser: IDataUsers = {
      name: name,
      salary: salary,
      increase: false,
      star: false,
      id: uuidv4(),
    };

    if (newUser) {
      dataSetState([...dataState, newUser]);
    }
  };

  const updateTerm = (search: string) => {
    setTerm(search);
  };

  const updateDatauser = (data: IDataUsers[], term: string) => {
    if (term.length <= 0) {
      return data;
    }
    return data.filter((item) => {
      return item.name.toLocaleLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  const updateBtnsName = (name: string) => {
    setBtnsName(name);
  };

  const switchBtns = (data: IDataUsers[], btnsName: string) => {
    switch (btnsName) {
      case 'increase':
        return data.filter((item) => item.increase);
      case 'more1000':
        return data.filter((item) => item.salary > 3000);
      default:
        return data;
    }
  };

  const visibleData = switchBtns(updateDatauser(dataState, term), btnsName);

  return (
    <div className="app">
      <AppInfo users={visibleData} />

      <div className="search-panel">
        <SearchPanel updateTerm={updateTerm} />
        <AppFilter updateBtnsName={updateBtnsName} />
      </div>

      <EmployeesList
        users={visibleData}
        onToggleIncrease={onToggleIncrease}
        onToggleStar={onToggleStar}
        deleteUser={deleteUser}
      />
      <EmployeesAddForm addUser={addUser} />
    </div>
  );
}

export default App;
