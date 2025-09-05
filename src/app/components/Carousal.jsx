import React, { useContext, useRef, useEffect,useState } from "react";
import SmallPic from "./SmallPic";
import { useResize } from "../customHook";
import {StatusContext,PlaceContext} from "../contextStore";
import "../styles/Carousal.css";
import { gsap } from "gsap";

let data = require("../data/images.json");

const Carousal = ()=> {
  const [progress,setProgress] = useState(0);
  const {start,setStart} = useContext(StatusContext);
  const { currentPlace } = useContext(PlaceContext);
  const carousalRef = useRef(null); 
  const barRef = useRef(null);
  const [width] = useResize();
  useEffect(() => {
    if (Math.round(progress * 100) === 100) {
      setStart(true);
    }
  }, [progress]);
  //if the user's screen width is less than 1024 and the user
  //hasn't select any place, move the carousal closer to the map
  useEffect(() => {
    const wid = window.innerWidth;
    if (!currentPlace && wid < 1024) {
      const anim = () => {
        gsap.set(carousalRef.current, {
          y: "-210%"
        });
      };
      window.requestAnimationFrame(anim);
    }
    if (currentPlace) {
      const anim = () => {
        gsap.set(carousalRef.current, {
          opacity: 0
        });
        gsap.to(carousalRef.current, 0, {
          opacity: 1,
          y: "0%"
        });
      };
      window.requestAnimationFrame(anim);
    }
  }, [start, width, currentPlace]);

  useEffect(() => {
    if (Math.round(progress * 100) < 100) {
      gsap.set(barRef.current, {
        width: `${Math.round(progress * 100)}%`
      });
    }
    if (Math.round(progress * 100) === 100) {
      gsap.set(barRef.current, {
        display: "none"
      });
    }
  }, [progress]);

  return (
    <section ref={carousalRef} className="carousalWrapper">
      <div ref={barRef} className="progressBar"></div>

      {data.images.map((place, index) => {
        return (
          <SmallPic
            imageLink={place.imageLink}
            title={place.title}
            key={index}
            setProgress={setProgress}
            progress={progress}
            index={index}
          />
        );
      })}
    </section>
  );
};

export default Carousal;