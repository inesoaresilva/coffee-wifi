import CafeView from '@/components/CafeView'
import { getCafeBySlug } from '@/helpers/getCafeBySlug'

type Props = {
  params: {
    cafeName: string
  }
}

async function name({ params }: Props) {
  const cafe = getCafeBySlug(params.cafeName)

  if (!cafe) return null

  return (
    <main>
      <CafeView cafe={cafe} />
    </main>
  )
}

export default name
