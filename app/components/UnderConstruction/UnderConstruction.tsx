import { forwardRef } from "react";
import { clsx } from "clsx";

import styles from "./under-construction.module.css";

export const UnderConstruction = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["nav"]
>(function UnderConstruction({ className, children, ...restProps }, ref) {
  return (
    <div {...restProps} className={clsx(styles.uc, className)} ref={ref}>
      <div>
        <img
          src="/logo-stacked-color.png"
          alt="dds-practice-transitions-logo"
        />
        {children}
      </div>
      <div></div>
    </div>
  );
});
