import styled from "styled-components";
import { lightBlueBackground, subtleBoxShadow, greenBoxShadow } from "./Styles";

export const Tile = styled.div`
  ${lightBlueBackground};
  ${subtleBoxShadow};
  padding: 10px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow};
  }
`;
