import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Suscribete a nuestro Newsletter!!</h2>
      <p>Y recibe 10% de descuento en tu primera contratación.</p>
      <form>
        <input type="email" name="emailnewsletter" id="newsletter" placeholder="Ingresa tu email" />
        <input type="submit" value="Suscribirse" />
      </form>
    </section>
  );
};

export default Newsletter;
