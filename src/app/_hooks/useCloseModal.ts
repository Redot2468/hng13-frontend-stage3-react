import { useEffect } from "react";

export function useCloseModal(
  parentContainerClass: string,
  closeModal: () => void,
  isModalOpen: boolean,
) {
  useEffect(() => {
    function handleCloseNav(e: MouseEvent) {
      const targetEl = e.target as HTMLElement;

      if (!targetEl.closest(parentContainerClass)) {
        closeModal();
      }
    }

    if (isModalOpen) {
      document.addEventListener("click", handleCloseNav);
    }

    return () => document.removeEventListener("click", handleCloseNav);
  }, [isModalOpen, parentContainerClass, closeModal]);
}
