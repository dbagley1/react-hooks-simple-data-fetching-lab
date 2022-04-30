import { useEffect, useState } from "react";


// create your App component here
export default function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("App component rendered");
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Random Dog Image</h1>
      {
        loading ?
          <p>Loading...</p> :
          <img src={data.message} alt={data.message.match(/breeds\/([^/]+)/)?.[1]} />
      }
    </div>
  );
}
