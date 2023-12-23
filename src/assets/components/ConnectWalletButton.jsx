const ConnectWalletButton = ({
  onPressLogout,
  onPressConnect,
  loading,
  address,
}) => {
  return (
    <div>
      {address && !loading ? (
        <button onClick={onPressLogout}>
          Disconnect
        </button>
      ) : loading ? (
        <button
          disabled
        >
          <div>Loading...</div>
        </button>
      ) : (
        <button onClick={onPressConnect}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
