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
                      <h1 className={"display-6 text-white"}>
                          Designing Products with JavaScript
                      </h1>
                  </div>
              </div>
              <br/><br/><br/>
          </div>

          <div className={"container-fluid text-center"}>

              <div className={"row"}>
                  <div className={"col-md mt-3"}>
                      <h2>About the Business</h2>
                      <p className={"lead"}>
                          Currently 133 clients and growing by referrals.
                          He uses JavaScript in all his apps and
                          focuses on trending frameworks, as well
                          train in new cool ones. I am accredited by the
                          Better Business Bureau as well.
                      </p>
                      <h4> Contact Me:
                          <a href="tel:580-309-0236">
                              <i className="fas m-2 fa-headset"></i>
                          </a>
                          <a href="mailto:stephenbrooks714@gmail.com">
                              <i className="far m-2 fa-envelope"></i>
                          </a>
                      </h4>
                  </div>
                  <div className={"col-md mt-3"}>
                      <img src="https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                           className={"img-fluid"}
                           alt="author"/><br/>
                      <picture>Owner & Developer: Stephen Brooks</picture>
                  </div>
              </div>
          </div>

          <div className={"space container-fluid"}>
              <h1 className={"display-5"}>Other Apps I Made With JavaScript</h1>
              <div className={"row"}>
                  <div className={"col-md mt-3"}>
                      <div className={"card"} >
                          <img
                              src="https://media.istockphoto.com/photos/man-using-dslr-camera-picture-id1018589116?b=1&k=20&m=1018589116&s=170667a&w=0&h=4USCpI_N395mgBy13UZbXekpM4gKhd7Jue-a1kwTpG0="
                              className="card-img-top"
                              alt="photographer"
                          />
                          <div className={"card-body"}>
                              <p className={"card-text"}>
                                  Photographer portfolio made for showcasing
                                  their work and ready to hire buttons. <br/>
                                  <a href="https://photographer-demo.netlify.app/" target={"_blank"}>
                                      Live Preview
                                  </a>
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className={"col-md mt-3"}>
                      <div className={"card"} >
                          <img
                              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                              className="card-img-top"
                              alt="custom clothes"
                          />
                          <div className={"card-body"}>
                              <p className={"card-text"}>
                                  Client that custom makes designs on clothing and
                                  other accessories. <br/>
                                  <a href="https://goofy-keller-bb818b.netlify.app/" target={"_blank"}>
                                      Live Preview
                                  </a>
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className={"col-md mt-3"}>
                      <div className={"card"} >
                          <img
                              src="https://media.istockphoto.com/photos/business-woman-examining-insurance-policy-picture-id1180387704?b=1&k=20&m=1180387704&s=170667a&w=0&h=4LR27VcXCXVhfH9jvUFCN9_nnU8CEQJmaq8sk3KWD8w="
                              className="card-img-top"
                              alt="insurance"
                          />
                          <div className={"card-body"}>
                              <p className={"card-text"}>
                                  Wbesite I made for an insurance agent that sells insurance
                                  remotely.
                                  <br/>
                                  <a href="https://insurance-agencies.netlify.app/" target={"_blank"}>
                                      Live Preview
                                  </a>
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};
