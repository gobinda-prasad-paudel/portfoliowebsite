import React, { useState, useRef } from "react";
import "../index.css";
import "../App.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // To track form submission state
  const submitButton = useRef(null);
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Disabling the submit button after form submission
    if (submitButton.current) {
      submitButton.current.disabled = true;
    }

    // Form submission logic (you may want to handle it with an API or something)
    if (form.current) {
      form.current.submit();
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h5>Contact</h5>
        <h1 className="main-h1">
          Let’s Discuss Your <span>Project</span>
        </h1>
        <p>
          Let’s make something new, different and more meaningful or make things
          more visual or conceptual
        </p>
        <div className="contact-info-form">
          <div className="left">
            <p>
              You can contact me and also give feedback about your experience
            </p>
            <div>
              <svg
                className="sv"
                width="40"
                height="40"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0H44C50.6274 0 56 5.37258 56 12V44C56 50.6274 50.6274 56 44 56H12C5.37258 56 0 50.6274 0 44V12Z"
                  fill="#0DB760"
                />
                <path
                  d="M16.625 21.875C16.625 31.5397 24.4603 39.375 34.125 39.375H36.75C37.4462 39.375 38.1139 39.0984 38.6062 38.6062C39.0984 38.1139 39.375 37.4462 39.375 36.75V35.1493C39.375 34.5473 38.9655 34.0223 38.381 33.8765L33.2208 32.5862C32.7075 32.4578 32.1685 32.6503 31.8523 33.0727L30.7207 34.5812C30.3917 35.0198 29.8235 35.2135 29.309 35.0245C27.399 34.3223 25.6645 33.2134 24.2256 31.7744C22.7866 30.3355 21.6777 28.601 20.9755 26.691C20.7865 26.1765 20.9802 25.6083 21.4188 25.2793L22.9273 24.1477C23.3508 23.8315 23.5422 23.2913 23.4138 22.7792L22.1235 17.619C22.0525 17.3351 21.8887 17.0832 21.6581 16.9031C21.4274 16.723 21.1433 16.6251 20.8507 16.625H19.25C18.5538 16.625 17.8861 16.9016 17.3938 17.3938C16.9016 17.8861 16.625 18.5538 16.625 19.25V21.875Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p> Call Me : </p>
              <a href="tel:N/A6">
                <b>Call at : 98YYYYYY</b>
              </a>
            </div>
            <div>
              <svg
                className="sv"
                width="40"
                height="40"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 12C0 5.37258 5.37258 0 12 0H44C50.6274 0 56 5.37258 56 12V44C56 50.6274 50.6274 56 44 56H12C5.37258 56 0 50.6274 0 44V12Z"
                  fill="#0DB760"
                />
                <path
                  d="M39.375 21.875V34.125C39.375 34.8212 39.0984 35.4889 38.6062 35.9812C38.1139 36.4734 37.4462 36.75 36.75 36.75H19.25C18.5538 36.75 17.8861 36.4734 17.3938 35.9812C16.9016 35.4889 16.625 34.8212 16.625 34.125V21.875M39.375 21.875C39.375 21.1788 39.0984 20.5111 38.6062 20.0188C38.1139 19.5266 37.4462 19.25 36.75 19.25H19.25C18.5538 19.25 17.8861 19.5266 17.3938 20.0188C16.9016 20.5111 16.625 21.1788 16.625 21.875M39.375 21.875V22.1585C39.375 22.6067 39.2604 23.0474 39.0418 23.4387C38.8233 23.83 38.5083 24.1588 38.1267 24.3938L29.3767 29.778C28.9627 30.033 28.4861 30.168 28 30.168C27.5139 30.168 27.0373 30.033 26.6233 29.778L17.8733 24.395C17.4917 24.16 17.1767 23.8311 16.9582 23.4398C16.7396 23.0486 16.625 22.6078 16.625 22.1597V21.875"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Mail me : </p>
              <h4>
                <a href="mailto:gobindapaudelofficial@gmail.com">
                  gobindapaudelofficial@gmail.com
                </a>
              </h4>
            </div>
          </div>

          <div className="right" style={{ display: "none" }}>
            <div id="upwork_link">
              <h1>Upwork Link </h1>
              <p>
                Let's connect on Upwork to chat about your upcoming project and
                enhance its uniqueness and quality. Upwork is the ideal platform
                for our discussion, making collaboration simple and efficient.
                Looking forward to diving into the project and crafting
                something truly outstanding together. See you there!
              </p>
              <a
                className="u_l"
                href="https://www.upwork.com/freelancers/~017b7e086439c305aa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </div>
          </div>

          {/* <div className="right">
            <a href="/link.html">Link</a>
          </div> */}

          <div className="right_form">
            <form
              ref={form}
              action="https://postmail.invotes.com/send"
              method="post"
              id="email_form"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="extra_full_name"
                placeholder="Full Name"
              />
              <input type="text" name="subject" placeholder="Subject" />
              <input
                type="number"
                name="extra_phone_number"
                placeholder="Phone Number"
              />
              <input type="email" name="extra_email" placeholder="E-mail" />
              <textarea name="text" placeholder="Message"></textarea>
              <input
                type="hidden"
                name="access_token"
                value="nnjmgrqkb7a2ku0yrp9e913y"
              />
              <button
                type="submit"
                ref={submitButton}
                className="btn"
                disabled={isSubmitting}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
