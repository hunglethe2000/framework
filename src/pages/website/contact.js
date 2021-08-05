const Contact = () => {
  return (
    <>
      <div className="row">
        <div className="page-head_agile_info_w3l">
          <div className="container">
            <h3>
              Contact <span>Page </span>
            </h3>
            <div className="services-breadcrumb">
              <div className="agile_inner_breadcrumb">
                <ul className="w3_short">
                  <li>
                    <a href="/#/">Home</a>
                    <i>|</i>
                  </li>
                  <li>Contact Page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_bottom_agile_info">
          <div className="container">
            <div className="contact-grid-agile-w3s">
              <div className="col-md-4 contact-grid-agile-w3">
                <div className="contact-grid-agile-w31">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <h4>Address</h4>
                  <p>
                    12K Street, 45 Building Road <span>California, USA.</span>
                  </p>
                </div>
              </div>
              <div className="col-md-4 contact-grid-agile-w3">
                <div className="contact-grid-agile-w32">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <h4>Call Us</h4>
                  <p>
                    +1234 758 839<span>+1273 748 730</span>
                  </p>
                </div>
              </div>
              <div className="col-md-4 contact-grid-agile-w3">
                <div className="contact-grid-agile-w33">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@example.com">info@example1.com</a>
                    <span>
                      <a href="mailto:info@example.com">info@example2.com</a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        <div className="contact-w3-agile1 map" data-aos="flip-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100949.24429313939!2d-122.44206553967531!3d37.75102885910819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1472190196783"
            className="map"
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="banner_bottom_agile_info">
          <div className="container">
            <div className="agile-contact-grids">
              <div className="agile-contact-left">
                <div className="col-md-6 address-grid">
                  <h4>
                    For More <span>Information</span>
                  </h4>
                  <div className="mail-agileits-w3layouts">
                    <i
                      className="fa fa-volume-control-phone"
                      aria-hidden="true"
                    ></i>
                    <div className="contact-right">
                      <p>Telephone </p>
                      <span>+1 (100)222-23-33</span>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="mail-agileits-w3layouts">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <div className="contact-right">
                      <p>Mail </p>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="mail-agileits-w3layouts">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <div className="contact-right">
                      <p>Location</p>
                      <span>7784 Diamonds street, California, US.</span>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <ul className="social-nav model-3d-0 footer-social w3_agile_social two contact">
                    <li className="share">SHARE ON : </li>
                    <li>
                      <a href="#" className="facebook">
                        <div className="front">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                        <div className="back">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <div className="front">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div className="back">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="instagram">
                        <div className="front">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div className="back">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pinterest">
                        <div className="front">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                        <div className="back">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="contact-form col-md-6">
                  <h4 className="white-w3ls">
                    Contact <span>Form</span>
                  </h4>
                  <form id="form-contacts">
                    <div className="styled-input agile-styled-input-top">
                      <span className="errorName"></span>
                      <input type="text" name="Name" id="contact-name" />
                      <label>Name</label>
                    </div>
                    <div className="styled-input">
                      <span className="errorEmail"></span>
                      <input type="email" name="Email" id="contact-gmail" />
                      <label>Email</label>
                    </div>
                    <div className="styled-input">
                      <input type="text" name="Phone" id="contact-phone" />
                      <label>Phone</label>
                    </div>
                    <div className="styled-input">
                      <span className="errorMessage"></span>
                      <textarea name="Message" id="contact-message"></textarea>
                      <label>Message</label>
                    </div>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="SEND"
                    />
                  </form>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
