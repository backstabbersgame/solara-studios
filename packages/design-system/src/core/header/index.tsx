import React from "react";
import styles from "./index.module.scss";

type BasicHeaderProps = React.HTMLAttributes<HTMLElement>;

export const BasicHeader: React.FC<BasicHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <header className={`${styles.header} ${className || ""}`} {...props}>
      {children}
    </header>
  );
};

export default BasicHeader;
