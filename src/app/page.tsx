'use client'
import cafes from '@/data/cafes.json'
import CafeCard from '@/components/CafeCard'
import styles from './page.module.css'
import RecordIcon from '@/components/icons/RecordIcon'
import { useRef } from 'react'

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  function toggleMusic() {
    const audio = audioRef.current

    if (!audio) return

    if (audio.paused) {
      audio.volume = 1
      audio.play()
    } else {
      //smooth fade out
      const fadeOutDuration = 1000
      const fadeSteps = 20
      const fadeStepTime = fadeOutDuration / fadeSteps
      let currentStep = 0

      const fadeOut = setInterval(() => {
        currentStep++
        audio.volume = Math.max(0, 1 - currentStep / fadeSteps)

        if (currentStep >= fadeSteps) {
          clearInterval(fadeOut)
          audio.pause()
          audio.volume = 1
        }
      }, fadeStepTime)
      audio.play()
    }
  }

  return (
    <>
      <header className={styles.header}>
        <h1>Coffee & Wifi</h1>
        <button onClick={toggleMusic} className={styles.audioButton}>
          <RecordIcon size="24" />
        </button>
        <audio ref={audioRef} src="/audio/jazz.mp3" preload="auto"></audio>
      </header>
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
