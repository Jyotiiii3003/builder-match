import Card from "../common/Card/Card";

function BuilderCard({ builder }) {
  return (
    <Card className="hover:-translate-y-1 transition-all duration-300">

      <img
        src={builder.avatar}
        alt={builder.name}
        className="h-20 w-20 rounded-full"
      />

      <h3 className="mt-5 font-['Poppins'] text-xl font-semibold">
        {builder.name}
      </h3>

      <p className="mt-1 text-[var(--text-muted)]">
        {builder.role}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">

        {builder.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[var(--primary-light)] px-3 py-1 text-sm text-[var(--primary)]"
          >
            {skill}
          </span>
        ))}

      </div>

      <button className="mt-6 w-full rounded-2xl bg-[var(--primary)] py-3 text-white transition hover:opacity-90">
        Connect
      </button>

    </Card>
  );
}

export default BuilderCard;