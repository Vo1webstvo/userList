import './app-info.css';

const AppInfo = ({ arr }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании</h1>
      <h2>Общее число сотрудников {arr.length}:</h2>
      <h2>Премию получат {arr.filter((item) => item.increase).length}:</h2>
    </div>
  );
};

export default AppInfo;
