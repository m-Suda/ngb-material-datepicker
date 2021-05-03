import { FillDateWithZerosPipe } from './fill-date-with-zeros.pipe';

describe('FillDateWithZerosPipe', () => {
  it('create an instance', () => {
    const pipe = new FillDateWithZerosPipe();
    expect(pipe).toBeTruthy();
  });
});
