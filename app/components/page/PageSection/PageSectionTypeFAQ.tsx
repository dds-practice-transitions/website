import { forwardRef } from "react";

import { PageSectionTypeFAQDefault } from "./PageSectionTypeFAQDefault";
import { exhaustiveMatchGuard } from "../../../utils";

export type PageSectionTypeFAQPropsShared = {
  ddTitle: string;
  ddSubtitle?: string;
};
export type PageSectionTypeFAQPropsVariantDefault =
  PageSectionTypeFAQPropsShared & {
    ddVariant: "default";
  };

export type PageSectionTypeFAQPropsVariant =
  PageSectionTypeFAQPropsVariantDefault;

export type PageSectionTypeFAQPropsNative = Omit<
  JSX.IntrinsicElements["section"],
  "children"
>;
export type PageSectionTypeFAQProps = PageSectionTypeFAQPropsNative &
  PageSectionTypeFAQPropsVariant;

export const PageSectionTypeFAQ = forwardRef<
  HTMLElement,
  PageSectionTypeFAQProps
>(function PageSectionTypeFAQ(props, ref) {
  switch (props.ddVariant) {
    case "default":
      return <PageSectionTypeFAQDefault {...props} ref={ref} />;

    default:
      return exhaustiveMatchGuard(props.ddVariant);
  }
});
