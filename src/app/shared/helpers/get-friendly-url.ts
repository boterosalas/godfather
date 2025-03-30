export const parseFriendlyUrl = (input: string): string => {
  return input.trim().toLowerCase().replace(/\s+/g, '-');
};
