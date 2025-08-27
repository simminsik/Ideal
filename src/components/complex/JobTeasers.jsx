export default function JobTeasers({ items = [] }) {
  if (!items.length) return <div className="h-64 rounded-lg bg-neutral-50" />;
  return (
    <ul className="space-y-3">
      {items.map((j, i) => (
        <li key={i} className="group">
          <a href="#" className="block">
            <p className="font-medium group-hover:underline">{j.title}</p>
            <p className="text-sm text-neutral-600">{j.company} · {j.location}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}