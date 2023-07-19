import './search-panel.css';
import {useState} from "react";

const SearchPanel = ({updateStr}) => {
    const [term, setTerm] = useState('');

    const onValueInput = (e) => {
       setTerm(e.target.value);
       updateStr(e.target.value);
    }

    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
        value={term}
        onChange={onValueInput}
        />
    )
}

export default SearchPanel;