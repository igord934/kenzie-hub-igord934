import styled, { css } from "styled-components";

export const Button = styled.button`
  border-style: none;
  border-radius: 4px;
  padding: 11px 22px;
  color: var(--text-color);
  cursor: pointer;

  ${(props) => {
    console.log(props.typeName == "primary");
    if (props.typeName == "primary") {
      return css`
        background-color: var(--primary);
        &:hover {
          background-color: var(--primary-focus);
        }
      `;
    } else if (props.typeName == "negative") {
      return css`
        background-color: var(--primary-negative);
      `;
    } else if (props.typeName == "grey") {
      return css`
        background-color: var(--grey-1);
        &:hover {
          background-color: var(--grey-2);
        }
      `;
    } else if (props.typeName == "darkGrey") {
      return css`
        background-color: var(--grey-3);
        &:hover {
          background-color: var(--grey-2);
        }
      `;
    }
  }}
`;

// .button {

//   }
//   .button.primary {
//     background-color: var(--primary);
//   }
//   .button.primary:hover {
//     background-color: var(--primary-focus);
//   }
//   .button.negative {
//     background-color: var(--primary-negative);
//   }
//   .button.Grey {
//     background-color: var(--grey-1);
//   }
//   .button.Grey:hover {
//     background-color: var(--grey-2);
//   }
//   .button.darkGrey {
//     background-color: var(--grey-3);
//   }
//   .button.darkGrey:hover {
//     background-color: var(--grey-2);
//   }
