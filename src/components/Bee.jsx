import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bee from "../assets/bee.png";

gsap.registerPlugin(ScrollTrigger);

export default function Bee() {
  const beeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      beeRef.current,
      {
        x: -80,
        y: 40,
        rotate: -10,
        opacity: 0,
      },
      {
        x: 220,
        y: -120,
        rotate: 15,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return <img ref={beeRef} src={bee} alt="bee" className="bee" />;
}
