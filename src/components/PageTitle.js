import React from "react";

const PageTitle = (props) => {
  return (
    <h1
      style={{ color: "white", padding: "30px", gridRow: 1 }}
      data-testid="pageTitle"
    >
      {props.pageTitle}
    </h1>
  );
};

export default PageTitle;
