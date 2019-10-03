import React from "react";
import Layout from "../../components/Layout";


export default function Index() {
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <div className="content">
              <h1 className="title">Demo</h1>
              <h2>Install the app from Android Play Store</h2>
              <p>
                On your Android device, go to <b>Play Store</b>&nbsp;
                <a href="https://play.google.com/store/apps/details?id=com.openchsclient">[link]</a>,
                &nbsp;search for OpenCHS, and <b>install</b> the app.
              </p>
              <p>
                We have following logins (each meant for demonstrating different modules on the same platform).
                <br/>
                <br/>
                <small>
                  <i>
                    <b>Note</b>: After trying one demo if you want to try a different demo login,
                    then you would need to uninstall the app and install it again.
                  </i>
                </small>
              </p>
              <br/>
            </div>
          </div>
          <div className="column is-half">
            <br/>
            <div className="content has-background-info" style={{ padding: '2em'}}>
              <h2>Schedule a one-on-one demo</h2>
              <p>
                If you would like a demo in-person or via videoconference,
                click the button below, answer some questions in the form
                and we'll get back to you
                <br/>
                <br/>
                <a href="/schedule-demo-form" className="button is-dark">Schedule Demo</a>
              </p>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <div className="content">
              <h3>Recommended demos</h3>
              <hr/>
              <h4>Adolescent Continuum of Care</h4>
              <p>
                User=adol-demo
                <br/>
                Password=password
              </p>

              <h4>Child Nutrition & Growth</h4>
              <p>
                User=phulwari-demo
                <br/>
                Password=password
              </p>

              <h4>Longitudinal data capture for Dams</h4>
              <p>
                User=ddm-demo
                <br/>
                Password=password
              </p>
              <br/>
            </div>
          </div>
          <div className="column is-half">
            <div className="content">
              <h3>Demo showcasing health modules</h3>
              <hr/>
              <h4>Cancer Screening</h4>
              <p>
                User=canscr-demo
                <br/>
                password=password
                <br/>
                <br/>
                <small>
                  <i>
                    <b>Note</b>: this one doesn't use smart forms (with skip logic etc),
                    since it was developed as a custom module but now the platform supports
                    all rules including smart forms for custom modules too
                  </i>
                </small>
              </p>
              <h4>Pregnancy, newborn and child growth</h4>
              <p>
                User=mch-demo
                <br/>
                Password=password
                <br/>
                <br/>
                <small>
                  <i>
                    <b>Note</b>: this one doesn't have visit scheduling and hence
                    My Dashboard is not useful in login
                  </i>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  )
}
