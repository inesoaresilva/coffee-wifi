import { Icon } from '@/types/icon'

const ArrowLeftIcon = ({ color, size = 24 }: Icon) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.8329 4.67045H3.35734L6.10148 1.92631L4.92309 0.747925L0.167236 5.50378L4.92309 10.2592L6.10148 9.08085L3.35744 6.33712H11.8329V4.67045Z"
      fill={color}
    />
  </svg>
)
export default ArrowLeftIcon
