import React, { useRef, useEffect } from "react";
import "../styles/contact.css";
function ContactForm() {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;

    const handleSubmit = (e) => {
      e.preventDefault();

      var formData = new FormData(form);

      fetch("https://formspree.io/f/xknlpoge", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Thanks for your submission!");
            form.reset();
          } else {
            alert("Something went wrong, please try again.");
          }
        })
        .catch((error) => console.error("Error:", error));
    };

    form.addEventListener("submit", handleSubmit);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []); // Empty dependency array means this useEffect runs once, similar to componentDidMount

  return (
    <div className="contactLeftSection">
      <div className="contactForm">
        <h3>Contact</h3>
        <p>
          Si vous souhaitez discuter d'un projet ou en savoir plus sur mon
          parcours et mes compétences, n'hésitez pas à m'envoyer un message. Ce
          sera avec plaisir que nous en discuterons
        </p>
        <p className="CVLink">
          <a
            href="/assets/DA_SILVA_VIEIRA_Alex_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download={"DA_SILVA_VIEIRA_Alex_CV.pdf"}
          >
            Vous pouvez aussi téléchargez mon CV en cliquant ici si vous le
            souhaitez.
          </a>
        </p>
        <form ref={formRef}>
          <input
            type="email"
            name="email"
            placeholder="Votre adresse mail"
            required
          />
          <textarea
            name="message"
            placeholder="Rédigez votre message..."
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
