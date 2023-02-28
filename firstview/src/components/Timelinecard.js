import React from "react";

import Axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

export default function Timelinecard({
  message,
  create_date,
  edit_date,
  pk,
  refetch,
}) {
  //   const urlDataCancel = "http://127.0.0.1:8000/edit_json/";
  const [new_message, setMessage] = useState();
  // const [new_date, setDate] = useState();
  const [show, setShow] = useState(false);
  // const differenceDate = create_date - edit_date;

  const postEdit = (event) => {
    const urlEditData = "http://127.0.0.1:8000/edit_json/";
    Axios.post(urlEditData, {
      pk: pk,
      message: new_message,
      // date: new_date,
    }).then(refetch);
  };

  const deletePost = (event) => {
    const urlDeleteData = "http://127.0.0.1:8000/delete_json/";
    Axios.post(urlDeleteData, {
      pk: pk,
    }).then(refetch);
  };

  console.log("anjing");
  console.log(pk);
  console.log(message);

  return (
    <div>
      <div class="flex justify-center">
        <div class="w-5/12 p-6  rounded-lg shadow-lg hover:bg-sky-100 bg-gradient-to-t from-[#0C182F] to-[#2c4370] drop-shadow-[#1D2E4E] ">
          {/* p-4 border-4 rounded shadow-lg hover:bg-sky-100 */}
          {/* max-w-screen-md h-40 rounded overflow-hidden shadow-lg hover:bg-sky-100  active:bg-violet-200 */}
          <div class="">
            <div class="relative">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  onClick={() => setShow(!show)}
                  type="edit"
                  stroke="currentColor"
                  className="w-6 h-6  cursor-pointer absolute top-0 right-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="rounded-full cursor-pointer w-6 h-6 absolute top-0 right-0  hover:bg-[#33518d] active:bg-[#3b5a97] focus:outline-none focus:ring focus:ring-violet-300"
                  type="delete"
                  onClick={deletePost}
                  color="red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
              <p class="text-white">{message}</p>
              <p class="text-white">
                Created: {moment(create_date).format("DD-MM-YYYY")} last edited:{" "}
                {moment(edit_date).fromNow()}
              </p>
              {show && (
                <div class="flex justify-center">
                  <form onSubmit={postEdit} class="w-full max-w-sm">
                    <div class="flex items-center border-b border-teal-100 py-2">
                      <input
                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        id="message"
                        name="message"
                        value={new_message}
                        placeholder="Edit Your Tweet Here ^-^"
                        onChange={(event) => setMessage(event.target.value)}
                      />
                      <br />
                      <button
                        class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                      >
                        Submit
                      </button>
                      <br />
                    </div>
                  </form>
                </div>
              )}
              {/* <button
                onClick={() => setShow(!show)}
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="edit"
              >
                Edit
              </button> */}
              {/* <button
                onClick={deletePost}
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="delete"
              >
                Delete
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
