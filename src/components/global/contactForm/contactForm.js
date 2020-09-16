import React, { useState } from "react"
import axios from "axios"
import { Input, Textarea, Button, Spinner } from "@chakra-ui/core"
// import { Link } from "gatsby"

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const [loading, setLoading] = useState(false)
  const handleServerResponse = (status, msg, form) => {
    setServerState({
      submitting: false,
      status: { status, msg },
    })
    if (status) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setLoading(true)
    setServerState({ submitting: true })

    var formFields = {
      formName: "blog.nicklarosa.net",
      name: form.name.value,
      content: form.content.value,
      email: form.email.value,
      phone: form.phone.value,
    }
    axios({
      method: "post",
      url:
        "https://4gx1vyx2hc.execute-api.ap-southeast-2.amazonaws.com/Production/api",
      data: formFields,
    })
      .then(r => {
        setLoading(false);
        console.log("response, r", r)
        handleServerResponse(true, r.data.msg, form)
      })
      .catch(r => {
        console.log("This went bad ", r)
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <div>
      <div className="contact-form">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group" style={{ marginBottom: "30px" }}>
            <label htmlFor="exampleInputName">
              Name
              <Input
                type="text"
                name="name"
                className="form-control"
                id="exampleInputName"
                placeholder="Enter your name"
                required="required"
              />
            </label>
          </div>
          <div className="form-group" style={{ marginBottom: "30px" }}>
            <label htmlFor="exampleInputPhone">
              Phone Number
              <Input
                type="text"
                name="phone"
                className="form-control"
                id="exampleInputPhone"
                placeholder="Enter your phone number (optional)"
              />
            </label>
          </div>
          <div className="form-group" style={{ marginBottom: "30px" }}>
            <label htmlFor="exampleInputEmail1" required="required">
              Email address
              <Input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </label>
          </div>
          <div className="form-group" style={{ marginBottom: "30px" }}>
            <label htmlFor="exampleFormControlSelect1">
              Tell me about your project...
              <Textarea
                placeholder="Tell me about your project..."
                name="content"
              />
            </label>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Button
              variantColor="blue"
              type="submit"
              className="btn btn-primary"
              disabled={serverState.submitting}
              style={{ marginRight: "30px" }}
            >
              Submit
            </Button>
            {loading && (
              <>
                <Spinner />
              </>
            )}
            {serverState.status && (
              <p className={!serverState.status.status ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
