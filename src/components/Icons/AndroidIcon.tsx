interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const AndroidIcon: React.FC<IconProps> = ({ width = 24, height = 24, className }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className={className}
    >
      <path d="M17.5,10.5C18.11,10.5 18.59,10.59 19.05,10.69L21,6.83C21.35,6.17 21.21,5.34 20.65,4.85L19.56,4C18.89,3.46 17.92,3.57 17.38,4.24L15.46,8.05C16.2,9.03 16.86,9.71 17.5,10.5M23,16V18C23,18.55 22.55,19 22,19H16V12.5C16,10.43 14.57,9 12.5,9H11.5C9.43,9 8,10.43 8,12.5V19H2C1.45,19 1,18.55 1,18V16C1,15.45 1.45,15 2,15H8V12.5C8,9.19 10.69,6.5 14,6.5H12.5C15.81,6.5 18.5,9.19 18.5,12.5V15H22C22.55,15 23,15.45 23,16Z"/>
    </svg>
  );
};