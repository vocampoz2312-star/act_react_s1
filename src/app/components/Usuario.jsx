'use client';

import React from 'react';

function Usuario({ usuario }) {
  return (
    <div className="bg-gray-100 p-4 m-2 rounded-lg">
      <h2 className="text-xl font-bold">Nombre: {usuario.nombre}</h2>
      <p>Edad: {usuario.edad} años</p>
      <p>Ciudad: {usuario.ciudad}</p>
    </div>
  );
}

export default Usuario;