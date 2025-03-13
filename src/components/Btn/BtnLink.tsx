import { NavLink } from "react-router-dom";
import ArrowIcon from "../svg/ArrowIcon";


interface BtnLinkProps{
  className: string, 
  direction: string,
  children: React.ReactNode
}

const BtnLink:React.FC<BtnLinkProps> = ({className, direction, children}) => {

  return (
    <NavLink className={className} to={direction}>
      <p>
        {children}
      </p>
      <ArrowIcon className={"btn__arrow"} />
    </NavLink>
  );
};

export default BtnLink;
