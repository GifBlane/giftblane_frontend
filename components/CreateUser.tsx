import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const CreateUser = () => {
  const [page, setPage] = useState(1);

  // let regex = new RegExp("^[A-Z][0-9]{8}$");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio").min(1),
    lastName: Yup.string().required("El apellido es obligatorio"),
    idType: Yup.string()
      .required("Debes elegir un tipo de identificación")
      .oneOf(
        ["DNI", "cédula", "pasaporte"],
        "Debes elegir un tipo de identificació"
      )
      .label("Tipo de identificación"),
    idNumber: Yup.string().required(
      "El número de identificación es obligatorio"
    ),
    email: Yup.string()
      .email("No es un email válido")
      .required("El email es obligatorio"),
    phone: Yup.string().required("El teléfono es obligatorio"),
    typeUser: Yup.string()
      .required("Debes elegir un tipo de usuario")
      .oneOf(["nemoBlackCard"], "Debes elegir un tipo de usuario")
      .label("Tipo de usuario"),
    role: Yup.string()
      .required("Elije un rol para el usuario")
      .oneOf(["adminVendedor"], "Elije un rol para el usuario"),
  });

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="font-bold font-mulish text-2xl mt-8 mb-5">
            Nombre Pagina -{" "}
            {page === 1
              ? "Datos Personales"
              : page === 2
              ? "Tipo trámite"
              : page === 3
              ? "Datos de empresa"
              : "Datos de Ubicación y Contacto"}
          </h1>
          <p className="mb-7 font-mulish text-lg">
            Crea tu usuario Nemo para disfrutar los beneficios de una Gift Card.
          </p>
        </div>
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            idType: "",
            idNumber: "",
            email: "",
            phone: "",
            typeUser: "",
            role: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched, isValid, dirty, values, handleChange }) => (
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
                  as="select"
                  name="idType"
                  className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8"
                  placeholder="Tipo de identificación"
                >
                  <option value="" selected>
                    Tipo de identificación
                  </option>
                  <option value="DNI">DNI</option>
                  <option value="cédula">Cédula</option>
                  <option value="pasaporte">Pasaporte</option>
                </Field>
                <Field
                  type="text"
                  name="idNumber"
                  placeholder="N° de Identificación"
                  disabled={values.idType === "" || values.idType.length < 1}
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish disabled:bg-[#D9D9D9] disabled:border-none"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                {errors.name && touched.name && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[5%] text-center">
                    {errors.name}
                  </p>
                )}
                {errors.lastName && touched.lastName && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[5%] text-center">
                    {errors.lastName}
                  </p>
                )}
                {errors.idType && touched.idType && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m text-center">
                    {errors.idType}
                  </p>
                )}
                {errors.idNumber && touched.idNumber && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-mtext-center">
                    {errors.idNumber}
                  </p>
                )}
                {errors.email && touched.email && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[5%] text-center">
                    {errors.email}
                  </p>
                )}
                {errors.phone && touched.phone && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[5%] text-center">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div
                className={page === 2 ? "flex flex-col items-center" : "hidden"}
              >
                <Field
                  as="select"
                  name="typeUser"
                  className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8 w-[100%]"
                >
                  <option value="" selected>
                    Tipo de usuario
                  </option>
                  <option value="nemoBlackCard">Nemo - BlackCard</option>
                </Field>
                <Field
                  as="select"
                  name="role"
                  className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8 w-[100%]"
                >
                  <option value="" selected>
                    Rol
                  </option>
                  <option value="adminVendedor">Admin - Vendedor</option>
                </Field>
                <div className="w-[210px]">
                  {errors.typeUser && touched.typeUser && (
                    <p className="text-[#DF5478] mb-4 font-mulish text-m text-center">
                      {errors.typeUser}
                    </p>
                  )}
                  {errors.role && touched.role && (
                    <p className="text-[#DF5478] mb-4 font-mulish text-m text-center">
                      {errors.role}
                    </p>
                  )}
                </div>
              </div>

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
                <button
                  onClick={() => setPage((oldPage) => oldPage - 1)}
                  className="font-mulish mt-5 px-16 py-2 rounded-[7px] m-0 w-[200px] cursor-pointer text-[#FFFFFF] bg-gradient-to-r from-[#DD527C] to-[#EE634C]"
                >
                  Anterior
                </button>
              )}
              <button
                type="submit"
                onClick={() => setPage((oldPage) => page < 4 && oldPage + 1)}
                disabled={
                  !dirty ||
                  (page === 1
                    ? !!errors.name ||
                      !!errors.lastName ||
                      !!errors.idType ||
                      !!errors.idNumber ||
                      !!errors.email
                    : false) ||
                  (page === 2 ? !!errors.typeUser || !!errors.role : false)
                }
                className={
                  "font-mulish mt-5 px-16 py-2 rounded-[7px] m-0 w-[200px] cursor-pointer bg-[#91BA4D] text-[#FFFFFF] disabled:bg-[#D9D9D9] disabled:cursor-not-allowed"
                }
              >
                {page < 4 ? "Siguiente" : "Crear"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
