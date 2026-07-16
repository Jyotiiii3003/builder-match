function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary)] text-white font-bold shadow-md">
        BM
      </div>

      <div>
        <h1 className="font-['Poppins'] text-lg font-semibold text-[var(--text)]">
          Builder Match
        </h1>

        <p className="text-xs text-[var(--text-muted)]">
          Hackathon Companion
        </p>
      </div>
    </div>
  );
}

export default Logo;