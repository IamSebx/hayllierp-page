export interface WpRenderedField {
  rendered: string
}

export interface WpFeaturedMedia {
  source_url: string
}

export interface WpEmbedded {
  'wp:featuredmedia'?: WpFeaturedMedia[]
}

export interface WpPost {
  id: number
  slug: string
  date: string
  title: WpRenderedField
  excerpt: WpRenderedField
  content: WpRenderedField
  _embedded?: WpEmbedded
}
