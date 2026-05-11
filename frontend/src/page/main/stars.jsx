import React from "react";

const Stars = () => {
  return (
    <div className="stars-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <style>{`
        .stars-container {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
          background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
          overflow: hidden;
        }

        #stars, #stars2, #stars3 {
          position: absolute;
          top: 0;
          left: 0;
        }

        #stars {
          width: 1px;
          height: 1px;
          box-shadow: ${generateStars(700)};
          animation: animStar 50s linear infinite;
        }

        #stars2 {
          width: 2px;
          height: 2px;
          box-shadow: ${generateStars(200)};
          animation: animStar 100s linear infinite;
        }

        #stars3 {
          width: 3px;
          height: 3px;
          box-shadow: ${generateStars(100)};
          animation: animStar 150s linear infinite;
        }

        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </div>
  );
};

// JS version of SCSS random stars generator
function generateStars(n) {
  let value = "";
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    value += `${x}px ${y}px #FFF${i < n - 1 ? "," : ""}`;
  }
  return value;
}

export default Stars;