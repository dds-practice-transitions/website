import type { Meta, StoryObj } from "@storybook/react";
import {
  randFullName,
  randJobTitle,
  randNumber,
  randQuote,
} from "@ngneat/falso";
import {
  type Testimonial,
  SectionVariantTestimonials,
} from "./SectionVariantTestimonials";

const meta: Meta = {
  title: "Page / Section / Testimonials",
  // @ts-expect-error forwardRef mismatch
  component: SectionVariantTestimonials,
} satisfies Meta<typeof meta>;

export default meta;
type Story = StoryObj<typeof meta>;

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png",
  "https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg",
];

const ddItems: Testimonial[] = [...new Array(5)].map(() => ({
  ddChannelImg: logos[randNumber({ min: 0, max: 1 })],
  ddChannelAlt: "facebook",
  ddUser: {
    ddImgSrc: `/images/test-${randNumber({ min: 3, max: 4 })}.jpg`,
    ddPosition: "center",
    ddJobTitle: randJobTitle(),
    ddFullName: randFullName(),
  },
  ddQuote: randQuote(),
}));

export const Default: Story = {
  args: {
    ddTitle: "What our clients have to say",
    ddSubtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.",
    ddItems,
  },
};
