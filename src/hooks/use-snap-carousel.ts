import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

// Distância entre o início de dois itens consecutivos (largura + gap).
function getStep(track: HTMLElement) {
  const items = track.children as HTMLCollectionOf<HTMLElement>;
  return items.length > 1
    ? items[1].offsetLeft - items[0].offsetLeft
    : track.clientWidth;
}

// Estado e navegação de uma faixa com CSS scroll-snap (sem autoplay).
export function useSnapCarousel(itemCount: number) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [activePage, setActivePage] = useState(0);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = getStep(track);
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 1);
    setCanNext(track.scrollLeft < maxScroll - 1);
    setPageCount(maxScroll > 1 ? Math.round(maxScroll / step) + 1 : 1);
    setActivePage(Math.round(track.scrollLeft / step));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, [update, itemCount]);

  const goToPage = (page: number) => {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollTo({
      left: Math.max(0, page) * getStep(track),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const scrollByItem = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const current = Math.round(track.scrollLeft / getStep(track));
    goToPage(Math.min(current + direction, pageCount - 1));
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollByItem(event.key === "ArrowLeft" ? -1 : 1);
    }
  };

  return {
    trackRef,
    canPrev,
    canNext,
    hasOverflow: canPrev || canNext,
    pageCount,
    activePage,
    goToPage,
    scrollByItem,
    onKeyDown,
  };
}
