import { IDataUsers } from '../../type/dataInterface';
import './employees-list-item.css';

// interface IEmploProps extends Pick<IDataUsers, 'name' | 'salary'> {}
interface IEmploProps {
  data: IDataUsers;
  onToggleIncrease: React.MouseEventHandler<HTMLLIElement>;
  onToggleStar: React.MouseEventHandler<HTMLButtonElement>;
  deleteUser: React.MouseEventHandler<HTMLButtonElement>;
}

const EmployeesListItem: React.FC<IEmploProps> = ({ data, onToggleIncrease, onToggleStar, deleteUser }) => {
  let clazz: string = 'list-group-item d-flex justify-content-between';
  if (data.increase) {
    clazz += ' increase';
  }
  if (data.star) {
    clazz += ' like';
  }

  return (
    <li className={clazz}>
      <span className="list-group-item-label" onClick={onToggleIncrease}>
        {data.name}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={data.salary} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm " onClick={onToggleStar}>
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={deleteUser}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
