import React, { useState } from "react";
import CardItem from "../components/cardItem";
import CardInput from "../components/cardInput";
import DefaultButton from "../components/Buttons/defaultButton";

function Introduction({ onNext }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center min-h-screen bg-slate-700 text-white">
      <form className="flex flex-col gap-7 w-1/2 mx-auto">
        <CardItem
          title="Survey Form"
          content="Please register your account to get started."
        />
        <CardInput
          question="Email Address"
          description="Your Email"
          type="text"
          name="email"
          value={formData.username}
          changeInput={handleChange}
        />
        <CardInput
          question="Username"
          description="Your Username"
          type="text"
          name="username"
          value={formData.password}
          changeInput={handleChange}
        />

        <DefaultButton onClick={onNext} type="Next" />
      </form>
    </div>
  );
}

export default Introduction;
