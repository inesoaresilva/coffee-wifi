import cafes from '@/data/cafes.json'
import CafeCard from '@/components/CafeCard'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header>
        <h1>Coffee & Wifi</h1>
      </header>
      <main className={styles.list}>
        {cafes.map((cafe) => {
          return <CafeCard key={cafe.slug} cafe={cafe} />
        })}
      </main>
    </>
  )
}
