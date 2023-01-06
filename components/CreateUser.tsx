import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const CreateUser = () => {
  const [page, setPage] = useState(1);

  let regex = new RegExp("^[A-Z][0-9]{8}$");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio").min(1),
    lastName: Yup.string().required("El apellido es obligatorio"),
    email: Yup.string()
      .email("No es un email válido")
      .required("El email es obligatorio"),
    idType: Yup.string()
      .required("Opción no válida")
      .oneOf(["DNI", "cédula", "pasaporte"], "Opción no válida")
      .label("Tipo de identificación"),
    /* idNumber: Yup.string()
      .min(9, "No puede haber menos de nueve caracteres")
      .max(9, "No puede haber más de 9 caracteres"), */
  });

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
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            email: "",
            idType: "",
            idNumber: "",
            typeUser: "",
            role: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched, isValid, dirty, values }) => (
            <Form className="bg-[#FFFFFF]/90 flex flex-col items-center w-[400px] rounded-[20px] pt-12 pb-7">
              <div
                className={page === 1 ? "flex flex-col items-center" : "hidden"}
              >
                <Field
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish invalid:border-red-800"
                />
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
              </div>
              <div
                className={page === 2 ? "flex flex-col items-center" : "hidden"}
              >
                <Field
                  as="select"
                  name="idType"
                  className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8"
                  placeholder="Tipo de identificación"
                >
                  <option value={null} selected>
                    Tipo de identificación
                  </option>
                  <option value="DNI">DNI</option>
                  <option value="cédula">Cédula</option>
                  <option value="pasaporte">Pasaporte</option>
                </Field>
                <Field
                  type="text"
                  name="idNumber"
                  placeholder="Número de identificación"
                  disabled={values.idType === "" || values.idType.length < 1}
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  as="select"
                  name="typeUser"
                  className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8 w-[100%]"
                >
                  <option selected disabled>
                    Tipo de usuario
                  </option>
                  <option value="nemo - blackCard">Nemo - BlackCard</option>
                </Field>
                <Field
                  as="select"
                  name="rol"
                  selection
                  className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8 w-[100%]"
                >
                  <option selected disabled>
                    Rol
                  </option>
                  <option value="blackCard">Admin - Vendedor</option>
                </Field>
              </div>
              {errors.name && touched.name && (
                <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                  {errors.name}
                </p>
              )}
              {errors.lastName && touched.lastName && (
                <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                  {errors.lastName}
                </p>
              )}
              {errors.email && touched.email && (
                <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                  {errors.email}
                </p>
              )}
              {errors.idType && touched.idType && (
                <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                  {errors.idType}
                </p>
              )}
              {errors.idNumber && touched.idNumber && (
                <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                  {errors.idNumber}
                </p>
              )}

              <span className="mb-6 h-[2px] w-full bg-[#0000004D] lg:w-[75%]"></span>
              <div className="px-12 text-center font-mulish text-sm">
                <p className="mb-4 text-[#0000008D]">
                  Es posible que los usuarios de nuestro servicio hayan subido
                  tu información de contacto en Instagram.{" "}
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
              {page > 1 && (
                <button onClick={() => setPage((oldPage) => oldPage - 1)}>
                  Anterior
                </button>
              )}
              <button
                type="button"
                onClick={() => setPage((oldPage) => page < 2 && oldPage + 1)}
                disabled={
                  !dirty ||
                  (page === 1
                    ? !!errors.name || !!errors.lastName || !!errors.email
                    : false)
                }
                className={
                  "font-mulish mt-5 px-16 py-2 rounded-[7px] m-0  cursor-pointer bg-[#91BA4D] text-[#FFFFFF] disabled:bg-[#D9D9D9] disabled:cursor-not-allowed"
                }
              >
                {page === 1 ? "Siguiente" : "Crear"}
              </button>
              <button type="submit">Hdad</button>
            </Form>
          )}
        </Formik>
      </div>
      {/* <span className="w-full h-[52%] z-[0] relative bg-gradient-to-r from-[#F5CCB1] to-[#F3B191] block"></span>
      <span className="w-full h-[48%] z-[0] relative bg-[#F5F5F5] block"></span> */}
    </>
  );
};

{
  /* <form
          onSubmit={handleSubmit}
          className="bg-[#FFFFFF]/90 flex flex-col items-center w-[400px] rounded-[20px] pt-12 pb-7"
        >
          <div className={page === 1 ? "flex flex-col items-center" : "hidden"}>
            <input
              type="text"
              name="name"
              value={values.name}
              /* onChange={(e) => handleChange(e)} */
  /* onBlur={(e) => validateName(e.target.value)}
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
              <p
                key={i}
                className="text-[#DF5478] mb-4 font-mulish text-sm mx-[10%] text-center"
              >
                {m}
              </p>
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
            className={
              "font-mulish mt-5 px-16 py-2 rounded-[7px] m-0  cursor-pointer bg-[#91BA4D] text-[#FFFFFF] disabled:bg-[#D9D9D9] disabled:cursor-not-allowed"
            }
            onClick={() => setPage(2)}
          >
            {page === 2 ? "Crear" : "Siguiente"}
          </button>
        </form> */
}
