import AppLayout from "../../app/AppLayout.jsx";
import Card from "../../components/ui/Card.jsx";
import Button from "../../components/ui/Button.jsx";

export default function HomeAuthed() {
  return (
    <AppLayout
      right={
        <div className='flex items-center gap-2'>
          <a href='/me' className='rounded-lg border px-3 py-2 text-sm'>마이페이지</a>
          <Button variant='outline' onClick={() => alert('로그아웃 (데모)')}>로그아웃</Button>
        </div>
      }
    >
      <div className='grid gap-6 md:grid-cols-3'>
        <Card title='사이트 최근 소식'><div className='h-56 rounded-lg bg-neutral-50' /></Card>
        <Card title='커뮤니티 최신 글'><div className='h-56 rounded-lg bg-neutral-50' /></Card>
        <Card title='최근 푼 문제'><div className='h-56 rounded-lg bg-neutral-50' /></Card>
      </div>
    </AppLayout>
  );
}
