// src/components/layout/MenuBar.jsx
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { label: "홈", to: "/" },
  { label: "문제", to: "/problems" },
  { label: "커뮤니티", to: "/community" },
  { label: "경쟁", to: "/battle/live" },
  { label: "콜라보", to: "/collab/demo" },   // ✅ 새로 추가: demo 방으로 이동
  { label: "마이페이지", to: "/me" },
  { label: "채팅", to: "/chat" },
];

export default function MenuBar() {
  const base =
    "flex h-10 items-center rounded-lg px-3 text-sm font-medium transition";
  const idle = "text-neutral-700 hover:bg-white hover:shadow-sm";
  const active = "bg-white shadow-sm text-neutral-900";

  return (
    <div className="border-b border-neutral-100 bg-neutral-50">
      <nav className="container flex justify-center gap-4 py-2">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `${base} ${isActive ? active : idle}`}
            end={item.to === "/"}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
