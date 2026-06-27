import React from "react";
import githubData from "../../assets/github.json";
import MacWindow from "./MacWindow";
import "./github.scss"

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demooLink: "",
  },
}) => {
  // console.log(data);
  
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="desc">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>

      <div className="urls">
        <a href={data.repoLink}> Repository Link</a>
        {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
      </div>
    </div>
  );
};

const GitHub = ({windowName, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cards">
        {githubData.map((project) => {
          return <GitCard data={project} />;
        })}
      </div>
    </MacWindow>
  );
};

export default GitHub;