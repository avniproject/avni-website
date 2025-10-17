import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            key="google-ads-tag"
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-17511540130"
        />,
        <script
            key="google-ads-inline"
            dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17511540130');
        `,
            }}
        />,
    ]);
};
