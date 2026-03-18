import type { MetaData } from '@sharedTypes/index';

export const BREAKPOINT_WIDTH_SM = 767.9;

export const COMMIT_HASH = import.meta.env.COMMIT_HASH;

const PUBLIC_BASE: string = 'ogp-share';
const PUBLIC_DOMAIN: string = 'https://ft-iba.github.io';

export const ENV = {
  isModeDev: import.meta.env.MODE === 'development',
}

export const SITE = {
  DOMAIN: PUBLIC_DOMAIN,
  BASE: PUBLIC_BASE,
  SHARE_TEXT: 'シェアテキスト',
  SHARE_HASH: 'ハッシュタグA,ハッシュタグB',
}

export const META_COMMON: MetaData = {
  title: 'site title',
  description: 'site description',
  keywords: '',
  twitter: {
    card: 'summary_large_image'
  }
};