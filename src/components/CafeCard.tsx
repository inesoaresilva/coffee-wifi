import styles from './CafeCard.module.css';
import Image from 'next/image';

type Cafe = {
    name: string,
    imageUrl: string,
    neighbourhood: string,
    wifi: {
        speed: string,
        uploadSpeed: string,
        downloadSpeed: string,
    },
    socketsAvailable: string,
    noiseLevel: string,
    comfort: string,
    light: string,
    tags: string[],
    pricePoint: number,
    lastVisit: string,
    review: string,
}

type CafeCardProps = {
    cafe: Cafe;
}

function CafeCard({cafe}: CafeCardProps ) {
  const { name, imageUrl, neighbourhood, wifi } = cafe;

  return (
    <div className={styles.overview}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.imgWrapper}>
        <Image fill className={styles.img} src={imageUrl} alt={cafe.name} />
      </div>
      <div className={styles.info}>
        <p>📍{neighbourhood}</p>
        <p>🛜 {wifi.speed}</p>
      </div>
    </div>
  );
}

export default CafeCard;
