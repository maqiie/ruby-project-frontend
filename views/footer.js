import React from "react";
function Footer(){
    return(
<div id="section">
<footer className="footer-distributed">
    <div className="footer-right">
    </div>
    <div className="footer-right" id="rightIcons">
        <span> <a href="https://github.com/maqiie" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
        <h6>MarkPaul</h6>
        </span>
   </div>
    {/* <h4 className="footer-header">MOTTO:</h4> */}
    <div className="footer-left">
        
        <p>A WEBSITE BY DEVELOPERS BY EXPLORERS</p><br />
        {/* <p className="footer-links">
            <a className="link-1" href="#">Home</a>&nbsp;&nbsp;&nbsp;
            <a href="#">Blog</a>&nbsp;
            <a href="#">Pricing</a>&nbsp;
            <a href="#">About</a>&nbsp;
            <a href="#">Faq</a>&nbsp;
            <a href="#">Contact</a>
        </p> */}
        <p>&copy; &nbsp; Group 8 </p>
    </div>
</footer>
        </div>
    )
}
export default Footer;