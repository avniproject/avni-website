import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
function SEO({ description, lang, meta, image: metaImage, title, pathname }) {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
    );
    const metaDescription = description || site.siteMetadata.description;
    const image =
        metaImage && metaImage.src
            ? `${site.siteMetadata.siteUrl}${metaImage.src}`
            : null;
    const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            link={
                canonical
                    ? [
                        {
                            rel: "canonical",
                            href: canonical,
                        },
                    ]
                    : []
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `Website`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: `data collection, reporting platform, open-source, mobile data collection, algorithmic decision support, field service, Avni`,
                },
                {
                    property: `og:url`,
                    content: canonical,
                },
                {
                    property: `og:site_name`,
                    content: site.siteMetadata.title,
                },
                {
                    name: `twitter:site`,
                    content: site.siteMetadata.twitterHandle,
                },
            ]
                .concat(
                    metaImage
                        ? [
                            {
                                property: "og:image",
                                content: image,
                            },
                            {
                                property: "og:image:width",
                                content: metaImage.width,
                            },
                            {
                                property: "og:image:height",
                                content: metaImage.height,
                            },
                            {
                                property: "twitter:image",
                                content: image,
                            },
                            {
                                name: "twitter:card",
                                content: "summary_large_image",
                            },
                        ]
                        : [
                            {
                                name: "twitter:card",
                                content: "summary",
                            },
                        ]
                )
                .concat(meta)}
        />
    )
}
SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }),
    pathname: PropTypes.string,
};

export default SEO
