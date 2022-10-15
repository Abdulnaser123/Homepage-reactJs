import "./styles.css"
import CatsContainer from "./Categories"
import PartnersContainer from "./Partners"
import ContactUsContainer from "./Contact"
import Subscribe from "./Subscribe"
import CopyRight from "./CopyRight"
import React from "react"

let Footer = prop => {
  console.log(prop)
  return (
    <>
      <div className="Footer">
        <div className="FooterWrapper">
          <div className="InnerFooterWrapper">
            <CatsContainer />
            <PartnersContainer />
            <ContactUsContainer />
          </div>
          <Subscribe />
        </div>
        <CopyRight />
      </div>
    </>
  )
}

export default Footer
