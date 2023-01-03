import React, { useState } from "react";
import { useCustomForm } from "../hooks";

interface FormData {
  name: string,

}

export const CreateUser = () => {
  const [values, handleChange] = useCustomForm<FormData>({
    name: "",
    /* lastName: "",
    email: "",
    idType: "",
    identificationNumber: "",
    type: "",
    role: "", */
  }); 
  const {name} = values
  /* const [name, setName] = useState(""); */
  const [errorName, setErrorName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [erroridType, setErrorIdType] = useState(false);
  const [errorIdNumber, setErrorIdNumber] = useState(false);
  const [errorType, setErrorType] = useState(false);
  const [errorRole, setErrorRole] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [page, setPage] = useState(1);

  const isValidEmail = (email: string) => {
    return /\S+@\S+.\S+/.test(email);
  };

  const validateName = (name: string) => {
    if (!name) {
      setErrorName(true);
      if (errorMessages.indexOf("El nombre no puede estar vacío") === -1) {
        errorMessages.push("El nombre no puede estar vacío");
      }
    }
  };

  const validateLastName = (lastName: string) => {
    if (!lastName) {
      setErrorLastName(true);
      if (errorMessages.indexOf("El apellido no puede estar vacío") === -1) {
        errorMessages.push("El apellido no puede estar vacío");
      }
    }
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setErrorEmail(true);
      if (errorMessages.indexOf("El email no puede estar vacío") === -1) {
        errorMessages.push("El email no puede estar vacío");
      }
    }

    if (!isValidEmail(email)) {
      setErrorEmail(true);
      if (errorMessages.indexOf("El email es inválido") === -1) {
        errorMessages.push("El email es inválido");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  console.log(errorMessages);

  return (
    <>
      {/* <div className="w-full h-full">
        <Waves className="w-full h-full z-[1] absolute" /> */}
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="font-bold font-mulish text-2xl mt-8 mb-5">
            Nombre Pagina - Datos Personales
          </h1>
          <p className="mb-7 font-mulish text-lg">
            Crea tu usuario Nemo para disfrutar los beneficios de una Gift Card.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#FFFFFF]/90 flex flex-col items-center w-[400px] rounded-[20px] pt-12 pb-7"
        >
          <div className={page === 1 ? "flex flex-col items-center" : "hidden"}>
            <input
              type="text"
              name="name"
              value={values.name}
              /* onChange={(e) => handleChange(e)} */
              onBlur={(e) => validateName(e.target.value)}
              placeholder="Nombre"
              className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
            />
            <input
              type="text"
              name="lastName"
              onChange={(e) => e.target.value}
              onBlur={(e) => validateLastName(e.target.value)}
              placeholder="Apellido"
              className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
            />
            <input
              type="email"
              name="email"
              onBlur={(e) => validateEmail(e.target.value)}
              placeholder="Email"
              className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
            />
          </div>
          <div className={page === 2 ? "flex flex-col items-center" : "hidden"}>
            <select
              name=""
              id=""
              className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8"
            >
              <option value="tipoIdentificacion" disabled selected>
                Tipo de identificación
              </option>
              <option value="DNI">DNI</option>
            </select>
            <input
              type="number"
              name="numberIdentification"
              onChange={(e) => e.target.value}
              placeholder="Número de identificación"
              className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
            />
            <select
              name=""
              id=""
              className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8 w-[100%]"
            >
              <option value="" disabled selected>
                Tipo
              </option>
              <option value="">DNI</option>
            </select>
            <input
              type="text"
              name="rol"
              onChange={(e) => e.target.value}
              placeholder="Rol"
              className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
            />
          </div>
          <>
            {errorMessages.map((m, i) => (
              <p key={i} className="text-[#DF5478] mb-4 font-mulish text-sm mx-[10%] text-center">{m}</p>
            ))}
          </>
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
          <button
            disabled={!name || errorName || errorLastName || errorEmail}
            type="submit"
            className={"font-mulish mt-5 px-16 py-2 rounded-[7px] m-0  cursor-pointer bg-[#91BA4D] text-[#FFFFFF] disabled:bg-[#D9D9D9] disabled:cursor-not-allowed"}
            onClick={() => setPage(2)}
          >
            {page === 2 ? "Crear" : "Siguiente"}
          </button>
        </form>
      </div>
      {/* <span className="w-full h-[52%] z-[0] relative bg-gradient-to-r from-[#F5CCB1] to-[#F3B191] block"></span>
      <span className="w-full h-[48%] z-[0] relative bg-[#F5F5F5] block"></span> */}
    </>
  );
};

/* bg-gradient-to-r from-[#DD527C] to-[#EE634C] */
/* !errorName && !errorLastName && !errorEmail
                ? "font-mulish mt-5 px-16 py-2 rounded-[7px] m-0  cursor-pointer bg-[#91BA4D] text-[#FFFFFF]"
                : "font-mulish mt-5 px-16 py-2 rounded-[7px] m-0 bg-[#D9D9D9] text-[#FFFFFF]" */