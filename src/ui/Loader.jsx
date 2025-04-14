import React from "react";
import { useNavigation } from "react-router-dom";

function Loader() {
  // const navigate = useNavigation();
  // console.log(navigate);
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
