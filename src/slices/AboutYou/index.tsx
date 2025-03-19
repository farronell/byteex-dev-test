import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutYou`.
 */
export type AboutYouProps = SliceComponentProps<Content.AboutYouSlice>;

/**
 * Component for "AboutYou" Slices.
 */
const AboutYou: FC<AboutYouProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.about_you} />
    </section>
  );
};

export default AboutYou;
