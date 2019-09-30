import React from "react";


export default function Tile({ title, description, detailsLink }) {
  return (
    <div className="tile is-child">
      <article className="box has-background-grey-lighter">
        <h4 className="title">{title}</h4>
        <p>
          {description ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing.`
          }
        </p>
        {detailsLink &&
          <div style={{ textAlign: 'right' }}>
            <a href={detailsLink}>... more</a>
          </div>
        }
      </article>
    </div>
  );
}

export function VerticalTileGroup({ children, extraClasses }) {
  let classes = "tile is-parent is-vertical"
  return (
    <div className={ extraClasses ? `${classes} ${extraClasses}` : classes }>
      {children}
    </div>
  );
}
