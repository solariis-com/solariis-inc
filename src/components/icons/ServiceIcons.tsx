import starIcon from "../../assets/images/services/star.svg";
import star1Icon from "../../assets/images/services/star-1.svg";
import moonIcon from "../../assets/images/services/moon.svg";
import triangleIcon from "../../assets/images/services/triangle.svg";
import vectorIcon from "../../assets/images/services/Vector.svg";
import ellipseIcon from "../../assets/images/services/ellipse.svg";

export const StarIcon = () => (
  <div className="relative size-[68px]">
    <img src={starIcon} alt="Star" className="w-full h-full" />
  </div>
);

export const MiscIcon = () => (
  <div className="relative size-[68px]">
    <img src={star1Icon} alt="Star 1" className="w-full h-full" />
  </div>
);

export const MoonIcon = () => (
  <div className="relative size-[68px]">
    <img src={moonIcon} alt="Moon" className="w-full h-full" />
  </div>
);

export const TriangleIcon = () => (
  <div className="relative size-[68px]">
    <img src={triangleIcon} alt="Triangle" className="w-full h-full" />
  </div>
);

export const CodeIcon = () => (
  <div className="relative size-[68px]">
    <img src={vectorIcon} alt="Code" className="w-full h-full" />
  </div>
);

export const EllipseIcon = () => (
  <div className="relative size-[68px]">
    <img src={ellipseIcon} alt="Ellipse" className="w-full h-full" />
  </div>
);
