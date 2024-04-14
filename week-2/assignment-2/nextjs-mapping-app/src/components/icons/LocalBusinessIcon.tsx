import * as React from "react";

export interface IconProps {
  size?: number; // You can add more props if needed, like color
  color?: string; // This is if you want to allow changing the icon's color dynamically
}

const LocalBusinessIcon: React.FunctionComponent<IconProps> = ({ size = 24, color = "black", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size} 
    height={size}
    fill={color} 
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path d="M227.3 195c-6.7 4-6.7 4.3-7.4 37l-.5 29.5-6.2 32.5c-3.5 17.9-8.9 46-12.2 62.5-15.9 81-15 74.9-15 97.7 0 11.3.5 23 1 25.9 2.6 13.7 13.4 27.7 26.3 33.8l6.7 3.2-.2 117.1-.3 117.2-8.8.3c-11.9.4-17 3-20.8 10.5-1.6 3.2-1.9 6-1.9 20.8 0 17 0 17-2.2 17-3.3 0-8.5 3.5-10.8 7.2-4 6.5-1.6 15.9 4.9 19.3 2.7 1.3 37.4 1.5 336.6 1.5 314.4 0 333.9-.1 336.6-1.7 3.1-1.8 6.9-8.5 6.9-11.9-.1-3.9-3.9-10.4-7.5-12.5l-3.5-2.1v-17.1c0-16-.2-17.5-2.3-21.2-1.3-2.3-4.2-5.2-7-6.9-4-2.4-6.1-3-12.7-3.4l-8-.5V516.3l3.9-1.2c9.3-2.7 20.1-13.5 25.9-25.7 2.7-5.9 2.7-6 3-31.5l.3-25.6-3.6-18.9c-2-10.4-5.1-26.8-7-36.4s-5.4-28.1-7.9-41-6.6-34.3-9.2-47.5c-4.6-23.9-4.6-24.2-5.6-54.5-1.1-33.7-1.2-34.3-7.8-38.7l-3.3-2.3H519.1c-284.3 0-288.6 0-291.8 2m562.5 37.7.3 11.3H248v-10.8c0-6 .3-11.2.7-11.5.3-.4 122.2-.6 270.7-.5l270.1.3zM290 274.8c0 3.5-1.5 13.9-13 93.2-5 34.4-9.2 63.1-9.5 63.7-.3 1-6.5 1.3-26.3 1.3h-25.9l1.3-5.8c.7-3.2 3.3-16.8 5.8-30.2 6.9-38 17.3-92.6 22.7-119.8l1-5.2H290zm71.4 1.4c-.2 2.4-2 20-3.9 39.3-1.9 19.2-5.3 53.6-7.7 76.2l-4.2 41.3h-49.8l.6-3.3c1.1-6.2 13.5-89.4 18.3-123.4l4.8-34.3H362zm72 2c-1 16.9-2.7 46.5-4.9 87.7-1.4 25-2.8 50.3-3.1 56.3l-.7 10.8h-50.4l.3-2.3c.2-1.2 3.1-28.8 6.4-61.2 3.4-32.5 7-67.2 8-77.3 1.1-10.1 2-18.8 2-19.3s9-.9 21.4-.9h21.4zm70.6 74.3V433h-50v-4.3c0-2.3.7-15 1.5-28.2s2.3-41.1 3.5-62c3-56.4 3-57.6 3.6-62.3l.5-4.2H504zm72.3-70.8c.7 10.2 3.9 77.3 5.7 118.8.6 13.2 1.2 25.9 1.4 28.2l.4 4.3H533V272h42.7zm70.7-9c0 .5 2.5 24.6 5.5 53.8 3.1 29.1 6.8 65 8.3 79.7l2.8 26.8H613l-.4-2.3c-.3-1.2-.8-9.9-1.1-19.2-.7-20.2-4.1-92.2-5.5-115.5-.5-9.1-1-18.2-1-20.3V272h21c11.6 0 21 .3 21 .7m72 .1c0 .7 4.6 32.3 9.5 65.2 2.6 17.5 8.3 57.8 11.1 78.5.8 6 1.7 12.2 2 13.7l.6 2.8h-49.8l-7.7-76.3c-4.3-41.9-8.1-78.1-8.4-80.5l-.5-4.2h21.6c11.9 0 21.6.3 21.6.8m74-.3c0 .3 2 10.8 4.5 23.3 5.6 28.5 19.7 103.7 22.5 119.7 1.1 6.6 2.3 13.2 2.6 14.7l.6 2.8h-52l-1.1-6.6c-.7-3.6-5.2-34.7-10.2-69.2-4.9-34.5-9.6-67.2-10.4-72.7s-1.5-10.6-1.5-11.3c0-.9 5.2-1.2 22.5-1.2 12.4 0 22.5.2 22.5.5M266 465.8c0 8.4-2.5 14.8-7.9 20.2-14.3 14.3-39.1 7.6-43.1-11.6-.7-3.1-.9-7.6-.5-10l.6-4.4H266zm79 .6c0 8.2-2.1 14.1-6.8 18.9-9.5 9.9-21.7 11.2-33.4 3.8-7-4.5-10.1-10.4-10.6-20.8l-.5-8.3H345zm79.7 1.4c-.3 4.4-1.2 9.4-2.2 11.3-4.3 8.5-14.4 14.9-23.5 14.9-5.9 0-14.1-3.5-18.2-7.7-5.4-5.7-7.1-9.8-7.6-18.6l-.5-7.7h52.6zm79.7-.8c-.1 8.6-1.8 13.4-6.6 18.6-10.3 11.1-27.4 10.9-38.1-.5-5.1-5.5-6.7-9.8-6.7-18.9V460l25.8.2 25.7.3zm79.6.7c0 9.4-2 14.3-7.7 19.4-8.3 7.5-20.3 8.8-30.4 3.3-8.9-4.9-12.9-12.1-12.9-23.4v-7h51zm81-2.4c0 8.7-2.6 15.6-7.9 20.8-4.6 4.7-12 7.9-18.1 7.9-5.6 0-13.2-3.1-17.7-7.3-6.5-6-8.3-10.1-8.3-19.2V460h52zm79.2-1.1c.2 7-.2 10.1-1.8 14.5-3 8.1-14.3 15.3-24 15.3-5.2 0-13.6-3.6-17.8-7.7-5.6-5.4-7.6-10.4-7.6-19.1V460h51zm79.8 2.4c0 9.5-1.7 14.1-7 19.5-4.9 4.9-11.7 7.9-18.1 7.9-8.9 0-20-7.1-24.2-15.5-1.7-3.4-3.3-15.8-2.2-17.4.4-.7 8.9-1.1 26.1-1.1H824zM283.6 506c6.4 7 24 14 35.4 14 11 0 27.9-6.5 36.1-13.9 3.6-3.1 4.8-3.7 5.3-2.6.3.8 3.3 3.5 6.6 6 13.3 9.7 32.9 12.6 49.1 7.3 7.7-2.5 16.6-7.7 20.8-12.1l2.2-2.5 4.5 4.4c5.7 5.5 14.6 9.8 24.6 11.8 9.4 1.9 12.4 2 20.8.2 10.5-2.3 17.2-5.2 23.9-10.7l6.3-5 4.4 4.1c9 8.3 26.5 13.8 39.8 12.5 12.8-1.2 26.6-7.2 33.4-14.7l2.2-2.4 4.4 4.2c8.8 8.4 27.2 14.4 40 12.9 12.4-1.3 28.3-8.4 33.3-14.8l2-2.6 4.6 4.4c5.7 5.4 14.9 9.9 24.9 11.9 9.6 2 12 2 21.6 0 10.2-2 18.9-6.1 24.7-11.8l4.8-4.6 5.1 4.8c5.8 5.5 14.8 10.1 21.5 11.1 2.5.3 4.5 1 4.4 1.4-.2.4-.3 52.9-.3 116.7v116l-99.1-.2-99.1-.3-.2-90.5-.1-90.5-2.3-3.7c-1.3-2-4-4.7-6-6l-3.7-2.3-57.8-.3c-37.5-.2-59.1.1-61.6.8-5.2 1.4-9 4.6-11.2 9.4-1.8 3.9-1.9 8.6-1.9 93.8V752H248V519.2l5.3-1.2c7.2-1.7 17.6-7.3 22.2-12 2.2-2.2 4-4 4.2-4s1.9 1.8 3.9 4M562 611.4v24.3l-8.3.5c-9.2.6-13.2 2.2-17 6.8-4 4.7-4.7 9-4.7 28 .1 23.5 1.1 27.4 9 32.7 2.8 2 4.6 2.3 12.2 2.3h8.8l-.2 22.7-.3 22.8h-85l-.3-82.3-.2-82.2h86zm-.3 62.8c-.2 1.8-.4.4-.4-3.2s.2-5 .4-3.3c.2 1.8.2 4.8 0 6.5M325.5 779.8l100 .2-9.5 9.5-9.5 9.5H216v-9.3c0-5.2.2-9.6.5-9.8.2-.3 2.3-.4 4.7-.3 2.4 0 49.3.2 104.3.2m260.4 10.8 6.4 7.9-37.1.3c-20.5.1-53.9.1-74.2 0l-37-.3 8.2-9.2 8.3-9.1 58-.4c52.7-.3 58.1-.2 59.5 1.3.8.9 4.4 5.2 7.9 9.5m234.1-1.1v9.5H629.2l-7.9-8.6c-4.3-4.7-7.9-9-8.1-9.5s40.5-.9 103.2-.9H820z" />
    <path d="M282.5 559.3c-5.6 2.2-7.4 3.7-10.2 8.5l-2.8 4.7-.3 65.5c-.2 36-.1 69.2.3 73.7.8 9.2 2.7 13.2 8.4 17l3.4 2.3h132.2l3.8-2.5c2-1.4 4.6-4.3 5.7-6.5 1.9-3.8 2-5.9 2-76.9 0-49.3-.3-73.9-1.1-75.8-1.5-4-4.8-7.3-9.4-9.4-3.8-1.7-7.8-1.9-66.5-1.8-45.4 0-63.3.4-65.5 1.2m114.3 85.9.2 57.8h-49.4c-34 0-49.7-.3-50.1-1.1-.4-.6-.4-26.7 0-58l.8-56.9 49.1.2 49.1.3z" />
    <path d="M362.9 608.7c-6.3 5.4-48.2 49.9-51.1 54.2-3.1 5-3.5 8.8-1.3 13.1 3.3 6.4 10.2 8.8 16.3 5.6 1.5-.8 11.5-10.6 22.3-21.8 35.7-37.1 34.8-36.1 34.9-41.1.1-10.6-13-16.8-21.1-10m261.6-48.8c-5.1 2.4-9.3 6.8-10.5 11.2-.6 2.1-1 31.1-1 74.8 0 70.4 0 71.5 2.1 75.8 1.1 2.3 3.5 5.3 5.2 6.5l3.2 2.3 66.4.3 66.4.2 4.4-2.6c3.4-2 5.1-3.9 6.9-7.9l2.5-5.3-.3-71.4c-.3-70.1-.3-71.4-2.4-75.3-1.1-2.2-4-5.4-6.3-7l-4.3-3-64.1-.2c-60.9-.3-64.4-.2-68.2 1.6M741 645v58h-99V587h99z" />
    <path d="M704 615.5c-3 1.6-44.7 44.5-47.4 48.7-3.8 5.9-1.1 15.5 5.1 17.9 4.2 1.6 9.7 1 13-1.4 3.1-2.2 40.2-40.7 44.3-45.9 8.1-10.4-3.7-25.6-15-19.3" />
  </svg>
);
export default LocalBusinessIcon;

