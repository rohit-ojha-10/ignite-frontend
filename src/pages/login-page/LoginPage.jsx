import { useState } from "react";
import Web3 from "web3";
import LoginCard from "./LoginCard";
import styled from "@emotion/styled";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  const onPressConnect = async () => {
    setLoading(true);
    try {
      if (window?.ethereum?.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        setAddress(account);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const onPressLogout = () => setAddress("");
  return (
    <StyledDiv>
      <LoginCard />
      <ToastContainer />
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
`;

export default LoginPage;
