import React from "react"
import PropTypes from "prop-types"

const ArrowRight = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      fill={color}
      clipRule="evenodd"
    >
      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
    </svg>
  )
}

ArrowRight.propTypes = {
  color: PropTypes.string,
}

ArrowRight.defaultProps = {
  color: "#000000",
}

export default ArrowRight
