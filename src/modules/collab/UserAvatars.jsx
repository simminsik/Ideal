// src/components/collab/UserAvatars.jsx
export default function UserAvatars({ users = [] }) {
  return (
    <div className="flex -space-x-2">
      {users.map((u) => (
        <div
          key={u.id}
          className="h-8 w-8 rounded-full border-2 border-white bg-neutral-200 grid place-items-center text-[11px] font-bold"
          title={u.name}
          style={{ color: "#fff", background: u.color || "#999" }}
        >
          {u.name.slice(0, 2)}
        </div>
      ))}
    </div>
  );
}
