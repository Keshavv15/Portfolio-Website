import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:keshavsharma1666@gmail.com" data-cursor="disable">
                keshavsharma1666@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>India</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href="https://github.com/Keshavv15" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              GitHub <MdArrowOutward />
            </a>
            <a href="https://www.linkedin.com/in/keshav-sharma15" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Built around <br /> data, <span>insights & impact.</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Keshav Sharma
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
