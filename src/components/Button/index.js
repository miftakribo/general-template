import React, { Component } from 'react'
import styles from './style.css'

class Button extends Component {

    onClickHandler = () => {
        this.props.onClick(this.props.children)
    }
    render() {
        const { type, children, className } = this.props
        return(
            <button 
                className={styles[className]}
                onClick={this.onClickHandler}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    className: 'btn-green',
    onClick: (text) => console.log(text, ' clicked!')
}

export default Button