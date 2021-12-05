import styled from 'styled-components';
import { Typography } from '@trueprofile.io/react-ui';
import {
  BLACK,
  GRAY,
  GREEN_CONFIRM,
  GREEN_HIGHLIGHT,
  LINES,
  WHITE,
} from 'constants/colors';
import { FONT_STANDARD, LH_STANDARD } from 'constants/text';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;

  .TPInput-container {
    position: relative;
    display: flex;
    border: 1px solid ${LINES};
    height: 40px;
    box-sizing: border-box;

    &.TPInput-error {
      border-color: ${GREEN_CONFIRM};
    }

    &.TPInput-readOnly {
      border-color: transparent;
      pointer-events: none;
    }

    &.TPInput-disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &:focus-within {
      outline: 0;
      border-color: ${GREEN_HIGHLIGHT};
    }
  }
`;

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  border: none;
  color: ${BLACK};
  padding: 8px 12px;
  font-size: ${FONT_STANDARD};
  line-height: ${LH_STANDARD};
  background: ${WHITE};
  box-sizing: border-box;

  &::placeholder {
    color: ${GRAY};
  }

  &:focus {
    outline: 0;
  }
`;

export const Label = styled.label`
  margin-bottom: 6px;

  span {
    display: block;
  }
`;

export const Error = styled(Typography.Paragraph)`
  margin-top: 6px;
`;

export const Adorment = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  white-space: nowrap;

  &.TPInput-adorment-start {
    padding-right: 0;
  }

  &.TPInput-adorment-end {
    padding-left: 0;
  }
`;
