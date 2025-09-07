'use client';

import React from 'react';

function Usuario(props) {
  return (
    <div className="bg-gray-100 p-4 m-2 rounded-lg">
      <h2 className="text-xl font-bold">Nombre: {props.nombre}</h2>
    </div>
  );
}

export default Usuario;