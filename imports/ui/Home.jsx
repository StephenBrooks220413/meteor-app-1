import React from 'react';
import '../public/main.css';

export const Home = () => {

  return (
    <>
      <div className={"container space"}>
          <br/>
          <div className={"title-wrapper text-center"}>
              <h1 className={"title"}>
                  Web <span className={"text-danger"}>Design</span>
                  <br/> & <span className={"text-warning"}>Development</span>
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
                      <h2>Meteor</h2>
                      <p className={"lead"}>
                          Creating and building apps that use React but with much lighter
                          application build. Utilizes MongoDB and Node.js. Layouts created
                          with MDB5, making a responsive website. This is a template for
                          an app that could be built with this framework.
                      </p>
                  </div>
                  <div className={"col-md text-center mt-3"}>
                      <img src="https://th.bing.com/th/id/OIP.h2fRzUP76zqr5v_m134UrQHaEO?w=292&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                           className={"img-fluid"}
                           alt="meteor"/>
                  </div>

                  <div className={"intro"}>
                      <div className={"container p-5"}>
                          <h1 className={"display-3 text-primary"}>
                              Designing Products
                          </h1>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </>
  );
};
