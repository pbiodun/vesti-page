import { Link } from "react-router-dom";

const Button = ({ link, CTA, styles, width }) => {
  return (
    <div
      className={`${styles} + ${" "} + lg:w-[${width}] font-fontReg text-[#fff] text-center bg-[#67A948] cursor-pointer hover:bg-headcol rounded-xl`}
    >
      <Link to={link}>{CTA}</Link>
    </div>
  );
};

export default Button;

// hover:bg-headcol
