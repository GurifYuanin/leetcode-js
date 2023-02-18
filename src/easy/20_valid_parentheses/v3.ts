// AC 但内存占用高
function isValid(s: string): boolean {
  let nextS = s;
  do {
    s = nextS;
    nextS = s.replace(/(\[\])|(\(\))|(\{\})/g, '');
  } while(nextS.length < s.length);
  return nextS.length === 0;
};