import clsx from "clsx";
import "./Button.scss";

const Button = ({ href, className, children }) => {
  if (href) {
    return (
      <a href={href} className={clsx("btn", className)}>
        {children}
      </a>
    );
  }
  return <button className={clsx("btn", className)}>{children}</button>;
};

export default Button;
