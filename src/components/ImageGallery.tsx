'use client'
import { Image as CafeImage } from '@/types/image'
import Image from 'next/image'
import { useState } from 'react'
import styles from './ImageGallery.module.css'

type ImageGalleryProps = {
  images: CafeImage[]
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [index, setIndex] = useState(0)

  if (images.length === 0) return null

  const { src, description } = images[index]
  const key = src.replace('/images/', '').replace(/\.webp$/, '')

  return (
    <>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          fill
          key={key}
          alt={description ?? ''}
          src={src}
        />
      </div>
      <button disabled={index === 0} onClick={() => setIndex(index - 1)}>
        ⬅️
      </button>
      <button
        disabled={index === images.length - 1}
        onClick={() => setIndex(index + 1)}
      >
        ➡️
      </button>
    </>
  )
}

export default ImageGallery
