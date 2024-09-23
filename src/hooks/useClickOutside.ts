import { useEffect } from "react";

const useClickOutside = (refs: React.RefObject<HTMLElement>[], callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside of all provided refs
      const clickedOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target as Node)
      );

      if (clickedOutside) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]);
};

export default useClickOutside;
