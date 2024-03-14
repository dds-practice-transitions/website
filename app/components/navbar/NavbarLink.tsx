import { forwardRef } from "react";
import { clsx } from "clsx";

import styles from "./navbar.module.css";
import { Down } from "@icon-park/react";
import { Icon } from "../display/Icon";

export type NavbarLinkProps = JSX.IntrinsicElements["a"] & {
  ddLabel: string;
  ddActive?: boolean;
};
export const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  function NavbarLink(
    { children, className, ddLabel, ddActive = false, ...restProps },
    ref,
  ) {
    const isMenu = typeof children !== "undefined";
    return (
      <li className={clsx(styles["navbar-item"])}>
        <a
          {...restProps}
          className={clsx(styles["navbar-link"], className, {
            menu: isMenu,
            [styles["active"]]: ddActive,
          })}
          ref={ref}
        >
          <div className={styles["content"]}>
            <span>{ddLabel}</span>
            {isMenu && <Icon DDIcon={Down} />}
          </div>
          {children}
        </a>
      </li>
    );
  },
);
