import gsap from "gsap";
import { useEffect, useRef } from "react"

const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null);

  const cursorFollower = (e: MouseEvent) => {
    gsap.to(
      cursor.current,
      { 
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power1.out',
      }
    )
  }

  const onMouseEnter = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-cursor="expand"]')) {
      gsap.to(cursor.current, {
        scale: 3,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    if (target.closest('[data-cursor="shrink"]')) {
      gsap.to(cursor.current, {
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const onMouseLeave = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-cursor="expand"]')) {
      gsap.to(cursor.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(pointer: fine)", () => {
      gsap.set(cursor.current, { xPercent: -50, yPercent: -50, display: "block" })
      window.addEventListener("mousemove", cursorFollower);
      window.addEventListener("mouseover", onMouseEnter);
      window.addEventListener("mouseout", onMouseLeave);

      return () => {
        window.removeEventListener("mousemove", cursorFollower);
        window.removeEventListener("mouseover", onMouseEnter);
        window.removeEventListener("mouseout", onMouseLeave);
      }
    })

    return () => { mm.revert() }
  }, [])

  return <div ref={cursor} className="hidden w-6 h-6 top-0 left-0 pointer-events-none bg-cursor fixed z-50 rounded-full mix-blend-difference"></div>
}

export default Cursor
