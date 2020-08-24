import React from 'react';
import {PopupText} from "react-calendly";

let step = function (title, text) {
    return <div className="columns">
        <div className="column is-one-quarter"/>
        <div className="column box is-half">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
        <div className="column is-one-quarter"/>
    </div>;
};
const Plan = ({}) => (
    <div className="container">
        <h1 className="title has-text-centered">Get complete support for your digital project</h1>
        <br/>
        {step("1. Schedule a demo / discussion with us", "We demonstrate the product to you, you explain your project's needs, and organisation's in-house capacity")}
        {step("2. Decide the services you require", "Use your own technical & program resources for customisation. Take our services for the rest.")}
        {step("3. Platform customisation", "We work together as one team in performing all the required customisations. We train your team during customisation.")}
        {step("4. Start transforming your field work", "We bring our experience from other projects to make you successful.")}
        <div className="columns">
            <div className="column is-one-third"/>
            <div className="column is-one-third has-text-centered">
                <p className="button is-primary is-medium">
                    <PopupText
                        text="Schedule a Demo"
                        url="https://calendly.com/avniproject/discuss-demo"
                        styles={{color: 'white', fontWeight: 'bold'}}
                    />
                </p>
            </div>
            <div className="column is-one-third"/>
        </div>
    </div>
);

Plan.propTypes = {};

export default Plan;