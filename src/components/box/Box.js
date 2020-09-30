import React from "react";
// import { useSelector } from "react-redux";

const Box = ({
  color, //colorAll, index
  index,
  changeBoxCol,
}) => {
  // const ownColor = useSelector((state) => state.singleColor[index]);
  return (
    <div
      style={{
        width: "320px",
        height: "170px",
        backgroundImage: `url(${"/images/block.png"})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        backgroundColor: color, //ownColor ? ownColor : colorAll,
      }}
    >
      <input
        style={{
          border: "none",
          backgroundColor: "transparent",
          height: "13px",
          fontSize: "10px",
        }}
        type="text"
        placeholder="change color"
        onChange={(e) => {
          changeBoxCol(index, e.target.value);
        }}
      />
    </div>
  );
};

export default Box;
