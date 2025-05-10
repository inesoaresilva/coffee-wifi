import cafes from '@/data/cafes.json';
import CafeCard from '@/components/CafeCard';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <header>
      <h1>Coffee & Wifi</h1>
    </header>
    <main>
    
      {cafes.map((cafe) => {
        return (
          <Link href={`/cafes/${cafe.slug}`} key={cafe.slug}>
            <CafeCard cafe={cafe} />
          </Link>
        );
      })}
    </main>
  </>
  );
}
