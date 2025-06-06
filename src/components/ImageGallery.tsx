'use client'
import { Image as CafeImage } from '@/types/image'
import Image from 'next/image'
import { useState } from 'react'
import styles from './ImageGallery.module.css'
import ArrowLeftIcon from './icons/ArrowLeftIcon'
import ArrowRightIcon from './icons/ArrowRightIcon'

type ImageGalleryProps = {
  images: CafeImage[]
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [index, setIndex] = useState(0)

  if (images.length === 0) return null

  const { src, description } = images[index]
  const key = src.replace('/images/', '').replace(/\.webp$/, '')

  return (
    <div className={styles.gallery}>
      <figure className={styles.figure}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            fill
            key={key}
            alt={description ?? ''}
            src={src}
          />
        </div>

        {description && (
          <div className={styles.caption}>
            <button
              className={styles.previousButton}
              aria-label="Previous image"
              disabled={index === 0}
              onClick={() => setIndex(index - 1)}
            >
              <ArrowLeftIcon size={16} color={'#2c2107'} />
            </button>
            <figcaption className={styles.description}>
              {description}
            </figcaption>
            <button
              className={styles.nextButton}
              aria-label="Next image"
              disabled={index === images.length - 1}
              onClick={() => setIndex(index + 1)}
            >
              <ArrowRightIcon size={16} color={'#2c2107'} />
            </button>
          </div>
        )}
      </figure>
    </div>
  )
}

export default ImageGallery
