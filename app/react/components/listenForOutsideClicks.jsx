export default function listenForOutsideClick(
    listening,
    setListening,
    menuRef,
    setIsOpen, 
    setRotate
    ) {
    return () => {
      if (listening) return;
      if (!menuRef.current) return;
      setListening(true);
      [`click`, `touchstart`].forEach((type) => {
        document.addEventListener(`click`, (evt) => {
          const cur = menuRef.current;
          const node = evt.target;
          if (cur.contains(node)) return;
          setIsOpen(false);
          if(setRotate) {
            setRotate(false);
          }
        });
      });
    };
}