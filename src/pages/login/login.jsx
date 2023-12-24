import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import NavbarComponent from "../../components/navbar/navbar";
import "./login.css";
import Footer from "../../components/footer/footer";


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
    <div className="w-full h-full">
      <NavbarComponent isLogin={false} />
    <AppContainer>
      <AccountBox />
    </AppContainer>
    <Footer />
    </div>
  );
}

{/* <AppContainer className="flex my-48"> */}


export default Login;