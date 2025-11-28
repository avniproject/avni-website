import React from 'react';
import {PopupText} from "react-calendly";

let step = function (title, text) {
    return <div className="columns">
        <div className="column is-3" style={{padding: 0}}/>
        <div className="column box is-6" style={{marginLeft: 20, marginRight: 20}}>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
        <div className="column is-3" style={{padding: 0}}/>
    </div>;
};
const Plan = ({}) => (
    <div className="container" style={{flexDirection: 'column', display: 'flex', backgroundColor: '#f8f7e7'}}>
        <br/>
        <h1 className="title has-text-centered">Transform your project from paper/excel based to digital</h1>
        <br/>
        {step("1. Schedule a demo / discussion with us", "We demonstrate the product to you. Explain your project's needs and organisation's in-house capacity.")}
        {step("2. Decide the services you require", "Use your own technical & program resources for customisation (if available). Use our services for everything else.")}
        {step("3. Platform customisation", "We work together as one team in performing all the required customisations. We train your team during customisation work.")}
        {step("4. Begin your fieldwork transformation!!", "We bring our experience from other projects and provide technical support to make you successful.")}
        <div className="columns">
            <div className="column is-one-third"/>
            <div className="column is-one-third has-text-centered">
                <p className="button is-primary is-medium">
                    <PopupText
                        text="Schedule a Demo"
                        url="https://calendly.com/avnisupport-samanvayfoundation/product-demo-and-discussion"
                        styles={{color: 'white', fontWeight: 'bold'}}
                    />
                </p>
            </div>
            <div className="column is-one-third"/>
        </div>
        <br/>
    </div>
);

Plan.propTypes = {};

export default Plan;
