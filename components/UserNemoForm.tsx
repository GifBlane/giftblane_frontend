import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useCountriesAndStates } from "../hooks/useCountriesAndStates";

export const UserNemoForm = () => {
  const [page, setPage] = useState(1);
  const { countries, states, getStates } = useCountriesAndStates();

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
    companyName: Yup.string()
      .required("El nombre de la Empresa es obligatorio")
      .min(1),
    idCompany: Yup.string().required("El ID de la Empresa es obligatorio"),
    legalRepresentative: Yup.string().required(
      "El Representante Legal es obligatorio"
    ),
    idLegalRepresentative: Yup.string().required(
      "El ID del Representante es obligatorio"
    ),
    numberIdentification: Yup.number().required(
      "El número de identificación de la empresa es obligatorio"
    ),
    percentajeCommission: Yup.number().required(
      "El Porcentaje de comisión es obligatorio"
    ),
    postalCode: Yup.string().required("El código postal es obligatorio"),
    companyAdress: Yup.string().required("La dirección es obligatoria").min(1),
    country: Yup.string().required("Debes elegir un país"),
    state: Yup.string().required("Debes elegir un estado"),
    companyPhone: Yup.number().required("El número telefónico es obligatorio "),
    companyEmail: Yup.string()
      .email("No es un email válido")
      .required("El email es obligatorio"),
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
            // Datos de empresa
            companyName: "",
            idCompany: "",
            legalRepresentative: "",
            idLegalRepresentative: "",
            numberIdentification: "",
            percentajeCommission: "",
            companyAdress: "",
            postalCode: "",
            country: "",
            state: "",
            companyPhone: "",
            companyEmail: "",
          }}
          onSubmit={(values) => {
            console.log({
              dataUser: {
                name: values.name,
                lastName: values.lastName,
                idType: values.idType,
                idNumber: values.idNumber,
                email: values.email,
                phone: values.phone,
                typeUser: values.typeUser,
                role: values.role,
              },
              dataCompany: {
                companyName: values.companyName,
                idCompany: values.idCompany,
                legalRepresentative: values.legalRepresentative,
                idLegalRepresentative: values.idLegalRepresentative,
                numberIdentification: values.numberIdentification,
                percentajeCommission: values.percentajeCommission,
                companyAdress: values.companyAdress,
                postalCode: values.postalCode,
                country: values.country,
                state: values.state,
                companyPhone: values.companyPhone,
                companyEmail: values.companyEmail,
              },
            });
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
              <div
                className={page === 3 ? "flex flex-col items-center" : "hidden"}
              >
                <Field
                  type="text"
                  name="companyName"
                  placeholder="Nombre de la Empresa"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  type="text"
                  name="idCompany"
                  placeholder="ID de la Empresa"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  type="text"
                  name="legalRepresentative"
                  placeholder="Representante Legal"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  type="text"
                  name="idLegalRepresentative"
                  placeholder="ID Representante Legal"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  type="number"
                  name="numberIdentification"
                  placeholder="N° Identificación Empresa"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  type="number"
                  name="percentajeCommission"
                  placeholder="% de cobro"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                {errors.companyName && touched.companyName && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m text-center">
                    {errors.companyName}
                  </p>
                )}
                {errors.idCompany && touched.idCompany && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m text-center">
                    {errors.idCompany}
                  </p>
                )}
                {errors.legalRepresentative && touched.legalRepresentative && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m  text-center">
                    {errors.legalRepresentative}
                  </p>
                )}
                {errors.idLegalRepresentative &&
                  touched.idLegalRepresentative && (
                    <p className="text-[#DF5478] mb-4 font-mulish text-m  text-center">
                      {errors.idLegalRepresentative}
                    </p>
                  )}
                {errors.numberIdentification &&
                  touched.numberIdentification && (
                    <p className="text-[#DF5478] mb-4 font-mulish text-m  text-center">
                      {errors.numberIdentification}
                    </p>
                  )}
                {errors.percentajeCommission &&
                  touched.percentajeCommission && (
                    <p className="text-[#DF5478] mb-4 font-mulish text-m  text-center">
                      {errors.percentajeCommission}
                    </p>
                  )}
              </div>
              <div
                className={page === 4 ? "flex flex-col items-center" : "hidden"}
              >
                <Field
                  type="text"
                  name="companyAdress"
                  placeholder="Dirección"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  type="text"
                  name="postalCode"
                  placeholder="Código Postal"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  as="select"
                  name="country"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    handleChange(e);
                    getStates(e.target.value);
                  }}
                  className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8 w-[215px]"
                >
                  <option value="" selected>
                    País
                  </option>
                  {countries &&
                    countries.map((c, i) => (
                      <option key={i}>{c.country_name}</option>
                    ))}
                </Field>
                <Field
                  as="select"
                  name="state"
                  className="text-[#515151] py-[0.56rem] px-[1rem] outline-none rounded-[7px] border border-[#BABABA] font-mulish mb-8 w-[215px]"
                >
                  <option value="" selected>
                    Estado / Provincia
                  </option>
                  {states.length > 0 &&
                    states.map((s, i) => (
                      <option key={i}>{s.state_name}</option>
                    ))}
                </Field>
                <Field
                  type="number"
                  name="companyPhone"
                  placeholder="Teléfono Empresa"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                <Field
                  type="email"
                  name="companyEmail"
                  placeholder="Email Empresa"
                  className="placeholder:text-[#515151] p-2 outline-none rounded-[7px] border border-[#BABABA] mb-8 font-mulish"
                />
                {errors.companyAdress && touched.companyAdress && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                    {errors.companyAdress}
                  </p>
                )}
                {errors.postalCode && touched.postalCode && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                    {errors.postalCode}
                  </p>
                )}
                {errors.country && touched.country && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                    {errors.country}
                  </p>
                )}
                {errors.state && touched.state && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                    {errors.state}
                  </p>
                )}
                {errors.companyPhone && touched.companyPhone && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                    {errors.companyPhone}
                  </p>
                )}
                {errors.companyEmail && touched.companyEmail && (
                  <p className="text-[#DF5478] mb-4 font-mulish text-m mx-[10%] text-center">
                    {errors.companyEmail}
                  </p>
                )}
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
                type="button"
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
                  (page === 2 ? !!errors.typeUser || !!errors.role : false) ||
                  (page === 3 ? !!errors.companyName || !!errors.idCompany || !!errors.legalRepresentative || !!errors.idLegalRepresentative || !!errors.numberIdentification || !!errors.percentajeCommission : false)
                }
                className={`font-mulish mt-5 px-16 py-2 rounded-[7px] m-0 w-[200px] cursor-pointer bg-[#91BA4D] text-[#FFFFFF] disabled:bg-[#D9D9D9] disabled:cursor-not-allowed ${
                  page >= 4 && "hidden"
                }`}
              >
                Siguiente
              </button>
              {page === 4 && (
                <button
                  type="submit"
                  disabled={page === 4 && !!errors.companyAdress || !!errors.postalCode || !!errors.country || !!errors.state }
                  className={
                    "font-mulish mt-5 px-16 py-2 rounded-[7px] m-0 w-[200px] cursor-pointer bg-[#91BA4D] text-[#FFFFFF] disabled:bg-[#D9D9D9] disabled:cursor-not-allowed"
                  }
                >
                  Crear
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
