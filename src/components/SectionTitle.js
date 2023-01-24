import React from "react";

function SectionTitle(props) {
  return (
    <div>
      <div className="container fw-bold fs-5 my-2">
        <div className="section-title">
            <span>{props.title}</span>
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;
