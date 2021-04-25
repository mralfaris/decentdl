const express = require('express');
const router = express.Router();
const cors = require('cors');
const { CredentialsServiceClient, Credentials } = require("@trinsic/service-clients");
const QRCode = require('qrcode');

require('dotenv').config();

const client = new CredentialsServiceClient(
    new Credentials(process.env.ACCESSTOK),
    { noRetryPolicy: true });

const getInvite = async () => {
  try {
    return await client.createConnection({});
  } catch (e) {
    console.log(e.message || e.toString());
  }
}

router.post('/issue', cors(), async function (req, res) {
    let automaticIssuance = true;
    let credentialValues = {
        "Name": req.body.name,
        "DOB": req.body.dob,
        "Type": "",
        "Restrictions": ""
    };
    let credential = await client.createCredential({
        definitionId: process.env.DEF_ID,
        automaticIssuance: automaticIssuance,
        credentialValues: credentialValues
    });

    res.status(200).send({ offerUrl: credential.offerUrl, offerData: credential.offerData });
});

router.get('/requestVerification', cors(), async function (req, res) {
    let verificationRequest = await client.createVerificationFromPolicy(process.env.POLICY_ID);
    
    res.status(200).send({
      verificationRequestData: verificationRequest.verificationRequestData,
      verificationRequestUrl: verificationRequest.verificationRequestUrl,
      verificationId: verificationRequest.verificationId
    });
});

router.get('/verify', cors(), async function (req, res) {
    let verificationDetails = await client.getVerification(req.query.reqId);
  
    res.status(200).send({
      verification: verificationDetails
    });    
});

module.exports = router;