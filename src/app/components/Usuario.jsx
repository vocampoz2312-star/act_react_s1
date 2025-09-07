'use client';

import React from 'react';

function Usuario({ usuario, saludar }) {
  return (
    <div className="bg-gray-100 p-4 m-2 rounded-lg">
      <h2 className="text-xl font-bold">Nombre: {usuario.nombre}</h2>
      <p>Edad: {usuario.edad} años</p>
      <p>Ciudad: {usuario.ciudad}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
        onClick={() => saludar(usuario.nombre)}
      >
        Saludar
      </button>
    </div>
  );
}

export default Usuario;