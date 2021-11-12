import React from 'react';
import '../public/main.css';

export const Home = () => {

  return (
    <>
      <div className={"container space"}>
          <br/>
          <div className={"title-wrapper text-center"}>
              <h1 className={"title"}>
                  <div className={"animate__animated animate__backInLeft"}>
                      Web <span className={"text-danger"}>Design</span>
                  </div>
                  <div className={"animate__animated animate__backInRight animate__slow"}>
                      & <span className={"text-warning"}>Development</span>
                  </div>
              </h1>
              <h1 className={"display-6"}>
                  By Stephen Brooks
              </h1>
          </div>
          <div className={"logo"}></div>
          <br/>
          <div className={"container"}>
              <div className={"row"}>
                  <div className={"col-md mt-3"}>
                      <h2>Development</h2>
                      <p className={"lead"}>
                          Created this app with Material Design for Bootstrap5,
                          animated css, Meteor framework with React.js, Node.js
                          server language and MongoDB for holding the data. I support
                          Meteor in Github, as it is a fast and lightweight application
                          for websites.
                      </p>
                  </div>
                  <div className={"col-md text-center mt-3"}>
                      <img src="https://th.bing.com/th/id/OIP.h2fRzUP76zqr5v_m134UrQHaEO?w=292&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                           className={"img-fluid"}
                           alt="meteor"/>
                  </div>
              </div>
              <br/><br/><br/>
              <div className={"intro"}>
                  <div className={"container p-5"}>
                      <h1 className={"display-3 text-primary"}>
                          Designing Products
                      </h1>
                  </div>
              </div>
              <br/><br/><br/>
          </div>
      </div>

    </>
  );
};
