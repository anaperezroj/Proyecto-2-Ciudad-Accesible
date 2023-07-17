import { array, func } from 'prop-types';
import classnames from 'classnames';
import './entrada.css';
function Entradas({ entradas, removeEntrada, changeStateEntrada }) {
  return (
    <div className='entrada-container'>
      {entradas.map((item) => {
        return (
          <button
            key={item.id}
            className='entrada-item'
            onClick={() => (window.location.href = `/entrie/${item.id}`)}
          >
            <p
              className={classnames('entrada-text', {
                'todo-text-done': item.state === 'done',
              })}
            >
              {item.content}
            </p>
            <div className='entrada-actions'>
              <input
                type='checkbox'
                onChange={(e) => changeStateEntrada(e.target.checked, item.id)}
                checked={item.state === 'done'}
              />
              <button onClick={() => removeEntrada(item.id)}>
                <img src='src/assets/basura.png' />
              </button>
            </div>
          </button>
        );
      })}
    </div>
  );
}

Entradas.propTypes = {
  entradas: array,
  removeEntrada: func,
  changeStateEntrada: func,
};

export default Entradas;
