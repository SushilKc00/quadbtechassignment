import React, { useState, useEffect } from "react";
import { Layout } from "./Layout";
import { useParams } from "react-router-dom";
let data;

export const Summary = () => {
  const params = useParams();
  const [apidata, setApidata] = useState([]);
  const [index, setIndex] = useState("");

  const getData = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    data = await res.json();
    setIndex(params.id);
    setApidata(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <>
        {apidata.length > 0 && (
          <div className="container mt-5">
            <div className="d-md-   flex gap-4">
              <div>
                <img
                  src={apidata[index].show.image.original}
                  alt=""
                  width={400}
                  height={500}
                  className="rounded-5"
                />
              </div>
              <div>
                <h1 className="font-weight-bolder">
                  {apidata[index].show.name}
                </h1>
                <p>{apidata[index].show.language}</p>
                <p>
                  {apidata[index].show.genres.map((e) => {
                    return <span>{e} </span>;
                  })}
                </p>
                <a href={apidata[index].show.url} target="_blank">
                  {apidata[index].show.url}
                </a>
                <p style={{ fontSize: "14px", color: "gray" }}>
                  {apidata[index].show.summary}
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    </Layout>
  );
};
