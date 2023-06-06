import React, { useEffect, useState } from "react";
import { Layout } from "./Layout";
import { Card } from "./Card";

export const Home = () => {
  const [apidata, setApidata] = useState([]);

  const getData = async () => {
    console.log("helo");
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await res.json();
    setApidata(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <div className="container">
        <div className="row">
          {apidata &&
            apidata.map((e, index) => {
              return (
                <div className="col-md-4 mt-3" key={index}>
                  <Card details={e.show} index={index} />
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};
