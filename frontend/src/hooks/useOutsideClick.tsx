import { RefObject, useEffect } from "react";

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    // 바인드 이벤트 리스너
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 언마운트 시 이벤트 리스너 해제
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
