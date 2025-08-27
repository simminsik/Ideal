import AppLayout from "../../app/AppLayout.jsx";

export default function ProblemsGuest() {
  // 게스트 사용자 → 로그인 안내 + 문제 목록
  return (
    <AppLayout right={<a href='/login' className='rounded-lg border px-3 py-2 text-sm'>로그인</a>}>
      <div className="mb-4 h-10 rounded-lg bg-white/70 border grid place-items-center">
        문제 필터 (난이도 / 태그 / 정렬)
      </div>

      <div className="rounded-2xl border bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">문제 선택</h2>
        <ul className="space-y-2">
          <li><a href="/problems/1001" className="block rounded border px-3 py-2 hover:bg-neutral-50">1001번 - A+B</a></li>
          <li><a href="/problems/1002" className="block rounded border px-3 py-2 hover:bg-neutral-50">1002번 - 원의 교점</a></li>
          <li><a href="/problems/1003" className="block rounded border px-3 py-2 hover:bg-neutral-50">1003번 - 피보나치 함수</a></li>
        </ul>
      </div>
    </AppLayout>
  );
}
