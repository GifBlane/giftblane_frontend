import React from "react";

export const TablePins = () => {
  return (
    <>
      <h1 className="text-3xl font-mulish text-center mt-[2rem]">Listado de Pines</h1>
        <table className="table-fixed bg-red font-mulish w-[80%] mt-[4rem] text-center bg-[red]">
          <thead>
            <tr>
              <th></th>
              <th>PIN</th>
              <th>Tipo</th>
              <th>Forma</th>
              <th>Estado</th>
              <th>Vigencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>SFSFR3998SB</td>
              <td>NEMO</td>
              <td>QR</td>
              <td>Disponible</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
    </>
  );
};
