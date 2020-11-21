import React from "react"

const IconLogo: React.FC = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="25.5" cy="22.5" r="22.5" fill="#3DF5F5" />
    <circle cx="22.5" cy="25.5" r="22.5" fill="#00CCCC" />
    <path
      d="M16.8634 36.1C16.8634 40.5735 18.0172 43 13.6188 43C9.22032 43 3 37.5735 3 33.1C3 28.6265 4.50088 28 8.89931 28C13.2977 28 16.8634 31.6265 16.8634 36.1Z"
      fill="#3DF5F5"
    />
    <circle cx="25" cy="14" r="8" fill="#3DF5F5" />
    <circle cx="23" cy="32" r="8" fill="#00CCCC" />
    <path
      d="M44 17.0527C44 21.6309 43.6884 19.5089 39.4189 19.5089C35.1495 19.5089 31.6884 15.7976 31.6884 11.2194C31.6884 6.64116 27.7052 6 31.9747 6C36.2442 6 44 12.4746 44 17.0527Z"
      fill="#00CCCC"
    />
    <g filter="url(#filter0_i)">
      <path
        d="M27.1385 45.6676C12.2378 21.0067 7.21841 36.1502 3.2344 33.5176C1.95987 29.3461 1.24799 23.8388 1 17.7216C9.50926 3.44459 19.8459 -2.12632 28.0349 8.60856C31.3217 14.38 34.6085 14.6838 34.3566 19.8478C45.0847 39.0577 33.2059 40.8496 37.8953 39.8961C37.8953 42.63 29.7534 49.9954 27.1385 45.6676Z"
        fill="#166169"
      />
    </g>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM15 13.2V12H33V16.2H19.2V22.2H32.4V25.8H19.2V31.8H33V36H15V34.8V31.8V25.8V22.2V16.2V13.2Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_i"
        x="1"
        y="3"
        width="41"
        height="47"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="3" dy="3" />
        <feGaussianBlur stdDeviation="2.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.51 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
  </svg>

  // <svg
  //   id="logo"
  //   xmlns="http://www.w3.org/2000/svg"
  //   role="img"
  //   viewBox="0 0 84 96"
  // >
  //   <title>Logo</title>
  //   <g transform="translate(-8.000000, -2.000000)">
  //     <g transform="translate(11.000000, 5.000000)">
  //       {/* <path
  //         d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
  //         // fill="currentColor"
  //       /> */}

  //       <polygon
  //         id="Shape"
  //         stroke="currentColor"
  //         stroke-width="5"
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //         points="39 0 0 22 0 67 39 90 78 68 78 23"
  //       />
  //     </g>
  //   </g>
  // </svg>
)

export default IconLogo
