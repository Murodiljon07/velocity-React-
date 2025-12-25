import "../../index.css";
import "./footer.css";

/* footer function */
function Footer() {
  return (
    <>
      <section className="footer-deck container">
        <div className="footer-box-container">
          <div className="footer-box">
            <h3 className="footer-box-title">about velocity</h3>
            <p className="footer-box-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="footer-box">
            <h3 className="footer-box-title">useful links</h3>
            <a href="#hero" className="footer-box-links">
              {" "}
              Phasellus gravida semper nisi
            </a>
            <a href="#hero" className="footer-box-links">
              {" "}
              Suspendisse nisl elit
            </a>
            <a href="#hero" className="footer-box-links">
              {" "}
              Dellentesque habitant morbi
            </a>
            <a href="#hero" className="footer-box-links">
              {" "}
              Etiam sollicitudin ipsum
            </a>
          </div>
          <div className="footer-box">
            <h3 className="footer-box-title">social</h3>
            <div className="footer-link-box">
              <i class="bx bxl-twitter"></i>
              <a href="#hero" className="footer-box-links">
                {" "}
                Twitter{" "}
              </a>
            </div>
            <div className="footer-link-box">
              <i class="bx bxl-facebook-square"></i>
              <a href="#hero" className="footer-box-links">
                {" "}
                Facebook{" "}
              </a>
            </div>
            <div className="footer-link-box">
              <i class="bx bxl-pinterest-alt"></i>
              <a href="#hero" className="footer-box-links">
                {" "}
                Pinterest{" "}
              </a>
            </div>
            <div className="footer-link-box">
              <i class="bx bxl-google"></i>
              <a href="#hero" className="footer-box-links">
                {" "}
                Google{" "}
              </a>
            </div>
            <div className="footer-link-box">
              <i class="bx bxl-wordpress"></i>
              <a href="#hero" className="footer-box-links">
                {" "}
                Webflow{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p className="footer-paragraph">
          Copyright Velocity Inc. Made in Webflow.
        </p>
      </footer>
    </>
  );
}

export default Footer;
