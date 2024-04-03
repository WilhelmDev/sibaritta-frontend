import { useEffect, useState } from "react";
import style from "./style.module.css";
import Point from "./Point";
import {
  get_porcentaje_of_scroll,
  px_top_of_circle_container,
  moveScroll,
} from "./helpers";

const NavPoints = () => {
  const [percentageScroll, setPercentageScroll] = useState<number>(0);

  useEffect(() => {
    const percentage_of_scroll = get_porcentaje_of_scroll();
    setPercentageScroll(percentage_of_scroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPercentage = get_porcentaje_of_scroll();
      setPercentageScroll(currentScrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickPoint = (percentageCustom: number) => {
    setPercentageScroll(percentageCustom);
    moveScroll(percentageCustom);
  };

  const handleMouseWheel = (event: WheelEvent) => {
    event.preventDefault(); // Prevent default scroll behavior

    const deltaY = event.deltaY;
    const currentPercentage = percentageScroll;

    // Calculate new percentage based on wheel movement
    let newPercentage = currentPercentage + deltaY / 10;

    // Limit new percentage to multiples of 20
    newPercentage = Math.round(newPercentage / 20) * 20;

    // Ensure new percentage stays within bounds
    newPercentage = Math.min(Math.max(newPercentage, 0), 100);

    setPercentageScroll(newPercentage);
    moveScroll(newPercentage);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleMouseWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, [percentageScroll]);

  return (
    <div className={style.nav_points}>
      <div>
        <Point onClick={() => handleClickPoint(0)} />
        <Point onClick={() => handleClickPoint(20)} />
        <Point onClick={() => handleClickPoint(40)} />
        <Point onClick={() => handleClickPoint(60)} />
        <Point onClick={() => handleClickPoint(80)} />
        <Point onClick={() => handleClickPoint(100)} />
        <Point
          isActive={true}
          styles={{
            position: "absolute",
            top: px_top_of_circle_container(percentageScroll),
          }}
        />
      </div>
    </div>
  );
};

export default NavPoints;
