import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HowOrder`.
 */
export type HowOrderProps = SliceComponentProps<Content.HowOrderSlice>;

/**
 * Component for "HowOrder" Slices.
 */
const HowOrder: FC<HowOrderProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.how_order}/>
    </section>
  );
};

export default HowOrder;
