import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 22px;
  background-color: var(--grey-4);
  color: var(--grey-0);
  box-sizing: border-box;
  .header {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
  }
  .infos {
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid var(--grey-3);
    border-bottom: 1px solid var(--grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 90%;
      padding: 35px 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 1200px;
      box-sizing: border-box;
      h2 {
        color: var(--grey-0);
      }
      span {
        color: var(--grey-1);
      }
      @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
  .posts {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 90%;
      padding: 35px 0;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      max-width: 1200px;
      box-sizing: border-box;
      display: none;
      @media (min-width: 769px) {
        display: flex;
      }
    }
  }
`;

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-4);
  display: flex;
  align-items: center;
  justify-content: center;

  // Animação de Load pego na internet
  // Link: "https://loading.io/css/"
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--primary);
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
