import { helper } from '@ember/component/helper';

export function ignorePro(params/*, hash*/) {
  return params[0] !== params[1];
}

export default helper(ignorePro);
