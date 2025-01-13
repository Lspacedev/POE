function Contact() {
  return (
    <div className="Contact" id="contact">
      <form className="form">
        <h3>Contact Me</h3>

        <div>
          <label for="name" id="name-label">
            Name
          </label>
          <input type="text" name="name" id="name" />
          <span className="error"></span>
        </div>

        <div>
          <label for="sname" id="surname-label">
            Surname
          </label>
          <input type="text" name="sname" id="sname" />
          <span className="error"></span>
        </div>

        <div>
          <label for="email" id="email-label">
            Email
          </label>
          <input type="email" name="email" id="email" />
          <span className="error"></span>
        </div>
        <div>
          <label for="message" id="message-label">
            Message
          </label>
          <textarea type="textarea" name="message" id="message"></textarea>
          <span className="error"></span>
        </div>

        <div>
          <input type="submit" name="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
