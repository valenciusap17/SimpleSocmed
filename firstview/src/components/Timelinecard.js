import React from "react";

import Axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

export default function Timelinecard({ message, date, pk, refetch }) {
  //   const urlDataCancel = "http://127.0.0.1:8000/edit_json/";
  const [new_message, setMessage] = useState();
  const [new_date, setDate] = useState();
  const [show, setShow] = useState(false);

  const handlePost = (event) => {
    const urlDataCancel = "http://127.0.0.1:8000/edit_json/";
    Axios.post(urlDataCancel, {
      pk: pk,
    }).then(refetch);
  };

  console.log("anjing");
  console.log(pk);
  console.log(message);

  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <p>{message}</p>
            <p>{date}</p>
            {show && (
              <div className="flex justify-center">
                <form onSubmit={handlePost} class="w-full max-w-sm">
                  <div class="flex items-center border-b border-teal-500 py-2">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text"
                      id="message"
                      name="message"
                      value={new_message}
                      placeholder="Edit Your Tweet Here ^-^"
                      onChange={(event) =>
                        setMessage(event.target.value) +
                        setDate(moment().format("YYYY-MM-DD"))
                      }
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
          </div>
        </div>
      </div>
    </div>
  );
}
