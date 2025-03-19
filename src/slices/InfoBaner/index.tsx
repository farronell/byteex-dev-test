import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `InfoBaner`.
 */
export type InfoBanerProps = SliceComponentProps<Content.InfoBanerSlice>;

/**
 * Component for "InfoBaner" Slices.
 */
const InfoBaner: FC<InfoBanerProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.info_baner_title} />
    </section>
  );
};

export default InfoBaner;
