import { Icon } from '@/types/icon'

const ArrowRightIcon = ({ color, size = 24 }: Icon) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.167236 6.33672H8.64274L5.89861 9.08085L7.07699 10.2592L11.8329 5.50338L7.07699 0.747925L5.89861 1.92632L8.64264 4.67005H0.167236V6.33672Z"
      fill={color}
    />
  </svg>
)
export default ArrowRightIcon
