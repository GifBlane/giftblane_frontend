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
    /* idType: Yup.string().required(
      "El tipo de identificación es obligatorio, no se ha seleccionado ninguna opción"
    ), */
    idNumber: Yup.number()
  });

  return (
    <>
      {/* <div className="w-full h-full">
        <Waves className="w-full h-full z-[1] absolute" /> */}
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="font-bold font-mulish text-2xl mt-8 mb-5">
            Nombre Pagina - Datos Empresa
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
            type: "",
            role: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className="bg-[#FFFFFF]/90 flex flex-col items-center w-[400px] rounded-[20px] pt-12 pb-7">
              <div
                className={page === 1 ? "flex flex-col items-center" : "hidden"}
              >
                <Field
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
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
                  name="typeId"
                  selection
                  className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8"
                >
                  <option selected disabled>
                    Tipo de identificación
                  </option>
                  <option value="DNI">DNI</option>
                  <option value="cédula">Cédula</option>
                  <option value="pasaporte">Pasaporte</option>
                </Field>
                <Field
                  type="number"
                  name="numberIdentification"
                  placeholder="Número de identificación"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  as="select"
                  name="type"
                  className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8 w-[100%]"
                >
                  <option selected disabled>
                    Tipo
                  </option>
                  <option value="blackCard">BlackCard</option>
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
                  <option value="blackCard">Vendedor</option>
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
              {/* {errors.idType && touched.idType && (
                <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                  {errors.idType}
                </p>
              )} */}

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
                onClick={() => setPage((oldPage) => oldPage + 1)}
                disabled={!isValid || !dirty}
                type="submit"
                className={
                  "font-mulish mt-5 px-16 py-2 rounded-[7px] m-0  cursor-pointer bg-[#91BA4D] text-[#FFFFFF] disabled:bg-[#D9D9D9] disabled:cursor-not-allowed"
                }
              >
                {page === 1 ? "Siguiente" : "Crear"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {/* <span className="w-full h-[52%] z-[0] relative bg-gradient-to-r from-[#F5CCB1] to-[#F3B191] block"></span>
      <span className="w-full h-[48%] z-[0] relative bg-[#F5F5F5] block"></span> */}
    </>
  );
};