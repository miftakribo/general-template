import React from 'react'
import COLOR from '../../constants/color'

const buttonStyle = (type = 'green') => {
	return {
    backgroundColor: COLOR[type],
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'
	}
}

const Button = ({ type, children = 'Button' }) => (
		<button style={buttonStyle(type)}>{children}</button>
	)

export default Button