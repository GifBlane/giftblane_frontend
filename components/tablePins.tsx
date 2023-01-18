import axios from "axios";
import React, { useEffect, useState } from "react";

interface Pins {
  id: number;
  swap: string;
  typeCode: string;
  status: string;
  code: string;
  typeCard: string;
}

export const TablePins = () => {
  const [pins, setPins] = useState<Pins[]>([]);

  const url = "http://34.162.161.160:3002/pins";

  useEffect(() => {
    axios.get(url).then((res) => {
      setPins(res.data.body);
    });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-mulish text-center mt-[2rem] ">
        Listado de Pines
      </h1>
      <table className="table-fixed font-mulish w-full mt-[4rem] text-center">
        <thead className="bg-[#d4d4d4] border-b-2 border-[#000]">
          <tr>
            <th className="p-4">Id</th>
            <th className="p-4">Código</th>
            <th className="p-4">PIN</th>
            <th className="p-4">Tipo</th>
            <th className="p-4">Código QR</th>
            <th className="p-4">Forma</th>
            <th className="p-4">Estado</th>
            <th className="p-4">Canje</th>
          </tr>
        </thead>
        <tbody>
          {pins &&
            pins.map((p, i) => (
              <>
                <tr key={i} className={i % 2 !== 0 && "bg-[#e4e4e4]"}>
                  <td className="px-3 py-10">{p.id}</td>
                  <td className="px-3 py-10">{p.code}</td>
                  <td className="px-3 py-10">{}</td>
                  <td className="px-3 py-10">{}</td>
                  <td className="px-3 py-10">{}</td>
                  <td className="px-3 py-10">{}</td>
                  <td className="px-3 py-10">{p.status}</td>
                  <td className="px-3 py-10">{p.swap}</td>
                </tr>
              </>
            ))}
          {/* <tr>
              <td className="px-3 py-10">
                <input type="checkbox" />
              </td>
              <td className="px-3 py-10">SFSFR3998SB</td>
              <td className="px-3 py-10">NEMO</td>
              <td className="px-3 py-10">QR</td>
              <td className="px-3 py-10">Disponible</td>
              <td className="px-3 py-10">N/A</td>
            </tr>
            <tr className="bg-[#e4e4e4]">
              <td className="px-3 py-10">
                <input type="checkbox" />
              </td>
              <td className="px-3 py-10">SFSFR3998SB</td>
              <td className="px-3 py-10">NEMO</td>
              <td className="px-3 py-10">QR</td>
              <td className="px-3 py-10">Disponible</td>
              <td className="px-3 py-10">N/A</td>
            </tr>
            <tr>
              <td className="px-3 py-10">
                <input type="checkbox" />
              </td>
              <td className="px-3 py-10">SFSFR3998SB</td>
              <td className="px-3 py-10">NEMO</td>
              <td className="px-3 py-10">QR</td>
              <td className="px-3 py-10">Disponible</td>
              <td className="px-3 py-10">N/A</td>
            </tr> */}
        </tbody>
      </table>
    </>
  );
};
