import { useState } from 'react';

import './app-filter.css';

interface IAppFilterProps {
    updateBtnsName: (name:string) => void;
}

interface IBtns {
  name: string;
  label: string;
}

const AppFilter = ({updateBtnsName}:IAppFilterProps) => {
  const [active, setActive] = useState<string>('all');

  const btns: IBtns[] = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'increase', label: 'На повышение' },
    { name: 'more1000', label: 'З/П больше 1000$' },
  ];


  const updateClassActive = (name:string) => {
    setActive(name)
    updateBtnsName(name)
  }

  return (
    <div className="btn-group">
      {btns.map((item) => {
        return (
          <button
            type="button"
            key={item.name}
            className={item.name === active ? 'btn btn-light' : 'btn btn-outline-light'}
            onClick={() => updateClassActive(item.name)}>
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default AppFilter;
