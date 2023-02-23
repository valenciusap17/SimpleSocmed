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
      <div className="flex justify-center">
        <div className="container px-12 mx-auto ">
        {/* p-4 border-4 rounded shadow-lg hover:bg-sky-100 */}
        {/* max-w-screen-md h-40 rounded overflow-hidden shadow-lg hover:bg-sky-100  active:bg-violet-200 */}
          <div className="border rounded-lg shadow-lg p-">
            <div className="">
              <p>{message}</p>
              <p>
                Created: {moment(create_date).format("DD-MM-YYYY")} last edited:{" "}
                {moment(edit_date).fromNow()}
              </p>
              {show && (
                <div className="flex justify-center">
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
              <button
                onClick={() => setShow(!show)}
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="edit"
              >
                Edit
              </button>
              <button
                onClick={deletePost}
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="delete"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
