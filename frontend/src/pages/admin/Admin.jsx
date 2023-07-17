import React from 'react';

const Admin = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <div>
      <div>
        <img src='/path/to/image' alt='Imagen' />
      </div>
      <div>
        <div>
          <img src='/path/to/profile-image' alt='Imagen de perfil' />
          <p>Nombre de usuario</p>
          <p>Ciudad: Ciudad a la que pertenece</p>
        </div>
        <div>
          <p>Haz tu ciudad más accesible</p>
          <div>
            <div>
              <img src='/path/to/profile-image' alt='Imagen de perfil' />
              <input type='text' placeholder='Título de la entrada' />
              <p>
                Fecha de creación: {formattedDate} - {formattedTime}
              </p>
              <textarea placeholder='Texto de la entrada'></textarea>
            </div>
            <div>
              <input type='file' accept='image/*' />
              <button>Publicar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
