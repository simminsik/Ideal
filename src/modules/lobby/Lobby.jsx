import AppLayout from "../../app/AppLayout.jsx";

export default function Lobby() {
  return (
    <AppLayout showMenu={false}>
      <button onClick={() => history.back()} className="mb-3 rounded border px-3 py-1 text-sm">돌아가기</button>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border bg-white p-4">
          <div className="h-80 rounded-lg bg-neutral-50">문제 목록</div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl border bg-white p-4 h-40">채팅 창</div>
          <div className="rounded-2xl border bg-white p-4 h-24">대기 목록</div>
          <div className="rounded-2xl border bg-white p-4 h-24">친구 목록</div>
        </div>
      </div>
    </AppLayout>
  );
}