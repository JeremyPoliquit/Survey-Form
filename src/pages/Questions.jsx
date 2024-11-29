import React, { useState } from "react";
import CardInput from "../components/cardInput";
import DefaultButton from "../components/Buttons/defaultButton";

function Questions({ onNext, onBack }) {
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
        <CardInput
          question="1: What is the capital city of France?"
          description="Your Answer"
          type="text"
          name="question1"
          value={formData.username}
          changeInput={handleChange}
        />
        <CardInput
          question="2: Identify the process in plants where sunlight is converted into energy."
          description="Your Answer"
          type="text"
          name="question2"
          value={formData.password}
          changeInput={handleChange}
        />
        <CardInput
          question="3: What is the chemical symbol for water?"
          description="Your Answer"
          type="text"
          name="question3"
          value={formData.password}
          changeInput={handleChange}
        />

        <div className="flex justify-between">
          <DefaultButton type="Back" onClick={onBack} />
          <DefaultButton type="Next" onClick={onNext} />
        </div>
      </form>
    </div>
  );
}

export default Questions;
