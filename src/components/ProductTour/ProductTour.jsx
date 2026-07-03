import { useEffect, useState } from "react";
import "./ProductTour.css";

function ProductTour() {

  const prompts = [
    "Design a blue t-shirt...",
    "Add logo on front...",
    "Change font style...",
    "Rotate image...",
    "Remove background..."
  ];

  const shirtImages = [
    "/blue.png",
    "/t-shirt1.png",
    "/green.png",
    "/black.png"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const [shirtImage, setShirtImage] = useState("/t-shirt1.png");
  const [toolbarActive, setToolbarActive] = useState(0);
  const [opacity, setOpacity] = useState(60);
//   const [rotate, setRotate] = useState(0);

  /* ---------------- Typing Animation ---------------- */

  useEffect(() => {

    let char = 0;
    let deleting = false;
    let timer;

    function typing() {

      const text = prompts[textIndex];

      if (!deleting) {

        setDisplayText(text.substring(0, char + 1));
        char++;

        if (char === text.length) {

          timer = setTimeout(() => {

            deleting = true;
            typing();

          }, 3000);

          return;
        }

      } else {

        setDisplayText(text.substring(0, char - 1));
        char--;

        if (char === 0) {

          deleting = false;

          setTextIndex((prev) => (prev + 1) % prompts.length);

          return;
        }

      }

      timer = setTimeout(typing, deleting ? 40 : 80);

    }

    typing();

    return () => clearTimeout(timer);

  }, [textIndex]);

  /* ---------------- Auto Animation ---------------- */

  useEffect(() => {

    const timer = setInterval(() => {

      const random = Math.floor(Math.random() * shirtImages.length);

      setShirtImage(shirtImages[random]);

      setToolbarActive(Math.floor(Math.random() * 4));

      setOpacity(Math.floor(Math.random() * 70) + 30);

    }, 2500);

    return () => clearInterval(timer);

  }, []);

  return (

    <section className="tour">

      <h2>
        <span>Turning Product Tours</span> Into
        <br />
        Sales Tools
      </h2>

      <div className="tour-container">

        {/* AI BOX */}

        <div className="ai-box">

          <div className="ai-title">
            ✨ <span>Ask anything</span>
          </div>

          <div className="typing">
            {displayText}
            <span className="cursor">|</span>
          </div>

          <div className="chips">
            <span>Quick Response</span>
            <span>Colors</span>
            <span>Arts</span>
          </div>

        </div>

        {/* LEFT PANEL */}

        <div className="left-panel">

          <div className={`tool ${toolbarActive === 0 ? "activeBtn" : ""}`}>
            ✏️
            <p>Edit</p>
          </div>

          <div className={`tool ${toolbarActive === 1 ? "activeBtn" : ""}`}>
            📝
            <p>Text</p>
          </div>

          <div className={`tool ${toolbarActive === 2 ? "activeBtn" : ""}`}>
            🎨
            <p>Colours</p>
          </div>

          <div className={`tool ${toolbarActive === 3 ? "activeBtn" : ""}`}>
            ❤️
            <p>Clipart</p>
          </div>

        </div>

        {/* LAPTOP */}

        <div className="laptop">

          <div className="toolbar">

            <button className={toolbarActive === 0 ? "activeBtn" : ""}>↶</button>

            <button className={toolbarActive === 1 ? "activeBtn" : ""}>↷</button>

            <button className={toolbarActive === 2 ? "activeBtn" : ""}>✂</button>

            <button className={toolbarActive === 3 ? "activeBtn" : ""}>⋯</button>

          </div>

          <div className="canvas">

            <img
              className="shirt"
              src={shirtImage}
              alt="shirt"
              style={{
                opacity: opacity / 100,
                transition: "all .8s ease"
              }}
            />

            <div className="selection"></div>

            <div className="colors">

              <p>Color</p>

              <span className={`blue ${shirtImage === "/blue.png" ? "activeColor" : ""}`}></span>

              <span className={`pink ${shirtImage === "/t-shirt1.png" ? "activeColor" : ""}`}></span>

              <span className={`green ${shirtImage === "/green.png" ? "activeColor" : ""}`}></span>

              <span className={`black ${shirtImage === "/black.png" ? "activeColor" : ""}`}></span>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="right-panel">

          <h3>Preview</h3>

          <div className="option">

            <p>Opacity</p>

            <input
              type="range"
              value={opacity}
              max="100"
              readOnly
            />

          </div>

          <div className="option">

            <p>Rotate</p>

            <input
              type="range" 
              max="360"
              readOnly
            />

          </div>

          <button className="remove">
            Remove Background
          </button>

        </div>

        {/* Bottom */}

        <div className="bottom-panel">

          <h4>Fonts</h4>

          <div className="font-list">

            <button>A</button>

            <button className="active">Aa</button>

            <button>𝓐</button>

            <button>𝐀</button>

          </div>

        </div>

      </div>

    </section>

  );
}

export default ProductTour;