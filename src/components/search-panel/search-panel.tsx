import { useState } from 'react';

import './search-panel.css';

interface ISearchPanelProps {
  updateTerm: (str: string) => void;
}

const SearchPanel = ({ updateTerm }: ISearchPanelProps) => {
  const [term, setTerm] = useState<string>('');

  const changeLocaltemr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    updateTerm(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={term}
      onChange={changeLocaltemr}
    />
  );
};

export default SearchPanel;
