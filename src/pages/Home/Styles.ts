import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  height: 80vh;
  margin: 10px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 10%;
`;

export const Input = styled.input<{ error: boolean }>`
  box-sizing: border-box;
  text-align: center;
  padding: 15px 20px;
  background: #fafafa;
  border: 1px solid ${(props) => (props.error ? "red" : "transparent")};
  color: #777;
  border-radius: 50px;
  margin-bottom: 20px;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  position: relative;
  width: 25vw;

  :focus {
    /* background: #f0ff; */
    outline: 1px solid #ddd;
  }
  ::placeholder {
    text-align: center;
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const ErrorMsg = styled.span`
  padding: 7px 0px;
  margin-bottom: 12px;
  font-family: roboto;
  font-weight: 600;
  color: red;
  min-height: 15px;
  cursor: default;
`;
