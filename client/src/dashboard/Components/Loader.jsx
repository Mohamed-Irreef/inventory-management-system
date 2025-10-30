import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-page">
      <div className="loading-spinner">
        <ColorRing
          visible={true}
          height="70"
          width="70"
          colors={["#e15b64", "#d63c4c", "#ff6b6b", "#f47e60", "#fa9a8e"]}
        />
      </div>
    </div>
  );
};

export default Loader;
