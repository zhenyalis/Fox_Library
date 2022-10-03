import styled from "styled-components";
import { config } from "../Config/ConfigText";

export const EmptyBlockList = () => {
  return (
    <Wrapper>
      <EmptyDescritionBlockList>
      {config.heading.titleBlocListBookText}
      </EmptyDescritionBlockList>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  margin: 133px auto;
`;
export const EmptyDescritionBlockList = styled.h2`
  text-align: center;
  font-family: Open Sans;
  font-size: ${(props) => props.theme.fonts["side"]};
  font-weight: 600;
  line-height: 33px;
  color:${(props) => props.theme.colors["secondaryGrey"]};
`;
