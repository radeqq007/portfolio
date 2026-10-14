import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import xLogo from '@/assets/x.svg';
import githubLogo from '@/assets/github.svg';
import instagramLogo from '@/assets/instagram.svg';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const s = reduceMotion ? 0.02 : 1; // squash every duration if the user prefers less motion

      const q = gsap.utils.selector(navRef);
      const [barTop, barMid, barBottom] = q('[data-bar]');

      gsap.set(barTop, { y: -9 });
      gsap.set(barBottom, { y: 9 });
      gsap.set(barMid, { transformOrigin: '0% 50%' });

      const tl = gsap.timeline({
        paused: true,
        defaults: { overwrite: 'auto' },
        onReverseComplete: () => {
          gsap.set(q('[data-menu]'), { visibility: 'hidden' });
        },
      });

      tl
        .to(barTop, { y: 0, rotate: 45, duration: 0.4 * s, ease: 'power3.inOut' }, 0)
        .to(barMid, { scaleX: 0, duration: 0.2 * s, ease: 'power3.in' }, 0)
        .to(barBottom, { y: 0, rotate: -45, duration: 0.4 * s, ease: 'power3.inOut' }, 0)

        .set(q('[data-menu]'), { visibility: 'visible' }, 0)
        .fromTo(
          q('[data-row]'),
          { clipPath: 'inset(0% 0% 100% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.6 * s, ease: 'power4.inOut', stagger: 0.07 * s },
          0,
        )
        .fromTo(
          q('[data-line]'),
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6 * s, ease: 'power3.inOut', stagger: 0.07 * s },
          0.15 * s,
        )
        .fromTo(
          q('[data-label]'),
          { yPercent: 120 },
          { yPercent: 0, duration: 0.6 * s, ease: 'power4.out', stagger: 0.07 * s },
          0.2 * s,
        )
        .fromTo(
          q('[data-index]'),
          { autoAlpha: 0, x: -14 },
          { autoAlpha: 1, x: 0, duration: 0.4 * s, ease: 'power2.out', stagger: 0.07 * s },
          0.3 * s,
        )
        .fromTo(
          q('[data-footer]'),
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5 * s, ease: 'power4.inOut' },
          0.35 * s,
        );

      tlRef.current = tl;
    },
    { scope: navRef },
  );

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    if (open) {
      tl.timeScale(1).play();
    } else if (tl.progress() > 0) {
      tl.timeScale(1.5).reverse();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    html.style.overflow = 'hidden';
    return () => {
      html.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
    };
  }, [open]);

  return (
    <nav
      ref={navRef}
      data-lenis-prevent={open ? '' : undefined}
      className="flex items-center justify-between md:grid md:grid-cols-3 fixed left-0 top-0 right-0 px-2 md:px-8 py-1 bg-greenish z-100"
    >
      <span className="flex items-center gap-3">
        <a href="https://x.com/wcale_nie_radek" target="_blank">
          <img src={xLogo} className="h-7" />
        </a>

        <a href="https://www.instagram.com/your.iron.lung/" target="_blank">
          <img src={instagramLogo} className="h-10" />
        </a>

        <a href="https://github.com/radeqq007" target="_blank">
          <img src={githubLogo} className="h-9" />
        </a>
      </span>

      {/* Desktop */}
      <span className="hidden md:flex justify-center items-center gap-6 font-josefin text-2xl font-bold">
        {links.map(({ label, href }) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </span>

      {/* Mobile */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="md:hidden relative h-10 w-10 cursor-pointer bg-dim-black transition-transform active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blackish"
      >
        <span data-bar className="absolute left-1/2 top-1/2 -ml-3 -mt-0.5 h-1 w-6 bg-greenish" />
        <span data-bar className="absolute left-1/2 top-1/2 -ml-3 -mt-0.5 h-1 w-4 bg-greenish" />
        <span data-bar className="absolute left-1/2 top-1/2 -ml-3 -mt-0.5 h-1 w-6 bg-greenish" />
      </button>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        data-menu
        className="invisible md:hidden absolute left-0 right-0 top-full flex h-[calc(100dvh-100%)] flex-col touch-none overscroll-contain"
      >
        <ul className="flex min-h-0 flex-1 flex-col">
          {links.map(({ label, href }, i) => (
            <li key={href} data-row className="relative min-h-0 flex-1 bg-blackish">
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="group flex h-full items-center gap-5 px-8 outline-none transition-colors active:bg-greenish focus-visible:bg-greenish"
              >
                <span
                  data-index
                  className="font-josefin text-2xl font-bold text-greenish/60 transition-colors group-active:text-blackish group-focus-visible:text-blackish"
                >
                  0{i + 1}
                </span>

                <span className="overflow-hidden py-1">
                  <span
                    data-label
                    className="block font-krona text-[clamp(1.5rem,min(8.5vw,7dvh),3rem)] uppercase leading-none tracking-wide text-greenish transition-colors group-active:text-blackish group-focus-visible:text-blackish"
                  >
                    {label}
                  </span>
                </span>
              </a>

              <span
                data-line
                className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-greenish"
              />
            </li>
          ))}
        </ul>

        <div
          data-footer
          className="bg-greenish px-8 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-blackish"
        >
          <p className="font-josefin text-xl font-semibold tracking-widest text-dim-black">
            Software Developer
          </p>
          <p className="font-krona text-lg uppercase tracking-widest">Radosław Kaczmarczyk</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
