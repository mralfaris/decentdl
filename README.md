# DecentDL - Decentralized Driver's License

## Self-Sovereign Identity Solution for Driver’s License

<h2> Project Description </h2>
DecentDL is a solution based on Blockchain Platform Hyperledger Aries/Indy. The solution offers issuance and verification features of Driver's Licenses by relying on the capabilities of Self-Sovereign Identity Solution.

With Self-Sovereign Identity the users are having full control over their identity attributes and they decide when, what and with whom to share 
their Driver's License data.

<h2> Problem </h2>
<ul>
    <li> <strong>Centralized identity</strong> and credentials management systems are considered as honeypot for cyberattacks. </li>
    <li> There are issues with <strong>physical identity verification</strong> (tampering, identity-theft). </li>
    <li> <strong>Consumers</strong> view and store personal information more than they require. </li>    
    <li> Newly introduced <strong>privacy regulations</strong> are endangering companies reputation when they deal with person’s data. </li>
</ul>

<h2> Solution </h2>
DecentDL is custom solution that interfaces with <a href="https://trinsic.id/">Trinsic.id</a> which encapsulates the hosting of a Blockchain network using Hyperledger Aries. The solution is composed of:
<ol>
    <li> Issuer screen to issue Driver's License for a user. </li>
    <li> Verify screen to request access to Driver's License attributes for a user. </li>
    <li> Backend code to handle calls and APIs interactions with Trinsic. </li>
    <li> Trinsic Wallet Mobile App to store identity and approve access to consumers requests. </li>
</ol>

<h2> Solution Details </h2>
DecentDL is built using these technologies:
<ul>
    <li> <a href="https://nodejs.org/en/">Node.js</a>: Used to build backend and frontend. </li>
    <li> <a href="https://expressjs.com">Express<a>: Used to define backend APIs. </li>
    <li> <a href="https://www.npmjs.com/package/axios">Axios</a>: For building Backend API routes. </li>    
    <li> <a href="https://docs.streetcred.id/docs/">Trinsic</a>: Trinsic APIs and SDK to issue credential and verify it. </li>
    <li> <a href="https://reactjs.org">React</a>: To build the frontend of DecentlDL. </li>
    <li> <a href="https://react-bootstrap.github.io">React Bootstrap</a>: Ready made componenets for frontend. </li>
    <li> <a href="https://www.npmjs.com/package/qrcode">QR Code library</a>: Converts data to QR Code. </li>
</ul>

Trinsic Studio is used to build an Organization that represents the issuing authority (ex. Service Ontario). Using the studio these entities were defined:
<ul>
    <li> <strong>Credentials:</strong> A template called DecentDL that represents the driver's license attributes: </li>
        <ol>
            <li><strong>Name:</strong> Full name of the driver's license holder.</li>
            <li><strong>Date of Birth:</strong> Date of birth of the driver's license holder.</li>
            <li><strong>License Type:</strong> The license type either Vehicle or Motorbike.</li>
            <li><strong>License Restrictions:</strong> Any restrictions on the licenses ex: Eyeglasses</li>
        </ol>
    <li> <strong>Verification:</strong> A template that allows consumers to verify a predefined set of attribute by issuing a request. The fields allowed in the template are Name and Date of Birth</li>
</ul>

<h2> Solution Design </h2>

In this phase, the solution is supporting Driver's License issuance process with a limited set of fields and driver's license attribute verification process with a limited set of fields. In the future, the solution can be expanded to support more fields.

Here is a sequence diagram that depicts the Driver's License issuance process:

![Sequence Diagram](diagrams/DecentDL-Sequence-Diagram.png?raw=true) <br>

Below is a list of APIs that are currently supported by the system:
| Endpoint     	| Path            	   | HTTP method |  Input                                                                   	| Output                        	|
|--------------	|----------------------|-------------|--------------------------------------------------------------------------	|-------------------------------	|
| /api        	| /issue         	   | POST        | Name,<br> Date of Birth,<br> Type,<br> Restrictions                      	| OfferURL,<br> OfferData        	|
| /api         	| /requestVerification | GET        | None  	|  verificationId,<br>verificationRequestUrl,<br>verificationRequestData                 	|
| /api         	| /verify         	   | GET        	|  reqId       	|  verification (Object)                 	|
<br>

<h2> DecentDL UI </h2>

![Issuer UI](images/issuer.png?raw=true) <br>

![Verifier UI](images/verifier.png?raw=true) <br>