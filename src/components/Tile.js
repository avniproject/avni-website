import React, { useState } from "react";
import ModalImage from "./ModalImage";

export default function Tile({ title, description, detailsLabel, detailsLink, images, htmlSnippets }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <div className="tile is-child">
            <article className="box has-background-grey-lighter">
                <p className="subtitle"><b>{title}</b></p>
                {description && <p>
                    {description ||
                        ``
                    }
                    {<span dangerouslySetInnerHTML={{ __html: htmlSnippets }} />}
                </p>}
                {detailsLink &&
                    <div style={{ textAlign: 'right' }}>
                        <a href={detailsLink}>... more</a>
                    </div>
                }
                {images &&
                    <div>
                        {description && <br />}
                        {images.map(img => (
                            <img
                                key={img.src}
                                src={img.src}
                                alt={img.altText}
                                width={100}
                                style={{ cursor: "pointer", marginLeft: "20px" }}
                                onClick={() => openModal(img)}
                            />
                        ))}
                    </div>
                }
            </article>
            {isModalOpen && (
                <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
                    <div className="modal-background" onClick={closeModal} />
                    <div className="modal-content">
                        <p className="image">
                            <img
                                src={modalContent.src}
                                alt={modalContent.altText}
                                style={{
                                    maxWidth: '800px',
                                    maxHeight: "96vh"
                                }}
                            />
                        </p>
                    </div>
                    <button
                        className="modal-close is-large"
                        aria-label="close"
                        onClick={closeModal}
                    />
                </div>
            )}
        </div>
    );
}

export function VerticalTileGroup({ children, extraClasses }) {
    let classes = "tile is-parent is-vertical";
    return (
        <div className={extraClasses ? `${classes} ${extraClasses}` : classes}>
            {children}
        </div>
    );
}
