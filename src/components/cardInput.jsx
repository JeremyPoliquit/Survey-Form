import React from "react";

export default function cardInput({
  content,
  type,
  name,
  value,
  changeInput,
  description,
}) {
  return (
    <div className="flex flex-col gap-4 shadow-xl px-7 py-7 rounded-xl bg-slate-800 text-white">
      <div className="text-lg">{content}</div>

      <input
        placeholder={description}
        type={type}
        name={name}
        value={value}
        onChange={changeInput}
        className="focus:outline-none w-full border-gray-400 bg-slate-900 border-b-2 px-2 py-2"
        required
      />
    </div>
  );
}
