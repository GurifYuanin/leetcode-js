// Time Limit Exceeded
function isMatch(s: string, p: string): boolean {
  const reg = new RegExp(`^${p.replace(/\*+/g, '.*').replace(/\?/g, '.{1}') }$`);
  return reg.test(s);
};