import React from "react";
import { Link } from "react-router-dom";

export default function Table() {
  return (
    <div className="md:container m-auto">
      <Link to={"/user"}>
        <div className="flex flex-row-reverse mt-16 ">
          <button className="bg-vert text-white px-4 py-3 font-bold  rounded-xl text-l w-24 text drop-shadow-xl ">
            {" "}
            Ajouter
          </button>
        </div>
      </Link>
    </div>
  );
}
