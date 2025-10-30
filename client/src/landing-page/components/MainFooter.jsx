import React from 'react'

const MainFooter = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Stay Updated with StockFlow</h2>
        <p>Get the latest updates, tips, and insights delivered straight to your inbox.</p>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column footer-column-left">
          <h3>StockFlow</h3>
          <p style={{textAlign:"start",marginBottom:"20px"}}>Empowering businesses worldwide with intelligent warehouse management solutions that drive efficiency and growth.</p>
          <p className='footer--icon'><i class="ri-mail-line"></i> hello@stockflow.com</p>
          <p className='footer--icon'><i class="ri-phone-line"></i> +91 9361792890</p>
          <p className='footer--icon'><i class="ri-map-pin-line"></i> San Francisco, CA</p>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>API</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Documentation</li>
            <li>Contact Support</li>
            <li>System Status</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>GDPR</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 StockFlow. All rights reserved.</p>
        <div className="social-icons">
          <i class="ri-facebook-fill"></i>
         <i class="ri-twitter-fill"></i>
         <i class="ri-linkedin-fill"></i>
          <i class="ri-instagram-fill"></i>
        </div>
      </div>
    </footer>
  )
}

export default MainFooter