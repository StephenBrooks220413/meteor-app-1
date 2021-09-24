import React from 'react';

export const Home = () => {

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row text-white">
            <div className="col-md p-3">
              <h1 className="display-4">Home Page</h1>
              <h4>My Profile</h4>
              <hr className="text-white" />
              <p className="lead text-start">
                Photographer, web designer, and blogger. Using 
                JavaScript framework like Meteor tomake this app.
              </p>
              <a href="#" className="btn btn-primary btn-lg">MESSAGE ME</a>
            </div>
            <div className="col-md">
              <img 
                src="https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80" 
                className="img-fluid"
                alt="profile" />
            </div>
          </div>
        </div>
      </div>
      {/* featured content */}
      <div className="container text-center mt-2 mb-5">
        <div className="row">
          <div className="col-md mt-3">
            <div className="hover-shadow card p-3">
              <i class="fas icon fa-camera-retro"></i>
              <p className="lead">
                Go to my gallery to see my most recent work.
              </p>
              <a href="#" class="btn btn-outline-primary">Go Look</a>
            </div>
          </div>
          <div className="col-md mt-3">
            <div className="hover-shadow card p-3">
              <i class="fas icon fa-globe-americas"></i>
              <p className="lead">
                Go to my gallery to see my most recent work.
              </p>
              <a href="#" class="btn btn-outline-primary">Go Look</a>
            </div>
          </div>
          <div className="col-md mt-3">
            <div className="hover-shadow card p-3">
              <i class="fas icon fa-laptop"></i>
              <p className="lead">
                Go to my gallery to see my most recent work.
              </p>
              <a href="#" class="btn btn-outline-primary">Go Look</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5 pb-5 mb-5">
        <div className="row">
          <div className="col-md mt-3">
            <img 
              src="https://images.unsplash.com/photo-1480365501497-199581be0e66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" 
              className="img-fluid"
              alt="" />
          </div>
          <div className="col-md mt-3">
            <h1>Safe Wording</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In temporibus quaerat neque veritatis repellendus. Ex ad nisi sequi dicta dignissimos voluptatibus vero perspiciatis obcaecati vitae, magnam reprehenderit culpa ducimus. Dolorem!
          </div>
        </div>
      </div>
    </>
  );
};
