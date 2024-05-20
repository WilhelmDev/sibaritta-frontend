import React, { useEffect } from "react";
import { useNavbarContext } from "../../context/navbar.context";
import { useObserver } from "@/hook/useObserver";

const ObserverTop = () => {
  const { isTopZero, setIsTopZero } = useNavbarContext();
  const { setElements, entries } = useObserver({ threshold: 0 });

  useEffect(() => {
    const elements = document.querySelectorAll("#ObserverTop");
    setElements(elements);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        setIsTopZero(true);
      } else {
        setIsTopZero(true);
      }
    });
  }, [isTopZero, setIsTopZero, entries]);

  return <div id="ObserverTop"></div>;
};

export default ObserverTop;
