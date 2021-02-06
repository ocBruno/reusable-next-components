import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import ThemedSvg from "../themed/ThemedSvg"

const CloseIconSvg = styled(ThemedSvg)`
  margin-left: 0.21rem;
  border-radius: 100%;
  cursor: pointer;
`

const CloseIcon = ({ onClick, className }) => {
  return (
    <CloseIconSvg
      onClick={onClick}
      className={className}
      height="15"
      width="15"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
    </CloseIconSvg>
  )
}

CloseIcon.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default CloseIcon
