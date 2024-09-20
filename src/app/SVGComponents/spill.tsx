import * as React from "react"
import style from "../css/spillstyle.module.css"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // className={style.ebbflow}
    // width="800px"
    // height="800px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#000000"
      d="M358.094 155.813c-43.147 0-74.466 9.892-82.938 27.468-83.55-2.5-152.875 26.708-134.906 46.72 2.342 2.607.3 5.57-5.25 5.844-138.955 6.827-164.758 69.375-30.97 88.75 5.662.822 6.792 4.934 4.095 7.594-32.494 32.043 38.39 55.5 143.656 55.5 107.528 0 165.73-18.51 147.19-48.5-4.092-6.618-2.013-11.31 7-12.25 142.247-14.794 106.15-95.06-16.345-102.782-24.96-1.57-19.04-13.427-9.938-14.594 102.117-13.078 39.97-53.75-21.593-53.75z"
    />
  </svg>
)
export default SvgComponent
