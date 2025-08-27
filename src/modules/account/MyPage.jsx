import AppLayout from "../../app/AppLayout.jsx";

export default function MyPage() {
  return (
    <AppLayout showMenu={false}>
      <div className="mb-4 flex items-center justify-center gap-2">
        {/* 로고 제거 ✅ */}
        <a href="/chat" className="rounded border px-3 py-2 text-sm">쪽지함</a>
        <a href="/friends" className="rounded border px-3 py-2 text-sm">친구창</a>
      </div>
      <div className="rounded-2xl border bg-white p-6">
        <div className="h-48 rounded-lg bg-neutral-50 grid place-items-center text-sm text-neutral-600">
          본인정보 / 등급, 다음 등급까지 필요량, 작성한 글/답글/개인정보
        </div>
        <div className="mt-4 flex justify-center">
          <button className="rounded border px-4 py-2">정보 수정</button>
        </div>
      </div>
    </AppLayout>
  );
}
