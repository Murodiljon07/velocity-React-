import "../../index.css";
import "./mainSection.css";

/* main function */
function Main() {
  return (
    <main className="main">
      <section className="about-us container">
        <div className="section-title-block">
          <h2 className="section-title">what we do</h2>
          <p className="section-paragraph">
            This is some text inside of a div block.
          </p>
        </div>

        <div className="boxes-container">
          <div className="design-box box">
            <img
              src="/pictures/design-box-img.png"
              className="box-img"
              alt="design"
            ></img>
            <div className="box-desc">
              <h3 className="box-title">Graphic Design</h3>
              <p className="box-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className="development-box box">
            <img
              src="/pictures/code-box-img.png"
              className="box-img"
              alt="code"
            ></img>
            <div className="box-desc">
              <h3 className="box-title">Awesome code</h3>
              <p className="box-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className="marketing-box box">
            <img
              src="/pictures/design-box-img.png"
              className="box-img"
              alt=""
            ></img>
            <div className="box-desc">
              <h3 className="box-title">free template</h3>
              <p className="box-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="servicesSection">
        <div className="section-title-block">
          <h2 className="section-title">services</h2>
          <p className="section-paragraph">
            This is some text inside of a div block.
          </p>
        </div>

        <div className="service-boxes-container container">
          <div className="service-box">
            <img
              src="/pictures/city.png"
              className="service-box-img"
              alt="city"
            ></img>
            <div className="box-desc">
              <h3 className="box-title">SERVICES one</h3>
              <p className="box-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Suspendisse varius.
              </p>
              <button className="btn learn-more">learn more</button>
            </div>
          </div>
          <div className="service-box ">
            <img
              src="/pictures/night-show.png"
              className="service-box-img"
              alt="city  "
            ></img>
            <div className="box-desc">
              <h3 className="box-title">SERVICES one</h3>
              <p className="box-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Suspendisse varius.
              </p>
              <button className="btn learn-more">learn more</button>
            </div>
          </div>
        </div>
      </section>

      <section className="tab-section">
        <div className="section-title-block">
          <h2 className="section-title">Tab Section</h2>
          <p className="section-paragraph">
            This is some text inside of a div block.
          </p>
        </div>

        <div className="btn-container">
          <button className="btn tab-btn active-btn">Tab 1</button>
          <button className="btn tab-btn">Tab 2</button>
          <button className="btn tab-btn">Tab 3</button>
        </div>
        <div className="tab-section-desc container">
          <img
            src="/pictures/tab-img.png"
            className="tab-section-img"
            alt="tab section"
          ></img>
          <div className="tab-title-block">
            <h2 className="section-title">Some Title Here</h2>
            <span className="tab-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
            <span className="tab-paragraph">
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
            </span>
            <span className="tab-paragraph">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
