function Button({ children, className, onClick }) {
  const styles = {
    base: "bg-rose-400/85 text-white px-5 py-3 text-lg rounded-xl cursor-pointer hover:bg-rose-400 transition ease-out duration-300",
    shadows: "shadow-2xl shadow-rose-400/50",
  };
  return (
    <button
      type="button"
      className={`${styles.base} ${styles.shadows} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
