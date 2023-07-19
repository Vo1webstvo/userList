import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';

import './app.css';

function App() {
  const data = [
    { name: 'Ivan', salary: 1000, id: 1, star: false, increase: false },
    { name: 'Evgen', salary: 2000, id: 2, star: false, increase: false },
    { name: 'Sergei', salary: 3000, id: 3, star: true, increase: false },
    { name: 'Alex', salary: 4000, id: 4, star: false, increase: true },
    { name: 'Anton', salary: 5000, id: 5, star: false, increase: false },
  ];

  const [state, setState] = useState(data);
  const [str, setStr] = useState('');
  const [nameBtns, setnameBtns] = useState('All');

  const onToggleIncrease = (id) => {
    setState(
      state.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    );
  };

  const onToggleStar = (id) => {
    setState(
      state.map((item) => {
        if (item.id === id) {
          return { ...item, star: !item.star };
        }
        return item;
      }),
    );
  };

  const onDelete = (id) => {
    setState(
      state.filter((item) => {
        return item.id !== id;
      }),
    );
  };

  const addToBase = (name, salary) => {
    const newUser = {
      id: uuidv4(),
      name: name,
      salary: salary,
      increase: false,
      star: false,
    };
    setState([...state, newUser]);
  };

  const updateStr = (term) => {
    setStr(term);
  };

  const searhForTerm = (data, term) => {
    if (term.length === '') {
      return data;
    }
    return data.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  const updateNameBtns = (namebtns) => {
    setnameBtns(namebtns);
  };

  const filterBtns = (items, filter) => {
    switch (filter) {
      case 'increase':
        return items.filter((item) => item.increase);
      case 'more1000':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  const visibleData = filterBtns(searhForTerm(state, str), nameBtns);

  return (
    <div className="app">
      <AppInfo arr={state} />

      <div className="search-panel">
        <SearchPanel updateStr={updateStr} />
        <AppFilter updateNameBtns={updateNameBtns} nameBtns={nameBtns} />
      </div>

      <EmployeesList
        arr={visibleData}
        onToggleIncrease={onToggleIncrease}
        onToggleStar={onToggleStar}
        onDelete={onDelete}
      />
      <EmployeesAddForm addToBase={addToBase} />
    </div>
  );
}

export default App;
