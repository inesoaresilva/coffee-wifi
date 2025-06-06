import { Cafe } from '@/types/cafe'
import styles from './CafeView.module.css'
import ImageGallery from './ImageGallery'
import Link from 'next/link'
import ArrowLeftIcon from './icons/ArrowLeftIcon'

type CafeViewProps = {
  cafe: Cafe
}

function CafeView({ cafe }: CafeViewProps) {
  return (
    <>
      <Link
        href="/"
        className={styles.nameWrapper}
        aria-label={`Go back to the main page`}
      >
        <h2 className={styles.name}>{cafe.name}</h2>
        <ArrowLeftIcon color={'#2c2107'} />
      </Link>
      <p className={styles.review}>{cafe.review}</p>
      {cafe.images?.length > 0 && <ImageGallery images={cafe.images} />}
    </>
  )
}

export default CafeView
