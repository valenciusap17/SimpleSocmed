import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom/client';
import "./index.css";
// import App from './App';
// // import {name as appName} from './app.json';
// import reportWebVitals from './reportWebVitals';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import {AppRegistry} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import moment from "moment";
import Timelinecard from "./components/Timelinecard";

async function fetchAllData() {
  return await axios.get("http://127.0.0.1:8000/json/");
}

function FormData() {
  return (
    <form>
      <label>
        Enter your name: <input type="text" />
      </label>
    </form>
  );
}

export default function Home() {
  // const [idValue, setIdValue] = useState()
  const { data, isLoading, refetch } = useQuery(["allData"], fetchAllData, {
    manual: true,
  });
  const [message, setMessage] = useState();
  // const [date, setDate] = useState();
  const urlDataPost = "http://127.0.0.1:8000/post_json/";

  const handleSubmit = (event) => {
    event.preventDefault();

    // setShowData("Nyoba ngab " + message + " " + date);

    Axios.post(urlDataPost, {
      message_data: message,
    })
      .then(refetch)
      .then(() => setMessage(""));
    // setDate();
    // // console.log(dateUse);
    // setMessage("");
  };

  console.log(!isLoading && data.data);
  // console.log(isLoading);

  return (
    <div class="bg-[#0b1a38]">
      <br></br>
      <div class="flex flex-col space-y-20 mt-10">
        <div className="flex justify-center gap-2">
          <form onSubmit={handleSubmit} class="">
            <div class="flex justify-content: space-between">
              {/* <div class=""> */}
              <textarea
                // class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                rows={5}
                cols={40}
                id="message"
                value={message}
                class="block p-2.5 w-full text-sm text-white bg-[#0b1a38] rounded-lg border border-[#2c4370] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#2c4370] "
                placeholder="Type Your Tweet Here Pal ^-^"
                onChange={
                  (event) => setMessage(event.target.value)
                  // setDate(moment().format("YYYY-MM-DD"))
                }
              />
              <div class="grid grid-rows-2 gap-2 w-30 p-3">
                <div class="row-start-2 row-end-2">
                  <button
                    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-10"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
              {/* </div> */}
            </div>
          </form>
        </div>
        <div>
          <title>Fetching manja kawan</title>

          {isLoading ? (
            <h1> Loading bro</h1>
          ) : data ? (
            <div flex flex-col>
              {data.data.map((everyData) => (
                <Timelinecard
                  message={everyData.fields.message_data}
                  create_date={everyData.fields.create_date}
                  edit_date={everyData.fields.edit_date}
                  pk={everyData.pk}
                  refetch={refetch}
                />
              ))}
            </div>
          ) : (
            <h1> Belom ada brodie uwu</h1>
          )}
        </div>
        <br></br>
      </div>
      {/* <div>{showData}</div> */}
    </div>
  );
}

// const [showPost, setShowPost] = useState()
// const apiUrl = 'http://127.0.0.1:8000/json/'

// let displayData

//  function pullData(){
//   fetch(apiUrl)
//   .then(response => response.json())
//   .then(responseData => {
//     displayData = responseData.map(function(todo) {
//       return (
//         <p key={todo.pk}>{todo.fields.message_data}</p>
//       )
//     })
//     console.log(responseData);
//     setShowPost(displayData);

//   })
// }

// useEffect(() => {
//   pullData();

// }, [])
