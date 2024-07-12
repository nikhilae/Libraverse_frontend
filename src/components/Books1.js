import { useEffect, useState } from "react";
import axios from "axios";

function Books1() {
  var b = "Shreyas";
  b = 2;
  const [res, setRes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      var url = "http://localhost:8080/api/books";
      var response = await axios.get(url);
      setRes(response.data);
      console.log(response.data);
    }
    // useState
    // useEffect

    fetchData();
  }, []);

  console.log(b);
  const x = JSON.stringify(res);

  //setRes(b); // res = [backend array]

  return (
    <div>
      Inspect ctrl + shift + i to view data!
      <br />
      {res.slice(0, 5).map(function (obj) {
        return (
          <div>
            Title: {obj.title}
            ISBN: {obj.isbn}
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Books1;
