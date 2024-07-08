import "./blob.css";
import { useEffect, useRef, useState } from "react";

function Blob() {
  const blobRef = useRef<HTMLDivElement>(null);

  const [pageY, setPageY] = useState(0);
  const [oldScrollY, setOldScrollY] = useState(0);

  const handleMouseMove = (event: MouseEvent) => {
    if (blobRef.current) {
      setPageY(event.pageY - blobRef.current.clientHeight / 2);
      setOldScrollY(window.scrollY);

      const keyframe = {
        left: `${event.clientX - blobRef.current.clientWidth / 2}px`,
        top: `${event.pageY - blobRef.current.clientHeight / 2}px`,
      };

      blobRef.current.animate(keyframe, {
        duration: 6000,
        fill: "forwards",
      });
    }
  };

  const handleScroll = () => {
    // return;

    if (blobRef.current) {
      console.log(window.scrollY);
      const keyframe = {
        // left: `${event.clientX - blobRef.current.clientWidth / 2}px`,
        top: `${pageY - oldScrollY + window.scrollY}px`,
      };

      blobRef.current.animate(keyframe, {
        duration: 6000,
        fill: "forwards",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return <div ref={blobRef} className="blob"></div>;
}

export default Blob;
