import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({arr, onToggleIncrease,onToggleStar, onDelete}) => {
    const elem = arr.map(item => {
        const {id, ...items} = item;
        return (
            <EmployeesListItem
            key = {id}
            {...items}
            onToggleIncrease={() =>onToggleIncrease(id)}
            onToggleStar={() => onToggleStar(id)}
            onDelete={() => onDelete(id)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elem}
        </ul>
    )
}

export default EmployeesList;