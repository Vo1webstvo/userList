import "./app-filter.css";
import {useState} from "react";
import classNames from "classnames";
const AppFilter = ({updateNameBtns, nameBtns}) => {

    const btns = [
        {name: 'All', label: 'Все сотрудники'},
        {name: 'increase', label: 'На повышение'},
        {name: 'more1000', label: 'З/П больше 1000$'},
    ];

    const elemBtns = btns.map(item => {
        const active = nameBtns == item.name;               //если сойдетьс nameBtns что придет и item.name
        const activeClazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button"
                    className={`btn ${activeClazz}`}
                    key={item.name}
                onClick={() => updateNameBtns(item.name)}>
                {item.label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {elemBtns}
        </div>
    )
}

export default AppFilter;