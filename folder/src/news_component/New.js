import React, { useState, useEffect } from "react";
import { getnews } from "../firebase/firebase";
import "./New.css";
const News = () => {
  const [view, setview] = useState(2);

  const [allNew, setallNew] = useState([]);

  useEffect(() => {
    // Function to fetch cities data asynchronously
    const fetchCitiesData = async () => {
      console.log("eeeeeeeeee");
      try {
        console.log("ttttt");

        // Call the getCities function passing your database instance
        // 'db' is assumed to be your Firebase Firestore instance
        const newslist = await getnews();

        setallNew(newslist);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCitiesData(); // Call the function when the component mounts
  }, []); // Include 'db' in the dependency array if it's a variable coming from props or context

  return (
    <div className="news_conteiner">
      <div className="App22">
        <div className="target">Today’s news </div>
        <div className="itemss">
          {allNew.map((item, index) => {
            if (index <= view) {
              return (
                <div className="">
                  <a className="opo" href={item.tit}>
                    {item.namees}
                  </a>
                  <div className="iiii">{item.howeee}</div>
                </div>
              );
            }
            return null;
          })}
        </div>
        {view === 4 ? (
          <> </>
        ) : (
          <div
            className="lla"
            onClick={() => {
              setview(4);
            }}
          >
            {" "}
            ... view all lastes news{" "}
          </div>
        )}
      </div>
    </div>
  );
};
export default News;
