export const compPrefix = 'w';

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function getClassPrefix(compName: string) {
  return compPrefix + '-' + compName;
}
