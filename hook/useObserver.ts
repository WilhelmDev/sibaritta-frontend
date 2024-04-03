import { useEffect, useRef, useState } from "react";

export const useObserver = (options: IntersectionObserverInit) => {
  const [elements, setElements] = useState<NodeListOf<Element> | []>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
  const [observerOptions, setObserverOptions] =
    useState<IntersectionObserverInit>(options);

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, observerOptions);

    observer.current.disconnect();

    if (elements.length > 0) {
      elements.forEach((element) => observer.current!.observe(element));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, observerOptions]);

  return { observer: observer.current, setElements, entries };
};
