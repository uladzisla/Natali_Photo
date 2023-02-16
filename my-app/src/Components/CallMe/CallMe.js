import "./CallMe.css";
const CallMe = () => {
  return (
    <section id="contact">
      <div className="wrapper">
        <div className="blurb">
          <h2>
            <strong>Свяжитесь со мной </strong> если Вам нравится мое творчество
          </h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </div>
        <form>
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
      <p class="copyright">&copy; Natali 2023</p>
    </section>
  );
};
export default CallMe;
