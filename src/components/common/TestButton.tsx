import React from 'react';
import styled from "@emotion/styled";

const Button = styled.button({
  borderRadius: 4,
  border: "solid black 3px"
});

const TestButton = () => {
  return (
    <Button>
      Test button
    </Button>
  );
};

export default TestButton;