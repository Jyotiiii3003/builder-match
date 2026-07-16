function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:opacity-90",

    secondary:
      "bg-white border border-[var(--border)] text-[var(--text)] hover:bg-[var(--primary-light)]",
  };

  return (
    <button
      type={type}
      className={`rounded-2xl px-6 py-3 font-medium transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;