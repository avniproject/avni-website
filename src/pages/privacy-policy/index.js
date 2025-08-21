import React from "react";
import Layout from "../../components/Layout";
import ContactUs from "../../components/ContactUs";

export default function PrivacyPolicy() {
    return (
        <Layout>
            <section className="section" style={{backgroundColor: '#fafafa', minHeight: '100vh'}}>
                <div className="container" style={{maxWidth: '800px'}}>
                    <div className="content" style={{
                        backgroundColor: 'white',
                        padding: '3rem',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        lineHeight: '1.7',
                        fontSize: '16px'
                    }}>
                        <div style={{textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '2rem'}}>
                            <h1 style={{
                                fontSize: '2.5rem',
                                fontWeight: '700',
                                color: '#2d3748',
                                marginBottom: '0.5rem',
                                letterSpacing: '-0.025em'
                            }}>Avni Privacy Policy</h1>
                            <p style={{
                                color: '#718096',
                                fontSize: '1.1rem',
                                margin: '0'
                            }}>Effective Date: May 6, 2020</p>
                        </div>

                        <div style={{marginBottom: '2.5rem'}}>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#4a5568',
                                marginBottom: '1.5rem',
                                fontStyle: 'italic',
                                padding: '1.5rem',
                                backgroundColor: '#f7fafc',
                                borderLeft: '4px solid #4299e1',
                                borderRadius: '4px'
                            }}>
                                This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
                            </p>
                        </div>

                        <div style={{marginBottom: '2.5rem'}}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '1rem',
                                paddingBottom: '0.5rem',
                                borderBottom: '1px solid #e2e8f0'
                            }}>What personal information do we collect from the people that use the Avni app?</h2>
                            
                            <p style={{marginBottom: '1rem'}}>
                                Avni is a work application that you will use to service your community members or customers (customers from there on). We do not collect any personal information about you. We get and keep the information that you manually provide to us about whom you service. We only store the fact that you provided that information. We get and keep location information if you or your employer has enabled that configuration.
                            </p>
                            
                            <p style={{marginBottom: '1rem'}}>
                                Implementers that choose to collect PII data, can setup Avni to be compliant with domestic and other applicable international laws such as Information Technology Act, 2000 and corresponding IT Rules 2021, Digital Personal Data Protection (DPDP) Act, 2023.
                            </p>
                        </div>

                        <div style={{marginBottom: '2.5rem'}}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '1rem',
                                paddingBottom: '0.5rem',
                                borderBottom: '1px solid #e2e8f0'
                            }}>When do we collect information?</h2>
                            
                            <p style={{marginBottom: '1rem'}}>
                                When you synchronise the data with the server manually.
                            </p>
                        </div>

                        <div style={{marginBottom: '2.5rem'}}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '1rem',
                                paddingBottom: '0.5rem',
                                borderBottom: '1px solid #e2e8f0'
                            }}>How do we use your information?</h2>
                            
                            <ul style={{paddingLeft: '1.5rem', marginBottom: '1rem'}}>
                                <li style={{marginBottom: '0.5rem'}}>
                                    The information provided to us by you about your customers is used for research purpose by the organisation for whom you work for. Avni doesn't use this information.
                                </li>
                                <li style={{marginBottom: '0.5rem'}}>
                                    The information collected about you is used by your organisation members to understand your work load.
                                </li>
                            </ul>
                        </div>

                        <div style={{marginBottom: '2.5rem'}}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '1rem',
                                paddingBottom: '0.5rem',
                                borderBottom: '1px solid #e2e8f0'
                            }}>How do we protect your information?</h2>
                            
                            <ul style={{paddingLeft: '1.5rem', marginBottom: '1rem'}}>
                                <li style={{marginBottom: '0.5rem'}}>We do not use vulnerability scanning and/or scanning to PCI standards.</li>
                                <li style={{marginBottom: '0.5rem'}}>We never ask for credit card numbers.</li>
                                <li style={{marginBottom: '0.5rem'}}>We do not use Malware Scanning.</li>
                            </ul>
                            
                            <p style={{marginBottom: '1rem'}}>
                                Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL or TLS) technology.
                            </p>
                        </div>

                        <div style={{marginBottom: '2.5rem'}}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '1rem',
                                paddingBottom: '0.5rem',
                                borderBottom: '1px solid #e2e8f0'
                            }}>Do we use 'cookies'?</h2>
                            
                            <p style={{marginBottom: '1rem'}}>
                                We do not use cookies for tracking purposes and it is not applicable in the Avni app. We do not track your activities on your device.
                            </p>
                        </div>

                        <div style={{marginBottom: '2.5rem'}}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '1rem',
                                paddingBottom: '0.5rem',
                                borderBottom: '1px solid #e2e8f0'
                            }}>Third-party disclosure</h2>
                            
                            <p style={{marginBottom: '1rem'}}>
                                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.
                            </p>
                        </div>

                        <div style={{marginBottom: '2.5rem'}}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '1rem',
                                paddingBottom: '0.5rem',
                                borderBottom: '1px solid #e2e8f0'
                            }}>Third-party links</h2>
                            
                            <p style={{marginBottom: '1rem'}}>
                                We do not include or offer third-party products or services on our website.
                            </p>
                            
                            <p style={{marginBottom: '1rem'}}>
                                We do not specifically market to children under the age of 13 years old.
                            </p>
                        </div>

                        <div style={{marginBottom: '2.5rem'}}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '1rem',
                                paddingBottom: '0.5rem',
                                borderBottom: '1px solid #e2e8f0'
                            }}>CAN SPAM Act</h2>
                            
                            <p style={{marginBottom: '1rem'}}>
                                The Avni app is not meant to be used in USA.
                            </p>
                        </div>

                        <div style={{marginBottom: '2.5rem'}}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '1rem',
                                paddingBottom: '0.5rem',
                                borderBottom: '1px solid #e2e8f0'
                            }}>Technical Note</h2>
                            
                            <p style={{marginBottom: '1rem'}}>
                                The Avni app is a work application provided by organisations to their staff. Our current android version doesn't require READ_PHONE_STATE version but Play Store doesn't understand this logic and is asking for this because older version of apk had that permission requirement.
                            </p>
                        </div>

                        <div style={{
                            marginTop: '3rem',
                            padding: '2rem',
                            backgroundColor: '#f7fafc',
                            borderRadius: '8px',
                            borderTop: '3px solid #4299e1'
                        }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#2d3748',
                                marginBottom: '1rem'
                            }}>Contact Information</h2>
                            
                            <p style={{marginBottom: '1.5rem', color: '#4a5568'}}>
                                If there are any questions regarding this privacy policy, you may contact us using the information below:
                            </p>
                            
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                                fontSize: '1.1rem'
                            }}>
                                <div 
                                    style={{
                                        padding: '0.75rem',
                                        backgroundColor: 'white',
                                        borderRadius: '4px',
                                        border: '1px solid #e2e8f0',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        position: 'relative'
                                    }}
                                    onClick={() => {
                                        navigator.clipboard.writeText('hello@samanvayfoundation.org').then(() => {
                                            // Show a temporary tooltip
                                            const element = document.activeElement;
                                            const tooltip = document.createElement('div');
                                            tooltip.textContent = 'Copied!';
                                            tooltip.style.cssText = `
                                                position: absolute;
                                                top: -30px;
                                                left: 50%;
                                                transform: translateX(-50%);
                                                background: #2d3748;
                                                color: white;
                                                padding: 4px 8px;
                                                border-radius: 4px;
                                                font-size: 12px;
                                                z-index: 1000;
                                                pointer-events: none;
                                            `;
                                            element.parentNode.style.position = 'relative';
                                            element.parentNode.appendChild(tooltip);
                                            setTimeout(() => {
                                                if (tooltip.parentNode) {
                                                    tooltip.parentNode.removeChild(tooltip);
                                                }
                                            }, 2000);
                                        });
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#f1f5f9';
                                        e.target.style.borderColor = '#4299e1';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.borderColor = '#e2e8f0';
                                    }}
                                    title="Click to copy email address"
                                >
                                    <span style={{
                                        marginLeft: '8px',
                                        fontSize: '32px',
                                        color: '#718096',
                                        opacity: '0.7', margin: '0 8px'
                                    }}>📋</span>
                                    hello@samanvayfoundation.org
                                </div>
                            </div>
                        </div>
                        
                        <div style={{
                            textAlign: 'center',
                            marginTop: '3rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid #e2e8f0',
                            color: '#718096',
                            fontSize: '0.9rem'
                        }}>
                            <em>Last Updated: May 6, 2020</em>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <hr/>
            <ContactUs/>
        </Layout>
    )
}
