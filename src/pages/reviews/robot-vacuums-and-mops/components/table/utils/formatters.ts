export const formatFeatureKey = (key: string): string => {
  return key.toLowerCase().replace(/ /g, '_');
};

export const formatFeatureValue = (value: string): string[] => {
  return value.split('\n')
    .map(item => item.trim())
    .filter(Boolean)
    .map(item => item.replace(/^- /, ''));
};

export const formatClassName = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};