import { useCallback } from 'react';
import { useState } from 'react';
import { useId } from 'react';

const SearchBar = ({label, onSearch}) => {

  const [query, setQuery] = useState('');
  const id = useId();

  const handleSearchSubmit = useCallback((e) => {
    e.preventDefault();
    
    onSearch(query);
    setQuery('');
  }, []);

  return (
    <form onSubmit={handleSearchSubmit}>
      {label && (
        <label htmlFor={id+'search'}>{label}</label>
      )}
      <input type="text" id={id+'search'}
        value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Rechercher</button>
    </form>
  )
}

SearchBar.defaultProps = {
  onSearch: () => {}
};

export default SearchBar;