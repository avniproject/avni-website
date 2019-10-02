import React from "react";
import Layout from "../../components/Layout";


export default function Index() {
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-three-fifths">
            <div className="content">
              <h1 className="title">Demo</h1>
              <h2>Install the app from Android Playstore</h2>
              <p>
                On your Android device, go to play store, search for OpenCHS. Install the app.
              </p>
              <p>
                We have following logins (each meant for demonstrating different modules on the same platform).
                Note: After trying one demo if you want to try a different demo login, then you would need to
                uninstall the app and install it again.
              </p>
              <br/>
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
              <h3>Demo showcasing health modules</h3>
              <hr/>
              <h4>Cancer Screening</h4>
              <p>
                User=canscr-demo
                <br/>
                password=password
                <br/>
                (please note: this one doesn't use smart forms (with skip logic etc),
                since it was developed as a custom module but now the platform supports
                all rules including smart forms for custom modules too)
              </p>
              <h4>Pregnancy, newborn and child growth</h4>
              <p>
                User=mch-demo
                <br/>
                Password=password
                <br/>
                (please note: this one doesn't have visit scheduling and hence
                My Dashboard is not useful in login)
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
