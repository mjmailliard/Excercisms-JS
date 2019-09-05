export const isPangram = 
(string) => ([...new Set(string.toLowerCase())]
.join('').replace(/[^a-z]/g,'').length) === 26 ? true : false;
