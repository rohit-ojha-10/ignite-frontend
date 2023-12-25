export const onPressConnect = async () => {
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

export const onPressLogout = () => setAddress("");
