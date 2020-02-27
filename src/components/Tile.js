import React from "react";
import ModalImage from "./ModalImage";


export default function Tile({title, description, detailsLabel, detailsLink, images, htmlSnippets}) {
    return (
        <div className="tile is-child">
            <article className="box has-background-grey-lighter">
                <p className="subtitle"><b>{title}</b></p>
                <p>
                    {description ||
                    ``
                    }
                    {<span dangerouslySetInnerHTML={{__html: htmlSnippets}}></span>}
                </p>
                {detailsLink &&
                <div style={{textAlign: 'right'}}>
                    <a href={detailsLink}>... more</a>
                </div>
                }
                {images &&
                <div>
                    <br/>
                    {images.map(img => <ModalImage src={img.src} altText={img.altText} thumbnailWidth={100}/>)}
                </div>
                }
            </article>
        </div>
    );
}

export function VerticalTileGroup({children, extraClasses}) {
    let classes = "tile is-parent is-vertical";
    return (
        <div className={extraClasses ? `${classes} ${extraClasses}` : classes}>
            {children}
        </div>
    );
}

