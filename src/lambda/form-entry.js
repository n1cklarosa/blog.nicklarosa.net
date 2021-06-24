var AWS = require("aws-sdk")
// const axios = require("axios");
// const { nanoid } = require("nanoid");
// const oauthSignature = require("oauth-signature");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID_,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_,
  region: process.env.AWS_REGION_,
})

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

let FROM = process.env.FROM_ADDRESS || "noreply@email.com"
let TO = process.env.TO_ADDRESS || "noreply@email.com"
let SUBJECT = process.env.DEFAULT_SUBJECT || "NEW FORM ENTRY"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const sendEmail = async ({ to, from, text, html, subject }) => {
  var params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: html,
        },
        Text: {
          Charset: "UTF-8",
          Data: text,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: from /* required */,
    ReplyToAddresses: [from],
  }

  try {
    var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .sendEmail(params)
      .promise()

    // Handle promise's fulfilled/rejected states
    sendPromise
      .then(function (data) {
        console.log(data.MessageId)
        return true
      })
      .catch(function (err) {
        console.error(err, err.stack)
      })
  } catch (error) {
    console.error(err, err.stack)
  }
}

// // Set up essential values
// const secretData = {
//   gfKey: process.env.GATSBY_GF_CONSUMER_KEY,
//   gfSecret: process.env.GATSBY_GF_CONSUMER_SECRET,
// };

// For those requests
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

exports.handler = async (event, context, callback) => {
  // Make sure we are dealing with a POST request
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "notPost",
        message: "This was not a POST request!",
      }),
    }
  }
  //   // Parse that post data body 
  const data = JSON.parse(event.body) 
  console.log("Event", event.headers)
  var secretKey = "--paste your secret key here--";
  // req.connection.remoteAddress will provide IP address of connected user.
//   var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + data['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  // 

  await sendEmail({
    to: TO,
    from: FROM,
    subject: `${SUBJECT}`,
    text: `New entry on contact form\n${event.body}`,
    html: `New entry on contact form<br />${event.body}`,
  })

  //   const apiUrl = data.baseUrl + "/submissions";

  //   // Check we have the required data
  //   if (!apiUrl) {
  //     return {
  //       statusCode: 424,
  //       headers,
  //       body: JSON.stringify({
  //         status: "missingApiData",
  //         message: "Required API data is missing",
  //       }),
  //     };
  //   }

  //   // Now we can do the real work - Gravity Forms API stuff
  //   const authParams = new0AuthParameters(secretData.gfKey);
  //   const signature = oauthSignature.generate(
  //     "POST",
  //     apiUrl,
  //     authParams,
  //     secretData.gfSecret
  //   );

  //   let result;
  //   try {
  //     result = await axios({
  //       method: "post",
  //       url: apiUrl,
  //       responseType: "json",
  //       params: {
  //         ...authParams,
  //         oauth_signature: signature,
  //       },
  //       data: data.payload,
  //     });
  //   } catch (error) {
  //     // Check the function log for this!
  //     console.log("new-gf-entry.js Error Data");
  //     console.log(error);

  //     const errorResponse = error.response?.data;

  //     // Here we know this is a Gravity Form Error
  //     if (errorResponse && errorResponse?.is_valid === false) {
  //       return {
  //         statusCode: 422,
  //         headers,
  //         body: JSON.stringify({
  //           status: "gravityFormErrors",
  //           message: "Gravity Forms has flagged issues",
  //           validation_messages: errorResponse.validation_messages,
  //         }),
  //       };
  //     } else {
  //       // Unknown error
  //       return {
  //         statusCode: 400,
  //         headers,
  //         body: JSON.stringify({
  //           status: "unknown",
  //           message: "Something went wrong",
  //         }),
  //       };
  //     }
  //   }

  return {
    statusCode: 201,
    headers,
    body: JSON.stringify({
      status: "success",
      message: "Entry added to Gravity Forms",
      confirmation_message: "Confirmation Message",
      data: data,
      ip: `Your IP address ${event.headers['client-ip']}`
    }),
  }
}

function getCurrentTimestamp() {
  return Math.round(new Date().getTime() / 1000)
}

// function new0AuthParameters(consumerKey) {
//   return {
//     oauth_consumer_key: consumerKey,
//     oauth_timestamp: getCurrentTimestamp(),
//     oauth_signature_method: "HMAC-SHA1",
//     oauth_version: "1.0",
//     oauth_nonce: nanoid(11),
//   };
// }
