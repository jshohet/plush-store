import React from "react";
import Header from "../components/Header";
import ItemForm from "./components/ItemForm";
import { Plushies } from "../assets/store/plush";

const page = () => {
  return (
    <div>
      <Header />
      <ItemForm />
    </div>
  );
};

export default page;
