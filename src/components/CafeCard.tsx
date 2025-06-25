import styles from './CafeCard.module.css'
import Image from 'next/image'
import { Cafe } from '@/types/cafe'
import Link from 'next/link'
import ExpandIcon from './icons/ExpandIcon'
import LocationIcon from './icons/LocationIcon'
import WifiIcon from './icons/WifiIcon'
import Tag from './Tag'
import ExternalLinkIcon from './icons/ExternalLinkIcon'

type CafeCardProps = {
  cafe: Cafe
}

function CafeCard({ cafe }: CafeCardProps) {
  const { name, images, neighbourhood, city, wifi } = cafe

  return (
    <div className={styles.overview}>
      <Link
        href={`/cafes/${cafe.slug}`}
        className={styles.nameWrapper}
        aria-label={`See more details about ${cafe.name}`}
      >
        <h2 className={styles.name}>{name}</h2>
        <ExpandIcon />
      </Link>
      <div className={styles.imgWrapper}>
        {images && images.length > 0 && (
          <Image
            fill
            className={styles.img}
            src={images[0].src}
            alt={cafe.name}
          />
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <LocationIcon aria-hidden="true" />
          <a
            className={styles.locationUrl}
            aria-label={`View ${neighbourhood}, ${city} on Google Maps`}
            href={cafe.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {neighbourhood}, {city}
            <ExternalLinkIcon size="16" color="#2c2107" aria-hidden="true" />
          </a>
        </div>

        <div className={styles.infoItem}>
          <WifiIcon />
          <p>{wifi.speed}</p>
        </div>
        <div className={styles.tags}>
          {cafe.tags.slice(0, 3).map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CafeCard
