import axios from "axios";
import React, { useEffect, useState } from "react";
import apiURL from "../config/apiURL";
import { useHistory } from "react-router";

export default function Kontak() {
  const [kontak, setKontak] = useState([]);
  let history = useHistory();

  const GetKontak = async () => {
    const response = await axios.get(`${apiURL}contact`);
    return response.data;
  };

  useEffect(() => {
    const getListKontak = async () => {
      const listKontak = await GetKontak();
      if (listKontak) setKontak(listKontak);
    };
    getListKontak();
  }, []);

  const inputKontak = () => {
    history.push("/addKontak");
  };

  const editKontak = (id) => {
    history.push("/editKontak");
    localStorage.setItem("id", id);
  };

  const deleteKontak = async (id) => {
    console.log(id);
    const response = await axios.delete(`${apiURL}contact/${id}`);
    return response.data;
  };

  return (
    // <div>
    //     {console.log(kontak)}
    // </div>

    <div class="w-full  mb-12 xl:mb-0 px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded bg-blue-400">
        <div class="rounded-t mb-0 px-4 py-3 border-0 bg-blue-500">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1 ">
              <h3 class="font-semibold text-xl text-blue-50">
                List Contact
              </h3>
            </div>
            <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                onClick={inputKontak}
                className="px-6 bg-blue-700 text-blue-50 align-middle border border-solid border-blue-800 hover:bg-blue-200 hover:text-blue-800 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                type="button"
              >
                Add Contact
              </button>
            </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto">
          <div class="container my-4 mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
              {kontak.data ? (
                kontak.data.map((x, index) => {
                  return (
                    <div class="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4">
                      <article class="overflow-hidden rounded-lg shadow-lg bg-blue-100">
                        <a class="flex items-center" href="#">
                          <img
                            alt="Placeholder"
                            class="bg-no-repeat bg-center h-40 w-full"
                            src={x.photo === "N/A" ? "user.jpg" : x.photo}
                          />
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                          <h1 class="text-lg">
                            <a
                              class="no-underline hover:underline text-black"
                              href="#"
                            >
                              {x.firstName} {x.lastName}
                            </a>
                          </h1>
                          <p class="text-grey-darker text-sm">Age : {x.age}</p>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                          <button
                            onClick={() => editKontak(x.id)}
                            className="text-blue-50 bg-transparent w-20 bg-blue-400 border border-solid border-gray-300 hover:bg-blue-600 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => {
                              if (
                                window.confirm(
                                  "apakah anda yakin ingin menghapus data ini?"
                                )
                              ) {
                                deleteKontak(x.id);
                              }
                            }}
                            className="text-blue-50 w-20 bg-transparent bg-blue-400 border border-solid border-gray-300 hover:bg-blue-600 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Delete
                          </button>
                        </footer>
                      </article>
                    </div>
                  );
                })
              ) : (
                <span> No Record</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
