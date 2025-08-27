import AppLayout from "../../app/AppLayout.jsx";
import Card from "../../components/ui/Card.jsx";

export default function HomeGuest() {
  return (
    <AppLayout right={<a href='/login' className='rounded-lg border px-4 py-2 text-sm'>로그인</a>}>
      <div className='grid gap-6 md:grid-cols-3'>
        <Card title='관련 뉴스'><div className='h-64 rounded-lg bg-neutral-50' /></Card>
        <Card title='채용 공고'><div className='h-64 rounded-lg bg-neutral-50' /></Card>
        <Card title='최근 푼 문제'><div className='h-64 rounded-lg bg-neutral-50' /></Card>
      </div>
    </AppLayout>
  );
}