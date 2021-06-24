import React, { useEffect, useCallback } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const Recaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (typeof executeRecaptcha !== "function") {
      console.log("Execute recaptcha not yet available")
    }
    const token = await executeRecaptcha("yourAction")

    // Do whatever you want with the token
  }, [])

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify()
  }, [handleReCaptchaVerify])

  return (
    <button onClick={e => handleReCaptchaVerify(e)}>Verify recaptcha</button>
  )
}

export default Recaptcha
