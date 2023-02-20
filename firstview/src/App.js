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
  const [date, setDate] = useState();
  const [pk, setPk] = useState();
  const [showData, setShowData] = useState("");
  const urlDataPost = "http://127.0.0.1:8000/post_json/";

  const handleSubmit = (event) => {
    event.preventDefault();

    // setShowData("Nyoba ngab " + message + " " + date);
    Axios.post(urlDataPost, {
      message_data: message,
      date: date,
    }).then(refetch);
    // setDate();
    // // console.log(dateUse);
    // setMessage("");
  };

  console.log(!isLoading && data.data);
  // console.log(isLoading);

  return (
    <>
      <div>
        <title>Fetching manja kawan</title>

        {isLoading ? (
          <h1> Loading bro</h1>
        ) : data ? (
          <div flex flex-col>
            {data.data.map((everyData) => (
              <Timelinecard
                message={everyData.fields.message_data}
                date={everyData.fields.date}
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
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} class="w-full max-w-sm">
          <div class="flex items-center border-b border-teal-500 py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id="message"
              name="message"
              value={message}
              placeholder="Type Your Tweet Here Pal ^-^"
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
      {/* <div>{showData}</div> */}
    </>
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
