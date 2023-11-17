export function processArgAdd(...processArgv: Array<string | number>) {
  let add = 0;
  for (let i = 2; i < processArgv.length; i++) {
    add += Number(processArgv[i]);
  }
  return add;
}
