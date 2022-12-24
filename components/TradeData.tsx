import React from "react";

export const TradeData = () => {
  return (
    <>
      <h1>Datos del comercio</h1>
	  <form action="">
		<label htmlFor="nombre">Nombre</label>
		<input type="text" id="nombre"/>
		<label htmlFor="direccion">Dirección</label>
		<input type="text" id="direccion"/>
		<label htmlFor="imagen">Imagen</label>
		<input type="image" id="imagen"/>
		<label htmlFor="telefono">Teléfono</label>
		<input type="tel" id=""/>
		<label htmlFor="numeroIdentificación">Número de identificación</label>
		<input type="text" id=""/>
		<label htmlFor="porcentajeCobro">Porcentaje de cobro</label>
		<input type="text" id=""/>
	  </form>
    </>
  );
};
