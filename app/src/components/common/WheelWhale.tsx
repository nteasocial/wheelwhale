import React from "react";
import { useHistory } from "react-router";

const wheelwhaleLogoView = () => {
  const history = useHistory();

  return (
    <h3
      className="text-green-500 font-black italic font-logo text-3xl select-none cursor-pointer"
      onClick={() => history.push("/")}
    >
      wheelwhale
    </h3>
  );
};

export default wheelwhaleLogoView;
