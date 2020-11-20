import React from 'react';
import './Footer.css';

function Footer({isDarkMode}) {
  return (
    <footer className={ isDarkMode ? "darkmode" : "bg-footer"}>
      <div className="myinfor-footer">
        <div>
          <a href="https://github.com/dquanghuy4444" target="_blank">
            <i className="fab fa-github"></i>
            {" "}
            / dquanghuy4444
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/dqhuy4444" target="_blank">
            <i className="fab fa-facebook-square"></i>
            {" "}
            / dqhuy4444
          </a>
        </div>
        <div>
          <i className="fas fa-envelope-square"></i>
          {" "}
          : wepiohip@gmail.com
        </div>
        <div>
          <i className="fab fa-skype"></i>
          {" "}
          : wepiohip
        </div>
        <div>
          <i className="fas fa-phone-alt"></i>
          {" "}
          : 0963181679
        </div>
        <div>
          <i className="fas fa-map-marked-alt"></i>
          {" "}
          : Cổ Nhuế , Bắc Từ Liêm , Hà Nội
        </div>
      </div>


    </footer>
  );
}

export default Footer;
