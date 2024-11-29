import React from "react";
import CardItem from "../../components/cardItem";
import CardTextArea from '../../components/cardEssay'
import SubmitButton from '../../components/Buttons/submitButton'

function creatingForm() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center min-h-screen bg-slate-700 text-white">
      <div className="flex flex-col gap-8 w-1/2 my-4">
        <CardItem title="Creating Form" content="make your own data." />

        <CardTextArea Item="Item 1" description="Type you want" />
        <CardTextArea Item="Item 2" description="Type you want" />

        <SubmitButton label="Submit" />
      </div>
    </div>
  );
}

export default creatingForm;
