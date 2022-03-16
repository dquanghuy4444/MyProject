import React from 'react';
import ButtonCopyText from '../components/ButtonCopyText';
import './Footer.css';
import { infor } from '../my-infor'

function Footer({isDarkMode}) {
  return (
    <footer className={ isDarkMode ? "darkmode" : "bg-footer"}>
      <div className="myinfor-footer">
        <div>
          <a href={infor.githubLink} target="_blank">
            <i className="fab fa-github"></i>
            {" "}
            / {infor.githubName}
          </a>
        </div>
        <div>
          <a href={infor.fbLink} target="_blank">
            <i className="fab fa-facebook-square"></i>
            {" "}
            / {infor.fbName}
          </a>
        </div>
        <div>
          <i className="fas fa-envelope-square"></i>
          {" "}
          : {infor.mail}
          {" "}
          <ButtonCopyText text={infor.mail}></ButtonCopyText>
        </div>
        <div>
          <i className="fab fa-skype"></i>
          {" "}
          : {infor.skype}
          {" "}
          <ButtonCopyText text={infor.skype}></ButtonCopyText>
        </div>
        <div>
          <i className="fas fa-phone-alt"></i>
          {" "}
          : {infor.phone}
          {" "}
          <ButtonCopyText text={infor.phone}></ButtonCopyText>
        </div>
        <div>
          <i className="fas fa-map-marked-alt"></i>
          {" "}
          : {infor.address}
        </div>
      </div>


    </footer>
  );
}

export default Footer;
