import React from 'react';

const AvniIntroVideo = () => {
  return (
    <div className="columns">
      <div className="column is-full">
        <div className='has-ratio' style={{
          paddingTop: '56.25%',
          position: 'relative'
        }}>
          <iframe className='is-responsive' style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0
          }} src="https://www.youtube.com/embed/Xt9EUNXKfWI?si=nm6ZIMLOUQH9tyCR"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default AvniIntroVideo;

