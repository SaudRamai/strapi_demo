import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    heading: Attribute.String;
    descriptions: Attribute.Text;
    form: Attribute.Component<'element.form'>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'element.button-link', true>;
    image: Attribute.Media;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'pricing';
  };
  attributes: {
    name: Attribute.String;
    descriptions: Attribute.Text;
    plan: Attribute.Component<'element.pricing-card', true>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'row';
  };
  attributes: {
    card: Attribute.Component<'element.card', true>;
  };
}

export interface ElementButtonLink extends Schema.Component {
  collectionName: 'components_element_button_links';
  info: {
    displayName: 'button link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isexternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['primary ', 'secondary']>;
  };
}

export interface ElementCard extends Schema.Component {
  collectionName: 'components_element_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    image: Attribute.Media;
    heading: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ElementForm extends Schema.Component {
  collectionName: 'components_element_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    heading: Attribute.String;
    descriptions: Attribute.Text;
    input: Attribute.Component<'element.input', true>;
    button: Attribute.Component<'element.button-link'>;
  };
}

export interface ElementInput extends Schema.Component {
  collectionName: 'components_element_inputs';
  info: {
    displayName: 'input';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    inputType: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface ElementPricingCard extends Schema.Component {
  collectionName: 'components_element_pricing_cards';
  info: {
    displayName: 'pricing card';
    description: '';
  };
  attributes: {
    plantype: Attribute.String;
    planprice: Attribute.String;
    isfeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'element.pricing-card',
      'oneToMany',
      'api::landing-page.landing-page'
    >;
    link: Attribute.Component<'element.button-link'>;
  };
}

export interface SeoMetadata extends Schema.Component {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'metadata';
    description: '';
  };
  attributes: {
    metadescription: Attribute.Text;
    metaimage: Attribute.Media;
    metatitle: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.cta': BlocksCta;
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.row': BlocksRow;
      'element.button-link': ElementButtonLink;
      'element.card': ElementCard;
      'element.form': ElementForm;
      'element.input': ElementInput;
      'element.pricing-card': ElementPricingCard;
      'seo.metadata': SeoMetadata;
    }
  }
}
