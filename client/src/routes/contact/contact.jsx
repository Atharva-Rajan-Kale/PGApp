import "./contact.scss";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Whether you have a question about our
        services, need assistance, or just want to share feedback, we're here to
        help.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>
          <b>Email:</b> support@lamaestate.com
        </p>
        <p>
          <b>Phone:</b> +1 234 567 890
        </p>
        <p>
          <b>Address:</b> 123 Real Estate St, Suite 456, City, Country
        </p>
      </div>
    </div>
  );
}

export default Contact;
