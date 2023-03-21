export const extractStringFromUrl = (_url: string, _start: string, _end: string): string => {
  const start = _url.indexOf(_start) + _start.length; // add 6 to skip over "photo/"
  const end = _url.lastIndexOf(_end); // get the index of the last "-" character before the ending number
  const extractedString = _url.slice(start, end).replace(/-/g, " ");

  return extractedString
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}