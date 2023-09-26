import { IDataUsers } from '../../type/dataInterface';
import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

interface IEmpProps {
  users: IDataUsers[];
  onToggleIncrease: (id:string) => void;
  onToggleStar: (id:string) => void;
  deleteUser:(id:string) => void;
}

const EmployeesList: React.FC<IEmpProps> = ({ users,onToggleIncrease, onToggleStar, deleteUser }) => {
  const elem = users.map((item) => {
    return <EmployeesListItem 
    key={item.id} 
    data={{...item}} 
    onToggleIncrease={() => onToggleIncrease(item.id)}
    onToggleStar={() => onToggleStar(item.id)}
    deleteUser={() => deleteUser(item.id)}
    />;
  });

  return <ul className="app-list list-group">{elem}</ul>;
};

export default EmployeesList;
