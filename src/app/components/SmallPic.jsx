import React, { useRef, useContext, useEffect } from "react";
import Image from "next/image";
import { PlaceContext, StatusContext } from "../page";
import gsap from "gsap";
import "../styles/SmallPic.css";

const data = require("../data/images");
const { images } = data;
const SmallPic = ({ progress, setProgress, ...props })=> {

  const percentage = 1 / images.length;
  const { start } = useContext(StatusContext);
  const imageRef = useRef(null);
  const { setCurrentPlace } = useContext(PlaceContext);
  const smallPicRef = useRef(null);
  useEffect(() => {
    if (start) {
      const anim = () => {
        gsap.set(smallPicRef.current, {
          opacity: 1
        });
      };
      window.requestAnimationFrame(anim);
    }
  }, [start]);

  useEffect(()=>{
    if(progress*100<=100){
        setProgress(progress + percentage)
    }
  },[props.title,progress])
  return (
    <div
      className="smallPicWrapper"
      onClick={() => setCurrentPlace(images[props.index])}
      ref={smallPicRef}
    >
      <Image
        ref={imageRef}
        src={props.imageLink}
        alt={props.title}
        width={120}
        height={0}
        className="h-[100%] mr-4"
      />
    </div>
  );
};

export default SmallPic;