function Overlay({ children }) {
  return (
    <div
      className={`
        fixed inset-0 z-100
        bg-white/10 backdrop-blur
        flex items-center justify-center
    `}
    >
      {children}
    </div>
  );
}

export default Overlay;
