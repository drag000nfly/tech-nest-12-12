export const AFFILIATE_CODE = '?tag=epi89yhyhvgg7-20';

export function addAffiliateCode(url: string): string {
  if (!url) return url;
  return url.includes('?') ? `${url}&tag=epi89yhyhvgg7-20` : `${url}${AFFILIATE_CODE}`;
}