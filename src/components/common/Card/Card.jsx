function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_10px_35px_rgba(139,124,248,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(139,124,248,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;