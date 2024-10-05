import { useElementBounding } from '@vueuse/core';
import { gsap } from 'gsap';
import { Ref } from 'vue';

export const useMouseFollow = (
  elementRef: Ref<HTMLElement | null>,
  followStrength: number,
  childrenFollowStrength?: number
) => {
  const {
    x: elementX,
    y: elementY,
    width: elementWidth,
    height: elementHeight,
  } = useElementBounding(elementRef);

  const isMobile = () => {
    return window.matchMedia('(max-width: 768px)').matches; // Check for mobile devices
  };

  const activateMouseFollow = (e: MouseEvent) => {
    if (isMobile()) return;
    const newX =
      ((e.clientX - elementX.value) / elementWidth.value - 0.5) *
      followStrength;
    const newY =
      ((e.clientY - elementY.value) / elementHeight.value - 0.5) *
      followStrength;

    gsap.to(elementRef.value, {
      duration: 0.6,
      x: newX,
      y: newY,
      ease: 'power4.out',
    });

    if (childrenFollowStrength) {
      const newChildrenX =
        ((e.clientX - elementX.value) / elementWidth.value - 0.5) *
        childrenFollowStrength;
      const newChildrenY =
        ((e.clientY - elementY.value) / elementHeight.value - 0.5) *
        childrenFollowStrength;

      gsap.to('.menu-toggle > *', {
        duration: 0.6,
        x: newChildrenX,
        y: newChildrenY,
        ease: 'power4.out',
      });
    }
  };

  const resetMouseFollow = () => {
    gsap.to(elementRef.value, {
      duration: 0.6,
      x: 0,
      y: 0,
      ease: 'back.out',
    });

    gsap.to('.menu-toggle > *', {
      duration: 0.6,
      x: 0,
      y: 0,
      ease: 'back.out',
    });
  };

  return {
    activateMouseFollow,
    resetMouseFollow,
  };
};
