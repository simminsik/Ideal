import AppLayout from "../../app/AppLayout.jsx";

export default function BoardListGuest() {
  return (
    <AppLayout right={<a href='/login' className='rounded-lg border px-3 py-2 text-sm'>로그인</a>}>
      <div className="rounded-2xl border bg-white p-4">
        <div className="h-80 rounded-lg bg-neutral-50" />
        <div className="mt-3 flex items-center gap-2">
          <input placeholder="검색" className="flex-1 rounded border px-3 py-2" />
          <a href="#" className="rounded border px-3 py-2">돌아가기</a>
        </div>
      </div>
    </AppLayout>
  );
}