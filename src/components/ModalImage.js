import React, {useState} from "react";


export default function ModalImage({
                                       src,
                                       altText,
                                       thumbnailWidth,
                                       thumbnailHeight,
                                       modalImageWidth,
                                       modalImageMaxHeight
                                   }) {
    const [isActive, setActive] = useState(false);
    const toggleActive = () => setActive(!isActive);
    return (
        <span className="modal-image">
      <img src={src} alt={altText}
           onClick={toggleActive}
           width={thumbnailWidth || '200'} height={thumbnailHeight} style={{marginLeft: "20px", cursor: "pointer"}}/>
      <div className={`modal ${isActive ? " is-active" : ''}`}>
        <div className="modal-background" onClick={() => {
            setActive(!isActive)
        }}/>
        <div className="modal-content">
          <p className="image">
            <img
                src={src}
                alt={altText}
                style={{
                    maxWidth: modalImageWidth || '800px',
                    maxHeight: modalImageMaxHeight || "96vh"
                }}
            />
          </p>
        </div>
        <button
            className="modal-close is-large"
            aria-label="close"
            onClick={toggleActive}
        />
      </div>
    </span>
    );
}
