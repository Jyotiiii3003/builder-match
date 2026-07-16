function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="font-['Poppins'] text-3xl font-semibold text-[var(--text)]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-[var(--text-muted)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;