import { useEffect, useState } from "react";

export function useCloseModal(parentContainerClass: string) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((cur) => !cur);

  useEffect(() => {
    function handleCloseNav(e: MouseEvent) {
      const targetEl = e.target as HTMLElement;

      if (!targetEl.closest(parentContainerClass)) {
        setIsModalOpen(false);
      }
    }

    if (isModalOpen) {
      document.addEventListener("click", handleCloseNav);
    }

    return () => document.removeEventListener("click", handleCloseNav);
  }, [isModalOpen, parentContainerClass]);

  return { isModalOpen, toggleModal, setIsModalOpen };
}
