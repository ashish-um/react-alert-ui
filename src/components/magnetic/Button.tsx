import { ReactNode, useEffect, useRef, useState } from "react";
import "./button.css";

interface Props {
  addAlert: () => void;
  children: ReactNode;
}

function Button({ addAlert, children }: Props) {
  const magnetRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [keyframe, setKeyframe] = useState({
    transform: `translate(${0}px, ${0}px)`,
  });
  const [keyframeText, setTextKeyframe] = useState({
    transform: `translate(${0}px, ${0}px)`,
  });
  const [duration, setDuration] = useState(1000);

  const handleMagnet = (event: React.MouseEvent<HTMLDivElement>) => {
    if (parentRef.current) {
      const posX =
        event.pageX -
        parentRef.current.offsetLeft -
        parentRef.current.clientWidth / 2;

      const posY =
        event.pageY -
        parentRef.current.offsetTop -
        parentRef.current.clientHeight / 2;

      const offsetMultiplier = 0.3;

      setKeyframe({
        transform: `translate(${posX * offsetMultiplier}px, ${
          posY * offsetMultiplier
        }px)`,
      });

      setDuration(5000);
    }
  };

  const handleText = (event: React.MouseEvent<HTMLDivElement>) => {
    if (magnetRef.current) {
      const posX =
        event.pageX -
        magnetRef.current.offsetLeft -
        magnetRef.current.clientWidth / 2;

      const posY =
        event.pageY -
        magnetRef.current.offsetTop -
        magnetRef.current.clientHeight / 2;

      const offsetMultiplier = 0.3;

      setTextKeyframe({
        transform: `translate(${posX * offsetMultiplier}px, ${
          posY * offsetMultiplier
        }px)`,
      });

      setDuration(5000);
    }
  };

  useEffect(() => {
    if (magnetRef.current) {
      magnetRef.current.animate(keyframe, {
        duration: duration,
        fill: "forwards",
        easing: "ease-out",
      });
    }
  }, [keyframe]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.animate(keyframeText, {
        duration: 1000,
        fill: "forwards",
        easing: "ease-out",
      });
    }
  }, [keyframeText]);

  return (
    <div
      className="magnet-listerner"
      ref={parentRef}
      onMouseMoveCapture={handleMagnet}
      onMouseLeave={() => {
        setKeyframe({ transform: "translate(0,0)" });
        setDuration(500);
      }}
    >
      <div
        className="magnet"
        onMouseMoveCapture={handleText}
        onMouseLeave={() => {
          setTextKeyframe({ transform: "translate(0,0)" });
        }}
        onClick={addAlert}
        ref={magnetRef}
      >
        <p ref={textRef}>{children}</p>
      </div>
    </div>
  );
}

export default Button;
