import React from 'react';   
import PropTypes from 'prop-types';
import { GrRefresh } from "react-icons/gr";
import './button.scss';


/***********************************
  @usage: custom button
***********************************/
export function Button({ 
  buttonType,
  buttonClass,
  buttonContent,
  buttonSize,
  buttonRedius,
  buttonSpinning,
  buttonDisabled,
  buttonClick
}) {
  return (
    <button 
      className={`${buttonClass} ${
          (buttonRedius === "half") ? "buttonHalfRadius" : 
          (buttonRedius === "full") ? "buttonFullRadius" : ""} ${
          (buttonSize === "small") ? "buttonSmall" : 
          (buttonSize === "medium") ? "buttonMedium" : 
          (buttonSize === "large") ? "buttonLarge" : ""}`}
      type={buttonType}
      disabled={buttonDisabled}
      onClick={buttonDisabled || buttonSpinning ? () => { return } : buttonClick}
    >
      {buttonSpinning ? "Please wait..." : buttonContent}
      {buttonSpinning && (
        <span>
          <GrRefresh />
        </span>
      )}
    </button>
  )
}


/***********************************
  @usage: checking props type,
***********************************/
Button.propTypes = {
  buttonClass: PropTypes.string,
  buttonContent: PropTypes.string.isRequired,
  buttonSize: PropTypes.string,
  buttonRedius: PropTypes.string,
  buttonSpinning: PropTypes.bool,
  buttonDisabled: PropTypes.bool
}


/*************************************
  @usage: initial/default props
*************************************/
Button.defaultProps = {
  buttonType: 'button',
  buttonClass: 'appButton',
  buttonContent: 'Hi, Click Here',
  buttonSize: 'medium',
  buttonRedius: 'full',
  buttonSpinning: false,
  buttonDisabled: false
}