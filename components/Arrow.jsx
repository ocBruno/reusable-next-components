import React from "react"
import styled from "styled-components"
const ArrowSvg = styled.svg`
  width: 12px;
  margin-left: 0.21rem;
  border-radius: 100%;
`
const Arrow = () => {
  return (
    <ArrowSvg x="0px" y="0px" viewBox="0 0 122.88 63.9">
      <g>
        <polygon points="61.44,63.9 122.88,0 0,0 61.44,63.9" />
      </g>
    </ArrowSvg>
  )
}

Arrow.propTypes = {}

export default Arrow