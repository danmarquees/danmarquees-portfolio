import { useEffect } from 'react';

export function useCursor(cursorRef) {
  useEffect(() => {
    const moveCursor = event => {
      if (window.innerWidth <= 768 || !cursorRef.current) return;
      cursorRef.current.style.left = `${event.clientX}px`;
      cursorRef.current.style.top  = `${event.clientY}px`;
    };

    const setHover = event => {
      if (event.target.closest('a, button, .project-item, .gallery-item, .skill-tag, .filter-btn')) {
        cursorRef.current?.classList.add('hover');
      }
    };

    const unsetHover = event => {
      if (event.target.closest('a, button, .project-item, .gallery-item, .skill-tag, .filter-btn')) {
        cursorRef.current?.classList.remove('hover');
      }
    };

    // Reset cursor state when mouse leaves the window entirely
    const resetCursor = () => cursorRef.current?.classList.remove('hover', 'click');

    const setClick   = () => cursorRef.current?.classList.add('click');
    const unsetClick = () => cursorRef.current?.classList.remove('click');

    document.addEventListener('mousemove',  moveCursor);
    document.addEventListener('mouseover',  setHover);
    document.addEventListener('mouseout',   unsetHover);
    document.addEventListener('mouseleave', resetCursor);
    document.addEventListener('mousedown',  setClick);
    document.addEventListener('mouseup',    unsetClick);

    return () => {
      document.removeEventListener('mousemove',  moveCursor);
      document.removeEventListener('mouseover',  setHover);
      document.removeEventListener('mouseout',   unsetHover);
      document.removeEventListener('mouseleave', resetCursor);
      document.removeEventListener('mousedown',  setClick);
      document.removeEventListener('mouseup',    unsetClick);
    };
  }, [cursorRef]);
}
