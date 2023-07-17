import { array, func, string } from 'prop-types';
import Filters from './filters/Filters';
import Todos from './todos/Todos';
import Actions from './actions/Actions';
import Block from '../shared/block/Block';

import './list.css';

function List({
  entradas,
  filter,
  filterEntrie,
  removeEntrada,
  removeAllEntradas,
  removeDoneEntradas,
  changeStateEntrada,
}) {
  // if (todos.length === 0) {
  //   return (
  //     <Block text="Mis tareas">
  //       <p className="empty-state">Aún no tienes ninguna tarea creada.</p>
  //     </Block>
  //   );
  // }

  return (
    <Block text='Mis tareas'>
      {entradas.length > 0 ? (
        <>
          <Filters filterEntrie={filterEntrie} filter={filter} />
          <Todos
            entrada={entradas}
            removeEntrada={removeEntrada}
            changeStateEntrada={changeStateEntrada}
          />
          <Actions
            removeAllEntradas={removeAllEntradas}
            removeDoneEntradas={removeDoneEntradas}
          />{' '}
        </>
      ) : (
        <p className='empty-state'>Aún no tienes ninguna entrada creada.</p>
      )}
    </Block>
  );
}

List.propTypes = {
  entradas: array,
  filter: string,
  filterEntrie: func,
  removeEntrada: func,
  removeAllEntradas: func,
  removeDoneEntradas: func,
  changeStateEntrada: func,
};

export default List;
