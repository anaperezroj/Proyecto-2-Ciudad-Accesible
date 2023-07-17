import { func, string } from 'prop-types';
import Button from '../../shared/button/Button';

import './filters.css';

function Filters({ filterEntrie, filter }) {
  return (
    <div className='filters-container'>
      <Button
        text='Entrada'
        onClick={() => filterEntrie('all')}
        isSelected={filter === 'all'}
      />
      <Button
        text='Terminados'
        onClick={() => filterEntrie('done')}
        isSelected={filter === 'done'}
      />
    </div>
  );
}

Filters.propTypes = {
  filterEntrie: func,
  filter: string,
};

export default Filters;
