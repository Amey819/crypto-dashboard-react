import styled from "styled-components";
import {
  lightBlueBackground,
  subtleBoxShadow,
  greenBoxShadow,
  redBoxShadow,
} from "./Styles";

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

export const DeletableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow};
  }
`;

export const DisableTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;
