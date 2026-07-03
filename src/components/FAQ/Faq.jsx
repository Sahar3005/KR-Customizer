import { useState } from "react";
import "./Faq.css";

function Faq() {

  const faqs = [
    {
      question: "How do I create my first customized ecommerce product?",
      answer:
        "Pick any product you like clothing, mugs, jewelry, you name it. Click “Customize,” and our design tool will open. Change colors, add text, upload images, and watch your product update instantly."
    },
    {
      question: "Can I use my photos or logo?",
      answer:
        "Absolutely. You may add your designs, logos, or photos. You can change the size and then just drag and drop them into the customizer."
    },
    {
      question: "Do you have to order a certain amount?",
      answer:
        "Nope! You can order just one item or a hundred it’s totally up to you."
    },
    {
      question: "What kind of products can I personalize?",
      answer:
        "Pretty much anything! From apparel and accessories to home décor, sports gear, and gifts. If you can dream it, you can probably customize it here."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (

    <section className="faq">

      <h2>
        <span>Need Help?</span> We've Got You Covered
      </h2>

      <p className="sub">
        Here are some quick answers to things people ask us all the time.
      </p>

      <div className="faq-container">

        {faqs.map((item, index) => (

          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() => toggle(index)}
            >

              <h3>{item.question}</h3>

              <span>
                {openIndex === index ? "▲" : "▼"}
              </span>

            </div>

            <div
              className={`faq-answer ${
                openIndex === index ? "show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Faq;