"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    // 1. Set history.scrollRestoration = "manual"
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    } catch {
      // Ignore if access to scrollRestoration is restricted
    }

    // 2. Check if the page navigation type is a reload
    const navEntry = performance.getEntriesByType?.("navigation")?.[0] as
      | PerformanceNavigationTiming
      | undefined;
    const isReload =
      navEntry?.type === "reload" ||
      (typeof performance !== "undefined" &&
        (performance as unknown as { navigation?: { type: number } }).navigation
          ?.type === 1);

    const resetScrollToTop = () => {
      // If the URL has a hash (e.g., "/#work"), drop the hash and keep pathname + search
      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }

      // Temporarily disable smooth scroll behavior so browser doesn't animate from previous position
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";

      try {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      } catch {
        window.scrollTo(0, 0);
      }

      // Reset smooth-scroll library (Lenis) if active
      const globalWindow = window as unknown as {
        __lenis?: { scrollTo: (target: number | string | HTMLElement, options?: { immediate?: boolean }) => void };
        lenis?: { scrollTo: (target: number | string | HTMLElement, options?: { immediate?: boolean }) => void };
      };
      const lenis = globalWindow.__lenis || globalWindow.lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { immediate: true });
      }

      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    };

    let rafId: number | undefined;
    let timeoutId: NodeJS.Timeout | undefined;
    let lateTimeoutId: NodeJS.Timeout | undefined;

    if (isReload) {
      resetScrollToTop();

      // Additional ticks to ensure DOM rendering and library initialization don't displace scroll
      rafId = requestAnimationFrame(() => {
        resetScrollToTop();
      });

      timeoutId = setTimeout(() => {
        resetScrollToTop();
      }, 50);

      lateTimeoutId = setTimeout(() => {
        resetScrollToTop();
      }, 150);
    }

    // 3. Add beforeunload listener that resets scroll to 0, 0 so browsers that restore scroll early don't flash
    const handleBeforeUnload = () => {
      try {
        window.scrollTo(0, 0);
      } catch {
        // ignore
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
      if (lateTimeoutId) clearTimeout(lateTimeoutId);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
}

