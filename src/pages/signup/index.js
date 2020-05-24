import React from "react";
import Layout from "../../components/Layout";


export default class SignupIndexPage extends React.Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            signeeName: ""
        };
    }

    render() {
        const { status, signeeName } = this.state;
        return (
            <Layout>
                <div className="container">
                    <br/>
                    <br/>
                    <div className="columns">
                        <div className="column"/>
                        <div className="column">
                            {status === "SUCCESS" ?
                                <div><p>Hey {signeeName},</p><br/><p>Thanks for signing up for Avni! We are super excited to have you on board.</p><br/>
                                <p>Within next 24 hours expect an email from us with your login credentials.</p></div> :
                            <form onSubmit={this.submitForm} method="post" action="https://formspree.io/xzbjebyr">
                                <div className="field">
                                    <label className="label">Full Name</label>
                                    <div className="control">
                                        <input name="name" className="input" type="text"
                                               placeholder="First and last name" required/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Organisation Name</label>
                                    <div className="control">
                                        <input name="organisationName" className="input" type="text"
                                               placeholder="Your organisation and project name" required/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Organisation status</label>
                                    <div className="control">
                                        <div className="select" required>
                                            <select>
                                                <option>Select dropdown</option>
                                                <option>Non-profit</option>
                                                <option>For-profit</option>
                                                <option>Government</option>
                                                <option>Self (not an organisation)</option>
                                                <option>Others</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Country of your organisation</label>
                                    <div className="control">
                                        <label className="radio">
                                            <input type="radio" name="country"/>
                                            India
                                        </label>
                                        <label className="radio">
                                            <input type="radio" name="country"/>
                                            Outside India
                                        </label>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input name="email" className="input" type="email"
                                               placeholder="Professional Email" required/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control">
                                        <input name="username" className="input" type="text"
                                               placeholder="login username" required/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Phone number (Optional)</label>
                                    <div className="control">
                                        <input name="phone" className="input" type="tel"
                                               placeholder="10 digit phone number" pattern="[0-9]{10}"/>
                                    </div>
                                </div>
                                <div>
                                    By signing up, you accept our <a>Terms of Service</a> and <a>Privacy Policy</a>.
                                </div>
                                <br/>

                                    <div className="field is-grouped is-group-centered">
                                        <div className="control">
                                            <button className="button is-primary is-centered">SIGNUP FOR FREE</button>
                                        </div>
                                    </div>
                            </form>
                            }
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </div>
                        <div className="column"/>
                    </div>
                </div>
                <br/>
                < br/>

            </Layout>
        )
    }


    handleUsernameChange(ev){
        this.setState({signeeName: ev.target.value})
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({status: "SUCCESS", signeeName: data.get('name')});
            } else {
                this.setState({status: "ERROR", signeeName: data.get('name')});
            }
        };
        xhr.send(data);
    }
}
