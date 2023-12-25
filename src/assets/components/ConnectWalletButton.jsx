import { Button } from "@material-tailwind/react";

const ConnectWalletButton = ({
  onPressLogout,
  onPressConnect,
  loading,
  address,
}) => {
  return (
    <div>
      {address && !loading ? (
        <Button variant="outlined" onClick={onPressLogout}>
          Disconnect
        </Button>
      ) : loading ? (
        <Button variant="outlined"
          disabled
        >
          <div>Loading...</div>
        </Button>
      ) : (
        <Button variant="filled" onClick={onPressConnect}>
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
