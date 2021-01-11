import React from "react"
import PropTypes from "prop-types"

const Telegram = ({ color }) => {
  return (
    <svg
      enableBackground="new 0 0 24 24"
      height="512"
      viewBox="0 0 24 24"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "relative",
        top: "2px",
        marginRight: "3px",
        height: "1rem",
        width: "1rem",
      }}
    >
      <circle cx="12" cy="12" fill={color} r="12" />
      <path
        d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
        fill="#fff"
      />
    </svg>
  )
}

Telegram.propTypes = {
  color: PropTypes.string,
}

Telegram.defaultProps = {
  color: "#1da1f2",
}

export default Telegram
