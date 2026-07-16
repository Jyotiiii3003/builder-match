import Card from "../common/Card/Card";

function StatCard({ title, value }) {
  return (
    <Card>

      <p className="text-sm text-[var(--text-muted)]">
        {title}
      </p>

      <h2 className="mt-2 font-['Poppins'] text-3xl font-semibold text-[var(--text)]">
        {value}
      </h2>

    </Card>
  );
}

export default StatCard;