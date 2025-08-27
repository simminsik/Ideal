import AppLayout from "../../app/AppLayout.jsx";

export default function ChatPage() {
  return (
    <AppLayout showMenu={false}>
      <div className="mb-4 flex items-center justify-center gap-2">
        {/* 로고 제거 ✅ */}
        <a href="/me" className="rounded border px-3 py-2 text-sm">마이페이지</a>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr,320px]">
        <div className="rounded-2xl border bg-white p-4 h-80">채팅창</div>
        <aside className="rounded-2xl border bg-white p-4 h-80">친구 목록</aside>
      </div>
    </AppLayout>
  );
}
