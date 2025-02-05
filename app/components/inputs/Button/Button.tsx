import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./button.module.css";

export type ButtonPropsNative = JSX.IntrinsicElements["button"];
export type ButtonPropsCustom = {
  /**
   * The size of the button
   * @default md
   */
  ddSize?: "sm" | "md" | "lg";
  /**
   * The color of the button
   * @default primary
   */
  ddVariant?: "primary" | "secondary" | "tertiary" | "paper";
};
export type ButtonProps = ButtonPropsNative & ButtonPropsCustom;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, className, ddSize = "md", ddVariant = "primary", ...restProps },
    ref,
  ) {
    return (
      <button
        {...restProps}
        className={clsx(
          styles.root,
          className,
          styles[ddSize],
          styles[ddVariant],
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
