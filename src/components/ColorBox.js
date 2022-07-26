import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../context/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    // useContext 사용
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor
        }}
      />    
    </>

    // Consumer 사용
    // <ColorConsumer>
    //   {({state}) => (
    //     <>
    //       <div
    //         style={{
    //           width: "64px",
    //           height: "64px",
    //           background: state.color,
    //         }}
    //       />
    //       <div
    //         style={{
    //           width: "32px",
    //           height: "32px",
    //           background: state.subcolor,
    //         }}
    //       />
    //     </>
    //   )}
    // </ColorConsumer>
  );
};

export default ColorBox;
