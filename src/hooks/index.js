import { useEffect, useState } from "react";
import { throttle } from "lodash";

export function useVisibleSection(sections) {
  const [visibleSection, setVisibleSection] = useState();

  const isSectionVisible = (elementId) => {
    const section = document.getElementById(elementId);

    if (section) {
      const sectionPosition = section.getBoundingClientRect();

      const viewPort = {
        height: window.innerHeight,
        width: window.innerWidth,
      };

      return (
        sectionPosition.top >= 0 &&
        sectionPosition.left >= 0 &&
        sectionPosition.bottom <= viewPort.height &&
        sectionPosition.right <= viewPort.width
      );
    }

    return false;
  };

  const checkVisibility = () => {
    sections.forEach(({ id }) => {
      if (isSectionVisible(id)) {
        setVisibleSection(id);
      }
    });
  };

  useEffect(() => {
    if (sections) {
      window.addEventListener("scroll", throttle(checkVisibility, 300));
    }

    checkVisibility();

    return () =>
      window.addEventListener("scroll", throttle(checkVisibility, 300));
  }, []);

  return visibleSection;
}
