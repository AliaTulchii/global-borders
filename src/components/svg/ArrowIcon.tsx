
interface ArrowIconProps{
  className: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({className}) => (
  <svg
  className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33594 10H16.6693M16.6693 10L11.6693 5M16.6693 10L11.6693 15"
      stroke="#001343"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;
