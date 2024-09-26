import { useEffect } from "react";

const useClickOutside = (refs: React.RefObject<HTMLElement>[], callback: () => void) => {
  useEffect(() => {
    // Check if the click is outside of all provided refs
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = refs.every((ref) => {
        if (!ref.current) return true; // If ref is null, treat it as outside

        return !ref.current.contains(event.target as Node);
      });

      if (isOutside) {
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
