export function addSentenceSpacing(text: string): string {
  // Replace periods followed by a word character with period + double space
  return text.replace(/\.(\w)/g, '.  $1')
    // Replace exclamation marks followed by a word character with exclamation + double space
    .replace(/\!(\w)/g, '!  $1')
    // Replace question marks followed by a word character with question mark + double space
    .replace(/\?(\w)/g, '?  $1');
}