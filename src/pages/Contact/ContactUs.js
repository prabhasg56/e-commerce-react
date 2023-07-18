import React, { useRef } from "react";

const ContactUs = () => {
  const name = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const message = useRef("");

  const setContactInfo = (event) => {
    event.preventDefault();

    const contactInfo = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      message: message.current.value,
    };

    fetch(
      "https://e-commerce-project-997c1-default-rtdb.firebaseio.com/contactUs.json",
      {
        method: "POST",
        body: JSON.stringify(contactInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    name.current.value = "";
      email.current.value = "";
      phone.current.value = "";
      message.current.value = "";
  };

  return (
    <div>
      <form className="text-center border border-light p-5 w-50 bg-secondary bg-gradient mt-4 container">
        <p className="h4 mb-4">Contact US</p>

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Name"
          ref={name}
        />

        <input
          type="email"
          className="form-control mb-4"
          placeholder="E-mail"
          ref={email}
        />

        <input
          type="email"
          className="form-control mb-4"
          placeholder="Phone Number"
          ref={phone}
        />

        <div className="form-group">
          <textarea
            className="form-control rounded-0"
            rows="3"
            placeholder="Message"
            ref={message}
          ></textarea>
        </div>

        <button
          className="btn btn-dark mt-4 fw-bold"
          onClick={(e) => setContactInfo(e)}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
