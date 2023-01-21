import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import dayjs from "dayjs";

interface Pins {
  id: number;
  swap: string;
  typeCode: string;
  status: string;
  code: string;
  typeCard: string;
  dateVigencia: string;
}

const ITEMS_PER_PAGE = 20;

export const TablePins = () => {
  const [pins, setPins] = useState<Pins[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const url = "http://34.162.161.160:3002/pins";

  useEffect(() => {
    axios.get(url).then((res) => {
      setIsLoading(false);
      setPins(res.data.body);
      setTotalPages(Math.ceil(res.data.body.length / ITEMS_PER_PAGE));
    });
  }, []);

  const filteredPokemons = (): Pins[] => {
    return pins.slice(currentPage, currentPage + ITEMS_PER_PAGE);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + ITEMS_PER_PAGE);
    setPage(page + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - ITEMS_PER_PAGE);
    setPage(page - 1);
  };

  return (
    <>
      <h1 className="text-3xl font-mulish text-center mt-[2rem] ">
        Listado de Pines
      </h1>
      <table className="table-fixed font-mulish w-full mt-[4rem] text-center">
        <thead className="bg-[#d4d4d4] border-b-2 border-[#000]">
          <tr>
            <th className="p-4">Id</th>
            <th className="p-4">Tipo</th>
            <th className="p-4">PIN</th>
            <th className="p-4">Código QR</th>
            <th className="p-4">Estado</th>
            <th className="p-4">Canje</th>
            <th className="p-4">Vigencia</th>
          </tr>
        </thead>
        <tbody>
          {pins &&
            filteredPokemons().map((p, i) => (
              <tr key={i} className={i % 2 !== 0 && "bg-[#e4e4e4]"}>
                <td className="px-3 py-10">{p.id}</td>
                <td className="px-3 py-10">{p.typeCard}</td>
                <td className="px-3 py-10">{p.code}</td>
                <td className="px-3 py-10">{p.typeCode}</td>
                <td className="px-3 py-10">{p.status}</td>
                <td className="px-3 py-10">{p.swap}</td>
                <td className="px-3 py-10">
                  {p.dateVigencia && dayjs(p.dateVigencia).format("YYYY-MM-DD")}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {pins.length > ITEMS_PER_PAGE && !isLoading && (
        <div className="m-10 flex justify-between w-[500px]">
          {page > 1 && (
            <button
              onClick={prevPage}
              className="font-mulish mt-5 px-16 py-2 rounded-[7px] m-0 w-[200px] cursor-pointer text-[#FFFFFF] bg-gradient-to-r from-[#DD527C] to-[#EE634C]"
            >
              Anterior
            </button>
          )}
          <button
            onClick={nextPage}
            className={
              "font-mulish mt-5 px-16 py-2 rounded-[7px] m-0 w-[200px] cursor-pointer bg-[#91BA4D] text-[#FFFFFF] disabled:bg-[#D9D9D9] disabled:cursor-not-allowed"
            }
            disabled={page === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}

      {isLoading && <Loading />}
    </>
  );
};
