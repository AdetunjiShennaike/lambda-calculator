import React from "react";
import styled from 'styled-components'

const Operand = styled.button`
  border: 1px solid black;
  border-radius: 100%;
  background-color: skyblue;
  margin: 1px;

`
const OperatorButton = (props) => {
  return (
    <Operand>
      {props.buttonO}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </Operand>
  );
};

export default OperatorButton