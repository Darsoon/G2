import { G2Spec } from '../../../src';

export function mockLegendColor(): G2Spec {
  return {
    type: 'legends',
    height: 100,
    scale: {
      color: {
        type: 'ordinal',
        domain: ['a', 'b'],
        range: ['steelblue', 'orange'],
      },
    },
  };
}
