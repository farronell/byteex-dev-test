import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FaQ`.
 */
export type FaQProps = SliceComponentProps<Content.FaQSlice>;

/**
 * Component for "FaQ" Slices.
 */
const FaQ: FC<FaQProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.faq_title} />
    </section>
  );
};

export default FaQ;
