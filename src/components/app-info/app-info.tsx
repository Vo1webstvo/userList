import { IDataUsers } from '../../type/dataInterface';
import './app-info.css';

interface IAppProps {
  users: IDataUsers[];
}

const AppInfo: React.FC<IAppProps> = ({ users }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {users.length} </h2>
      <h2>Премию получат: {users.filter((item) => item.increase).length} </h2>
    </div>
  );
};

export default AppInfo;
