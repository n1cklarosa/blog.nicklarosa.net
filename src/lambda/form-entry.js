var AWS = require("aws-sdk")
const axios = require("axios")
// const axios = require("axios");
// const { nanoid } = require("nanoid");
// const oauthSignature = require("oauth-signature");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID_,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_,
  region: process.env.AWS_REGION_,
})

const GOOGLE_SECRET_KEY = process.env.GOOGLE_RECAPTCHA_SECRET || null

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
// For those requests
const headers = {
  "Access-Control-Allow-Origin": ["http://localhost:8888", "https://blog.nicklarosa.net"],
  "Access-Control-Allow-Headers": "Content-Type",
}

const checkRecaptcha = async token => {
  // fetch data from a url endpoint
  try {
    let result = await axios({
      method: "post",
      url: "https://www.google.com/recaptcha/api/siteverify",
      params: {
        secret: GOOGLE_SECRET_KEY,
        response: token,
      },
    })
    let data = result.data || {}
    if (!data.success) {
      throw {
        success: false,
        error: "response not valid",
      }
    }
    return data
  } catch (err) {
    console.log(err)
    throw err.response
      ? err.response.data
      : { success: false, error: "captcha_error" }
  }
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
  //   console.log("Event", event.headers)

  const { email, name, token } = data

  if (!token) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "noToken",
        message: "This looks fake! Go Away",
      }),
    }
  }
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_SECRET_KEY}&response=${token}`
  const checking = await checkRecaptcha(token)
  const { success, score } = checking 

  if (!success || score < 0.4) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "tokenFailed",
        message: "Sending failed. Robots aren't allowed here.",
      }),
    }
  }

  await sendEmail({
    to: TO,
    from: FROM,
    subject: `${SUBJECT}`,
    text: `New entry on contact form\n${event.body}`,
    html: `New entry on contact form<br />${event.body}`,
  })
  return {
    statusCode: 201,
    headers,
    body: JSON.stringify({
      status: "success",
      message: "Entry added to Gravity Forms",
      confirmation_message: "Confirmation Message",
      data: data, 
    }),
  }
}
