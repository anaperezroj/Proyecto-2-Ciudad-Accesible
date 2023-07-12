import { useState } from 'react';
import './homeSearch.css';

function homeSearch({ children }) {
  //Estado buscador
  const [search, setSearch] = useState('');
  /* const [entries,setEntries]

  const loadEntries = async (search) => {
    try {
      const response = await searchTodos(search);
      setTodos(response.data.todos);
      setTotal(response.data.total);
    } catch (error) {
      // Mostraríamos el pop up de error como en el dashboard normal
    }
  };*/

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchButton = () => {
    console.log(search);
  };
  return (
    <>
      <input
        type='text'
        value={search}
        onChange={handleSearch}
        placeholder='Inicia tu búsqueda'
      ></input>
      <button onClick={searchButton}>buscar</button>
    </>
  );
}

export default homeSearch;
