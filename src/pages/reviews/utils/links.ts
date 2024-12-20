export function addAffiliateCode(url: string): string {
  const affiliateCode = '?tag=epi89yhyhvgg7-20';
  if (url.includes('?')) {
    return `${url}&${affiliateCode.substring(1)}`;
  }
  return `${url}${affiliateCode}`;
}
