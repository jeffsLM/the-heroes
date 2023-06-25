import React, { SVGProps } from 'react';

export interface LogoProps extends SVGProps<SVGSVGElement> {
  darkModeIsEnabled: boolean;
}

export const HeroesLogo: React.FC<LogoProps> = ({ darkModeIsEnabled, className }) => {
  const color = darkModeIsEnabled ? 'white' : 'black';

  return (
    <svg className={className} width="151" height="58" viewBox="0 0 281 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M125.592 24.3521V29.9507H107.409V24.3521H125.592ZM109.538 10.1641V45H102.36V10.1641H109.538ZM130.712 10.1641V45H123.559V10.1641H130.712Z" fill={color} />
      <path d="M157.998 39.4014V45H139.456V39.4014H157.998ZM141.801 10.1641V45H134.623V10.1641H141.801ZM155.582 24.3521V29.8071H139.456V24.3521H155.582ZM157.974 10.1641V15.7866H139.456V10.1641H157.974Z" fill={color} />
      <path d="M161.323 10.1641H174.315C176.978 10.1641 179.267 10.5628 181.181 11.3604C183.111 12.1579 184.595 13.3382 185.631 14.9014C186.668 16.4645 187.187 18.3866 187.187 20.6675C187.187 22.5337 186.868 24.1367 186.23 25.4766C185.608 26.8005 184.722 27.909 183.574 28.8022C182.441 29.6795 181.109 30.3813 179.578 30.9077L177.305 32.104H166.012L165.964 26.5054H174.362C175.622 26.5054 176.667 26.2821 177.497 25.8354C178.326 25.3888 178.948 24.7668 179.363 23.9692C179.794 23.1717 180.009 22.2466 180.009 21.1938C180.009 20.0773 179.802 19.1123 179.387 18.2988C178.972 17.4854 178.342 16.8633 177.497 16.4326C176.651 16.002 175.591 15.7866 174.315 15.7866H168.501V45H161.323V10.1641ZM180.798 45L172.855 29.4722L180.44 29.4243L188.479 44.665V45H180.798Z" fill={color} />
      <path d="M219.976 26.7686V28.4194C219.976 31.0672 219.617 33.4438 218.899 35.5493C218.181 37.6548 217.168 39.4492 215.86 40.9326C214.552 42.4001 212.989 43.5246 211.171 44.3062C209.368 45.0877 207.367 45.4785 205.166 45.4785C202.98 45.4785 200.979 45.0877 199.16 44.3062C197.358 43.5246 195.795 42.4001 194.471 40.9326C193.147 39.4492 192.118 37.6548 191.384 35.5493C190.667 33.4438 190.308 31.0672 190.308 28.4194V26.7686C190.308 24.1048 190.667 21.7282 191.384 19.6387C192.102 17.5332 193.115 15.7388 194.423 14.2554C195.747 12.772 197.31 11.6395 199.112 10.8579C200.931 10.0763 202.932 9.68555 205.118 9.68555C207.319 9.68555 209.321 10.0763 211.123 10.8579C212.941 11.6395 214.505 12.772 215.812 14.2554C217.136 15.7388 218.157 17.5332 218.875 19.6387C219.609 21.7282 219.976 24.1048 219.976 26.7686ZM212.726 28.4194V26.7207C212.726 24.8704 212.559 23.2435 212.224 21.8398C211.889 20.4362 211.394 19.2559 210.74 18.2988C210.086 17.3418 209.289 16.624 208.348 16.1455C207.407 15.651 206.33 15.4038 205.118 15.4038C203.905 15.4038 202.829 15.651 201.888 16.1455C200.963 16.624 200.173 17.3418 199.519 18.2988C198.881 19.2559 198.395 20.4362 198.06 21.8398C197.725 23.2435 197.557 24.8704 197.557 26.7207V28.4194C197.557 30.2537 197.725 31.8807 198.06 33.3003C198.395 34.7039 198.889 35.8923 199.543 36.8652C200.197 37.8223 200.994 38.548 201.936 39.0425C202.877 39.5369 203.953 39.7842 205.166 39.7842C206.378 39.7842 207.454 39.5369 208.396 39.0425C209.337 38.548 210.126 37.8223 210.764 36.8652C211.402 35.8923 211.889 34.7039 212.224 33.3003C212.559 31.8807 212.726 30.2537 212.726 28.4194Z" fill={color} />
      <path d="M246.998 40.4014V46H228.456V40.4014H246.998ZM230.801 11.1641V46H223.623V11.1641H230.801ZM244.582 25.3521V30.8071H228.456V25.3521H244.582ZM246.974 11.1641V16.7866H228.456V11.1641H246.974Z" fill={color} />
      <path d="M267.759 36.8843C267.759 36.2622 267.663 35.7039 267.471 35.2095C267.296 34.6991 266.961 34.2365 266.467 33.8218C265.972 33.3911 265.278 32.9684 264.385 32.5537C263.492 32.139 262.335 31.7083 260.916 31.2617C259.337 30.7513 257.837 30.1771 256.418 29.5391C255.014 28.901 253.77 28.1593 252.685 27.314C251.617 26.4526 250.771 25.4557 250.149 24.3232C249.543 23.1908 249.24 21.8748 249.24 20.3755C249.24 18.924 249.559 17.6081 250.197 16.4277C250.835 15.2314 251.728 14.2106 252.877 13.3652C254.025 12.5039 255.381 11.842 256.944 11.3794C258.523 10.9168 260.254 10.6855 262.136 10.6855C264.704 10.6855 266.945 11.1481 268.859 12.0732C270.773 12.9984 272.257 14.2664 273.309 15.8774C274.378 17.4884 274.912 19.3307 274.912 21.4043H267.783C267.783 20.3835 267.567 19.4902 267.137 18.7246C266.722 17.943 266.084 17.3289 265.222 16.8823C264.377 16.4357 263.308 16.2124 262.016 16.2124C260.772 16.2124 259.735 16.4038 258.906 16.7866C258.077 17.1535 257.455 17.6559 257.04 18.2939C256.625 18.916 256.418 19.6178 256.418 20.3994C256.418 20.9896 256.561 21.5239 256.848 22.0024C257.151 22.481 257.598 22.9276 258.188 23.3423C258.778 23.757 259.504 24.1478 260.366 24.5146C261.227 24.8815 262.224 25.2404 263.356 25.5913C265.254 26.1655 266.921 26.8115 268.357 27.5293C269.808 28.2471 271.02 29.0526 271.993 29.9458C272.966 30.839 273.7 31.8519 274.195 32.9844C274.689 34.1169 274.936 35.4009 274.936 36.8364C274.936 38.3517 274.641 39.7075 274.051 40.9038C273.461 42.1001 272.608 43.113 271.491 43.9424C270.374 44.7718 269.043 45.4019 267.495 45.8325C265.948 46.2632 264.218 46.4785 262.303 46.4785C260.581 46.4785 258.882 46.2552 257.207 45.8086C255.533 45.346 254.009 44.6522 252.637 43.7271C251.282 42.8019 250.197 41.6216 249.384 40.186C248.57 38.7505 248.163 37.0518 248.163 35.0898H255.365C255.365 36.1745 255.533 37.0916 255.867 37.8413C256.202 38.591 256.673 39.1971 257.279 39.6597C257.901 40.1222 258.635 40.4572 259.48 40.6646C260.342 40.8719 261.283 40.9756 262.303 40.9756C263.548 40.9756 264.568 40.8001 265.366 40.4492C266.179 40.0983 266.778 39.6118 267.16 38.9897C267.559 38.3677 267.759 37.6659 267.759 36.8843Z" fill={color} />
      <rect y="6" width="94.19" height="44" fill="#ED1D24" />
      <path d="M20.911 11.1641V46H13.7572V11.1641H20.911ZM31.6298 11.1641V16.7866H3.20596V11.1641H31.6298Z" fill="white" />
      <line x1="99.5875" y1="6.5" x2="275.777" y2="6.5" stroke={color} />
      <line x1="99.475" y1="49.5" x2="275.665" y2="49.5" stroke={color} />
      <path d="M56.3423 25.3521V30.9507H38.1587V25.3521H56.3423ZM40.2881 11.1641V46H33.1104V11.1641H40.2881ZM61.4624 11.1641V46H54.3086V11.1641H61.4624Z" fill="white" />
      <path d="M86.4858 40.4014V46H67.9434V40.4014H86.4858ZM70.2881 11.1641V46H63.1104V11.1641H70.2881ZM84.0693 25.3521V30.8071H67.9434V25.3521H84.0693ZM86.4619 11.1641V16.7866H67.9434V11.1641H86.4619Z" fill="white" />
    </svg>
  );
}
