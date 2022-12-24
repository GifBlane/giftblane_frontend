import React from "react";
import { Waves } from "./svg/Waves";

export const CreateUser = () => {
  return (
    <>
      <Waves className="w-full h-full z-[0] absolute" />
      <div className="z-[1] relative">
        <div className="text-center">
          <h1 className="font-bold font-mulish text-xl mt-8 mb-5 ">
            Nombre Pagina - Datos Personales
          </h1>
          <p className="mb-7 font-mulish">
            Crea tu usuario Nemo para disfrutar los beneficios de una Gift Card.
          </p>
        </div>
        <form
          action=""
          className="bg-[#FFFFFF]/90 flex flex-col items-center mx-[37%] rounded-[20px] pt-12 pb-7 mb-10"
        >
          <input
            type="text"
            name=""
            placeholder="Nombre Completo"
            className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
          />
          <input
            type="password"
            name=""
            placeholder="Contraseña"
            className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
          />
          <input
            type="password"
            name=""
            placeholder="Confirmar Contraseña"
            className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
          />
          {/* <p className="text-[#DF5478] mb-5 font-mulish text-sm mx-[10%] text-center">
          Los datos que has introducido no son correctos.
        </p> */}
          <span className="mb-6 h-[2px] w-full bg-[#0000004D] lg:w-[75%]"></span>
          <div className="px-12 text-center font-mulish text-sm">
            <p className="mb-4 text-[#0000008D]">
              Es posible que los usuarios de nuestro servicio hayan subido tu
              información de contacto en Instagram.{" "}
              <a href="#" className="text-[#2987f2]">
                Mas Información
              </a>
            </p>
            <p className="text-[#0000008D]">
              Al registrarte, aceptas nuestras Condiciones, nuestra
              <a href="#" className="text-[#2987f2]">
                {" "}
                Política de Privacidad
              </a>{" "}
              y nuestra{" "}
              <a href="#" className="text-[#2987f2]">
                {" "}
                Política de Cookies.
              </a>
            </p>
          </div>
          <input
            type="submit"
            value="Siguiente"
            className="font-mulish mt-5 cursor-pointer bg-[#91BA4D] px-16 py-2 text-[#FFFFFF] rounded-[7px] m-0"
          />
        </form>
      </div>
    </>
  );
};

/* bg-gradient-to-r from-[#DD527C] to-[#EE634C] */
