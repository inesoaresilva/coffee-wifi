import CafeView from '@/components/CafeView'
import { getCafeBySlug } from '@/helpers/getCafeBySlug'

type Props = {
  params: Promise<{
    cafeName: string
  }>
}

async function name({ params }: Props) {
  const cafe = getCafeBySlug((await params).cafeName)
  if (cafe) {
    return <CafeView cafe={cafe}></CafeView>
  }
}

export default name
