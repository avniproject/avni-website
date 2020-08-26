import React from 'react';

const Explanation = () => (
    <div className="container" style={{alignItems: 'center', flexDirection: 'column', display: 'flex'}}>
        <h1>In-house data collection applications are <u>unsustainable</u></h1>
        <div>
            <div className="is-three-fifths full-centered" style={{"margin-left": "10%", "margin-right": "10%"}}>
                <p>While development of in-house data collections applications seem feasible and even exciting in the beginning - they become difficult to sustain - for
                    most NGOs. We have
                    come across these situations so many times and that is partly the reason we developed Avni.</p>
                <p>Organisations requirements both increase and evolve significantly over time. It requires constant improvements to the software and hence regular funds.
                    It is difficult
                    to retain the software developers after initial development of application. Hence after initial success NGOs often struggle.</p>
                <p>Avni has effectively utilised extremely scarce philanthropic resources in creating a <u>shared software platform</u>. As a result, it makes a
                    comprehensive tool available for all non-profit organisations. As this common platform has evolves (features get added/improved), it becomes available
                    for free to those using organisations already using it.</p>
            </div>
        </div>
        <br/>
        <h4>Avni makes your digital transformation sustainable</h4>
    </div>
);

Explanation.propTypes = {};

export default Explanation;