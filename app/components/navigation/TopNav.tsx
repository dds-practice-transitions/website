import { ReactElement, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./navbar.module.css";
import { NavLinkProps } from "./NavLink";
import { NavigationProvider } from "./Nav.context";

export type TopNavPropsNative = Omit<
  JSX.IntrinsicElements["nav"],
  "children"
> & {
  children: ReactElement<NavLinkProps>[] | ReactElement<NavLinkProps>;
};
export type TopNavPropsCustom = Record<string, unknown>;
export type TopNavProps = TopNavPropsNative & TopNavPropsCustom;

export const TopNav = forwardRef<HTMLElement, TopNavProps>(function TopNav(
  { children, className, ...restProps },
  ref,
) {
  return (
    <NavigationProvider navType="top">
      <nav {...restProps} className={clsx(styles.navbar, className)} ref={ref}>
        <ul>{children}</ul>
      </nav>
    </NavigationProvider>
  );
});
