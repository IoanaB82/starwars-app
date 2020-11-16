import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        backgroundColor: "#1b1b1b",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%)",
      }}
    >
      <img src="/loader.gif" alt="loader" />
    </div>
  );
};

export default Loader;
