import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Table() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [""]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="md:container m-auto">
      <div>
        <Link to={"/user"}>
          <div className="flex flex-row-reverse mt-16 ">
            <button className="bg-vert text-white px-4 py-3 font-bold  rounded-xl text-l w-24 text drop-shadow-xl ">
              {" "}
              Ajouter
            </button>
          </div>
        </Link>
      </div>
      {/* <div>
        {data.map((item) => (
          <div key={item.id}>
            <h3>{item.nom}</h3>
            <p>{item.prenom}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
