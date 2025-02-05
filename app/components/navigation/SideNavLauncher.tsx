import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";
import { Icon } from "../display/Icon";
import { HamburgerButton } from "@icon-park/react";

export const SideNavLauncher = forwardRef<
  HTMLButtonElement,
  JSX.IntrinsicElements["button"]
>(function SideNavLauncher({ className, ...restProps }, ref) {
  return (
    <button
      {...restProps}
      className={clsx(styles.launcher, className)}
      ref={ref}
    >
      <Icon DDIcon={HamburgerButton} ddSize={24} />
    </button>
  );
});
