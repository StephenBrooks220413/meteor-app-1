import React from 'react';

export const Users = () => {

  return (
    <>
        <div className="container space">
            <br/><br/>
            <h1 className="display-2 text-center">Users Page</h1>
            <hr className={"line"} />
            <div className={"mt-5"}>
                <p className={"lead"}>
                    Deciding on what goes in your site makes your business
                    presentable and the front lines for customer success.
                    Visualizing your page and what goes in it may be what
                    separates you from the competition, and branding yourself.
                    I can help with that, as I have a lot of resources
                    available as a professional designer. Ask me about a free
                    consultation and preview of what I can do for you. Not every
                    website has to be the same, or always need all of the following
                    examples below. But it does need to meet certain guidelines. Tell
                    me what you want and leave the important stuff to me.
                </p>

                <br/><br/>
                <h1 className={"text-center display-4"}>What Goes Into A Typical Website?</h1>

                <div className={"row mt-5"}>
                    <div className={"col-md mt-3"}>
                        NavBar => <img src="https://miro.medium.com/max/2000/1*N-3wLI6wuOvCr58b7Otq1w.png"
                                       className={"show"}
                                       alt="nav"/>
                    </div>
                    <div className={"col-md mt-3"}>
                        Header => <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Screenshot-11-1-1024x576.png"
                                       className={"show"}
                                       alt="header"/>
                    </div>
                </div>
                <div className={"row mt-5"}>

                    <div className={"col-md mt-3"}>
                        Content => <img src="https://technofaq.org/wp-content/uploads/2017/12/website-content.jpg"
                                        className={"show"}
                                        alt="content"/>
                    </div>
                    <div className={"col-md mt-3"}>
                        Images => <img src="https://image.shutterstock.com/image-illustration/digital-generated-devices-on-desktop-260nw-1495869476.jpg"
                                       className={"show"}
                                       alt="images"/>
                    </div>
                    <div className={"col-md mt-3"}>
                        Footer => <img src="https://static.wixstatic.com/media/94a51f_584cc92073134fa99e91e0de65bd4020~mv2.png/v1/fill/w_1000,h_571,al_c,usm_0.66_1.00_0.01/94a51f_584cc92073134fa99e91e0de65bd4020~mv2.png"
                                       className={"show"}
                                       alt="footer"/>
                    </div>
                </div>
            </div>

            <div className={"container space"}>
                <h1>Contact Us for A Quote</h1>
                <form name="contact" method="post">
                    {/*<!-- Name input -->*/}
                    <div className="form-outline mb-4">
                        <input type="text" required name={"name"} id="form4Example1" className="form-control"/>
                        <label className="form-label" htmlFor="form4Example1">Name</label>
                    </div>

                    {/*<!-- Email input -->*/}
                    <div className="form-outline mb-4">
                        <input type="email" required name={"email"} id="form4Example2" className="form-control"/>
                        <label className="form-label" htmlFor="form4Example2">Email address</label>
                    </div>

                    {/*selection*/}
                    How Soon Are You Need Completion?
                    <select name={"selection"} className="select mb-4">
                        <option value="1Day">1 Day</option>
                        <option value="CoupleDays">Couple Days</option>
                        <option value="1Wk">1 Week</option>
                        <option value="CoupleWeeks">Couple Weeks</option>
                        <option value="Month">Month</option>
                        <option value="NoTime">No Time Limit</option>
                    </select>

                    {/*<!-- Message input -->*/}
                    <div className="form-outline mb-4">
                        <textarea required name={"message"} className="form-control" id="form4Example3" rows="4"></textarea>
                        <label className="form-label" htmlFor="form4Example3">Message</label>
                    </div>

                    {/*<!-- Submit button -->*/}
                    <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
                </form>
            </div>
        </div>
    </>
  );
};
