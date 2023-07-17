import { func } from 'prop-types';
import Button from '../../shared/button/Button';

import './actions.css';

function Actions({ removeAllEntrie, removeCheckEntrie }) {
  return (
    <div className='actions-container'>
      <Button text='Eliminar todos' onClick={removeAllEntrie} error />
      <Button
        text='Eliminar tareas terminadas'
        onClick={removeCheckEntrie}
        error
      />
    </div>
  );
}

Actions.propTypes = {
  removeAllEntrie: func,
  removeCheckEntrie: func,
};

export default Actions;
