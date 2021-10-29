import React from "react";
import * as indexStyles from "../styles/index.module.scss";
import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import Project from "../components/Project";
import Footer from "../components/Footer";

const indexPage = () => {
  return (
    <div>
      <NavBar />
      <div className={indexStyles.container}>
        <div className={indexStyles.itemLanding}>
          <Landing />
        </div>
        <div className={indexStyles.itemProjects}>
          <Project />
        </div>
        <div className={indexStyles.itemFooter}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default indexPage;
