import styles from './Tag.module.css'

type TagProps = {
  text: string
}

const tagColorClasses: Record<string, string> = {
  'Near the metro': 'tag--blue',
  Terrace: 'tag--yellow',
  Cozy: 'tag--orange',
  Quiet: 'tag--violet',
  Garden: 'tag--green',
  'City center': 'tag--pink',
  'Lunch menu': 'tag--red',
  'Spacious tables': 'tag--brown',
}

function Tag({ text }: TagProps) {
  const tagClass = tagColorClasses[text] || 'tag--default'
  return <div className={`${styles.tag} ${styles[tagClass]}`}>{text}</div>
}

export default Tag
