import "./About.css";

import PhotoHead from "../../img/PhotoHead.png";
const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="camera">
          <img src={PhotoHead} alt="Camera" />
        </div>
        <div className="blurb">
          <h2>
            Меня зовут <strong>Наташа</strong>
          </h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
            <br />
            <br />
            Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <div className="social">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
