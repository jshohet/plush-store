import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
          <h1 className="italic text-2xl">Your order is confirmed!</h1>
      </div>
      <Footer />
    </div>
  );
};

export default page;
