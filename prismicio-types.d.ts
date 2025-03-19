// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type LandingPageDocumentDataSlicesSlice =
  | FinalCtaSlice
  | InfoBanerSlice
  | FaQSlice
  | ReviewsSlice
  | HowOrderSlice
  | AboutYouSlice
  | BenefitsSlice
  | HeroSlice;

/**
 * Content for Landing Page documents
 */
interface LandingPageDocumentData {
  /**
   * Slice Zone field in *Landing Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LandingPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: landing_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: landing_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Landing Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Landing Page document from Prismic
 *
 * - **API ID**: `landing_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LandingPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LandingPageDocumentData>,
    "landing_page",
    Lang
  >;

export type AllDocumentTypes = LandingPageDocument;

/**
 * Primary content in *AboutYou → Default → Primary*
 */
export interface AboutYouSliceDefaultPrimary {
  /**
   * About You title field in *AboutYou → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_you.default.primary.about_you
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about_you: prismic.RichTextField;
}

/**
 * Default variation for AboutYou Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutYouSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutYouSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutYou*
 */
type AboutYouSliceVariation = AboutYouSliceDefault;

/**
 * AboutYou Shared Slice
 *
 * - **API ID**: `about_you`
 * - **Description**: AboutYou
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutYouSlice = prismic.SharedSlice<
  "about_you",
  AboutYouSliceVariation
>;

/**
 * Primary content in *Benefits → Default → Primary*
 */
export interface BenefitsSliceDefaultPrimary {
  /**
   * Benefits Title field in *Benefits → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: benefits.default.primary.benefits_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  benefits_title: prismic.RichTextField;
}

/**
 * Default variation for Benefits Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BenefitsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BenefitsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Benefits*
 */
type BenefitsSliceVariation = BenefitsSliceDefault;

/**
 * Benefits Shared Slice
 *
 * - **API ID**: `benefits`
 * - **Description**: Benefits
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BenefitsSlice = prismic.SharedSlice<
  "benefits",
  BenefitsSliceVariation
>;

/**
 * Primary content in *FaQ → Default → Primary*
 */
export interface FaQSliceDefaultPrimary {
  /**
   * FAQ Title field in *FaQ → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fa_q.default.primary.faq_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  faq_title: prismic.RichTextField;
}

/**
 * Default variation for FaQ Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaQSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FaQSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FaQ*
 */
type FaQSliceVariation = FaQSliceDefault;

/**
 * FaQ Shared Slice
 *
 * - **API ID**: `fa_q`
 * - **Description**: FaQ
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaQSlice = prismic.SharedSlice<"fa_q", FaQSliceVariation>;

/**
 * Primary content in *FinalCta → Default → Primary*
 */
export interface FinalCtaSliceDefaultPrimary {
  /**
   * Fintal CTA title field in *FinalCta → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: final_cta.default.primary.fintal_cta_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  fintal_cta_title: prismic.RichTextField;
}

/**
 * Default variation for FinalCta Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FinalCtaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FinalCtaSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FinalCta*
 */
type FinalCtaSliceVariation = FinalCtaSliceDefault;

/**
 * FinalCta Shared Slice
 *
 * - **API ID**: `final_cta`
 * - **Description**: FinalCta
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FinalCtaSlice = prismic.SharedSlice<
  "final_cta",
  FinalCtaSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Hero Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hero_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  hero_title: prismic.RichTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *HowOrder → Default → Primary*
 */
export interface HowOrderSliceDefaultPrimary {
  /**
   * How order field in *HowOrder → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_order.default.primary.how_order
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  how_order: prismic.RichTextField;
}

/**
 * Default variation for HowOrder Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HowOrderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HowOrderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HowOrder*
 */
type HowOrderSliceVariation = HowOrderSliceDefault;

/**
 * HowOrder Shared Slice
 *
 * - **API ID**: `how_order`
 * - **Description**: HowOrder
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HowOrderSlice = prismic.SharedSlice<
  "how_order",
  HowOrderSliceVariation
>;

/**
 * Primary content in *InfoBaner → Default → Primary*
 */
export interface InfoBanerSliceDefaultPrimary {
  /**
   * Info Baner title field in *InfoBaner → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: info_baner.default.primary.info_baner_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  info_baner_title: prismic.RichTextField;
}

/**
 * Default variation for InfoBaner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InfoBanerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<InfoBanerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *InfoBaner*
 */
type InfoBanerSliceVariation = InfoBanerSliceDefault;

/**
 * InfoBaner Shared Slice
 *
 * - **API ID**: `info_baner`
 * - **Description**: InfoBaner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InfoBanerSlice = prismic.SharedSlice<
  "info_baner",
  InfoBanerSliceVariation
>;

/**
 * Primary content in *Reviews → Default → Primary*
 */
export interface ReviewsSliceDefaultPrimary {
  /**
   * Reviews title field in *Reviews → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: reviews.default.primary.reviews_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  reviews_title: prismic.RichTextField;
}

/**
 * Default variation for Reviews Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ReviewsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ReviewsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Reviews*
 */
type ReviewsSliceVariation = ReviewsSliceDefault;

/**
 * Reviews Shared Slice
 *
 * - **API ID**: `reviews`
 * - **Description**: Reviews
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ReviewsSlice = prismic.SharedSlice<
  "reviews",
  ReviewsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      LandingPageDocument,
      LandingPageDocumentData,
      LandingPageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutYouSlice,
      AboutYouSliceDefaultPrimary,
      AboutYouSliceVariation,
      AboutYouSliceDefault,
      BenefitsSlice,
      BenefitsSliceDefaultPrimary,
      BenefitsSliceVariation,
      BenefitsSliceDefault,
      FaQSlice,
      FaQSliceDefaultPrimary,
      FaQSliceVariation,
      FaQSliceDefault,
      FinalCtaSlice,
      FinalCtaSliceDefaultPrimary,
      FinalCtaSliceVariation,
      FinalCtaSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HowOrderSlice,
      HowOrderSliceDefaultPrimary,
      HowOrderSliceVariation,
      HowOrderSliceDefault,
      InfoBanerSlice,
      InfoBanerSliceDefaultPrimary,
      InfoBanerSliceVariation,
      InfoBanerSliceDefault,
      ReviewsSlice,
      ReviewsSliceDefaultPrimary,
      ReviewsSliceVariation,
      ReviewsSliceDefault,
    };
  }
}
