export const isPangram = (string) => ([...new Set(string.toLowerCase())].sort().join('').trim().replace(/[^a-z]/g,'').length) === 26 ? true : false;
