import _ from "lodash";
import React from "react";

class GA {
    static getSrc() {
        return <script async src="https://www.google-analytics.com/analytics.js"/>;
    }

    static getCode() {
        return <script>
            {`
      window.ga=window.ga||function()
      {(ga.q = ga.q || []).push(arguments)}
      ;ga.l=+new Date; ga('create', 'UA-151665102-1', 'auto');
      ga('send','pageview');
    `}
        </script>;
    }
}

export default GA;