import React from "react";
import styled from 'styled-components'

const Special = styled.button`
  border: 1px solid black;
  border-radius: 100%;
  background-color: teal;
  margin: 1px;

`
const SpecialButton = (props) => {
  return (
    <Special>
      {props.buttonS}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </Special>
  );
};

export default SpecialButton