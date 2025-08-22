import React from 'react';

class Status {
    static Success = "SUCCESS";
    static Error = "ERROR";
    static Initial = "";
    static Processing = "PROCESSING";
}

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: Status.Initial,
            name: '',
            email: '',
            message: '',
            errors: {
                name: '',
                email: '',
                message: ''
            }
        };
    }

    validateForm() {
        const { name, email, message } = this.state;
        let errors = { name: '', email: '', message: '' };
        let formIsValid = true;

        if (!name) {
            formIsValid = false;
            errors.name = 'Name is required';
        }

        if (!email) {
            formIsValid = false;
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            errors.email = 'Email is invalid';
        }

        if (!message) {
            formIsValid = false;
            errors.message = 'Message is required';
        }

        this.setState({ errors });
        return formIsValid;
    }

    submitForm(ev) {
        ev.preventDefault();
        if (!this.validateForm()) {
            return;
        }
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({status: Status.Success});
            } else {
                this.setState({status: Status.Error});
            }
        };
        xhr.send(data);
        this.setState({status: Status.Processing});
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { errors } = this.state;
        return <span>
        <h1 className="has-text-centered is-size-3-mobile is-size-2-desktop has-text-weight-bold">Contact Us</h1>
        <p className="has-text-centered has-text-weight-bold">We respond to 100% of messages. Ask us anything.</p>
        <br/>
        <div style={{width: "85%", margin: "auto"}}>
            {/*<form method="post" action="https://formspree.io/mrgbyoqr">*/}
            <form method="post" action="https://formspree.io/xlepnyzk" onSubmit={this.submitForm}>
                <div>
                    <label className="has-text-weight-bold">Message:</label>
                    <div style={{margin: "auto"}}>
                        <textarea id="message" name="message" maxLength="6000" rows="7" style={{width: "100%"}} onChange={this.handleChange}/>
                        {errors.message && <p className="has-text-danger">{errors.message}</p>}
                    </div>
                </div>
                <div className="has-text-left has-text-weight-bold" style={{width: "100%", display: "table"}}>
                    <div style={{width: "50%", float: "left"}}>
                        <label>Name:</label>
                        <div>
                            <input type="text" className="form-control" id="name" name="name" required style={{width: "95%"}} onChange={this.handleChange}/>
                            {errors.name && <p className="has-text-danger">{errors.name}</p>}
                        </div>
                    </div>
                    <div style={{width: "50%", float: "left"}}>
                        <label>Email:</label>
                        <div>
                            <input type="email" className="form-control" id="email" name="_replyto" required style={{width: "100%"}} onChange={this.handleChange}/>
                            {errors.email && <p className="has-text-danger">{errors.email}</p>}
                        </div>
                    </div>
                </div>
                <br/>

                <div className="has-text-centered">
                    <div className="">
                        {this.getStatusDisplay()}
                    </div>
                </div>
            </form>
        </div>
    </span>
    }

    getStatusDisplay() {
        const {status} = this.state;
        if (status === Status.Initial) return this.getSubmitButton();
        if (status === Status.Processing) return <button className="btn is-disabled">Sending...</button>;
        if (status === Status.Success) return <div>{this.getSubmitButton()}<p className="has-text-centered is-size-3-mobile is-size-3-desktop">Thanks
            for contacting us! We will contact you within 1 working day.</p></div>;
        if (status === Status.Error) return <div>{this.getSubmitButton()}<p className="has-text-centered is-size-3-mobile is-size-3-desktop has-text-weight-bold">There was an error. We are sorry, please try again.</p></div>;
    }

    getSubmitButton() {
        return <button type="submit" className="btn">Send &rarr;</button>;
    }
}
