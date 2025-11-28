import React from 'react';
import PropTypes from 'prop-types';
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share';

const Share = ({socialConfig, tags}) => (
    <div className="post-social">
        <FacebookShareButton url={socialConfig.config.url} className="share-button">
            <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={socialConfig.config.url} className="share-button"
                            title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')}
                            hashtags={tags}>
            <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={socialConfig.config.url} className="share-button"
                             title={socialConfig.config.title}>
            <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={socialConfig.config.url} className="share-button"
                             title={socialConfig.config.title}>
            <WhatsappIcon size={32} round />
        </WhatsappShareButton>
    </div>
);

Share.propTypes = {
    socialConfig: PropTypes.shape({
        twitterHandle: PropTypes.string.isRequired,
        config: PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
    tags: [],
};

export default Share;