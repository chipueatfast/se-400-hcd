/**
 * Gets the unencoded version of an encoded URI.
 *
 * @param input The URI encoded string.
 * @returns The decoded string.
 */
export const decode = (input: string) => {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (error) {
    return '';
  }
};

/**
 * Encodes a text string as a valid component of a URI.
 *
 * @param input The string that needs to be encoded.
 * @returns The encoded string.
 */
export const encode = (input: string) => {
  try {
    return encodeURIComponent(input);
  } catch (error) {
    return '';
  }
};

/**
 * Transform a given query string into a object.
 *
 * @param query The query string that needs to be parsed.
 * @example queryStringParse('?foo=bar'); // { foo: 'bar' }
 */
export const queryStringParse = (query: string): Record<string, string> => {
  const parser = /([^=?#&]+)=?([^&]*)/g;
  const result: any = {};
  let part;

  while ((part = parser.exec(query))) {
    const key = decode(part[1]),
      value = decode(part[2]);

    if (key in result || !key || !value) {
      continue;
    }

    result[key] = value;
  }

  return result;
};

export function encodeQueryData(data: any) {
  const ret = [];
  for (let d in data) {
    if (data[d]) {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
  }
  return ret.join('&');
}