import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddUser() {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState(0);
  const [sex, setSex] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const addUser = async () => {
    const users = { name, prenom, tel, sex };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user",
        users
      );
      if (response.status === 201) {
        setIsCreated(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (isCreated) {
    return <Link to={"/"} />;
  }

  return (
    <div className="md:container m-auto flex items-center justify-center mt-20">
      <form className="w-full max-w-sm   ">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              nome
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-vert"
              id="inline-full-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              prenom
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-vert"
              id="inline-full-name"
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              NumTel
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-vert"
              id="inline-full-name"
              type="number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              sex
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white  focus:border-vert"
              id="grid-state"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option defaultChecked>Select </option>
              <option value={"homme"}>Home</option>
              <option value={"femme"}>femme</option>
            </select>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-vert focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 ml-16 rounded"
              type="button"
              onClick={addUser}
            >
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
