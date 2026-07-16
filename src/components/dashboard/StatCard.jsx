import Card from "../common/Card/Card";

function StatCard({ title, value }) {
  return (
    <Card className="hover:border-[var(--primary)]">

      <p className="text-sm text-[var(--text-muted)]">
        {title}
      </p>

      <h2 className="mt-3 font-['Poppins'] text-4xl font-bold text-[var(--text)]">
        {value}
      </h2>

    </Card>
  );
}

export default StatCard;