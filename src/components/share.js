import React from "react"
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"

const Share = ({ socialConfig, tags }) => (
  <div className="post-social flex flex-start flex-row mb-8 items-center justify-start">
    <div className={"mr-4"}>SHARE THIS ARTICLE:</div>
    <FacebookShareButton
      className={"mx-2"}
      url={socialConfig.config.url}
      quote={socialConfig.config.title}
      hashtag={""}
    >
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
    <TwitterShareButton
      className={"mx-2"}
      url={socialConfig.config.url}
      quote={socialConfig.config.title}
      hashtag={"#test"}
    >
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
    <LinkedinShareButton
      className={"mx-2"}
      url={socialConfig.config.url}
      quote={socialConfig.config.title}
      hashtag={""}
    >
      <LinkedinIcon size={32} round={true} />
    </LinkedinShareButton>
  </div>
)

export default Share
