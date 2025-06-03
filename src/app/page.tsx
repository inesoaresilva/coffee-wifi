import cafes from '@/data/cafes.json'
import CafeCard from '@/components/CafeCard'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.list}>
          {cafes.map((cafe) => {
            return <CafeCard key={cafe.slug} cafe={cafe} />
          })}
        </div>
      </main>
    </>
  )
}
