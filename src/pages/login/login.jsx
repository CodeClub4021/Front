import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import "./login.css";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default Login;