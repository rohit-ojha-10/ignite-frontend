import React from "react";
import { cardData } from "../../../shared/constants";
import { CustomCard } from "../../../shared/components/CustomCard";
import styled from "@emotion/styled";

export default function FundRaiserCards() {
  return (
    <StyledDiv>
      {cardData.map((props, idx) => {
        console.log({ props });
        return <CustomCard key={idx} props={props} />;
      })}
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-self: center;
  justify-content: space-around;
`;
