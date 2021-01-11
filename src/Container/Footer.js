import React from 'react';

const Footer = () => {

    const newDate = new Date();
    const currentYear = newDate.getFullYear();

    return <div className="footer-box">
        <p className="inner-footer">© Best Trip { currentYear }</p>
    </div>
}

export default Footer;