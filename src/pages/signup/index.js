import React from "react";
import Layout from "../../components/Layout";
import queryString from 'query-string';
import Constants from "../../Constants";
import PhoneInput from 'react-phone-number-input';
import ReCAPTCHA from "react-google-recaptcha";
import { parsePhoneNumber } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json';
import 'react-phone-number-input/style.css';

class Status {
    static Success = "SUCCESS";
    static Error = "ERROR";
    static Initial = "";
}

// Email validation utilities
class EmailValidator {
    static disposableEmailDomains = [
        'mailinator.com', '10minutemail.com', 'guerrillamail.com', 'tempmail.org',
        'throwaway.email', 'temp-mail.org', 'yopmail.com', 'maildrop.cc'
    ];
    
    static commonTypos = {
        'gmil.com': 'gmail.com',
        'gmai.com': 'gmail.com',
        'yaho.com': 'yahoo.com',
        'yahooo.com': 'yahoo.com',
        'hotmial.com': 'hotmail.com',
        'outlok.com': 'outlook.com'
    };
    
    static roleBasedEmails = ['admin@', 'info@', 'support@', 'noreply@', 'no-reply@', 'contact@'];
    
    static validateEmail(email) {
        const errors = [];
        
        // Basic format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Invalid email format');
            return { isValid: false, errors };
        }
        
        const domain = email.split('@')[1]?.toLowerCase();
        const localPart = email.split('@')[0]?.toLowerCase();
        
        // Check for disposable emails
        if (this.disposableEmailDomains.includes(domain)) {
            errors.push('Disposable email addresses are not allowed');
        }
        
        // Check for common typos
        if (this.commonTypos[domain]) {
            errors.push(`Did you mean ${email.replace(domain, this.commonTypos[domain])}?`);
        }
        
        // Check for role-based emails
        if (this.roleBasedEmails.some(role => email.toLowerCase().startsWith(role))) {
            errors.push('Role-based email addresses are not allowed');
        }
        
        // Check for duplicate email patterns (+ addressing)
        if (localPart.includes('+')) {
            errors.push('Email aliases with + are not allowed');
        }
        
        return { isValid: errors.length === 0, errors };
    }
}

// Phone validation utilities
class PhoneValidator {
    static validatePhone(phone) {
        const errors = [];
        
        if (!phone || phone.length < 10) {
            errors.push('Please enter a valid phone number');
        }
        
        return { isValid: errors.length === 0, errors };
    }
}

// Name validation utilities
class NameValidator {
    static validateName(name, fieldName) {
        const errors = [];
        
        if (!name || name.trim().length === 0) {
            errors.push(`${fieldName} is required`);
            return { isValid: false, errors };
        }
        
        // Check for invalid characters (allow letters, spaces, hyphens, apostrophes)
        const nameRegex = /^[a-zA-Z\s\-']+$/;
        if (!nameRegex.test(name.trim())) {
            errors.push(`${fieldName} can only contain letters, spaces, hyphens, and apostrophes`);
        }
        
        if (name.trim().length < 2) {
            errors.push(`${fieldName} must be at least 2 characters long`);
        }
        
        return { isValid: errors.length === 0, errors };
    }
}

export default class SignupIndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: Status.Success,
            signeeName: "Himesh Ravikumar",
            email: "himeshr@samanvayfoundations.org",
            phone: "",
            country: "IN",
            emailIconStyle: "icon is-right",
            validationErrors: {},
            formData: {},
            isSubmitting: false,
            showOtherSector: false,
            showOtherOrgType: false,
            recaptchaValue: null,
            termsAccepted: false,
            marketingConsent: false,
            sourceOfSignup: ""
        };
        this.recaptchaRef = React.createRef();
    }

    static getCongratulationMessage(contactSource, signeeName) {
        const firstName = signeeName ? signeeName.split(' ')[0] : 'there';
        if (contactSource === Constants.Trial) return `Welcome aboard, ${firstName}!`;
        if (contactSource === Constants.CustomPlan) return `Thank you for considering Avni, ${firstName}!`;
        if (contactSource === Constants.TrainingPlan) return `Thanks For Signing Up, ${firstName}!`;
        return `Welcome, ${firstName}!`;
    }

    static getSignupButtonLabel(contactSource) {
        switch(contactSource) {
            case Constants.CustomPlan: return "Request a Call Back";
            case Constants.Trial: return "Start Free Trial";
            case Constants.TrainingPlan: return "Get Started";
            default: return "Start Free Trial";
        }
    }

    static getPreSubmissionTitleMessage(contactSource) {
        switch(contactSource) {
            case Constants.CustomPlan: return "Get a Custom Avni Plan for Your Organization";
            case Constants.Trial: return "Start Your 30-Day Free Trial";
            case Constants.TrainingPlan: return "Use Avni — with expert support";
            default: return "Start Your 30-Day Free Trial";
        }
    }

    static getPostSubmissionTitleMessage(contactSource) {
        switch(contactSource) {
            case Constants.CustomPlan: return "Let's discuss your needs";
            case Constants.Trial: return "You're all set!";
            case Constants.TrainingPlan: return "Training enrollment complete";
            default: return "You're all set!";
        }
    }

    static getSubtitleMessage(contactSource, email) {
        switch(contactSource) {
            case Constants.Trial: 
                return (
                    <span>
                        We've sent your login details to <strong style={{color: '#ff470f'}}>{email}</strong>. 
                        <br />
                        Log in and begin creating impact with your team.
                    </span>
                );
            case Constants.CustomPlan: 
                return (<span>We’ve received your request to discuss pricing and understand your requirements.
                    <br />
                    Our team will connect with you shortly to explore your needs and recommend the best Avni plan for your organization</span>);
            case Constants.TrainingPlan: 
                return (<span>We’ve received your request for a guided onboarding.
                    <br />
                    Our team will contact you shortly to schedule your training and help you get started with Avni.
                    <br />
                    In the meantime, explore how organizations like yours use Avni to create impact.
                    </span>);
            default: 
                return "Our team will get in touch with you soon with next steps.";
        }
    }

    static getCallToAction(contactSource) {
        switch(contactSource) {
            case Constants.Trial:
                return {
                    text: "Get started",
                    url: "https://app.avniproject.org",
                    show: true
                };
            case Constants.CustomPlan:
                return {
                    text: "Explore Our Capabilities",
                    url: "/features",
                    show: true
                };
            case Constants.TrainingPlan:
                return {
                    text: "Explore How Others Use Avni",
                    url: "/case-studies",
                    show: true
                };
            default:
                return {
                    text: "Explore How Others Use Avni",
                    url: "/case-studies",
                    show: true
                };
        }
    }

    static emailStyle(email) {
        return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ?
            "icon is-right has-text-success" : "icon is-right";
    }

    validateForm(formData) {
        const errors = {};
        
        // Validate name
        const nameValidation = NameValidator.validateName(formData.name, 'Full Name');
        if (!nameValidation.isValid) {
            errors.name = nameValidation.errors;
        }
        
        // Validate email
        const emailValidation = EmailValidator.validateEmail(formData.email);
        if (!emailValidation.isValid) {
            errors.email = emailValidation.errors;
        }
        
        // Validate phone
        const phoneValidation = PhoneValidator.validatePhone(this.state.phone);
        if (!phoneValidation.isValid) {
            errors.phone = phoneValidation.errors;
        }
        
        // Validate organization name
        const orgValidation = NameValidator.validateName(formData.organisationName, 'Organisation Name');
        if (!orgValidation.isValid) {
            errors.organisationName = orgValidation.errors;
        }
        
        // Check terms and conditions acceptance
        if (!this.state.termsAccepted) {
            errors.terms = ['You must accept the Terms and Conditions and Privacy Policy'];
        }
        
        // Validate reCAPTCHA
        if (!this.state.recaptchaValue) {
            errors.recaptcha = ['Please complete the reCAPTCHA verification'];
        }
        
        // Check required fields
        const requiredFields = ['name', 'email', 'organisationName', 'sector'];
        requiredFields.forEach(field => {
            if (!formData[field] || formData[field].trim() === '') {
                if (!errors[field]) errors[field] = [];
                errors[field].push(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
            }
        });
        
        return errors;
    }
    
    submitForm(ev) {
        ev.preventDefault();
        
        if (this.state.isSubmitting) return;
        
        const form = ev.target;
        const formData = new FormData(form);
        const data = {};
        
        // Convert FormData to object
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Validate form
        const validationErrors = this.validateForm(data);
        
        if (Object.keys(validationErrors).length > 0) {
            this.setState({ validationErrors });
            return;
        }
        
        this.setState({ isSubmitting: true, validationErrors: {} });
        
        // Extract country from phone number if available
        let country = this.state.country;
        let countryName = 'Unknown';
        
        if (this.state.phone) {
            try {
                const phoneNumber = parsePhoneNumber(this.state.phone);
                if (phoneNumber && phoneNumber.country) {
                    country = phoneNumber.country;
                    countryName = en[phoneNumber.country] || 'Unknown';
                }
            } catch (error) {
                // Fallback to state values
                countryName = en[this.state.country] || 'Unknown';
            }
        } else {
            countryName = en[this.state.country] || 'Unknown';
        }
        
        // Prepare data for n8n webhook
        const webhookData = {
            name: data.name,
            email: data.email,
            phone: this.state.phone || '',
            country: country,
            countryName: countryName,
            organisationName: data.organisationName,
            organisationType: 'NGO',
            q8_additionalMessage: data.additionalMessage || '',
            sector: data.sector,
            otherSector: data.otherSector || '',
            otherOrgType: data.otherOrgType || '',
            source: data.source || '',
            marketingConsent: this.state.marketingConsent,
            recaptcha: this.state.recaptchaValue
        };
        
        // Submit to n8n webhook
        fetch('https://avniproject.app.n8n.cloud/webhook/avni-signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(webhookData)
        })
        .then(response => {
            if (response.ok) {
                form.reset();
                this.setState({
                    status: Status.Success,
                    signeeName: data.name,
                    email: data.email,
                    isSubmitting: false
                });
                // Set cookie to prevent duplicate submissions
                document.cookie = `avni_signup_${data.email}=true; max-age=86400; path=/`;
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            this.setState({
                status: Status.Error,
                signeeName: data.name,
                email: data.email,
                isSubmitting: false
            });
        });
    }
    
    handleInputChange = (field, value) => {
        this.setState({
            [field]: value,
            validationErrors: {
                ...this.state.validationErrors,
                [field]: undefined
            }
        });
    }
    
    checkDuplicateSubmission = (email) => {
        const cookies = document.cookie.split(';');
        return cookies.some(cookie => cookie.trim().startsWith(`avni_signup_${email}=`));
    }

    render() {
        const parsed = queryString.parse(this.props.location.search);
        const {status, signeeName, email} = this.state;
        const contactSource = parsed[Constants.ContactSource];
        const formContainerStyle = {
            minHeight: 'calc(100vh - 80px)', // Account for navbar height
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem',
            paddingTop: '4rem' // Extra padding from top for navbar
        };
        
        const formCardStyle = {
            background: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            padding: '3rem',
            maxWidth: '625px',
            width: '100%',
            margin: '0 auto'
        };
        
        const headerStyle = {
            textAlign: 'center',
            marginBottom: '2rem'
        };
        
        const logoStyle = {
            width: '60px',
            height: '60px',
            background: '#ff470f',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white'
        };
        
        const titleStyle = {
            fontSize: '24px',
            fontWeight: '600',
            color: '#2D3748',
            marginBottom: '0.5rem'
        };
        
        const subtitleStyle = {
            color: '#718096',
            fontSize: '14px',
            lineHeight: '1.5'
        };
        
        const inputStyle = {
            border: '2px solid #E2E8F0',
            borderRadius: '8px',
            padding: '12px 16px',
            fontSize: '14px',
            transition: 'all 0.2s',
            width: '100%'
        };
        
        const buttonStyle = {
            background: '#ff470f',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '16px',
            fontWeight: '600',
            padding: '12px 24px',
            width: '100%',
            cursor: 'pointer',
            transition: 'all 0.2s'
        };
        
        return (
            <Layout>
                <div style={formContainerStyle}>
                    <div style={formCardStyle}>
                        {status !== Status.Success && (
                            <div style={headerStyle}>
                                <h1 style={titleStyle}>{SignupIndexPage.getPreSubmissionTitleMessage(contactSource)}</h1>
                                <p style={subtitleStyle}>
                                Grow with Avni as a digital partner, helping organizations everywhere enhance their solutions and reach.
                                </p>
                            </div>
                        )}

                        {status === Status.Success ? (
                            <div style={{position: 'relative', textAlign: 'center', padding: '4rem 2rem'}}>
                                <a 
                                    href="/"
                                    style={{
                                        position: 'absolute',
                                        top: '0.1rem',
                                        right: '0.1rem',
                                        borderRadius: '6px',
                                        padding: '0.5rem 0.75rem',
                                        fontSize: '24px',
                                        color: '#718096',
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem',
                                        transition: 'all 0.2s ease',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#F7FAFC';
                                    }}
                                    onMouseLeave={(e) => {
                                    }}
                                >
                                    <span style={{fontSize: '24px'}}>×</span>
                                </a>
                                <div style={{...logoStyle, background: '#48BB78', fontSize: '64px', width: '120px', height: '120px', lineHeight: '120px', marginBottom: '2rem'}}>✓</div>
                                <h2 style={{...titleStyle, color: '#2D3748', fontSize: '28px', marginBottom: '1rem'}}>{SignupIndexPage.getCongratulationMessage(contactSource, signeeName)}</h2>
                                <p style={{...subtitleStyle, marginBottom: '2rem', fontSize: '16px', lineHeight: '1.6', color: '#4A5568'}}>{SignupIndexPage.getSubtitleMessage(contactSource, email)}</p>
                                {SignupIndexPage.getCallToAction(contactSource).show && (
                                    <a 
                                        href={SignupIndexPage.getCallToAction(contactSource).url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            ...buttonStyle,
                                            display: 'inline-block',
                                            textDecoration: 'none',
                                            marginTop: '1rem',
                                            background: '#ff470f',
                                            fontSize: '16px',
                                            fontWeight: '600'
                                        }}
                                    >
                                        {SignupIndexPage.getCallToAction(contactSource).text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
                                    </a>
                                )}
                            </div>
                        ) : (
                            <div>
                                {this.state.validationErrors.general && (
                                    <div style={{background: '#FED7D7', border: '1px solid #FC8181', borderRadius: '8px', padding: '1rem', marginBottom: '1rem'}}>
                                        {this.state.validationErrors.general.map((error, index) => (
                                            <p key={index} style={{color: '#C53030', fontSize: '14px', margin: 0}}>{error}</p>
                                        ))}
                                    </div>
                                )}
                                <form onSubmit={this.submitForm} method="post">
                                    <div style={{marginBottom: '1.5rem'}}>
                                        <div style={{display: 'flex', gap: '1rem'}}>
                                            <div style={{flex: 1}}>
                                                <label style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem'}}>First Name *</label>
                                                <input 
                                                    style={{...inputStyle, borderColor: this.state.validationErrors.name ? '#E53E3E' : '#E2E8F0'}}
                                                    name="firstName"
                                                    type="text" 
                                                    placeholder="First name" 
                                                    required
                                                    onChange={(e) => {
                                                        const lastName = document.querySelector('input[name="lastName"]')?.value || '';
                                                        const fullName = `${e.target.value} ${lastName}`.trim();
                                                        this.handleInputChange('name', fullName);
                                                    }}
                                                />
                                            </div>
                                            <div style={{flex: 1}}>
                                                <label style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem'}}>Last Name *</label>
                                                <input 
                                                    style={{...inputStyle, borderColor: this.state.validationErrors.name ? '#E53E3E' : '#E2E8F0'}}
                                                    name="lastName"
                                                    type="text" 
                                                    placeholder="Last name" 
                                                    required
                                                    onChange={(e) => {
                                                        const firstName = document.querySelector('input[name="firstName"]')?.value || '';
                                                        const fullName = `${firstName} ${e.target.value}`.trim();
                                                        this.handleInputChange('name', fullName);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <input type="hidden" name="name" value={this.state.name || ''} />
                                        {this.state.validationErrors.name && (
                                            <p style={{color: '#E53E3E', fontSize: '12px', marginTop: '0.25rem'}}>
                                                {this.state.validationErrors.name.join(', ')}
                                            </p>
                                        )}
                                    </div>
                                    <div style={{marginBottom: '1.5rem'}}>
                                        <label style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem'}}>Professional Email *</label>
                                        <input 
                                            style={{...inputStyle, borderColor: this.state.validationErrors.email ? '#E53E3E' : '#E2E8F0'}}
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                            onChange={(event) => {
                                                this.setState({email: event.target.value});
                                                this.handleInputChange('email', event.target.value);
                                            }}
                                        />
                                        {this.state.validationErrors.email && (
                                            <p style={{color: '#E53E3E', fontSize: '12px', marginTop: '0.25rem'}}>
                                                {this.state.validationErrors.email.join(', ')}
                                            </p>
                                        )}
                                    </div>

                                    <div style={{marginBottom: '1.5rem'}}>
                                        <label style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem'}}>Phone Number *</label>
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            value={this.state.phone}
                                            onChange={(value) => {
                                                this.setState({ phone: value });
                                                this.handleInputChange('phone', value);
                                            }}
                                            onCountryChange={(country) => {
                                                this.setState({ country: country || 'IN' });
                                            }}
                                            defaultCountry="IN"
                                            style={{
                                                '--PhoneInputCountryFlag-height': '1em',
                                                '--PhoneInput-color--focus': '#ff470f',
                                                border: `2px solid ${this.state.validationErrors.phone ? '#E53E3E' : '#E2E8F0'}`,
                                                borderRadius: '8px',
                                                padding: '12px 16px'
                                            }}
                                        />
                                        {this.state.validationErrors.phone && (
                                            <p style={{color: '#E53E3E', fontSize: '12px', marginTop: '0.25rem'}}>
                                                {this.state.validationErrors.phone.join(', ')}
                                            </p>
                                        )}
                                    </div>

                                    <div style={{marginBottom: '1.5rem'}}>
                                        <label style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem'}}>Organisation Name *</label>
                                        <input 
                                            style={{...inputStyle, borderColor: this.state.validationErrors.organisationName ? '#E53E3E' : '#E2E8F0'}}
                                            type="text"
                                            name="organisationName"
                                            placeholder="Enter your organisation name"
                                            required
                                            onChange={(e) => this.handleInputChange('organisationName', e.target.value)}
                                        />
                                        {this.state.validationErrors.organisationName && (
                                            <p style={{color: '#E53E3E', fontSize: '12px', marginTop: '0.25rem'}}>
                                                {this.state.validationErrors.organisationName.join(', ')}
                                            </p>
                                        )}
                                    </div>
                                    {/* Hidden field with NGO as default */}
                                    <input type="hidden" name="organisationType" value="NGO" />

                                    {this.state.showOtherOrgType && (
                                        <div style={{marginBottom: '1.5rem'}}>
                                            <label style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem'}}>Please specify other organisation type</label>
                                            <input 
                                                style={inputStyle}
                                                type="text"
                                                name="otherOrgType"
                                                placeholder="Please specify"
                                            />
                                        </div>
                                    )}

                                    <div style={{marginBottom: '1.5rem'}}>
                                        <label style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem'}}>Sector *</label>
                                        <select 
                                            style={{...inputStyle, borderColor: this.state.validationErrors.sector ? '#E53E3E' : '#E2E8F0'}}
                                            required 
                                            name="sector" 
                                            onChange={(e) => {
                                                this.handleInputChange('sector', e.target.value);
                                                this.setState({ showOtherSector: e.target.value === 'Other' });
                                            }}
                                        >
                                            <option value="">Select Sector</option>
                                            <option value="Health & Wellness">Health & Wellness</option>
                                            <option value="Education & Training">Education & Training</option>
                                            <option value="Environment & Sustainability">Environment & Sustainability</option>
                                            <option value="Social Justice & Human Rights">Social Justice & Human Rights</option>
                                            <option value="Economic Development & Livelihood">Economic Development & Livelihood</option>
                                            <option value="Technology & Innovation">Technology & Innovation</option>
                                            <option value="Community Development">Community Development</option>
                                            <option value="Emergency Response & Relief">Emergency Response & Relief</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {this.state.validationErrors.sector && (
                                            <p style={{color: '#E53E3E', fontSize: '12px', marginTop: '0.25rem'}}>
                                                {this.state.validationErrors.sector.join(', ')}
                                            </p>
                                        )}
                                    </div>

                                    {this.state.showOtherSector && (
                                        <div style={{marginBottom: '1.5rem'}}>
                                            <label style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem'}}>Please describe other sector</label>
                                            <input 
                                                style={inputStyle}
                                                type="text"
                                                name="otherSector"
                                                placeholder="Please describe your sector"
                                            />
                                        </div>
                                    )}

                                    {/* Source of Signup */}
                                    <div style={{marginBottom: '1.5rem'}}>
                                        <label style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem'}}>How did you hear about us?</label>
                                        <select 
                                            style={inputStyle}
                                            name="sourceOfSignup" 
                                            onChange={(e) => this.setState({ sourceOfSignup: e.target.value })}
                                        >
                                            <option value="">Select source</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Website">Website</option>
                                            <option value="Referral">Referral</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {/* Hidden field with empty default */}
                                    <input type="hidden" name="additionalMessage" value="" />

                                    {/* reCAPTCHA */}
                                    <div style={{marginBottom: '1.5rem'}}>
                                        <label style={{display: 'block', fontSize: '14px', fontWeight: '600', color: '#2D3748', marginBottom: '0.5rem'}}>Security Verification *</label>
                                        <ReCAPTCHA
                                            ref={this.recaptchaRef}
                                            sitekey="6LfOPawrAAAAAC_5xEjRNFx3RHAw6MY5y3Q2CKc8"
                                            onChange={(value) => {
                                                this.setState({ recaptchaValue: value });
                                                this.handleInputChange('recaptcha', value);
                                            }}
                                            onExpired={() => {
                                                this.setState({ recaptchaValue: null });
                                                this.handleInputChange('recaptcha', null);
                                            }}
                                        />
                                        {this.state.validationErrors.recaptcha && (
                                            <p style={{color: '#E53E3E', fontSize: '12px', marginTop: '0.25rem'}}>
                                                {this.state.validationErrors.recaptcha.join(', ')}
                                            </p>
                                        )}
                                    </div>
                                    {/* Terms and Conditions */}
                                    <div style={{marginBottom: '1.5rem'}}>
                                        <label style={{display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '14px', color: '#2D3748', cursor: 'pointer'}}>
                                            <input 
                                                type="checkbox"
                                                checked={this.state.termsAccepted}
                                                onChange={(e) => this.setState({ termsAccepted: e.target.checked })}
                                                style={{marginTop: '2px'}}
                                                required
                                            />
                                            <span>
                                                I agree with the <a href="/privacy-policy" target="_blank" style={{color: '#ff470f', textDecoration: 'underline'}}>Avni Privacy Policy</a> and understand that my organization will process the data I collect in accordance with applicable data protection laws *
                                            </span>
                                        </label>
                                        {this.state.validationErrors.terms && (
                                            <p style={{color: '#E53E3E', fontSize: '12px', marginTop: '0.25rem'}}>
                                                {this.state.validationErrors.terms.join(', ')}
                                            </p>
                                        )}
                                    </div>

                                    {/* Marketing Consent */}
                                    <div style={{marginBottom: '1.5rem'}}>
                                        <label style={{display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '14px', color: '#2D3748', cursor: 'pointer'}}>
                                            <input 
                                                type="checkbox"
                                                checked={this.state.marketingConsent}
                                                onChange={(e) => this.setState({ marketingConsent: e.target.checked })}
                                                style={{marginTop: '2px'}}
                                            />
                                            <span>
                                                I would like to receive updates about Avni features and community news. I can unsubscribe at any time by clicking the link in any communication received.
                                            </span>
                                        </label>
                                    </div>

                                    {/* Honeypot field for bot detection */}
                                    <input type="text" name="_gotcha" style={{display: "none"}} />
                                    
                                    {/* Submit Button */}
                                    <button 
                                        style={{
                                            ...buttonStyle,
                                            opacity: this.state.isSubmitting ? 0.7 : 1,
                                            cursor: this.state.isSubmitting ? 'not-allowed' : 'pointer'
                                        }}
                                        type="submit"
                                        disabled={this.state.isSubmitting}
                                    >
                                        {this.state.isSubmitting ? 'Processing...' : SignupIndexPage.getSignupButtonLabel(contactSource)}
                                    </button>

                                    <input type="hidden" name="source" value={contactSource || 'direct'}/>
                                </form>
                            </div>
                        )}
                        
                        {status === Status.Error && (
                            <div style={{textAlign: 'center', color: '#E53E3E', marginTop: '1rem'}}>
                                <p>Oops! There was an error. Please try again.</p>
                            </div>
                        )}
                    </div>
                </div>

            </Layout>
        )
    }
}
