import { NextPage } from "next";
import React, { useState } from "react";
import { CreateUser } from "../components/CreateUser";

const CreateUserNemo: NextPage = () => {
  const [formPage, setFormPage] = useState(1);

  return (
    <CreateUser />
  );
};

export default CreateUserNemo;
