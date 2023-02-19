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
  const [showData, setShowData] = useState("");
  const urlDataPost = "http://127.0.0.1:8000/post_json/";

  const handleButton = (event) => {
    event.preventDefault();

    setShowData("Nyoba ngab " + message + " " + date);
    Axios.post(urlDataPost, {
      message_data: message,
      date: date,
    }).then(refetch);
    // setDate();
    // // console.log(dateUse);
    // setMessage("");
  };

  // console.log(data);
  // console.log(isLoading);

  return (
    <>
      <div>
        <title>Fetching manja kawan</title>

        <main>
          <h1>Post from API</h1>
          {isLoading ? (
            <h1> Loading bro</h1>
          ) : data ? (
            <p>
              {data.data.map((everyData) => (
                <p>{everyData.fields.message_data}</p>
              ))}
            </p>
          ) : (
            <h1> Belom ada brodie uwu</h1>
          )}
        </main>
      </div>
      <div>
        <form onSubmit={handleButton}>
          <input
            type="text"
            id="message"
            name="message"
            value={message}
            placeholder="Message"
            onChange={(event) =>
              setMessage(event.target.value) +
              setDate(moment().format("YYYY-MM-DD"))
            }
          />

          <br />
          <br />

          {showData}
        </form>
      </div>
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
