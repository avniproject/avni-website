import React from 'react'

const ContactUs = () => (
    <span>
        <h1 className="has-text-centered is-size-3-mobile is-size-2-desktop has-text-weight-bold">Contact Us</h1>
        <p className="has-text-centered has-text-weight-bold">Feedback, Query, Suggestion, Anything? Please send your message. We will get back to you asap!</p>
        <br/>
        <div style={{width: "65%", margin: "auto"}}>
            <form method="post" action="https://formspree.io/mrgbyoqr">
                <div>
                    <label className="has-text-weight-bold">Message:</label>
                    <div style={{margin: "auto"}}>
                        <textarea id="message" name="message" maxLength="6000" rows="7" style={{width: "100%"}}/>
                    </div>
                </div>
                <div className="has-text-left has-text-weight-bold" style={{width: "100%", display: "table"}}>
                    <div style={{width: "50%", float: "left"}}>
                        <label>Name:</label>
                        <div>
                            <input type="text" className="form-control" id="name" name="name" required style={{width: "95%"}}/>
                        </div>
                    </div>
                    <div style={{width: "50%", float: "left"}}>
                        <label>Email:</label>
                        <div>
                            <input type="email" className="form-control" id="email" name="_replyto" required style={{width: "100%"}}/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="has-text-centered">
                    <div className="">
                        <button type="submit" className="btn">Send &rarr;</button>
                    </div>
                </div>
            </form>
        </div>
    </span>
);

ContactUs.propTypes = {};

export default ContactUs;