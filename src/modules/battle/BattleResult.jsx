import AppLayout from "../../app/AppLayout.jsx";

export default function BattleResult() {
  return (
    <AppLayout showMenu={false}>
      <div className="rounded-2xl border bg-white p-6">
        <div className="mb-4 text-center text-xl font-bold">대결 결과</div>
        <div className="h-48 rounded-lg bg-neutral-50" />
        <div className="mt-6 flex justify-center gap-2">
          <button className="rounded border px-4 py-2">재대결</button>
          <a href="/" className="rounded border px-4 py-2">나가기</a>
        </div>
      </div>
    </AppLayout>
  );
}