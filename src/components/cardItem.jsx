import React from "react";

export default function cardItem({ title, content }) {
  return (
    <div className="shadow-xl px-7 py-7 rounded-xl bg-slate-800 text-white">
      <div className="text-2xl mb-4">{title}<hr />
      </div>
      
      <div className="text-lg">{content}</div>
    </div>
  );
}
