import React from "react";

import Axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

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

  console.log(pk);
  console.log(message);

  return (
    <div>
      <div class="flex justify-center">
        <div class="w-5/12 p-8  rounded-lg shadow-lg hover:bg-sky-100 bg-gradient-to-t from-[#0C182F] to-[#2c4370] drop-shadow-[#1D2E4E] ">
          <div class="">
            <div class="relative">
              <div className="bg-[#213763] border-[1px] border-[#050505] w-12 h-12 flex rounded-full absolute cursor-pointer right-[-20px] top-[-60px] hover:bg-[#42609b]">
                <TrashIcon
                  className="w-6 h-6 m-auto text-red-600"
                  onClick={deletePost}
                />
              </div>
              <div
                className="bg-[#2c4370] border-[1px] border-[#050505] w-12 h-12 flex rounded-full absolute right-[30px] top-[-60px] cursor-pointer hover:bg-[#4f6ba2]"
                onClick={() => setShow(!show)}
              >
                <PencilIcon className="w-6 h-6 m-auto" />
              </div>
              <p class="text-white break-all">{message}</p>
              <p class="text-white">
                Created: {moment(create_date).format("DD-MM-YYYY")} last edited:{" "}
                {moment(edit_date).fromNow()}
              </p>
              {show && (
                <div class="flex justify-center">
                  <form onSubmit={postEdit} class="w-full max-w-sm">
                    <div class="flex items-center border-b border-teal-100 py-2">
                      <input
                        class="appearance-none bg-transparent text-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
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
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
