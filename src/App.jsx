import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".front", {
      scale: 1.5,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="100"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  Emberglen
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./sky.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  More
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
                 <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./cloud.png"
                alt=""
              />
              <img
                className="absolute scale-[2.0] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./land.png"
                alt=""
              />
                  <img
                className="absolute sky scale-[5.0] rotate-[-20deg] top-0 left-1/20 w-full h-full object-cover"
                src="./tree.png"
                alt=""
              />
              <img
                className="absolute  scale-[1.0]  bg top-0 left-0 w-full h-full object-cover"
                src="./front.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-120 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[0deg]">
                <h1 className="text-[12rem] leading-none  -ml-40">Emberglen</h1>
                <h1 className="text-[4rem] leading-none ml-30">A quiet haven bathed in</h1>
                <h1 className="text-[4rem] leading-none -ml-30">dusklight and dreams</h1>
              </div>
           
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
            
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.3] top-1/3 left-1/3  drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] -translate-x-1/2 -translate-y-1/2"
                  src="./mountain.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 text-2xl font-[Helvetica_Now_Display]">
                Welcome to Emberglen, where the veil between the real and the mystical is thinnest—where every twilight hums with secrets and the hills echo ancient songs. Nestled beneath lavender skies and kissed by a perpetual dusk, this hidden haven invites only the boldest dreamers and wanderers to discover its enchantments. The winding roads, glowing faintly with moonlit whispers, lead deep into realms where maps fade and stories awaken.
                </p>
                <p className="mt-3 text-2xl font-[Helvetica_Now_Display]">
                Step beyond the last known trail, and you'll find forgotten ruins wrapped in ivy that glows with starlight, sentient forests that shift paths underfoot, and creatures of legend who speak in riddles and rhyme. Emberglen is not just a place—it’s a promise. A land where destinies are rewritten, where fire-breathing serpents guard timeless truths, and where a single wish whispered into the dusk can alter the tides of fate.</p>
                <p className="mt-10 text-2xl font-[Helvetica_Now_Display]">
                Dare to descend into the dreamlit valley. Adventure awaits those brave enough to chase the horizon, those who still believe in magic, and those who know that sometimes, the greatest journeys begin just as the sun says goodnight.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
