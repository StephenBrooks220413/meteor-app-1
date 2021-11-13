import React from 'react';

export const About = () => {

  return (
    <>
        <br/><br/>
        <div className="container space">
            <h1 className="display-4 text-center">Using My Service</h1>
            <div className={"row mt-3"}>
                <h2 className={"text-center"}>Building Your App & Maintaining the Integrity</h2>

                <br/><br/><br/>
                <div className={"col-md p-2 mt-3"}>
                    <h4>
                        <strong>STEP 1</strong>
                    </h4>
                    <p className={"lead"}>
                        <em>
                            This step starts the building and ideas of
                            what needs to be the end point.
                        </em>
                    </p>
                    <ol>
                        <li>Plan & Gather</li>
                        <li>Create & Modify</li>
                    </ol>
                </div>
                <div className={"col-md p-2 mt-3"}>
                    <h4>
                        <strong>STEP 2</strong>
                    </h4>
                    <p className={"lead"}>
                        <em>
                            This brings us to the middle point. Here we
                            look & make changes.
                        </em>
                    </p>
                    <ol>
                        <li>Overview</li>
                        <li>Create & Modify</li>
                    </ol>
                </div>
                <div className={"col-md p-2 mt-3"}>
                    <h4>
                        <strong>STEP 3</strong>
                    </h4>
                    <p className={"lead"}>
                        <em>
                            Now we finally get to production. App is good & ready
                            to go live.
                        </em>
                    </p>
                    <ol>
                        <li>Revise</li>
                        <li>Deploy</li>
                    </ol>
                </div>
            </div>
            <div className={"space"}>
                <div className={"row"}>
                    <div className={"col-md mt-3"}>
                        <h3>Breaking Ground</h3>
                        <p className={"lead"}>
                            Making initial step towards getting the frame up
                            is vital to the start of the continued flow. Once
                            everything is in place it starts to flow make sense
                            of the objective.
                        </p>
                        <a href="mailto:stephenbrooks714@gmail.com" className={"btn btn-dark"}>MESSAGE ME</a>
                    </div>
                    <div className={"col-md mt-3"}>
                        <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                             className={"img-fluid"}
                             alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
