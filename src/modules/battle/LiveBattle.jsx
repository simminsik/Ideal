import AppLayout from "../../app/AppLayout.jsx";

export default function LiveBattle() {
  return (
    <AppLayout showMenu={false}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-4">
          <div className="h-64 rounded-lg bg-neutral-50">문제 설명</div>
          <div className="mt-3 rounded-lg bg-neutral-50 p-3">채팅 창</div>
        </div>
        <div className="rounded-2xl border bg-white p-4">
          <div className="h-64 rounded-lg bg-neutral-50">코드 작성 영역</div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded bg-neutral-50 p-3">상대방 진행도</div>
            <div className="flex items-center justify-end gap-2">
              <button className="rounded border px-3 py-2">포기</button>
              <button className="rounded border px-3 py-2">디버깅</button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}