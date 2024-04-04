import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./hero.module.css";
import {
  HeroSection,
  HeroSectionPropsCustom,
  HeroSectionPropsNative,
} from "./HeroSection";
import { HeroTitle } from "./HeroTitle";
import { HeroSubtitle } from "./HeroSubtitle";
import { HeroActions } from "./HeroActions";
import { HeroOverline } from "./HeroOverline";

export type HeroVariantBasicPropsNative = HeroSectionPropsNative;
export type HeroVariantBasicPropsCustom = HeroSectionPropsCustom & {
  ddTitle: string;
  ddSubtitle: string;
  ddOverline?: string;
};
export type HeroVariantBasicProps = HeroVariantBasicPropsNative &
  HeroVariantBasicPropsCustom;
export const HeroVariantBasic = forwardRef<HTMLElement, HeroVariantBasicProps>(
  function HeroVariantBasic(
    { children, ddTitle, ddSubtitle, ddOverline, ...restProps },
    ref,
  ) {
    return (
      <HeroSection
        {...restProps}
        ref={ref}
        ddBackgroundSrc="/images/backgrounds/layered-waves-1.svg"
        ddBackgroundAlt="bg-image"
      >
        <div className={clsx(styles["variant-basic"])}>
          <HeroOverline>{ddOverline}</HeroOverline>
          <HeroTitle>{ddTitle}</HeroTitle>
          <HeroSubtitle>{ddSubtitle}</HeroSubtitle>
          <HeroActions>{children}</HeroActions>
        </div>
      </HeroSection>
    );
  },
);
