import * as React from "react";

export interface IconProps {
  size?: number; // Add any additional props that you need for the icon here
  color?: string; // If you use color or other props, define them here
}

const ThreeDPrinterIcon: React.FunctionComponent<IconProps> = ({ size = 24, color = "black", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size} 
    height={size}
    fill={color} 
    viewBox="0 0 2048 2048"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={10}
      d="M453 407.5c-27.4 3.8-50.6 12.7-74.6 28.6-13.1 8.8-31.9 27.1-41.1 40.2-11.3 16.1-20.8 37.2-25.4 56.6-5.1 21.3-4.9-8.1-4.9 545.2v515.6l-37.2 18.4c-20.5 10.1-40.8 20.3-45.2 22.6l-8.1 4.1-.3 76.1-.2 76.1h134l.2 19.7c.1 10.9.2 25.3.3 32.1v12.2l110.8-.2 110.9-.3.1-31.5.2-31.5 449.3-.3 449.2-.2v64h223v-64h135l-.2-75.8-.3-75.7-45.5-22.8-45.5-22.9-.6-520.6c-.5-478-.6-521.3-2.2-528.5-2.9-13.8-6.6-26.5-10.3-35.4-9.5-23.3-24.9-44.8-43.6-61-26.2-22.7-55.5-36-89.7-40.7-10-1.4-70.1-1.6-569.9-1.5-452.2.1-560.5.4-568.2 1.4zm1137.4 37.4c29.5 5.3 52 16.6 71.7 36.1 21.7 21.4 34.9 49.9 37.9 81.8.6 6.3 1 46.6 1 97.9V748H343v-84.8c.1-85.2.6-103.4 3.5-117.2 10.6-50.9 48.1-88.1 100.9-100.2 7.1-1.7 14-2.3 31.1-2.7 12.1-.3 264.6-.5 561-.5l539 .2zM491 1205.5V1625H343V786h148zm345-382V861H527v-75h309zm92.2 13.7c.4 58.8.4 58.5 9.7 77.3 13.3 26.6 35.9 44.7 63.9 51.1 11 2.6 29 2.4 40.5-.4 30.2-7.4 56.5-31.3 66.7-60.8 5.1-14.6 5.2-16 5.7-68.7l.5-49.7h55.8l-.2 128-.3 128-148.8.3-148.7.2V786h54.9zm74.3-3.9c0 47 0 47.2 2.2 51.4 7.1 13.2 28 11.9 33.2-2 .7-1.9 1.1-19 1.1-49.8V786h39.1l-.3 48.7c-.4 48-.4 48.9-2.7 55.3-7.1 19.9-22.5 34.6-41.6 39.5-28.5 7.3-59.6-12.3-66.9-42.1-1.1-4.6-1.5-16.5-1.9-53.7l-.4-47.7h38.2zm513.5-9.8V861h-309v-75h309zm185 382V1625h-148V786h148zm-865-217v90.5h65v88h59v51.5l23.4 42.5c12.9 23.4 24.7 43.9 26.2 45.6 5.6 6.1 15.7 6.6 21.8 1.1 1.4-1.2 13.4-21.8 26.8-45.7l24.3-43.5.1-25.5.1-25.5 29.2-.3 29.1-.2v-88h66V898h309v727h-231v-65.8l3.1-.6c1.7-.3 41.3-.6 88-.6h84.9v-124.5l-10.2-5.9c-5.7-3.3-40.1-22.9-76.6-43.8l-66.3-37.8H734.8l-26.2 14.9c-27.7 15.8-81.1 46.5-108.6 62.4l-16.5 9.5V1558l86.5.3 86.5.2.3 33.2.2 33.3H527V898h309zm269 116.5v26H937v-52h168zm-59 81.9v19.9l-11.9 21.2c-6.6 11.7-12.4 21.7-12.8 22.1-.5.5-6.1-8.7-12.6-20.4l-11.7-21.3V1167h49zm276.9 209.8c36.9 21.2 64.5 37.3 65.6 38.4.5.5-138.9.9-367 .8-346.4 0-367.9-.1-365.6-1.7 2.5-1.8 87.4-50.7 89.4-51.6.7-.2 125.1-.5 276.6-.5l275.4-.1zm101.1 100.8v24.5H620v-49h804zm-175.9 60.9c.2.2.3 15.3.1 33.5l-.3 33.1H794v-65.9l2.3-.4c2.8-.6 451.2-.8 451.8-.3zm543.7 150 .2 45.6H252v-91l257.3-.2c141.4-.2 487.8-.2 769.7-.2l512.5.1zM536 1802.9c0 6.6-.3 12.6-.6 13.5-.6 1.4-8 1.6-74.5 1.6H387v-27h149zm1121.8 1.3-.3 13.3-75 .3-75 .2.2-13.2c.2-7.3.3-13.4.3-13.6 0-.1 33.8-.2 75-.2h75.1z"
    />
    <path
      stroke="#000"
      strokeWidth={10}
      d="M911.5 486.4c-1.6.7-3.9 2.3-5 3.6-2 2.2-2 3.8-2.3 84.4-.2 80.7-.2 82.2 1.8 85.4 1.1 1.8 3.2 3.7 4.6 4.2 1.6.6 42.8 1 110.6 1 99.1 0 108.2-.1 110.8-1.7 5.7-3.3 5.5.2 5.5-88.4 0-81.4 0-81.8-2.1-84.6-1.1-1.5-3.6-3.3-5.5-4-5.2-1.8-214.2-1.7-218.4.1zm188.6 35.8c.4 1.1.8 101 .4 103.5l-.6 3.3h-79.4c-43.7 0-79.6-.4-79.9-.8s-.2-24.5.1-53.5l.6-52.7h79.4c43.6 0 79.3.1 79.4.2zm-611.6 30.4c-31.4 6.8-52.5 33.8-52.5 66.9 0 29.2 18.7 55.1 46.4 64.1 6.9 2.3 9.9 2.7 20.6 2.8 10.5.1 13.7-.3 20-2.2 18.9-5.9 33.6-18.4 42.1-35.8 15.1-31.1 4.7-67.1-25-86.6-14.2-9.3-34.6-12.9-51.6-9.2zm28.6 37.6c20 9.2 24.9 35.7 9.4 51.3-6.2 6.1-13.5 9-23 9-10.4-.1-16.7-2.7-23.4-10.1-5.8-6.4-8.1-12.4-8.1-21.4 0-9.3 2.3-15.1 8.4-21.6 9.8-10.5 23.7-13.2 36.7-7.2zm1008.5-37.6c-25 5.6-44.8 24.6-51.3 49.4-2.3 8.8-2.3 25.4 0 34 3.8 14.4 13.3 28.6 24.7 37.2 37.6 28.1 91.1 11.1 106.7-34 2.4-6.8 2.7-9.2 2.7-20.2-.1-10.8-.4-13.6-2.7-20.5-3.7-11.3-9-19.6-17.9-28-9-8.7-15.4-12.6-26.3-16.1-10.3-3.3-25.7-4.1-35.9-1.8zm28.5 37.5c6.9 3.3 12.4 8.8 15.8 15.9 3.4 7.3 3.5 18.2.4 25.2-3 6.6-9.5 13.3-16.2 16.5-4.8 2.4-6.8 2.8-14.1 2.7-10 0-16.1-2.4-22.5-8.9-6.4-6.4-8.9-12.5-8.9-22 0-15.4 7.9-26.3 22.7-31.1 6.3-2.1 16.2-1.3 22.8 1.7z"
    />
  </svg>
);
export default ThreeDPrinterIcon;

