export const handleMetaMaskConnect = async () => {
  console.log("MetaMask Connect Button Click");

  // window.ethereum is injected by MetaMask browser extension
  // If it does not exist, MetaMask is not installed
  if (!window.ethereum) {
    console.error('MetaMask not installed');
    return; // Stop execution early
  }

  try {
    // Asks Metamask to request account acess from user. Triggers MetaMask Popup
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    // MetaMask returns array of accounts
    console.log(accounts);
  } catch (err) {
    // Error runs if user rejects connection, internal error, etc...
    console.error(err);
  }
};

