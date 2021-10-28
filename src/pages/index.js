import React from "react";
import indexStyles from "../styles/index.module.scss";
import Landing from "../components/Landing";
import About from "../components/About";
import Project from "../components/Project";
import Footer from "../components/Footer";

const indexPage = () => {
  return (
    <div className={indexStyles.container}>
      <div className={indexStyles.itemLanding}>
        <Landing />
      </div>
      <div className={indexStyles.itemAbout}>
        <About />
      </div>
      <div className={indexStyles.itemProjects}>
        <Project />
      </div>
      <div className={indexStyles.itemFooter}>
        <Footer />
      </div>
    </div>
  );
};

export default indexPage;
