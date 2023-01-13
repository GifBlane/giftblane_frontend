import React, { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export interface ICountry {
  country_name: string;
  country_short_name: string;
  country_phone_code: number;
}

export interface IState {
  state_name: string;
}

export const TradeData = () => {
  const [page, setPage] = useState(1);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);

  const apiCountries = "https://www.universal-tutorial.com/api/countries";
  const apiStates = "https://www.universal-tutorial.com/api/states";

  useEffect(() => {
    axios
      .get<ICountry[]>(apiCountries, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJqb2FxdWluLmJ1dGVyYUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ1dkw1RXRLWHQyaU1MUXVnODRlZ1hVQ0l1cWRRbU9Wb1VNX3h5cHJRSnhVMk13eWFlamQ3dlJUcFBxVXBJZzZWUDFnIn0sImV4cCI6MTY3MzY1MTY5Nn0.7yamE6BosQ43itV2bqmZTMKWFg0_elXG3S-ypxAbT6I",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setCountries(res.data);
      });
  }, []);

  const getStates = (country: string) => {
    if (country.length === 0 || country === "") return;
    axios
      .get<IState[]>(`${apiStates}/${country}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJqb2FxdWluLmJ1dGVyYUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJ1dkw1RXRLWHQyaU1MUXVnODRlZ1hVQ0l1cWRRbU9Wb1VNX3h5cHJRSnhVMk13eWFlamQ3dlJUcFBxVXBJZzZWUDFnIn0sImV4cCI6MTY3MzY1MTY5Nn0.7yamE6BosQ43itV2bqmZTMKWFg0_elXG3S-ypxAbT6I",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setStates(res.data);
      });
  };

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("El nombre de la Empresa es obligatorio").min(1),
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
            {page === 1 ? "Datos Empresa" : "Datos de Ubicación y Contacto"}
          </h1>
          <p className="mb-7 font-mulish text-lg">
            Crea tu usuario Nemo para disfrutar los beneficios de una Gift Card.
          </p>
        </div>
        <Formik
          initialValues={{
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
                className={page === 2 ? "flex flex-col items-center" : "hidden"}
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
                  onChange={(e) => {
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
              </div>
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
                onClick={() => setPage((oldPage) => oldPage + 1)}
                disabled={
                  !dirty ||
                  (page === 1
                    ? !!errors.companyName ||
                      !!errors.idCompany ||
                      !!errors.legalRepresentative ||
                      !!errors.idLegalRepresentative ||
                      !!errors.numberIdentification ||
                      !!errors.percentajeCommission
                    : false) ||
                  (page === 2
                    ? !!errors.companyAdress ||
                      !!errors.postalCode ||
                      !!errors.country ||
                      !!errors.state ||
                      !!errors.companyPhone ||
                      !!errors.companyEmail
                    : false)
                }
                type="button"
                className={
                  "font-mulish mt-5 px-16 py-2 rounded-[7px] m-0 w-[200px] cursor-pointer bg-[#91BA4D] text-[#FFFFFF] disabled:bg-[#D9D9D9] disabled:cursor-not-allowed"
                }
              >
                {page === 1 ? "Siguiente" : "Crear"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
