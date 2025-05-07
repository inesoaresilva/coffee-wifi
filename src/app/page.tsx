import cafes from '@/data/cafes.json';
import CafeCard from '@/components/CafeCard';

export default function Home() {
  return (
    <>
    <header>
      <h1>Coffee & Wifi</h1>
    </header>
    <main>
      {cafes.map((cafe) => {
        return <CafeCard cafe={cafe} key={cafe.slug}/>;
      })}
    </main>
  </>
  );
}
