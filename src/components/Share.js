import React from 'react';
import PropTypes from 'prop-types';
const Share = ({socialConfig, tags}) => {
    const url = encodeURIComponent(socialConfig.config.url);
    const title = encodeURIComponent(socialConfig.config.title);
    const via = (socialConfig.twitterHandle || '').replace('@', '');
    const hashtags = Array.isArray(tags) ? tags.join(',') : '';

    const links = [
        {
            key: 'facebook',
            href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            label: 'Facebook'
        },
        {
            key: 'twitter',
            href: `https://twitter.com/intent/tweet?url=${url}&text=${title}${via ? `&via=${via}` : ''}${hashtags ? `&hashtags=${encodeURIComponent(hashtags)}` : ''}`,
            label: 'Twitter'
        },
        {
            key: 'linkedin',
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            label: 'LinkedIn'
        },
        {
            key: 'whatsapp',
            href: `https://api.whatsapp.com/send?text=${title}%20${url}`,
            label: 'WhatsApp'
        }
    ];

    return (
        <div className="post-social">
            {links.map(link => (
                <a
                    key={link.key}
                    href={link.href}
                    className="share-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${link.label}`}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', background: '#f2f2f2', color: '#333', textDecoration: 'none', marginRight: 8, fontSize: 12 }}
                    title={link.label}
                >
                    {link.label[0]}
                </a>
            ))}
        </div>
    );
};

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