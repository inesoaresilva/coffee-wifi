import styles from './CafeCard.module.css'
import Image from 'next/image'
import { Cafe } from '@/types/cafe'

type CafeCardProps = {
  cafe: Cafe
}

function CafeCard({ cafe }: CafeCardProps) {
  const { name, images, neighbourhood, wifi } = cafe

  return (
    <div className={styles.overview}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.imgWrapper}>
        <Image
          fill
          className={styles.img}
          src={images[0].src}
          alt={cafe.name}
        />
      </div>
      <div className={styles.info}>
        <p>📍{neighbourhood}</p>
        <p>🛜 {wifi.speed}</p>
      </div>
    </div>
  )
}

export default CafeCard
