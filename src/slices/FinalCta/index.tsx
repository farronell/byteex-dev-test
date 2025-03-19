import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FinalCta`.
 */
export type FinalCtaProps = SliceComponentProps<Content.FinalCtaSlice>;

/**
 * Component for "FinalCta" Slices.
 */
const FinalCta: FC<FinalCtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.fintal_cta_title} />
    </section>
  );
};

export default FinalCta;
