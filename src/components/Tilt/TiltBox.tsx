import React from "react";
import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";

const StyledTiltBox = styled.div`
  min-height: 250px;
  min-width: 250px;
  background: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, #ff00ba 0%, #fae713 100%);
  transform-style: preserve-3d;
  will-change: transform;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);

  p {
    font-weight: 800;
    background: black;
    padding: 5px;
  }
`;
const TiltBox = () => {
  const tiltRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (tiltRef.current) {
      const { current: tiltNode } = tiltRef;

      const vanillaTiltOptions = {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      };
      VanillaTilt.init(tiltNode, vanillaTiltOptions);
    }
  }, []);

  return (
    <StyledTiltBox ref={tiltRef}>
      <p>Tiltbox</p>
    </StyledTiltBox>
  );
};

export default TiltBox;
