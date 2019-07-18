import React from "react";
import styled from 'styled-components'

const Numbered = styled.button`
  border: 1px solid black;
  border-radius: 100%;
  background-color: blue;
  margin: 1px;

`

const NumberButton = (props) => {
  return (
    <Numbered>
      {props.buttonN}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </Numbered>
  );
};

export default NumberButton