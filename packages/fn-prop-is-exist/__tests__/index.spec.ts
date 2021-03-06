import propIsExist from '../src';

describe('@geeeger/fn-prop-is-exist module', () => {
  it('should pass', () => {
    expect(
      propIsExist('a.b.c', {
        a: {
          b: {
            c: {},
          },
        },
      })
    ).toBeTruthy();

    expect(propIsExist('a.b.c', '')).toBeFalsy();

    expect(
      propIsExist('a.1.c', {
        a: [{}, { c: {} }],
      })
    ).toBeTruthy();

    expect(
      propIsExist('0.1.a', [
        [
          {},
          {
            a: {},
          },
        ],
      ])
    ).toBeTruthy();

    expect(
      propIsExist('0.0.c', [
        [
          {},
          {
            a: {},
          },
        ],
      ])
    ).toBeFalsy();

    expect(propIsExist('0.0.c', undefined)).toBeFalsy();
  });

  it('should be the type', () => {
    expect(
      propIsExist(
        'a',
        {
          a: {},
        },
        'Object'
      )
    ).toBeTruthy();

    expect(
      propIsExist(
        'a',
        {
          a: {},
        },
        'Array'
      )
    ).toBeFalsy();

    expect(propIsExist('a', undefined, 'Boolean')).toBeFalsy();

    expect(propIsExist('0', ['String'], 'String')).toBeTruthy();
  });
});
