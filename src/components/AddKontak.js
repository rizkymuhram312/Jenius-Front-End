import axios from "axios";
import React, {useState } from "react";
import apiURL from "../config/apiURL";
import { useHistory } from "react-router";

export default function AddKontak() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  let history = useHistory();

  const onChangeFirstName = (e) => {
    const value = e.target.value;
    setFirstName(value);
    setError("");
  };

  const onChangeLastName = (e) => {
    const value = e.target.value;
    setLastName(value);
    setError("");
  };

  const onChangeAge = (e) => {
    const value = e.target.value;
    setAge(value);
    setError("");
  };

  

  const tambahKontak = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      photo: "Belom bisa",
    };
    axios
      .post(`${apiURL}contact`, data)
      .then((result) => {
        if (result) {
          console.log(result.data);
          if (result.data) {
            setFirstName("");
            setLastName("");
            setAge("");
            setPhoto("");
            setAlert(result.data.message);
            history.push("/");
            setTimeout(() => {
              setAlert("");
            }, 2500);
          }
        }
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

  const batal = () => {
    history.push("/");
  };

  return (
    <>
      <div className="relative py-1 sm:max-w-xl mx-auto text-center">
        {error && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
            role="alert"
          >
            <p>{error}</p>
          </div>
        )}
        {alert && (
          <div
            className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
            role="alert"
          >
            <p>{alert}</p>
          </div>
        )}
      </div>
      <div>
        <div className="mx-12">
          <h1 className="font-bold text-xl">Tambah Kontak</h1>

          <hr className="my-4"></hr>
          <div class=" flex-wrap">
            <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1 className="justify-self-end">First Name : </h1>

              <input
                type="text"
                id="firstNama"
                class="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                placeholder="Mohon masukkan"
                value={firstName}
                onChange={onChangeFirstName}
              />
            </div>

            <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1 className="justify-self-end">Last Name : </h1>

              <input
                type="text"
                id="lastNama"
                class="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                placeholder="Mohon masukkan"
                value={lastName}
                onChange={onChangeLastName}
              />
            </div>
            <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1 className="justify-self-end">Age : </h1>

              <input
                type="text"
                id="nama"
                class="col-span-2 flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 rounded-lg placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent mb-2"
                placeholder="Mohon masukkan"
                value={age}
                onChange={onChangeAge}
              />
            </div>
            <div class=" grid grid-cols-4 gap-4 my-4 content-center items-center justify-center place-content-center">
              <h1 className="justify-self-end">Photo : </h1>

              <div class="bg-grey-lighter">
                <label class=" flex flex-col items-center px-4 py-6 bg-background dark:bg-dk-nav rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer hover:text-white">
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span class="mt-2 text-base leading-normal">
                    Select a file
                  </span>
                  <input type="file" class="hidden" name="photo" onChange />
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-baseline">
            {/* <Upload  /> */}
          </div>
        </div>
        <div className="flex justify-center items-baseline ">
        <button
            className="mt-4 bg-red-500 mx-10 w-32 text-white py-2 px-6 rounded-lg flex justify-center items-baseline"
            values="batal"
            onClick={batal}
          >
            Batal
          </button>
          <button
            className="mt-4 bg-indigo-500 mx-10 w-40 text-white py-2 px-6 rounded-lg flex justify-center items-baseline"
            values="tambahKontak"
            onClick={tambahKontak}
          >
            Tambah Kontak
          </button>
        </div>
      </div>
    </>
  );
}
