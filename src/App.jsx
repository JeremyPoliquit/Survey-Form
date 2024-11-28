import React, { useState } from "react";
import CardInput from "./components/cardInput";
import DefaultButton from './components/Buttons/defaultButton'

function App() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted:`);
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center min-h-screen bg-slate-700 text-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-7 w-1/2 mx-auto">
        <CardInput
          content="Register Username:"
          description="Your Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <CardInput
          content="Register Password:"
          description="Password"
          type="text"
          name="Your password"
          value={formData.password}
          onChange={handleChange}
        />

        <DefaultButton type="Next" />
        <DefaultButton type="Back" />

      </form>
    </div>
  );
}

export default App;
