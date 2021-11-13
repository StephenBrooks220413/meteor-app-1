import React from "react";

export const Resources = () => {

    return (
        <div className="container mt-5 mb-5">
            <br/><br/><br/>
            <h1 className="display-1 text-center">Resources</h1>
            <div className={"row"}>
                <div className={"col-md format-text mt-5"}>
                    <h2>Know Your Code</h2>
                    <p className={"lead"}>
                        Yes, almost everything has a standard or regulation
                        behind it. As far as websites are concerned, there are
                        a few things needed for it to be in reulgation as well.
                        This can make the difference between an experienced web
                        developer and a novice one.

                    </p>
                </div>
                <div className={"col-md format-text p-5"}>
                    <h1>Basic Rules...</h1>
                    <ol>
                        <li>All images must use the alt="..."</li>
                        <li>All links working or none</li>
                        <li>Have a plan and purpose</li>
                        <li>Making it accessible to everyone</li>
                        <li>Keep in mind about user experience</li>
                        <li>Global navigational menus</li>
                        <li>Responsive for all devices and screens</li>
                        <li>Don't Mix HTML With CSS or JavaScript</li>
                    </ol>
                </div>
                <div className={"col-md text-center mt-5"}>
                    <h2>Downloads</h2>
                    <br/>
                    <a href="#!" className={"btn btn-lg btn-primary"} download type={"files"}>DOWNLOAD REQUEST FORM</a>
                    <br/><br/>
                    <a href="#!" className={"btn btn-lg btn-primary"} download type={"files"}>DOWNLOAD APPLICATION</a>
                    <br/><br/>
                    <a href="#!" className={"btn btn-lg btn-primary"} download type={"files"}>DOWNLOAD WEB BROCHURE</a>
                </div>
            </div>
        </div>
    );
};