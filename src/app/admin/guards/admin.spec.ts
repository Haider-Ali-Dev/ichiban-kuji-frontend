import { AdminGuard } from './admin';

describe('Admin', () => {
  it('should create an instance', () => {
    expect(new AdminGuard()).toBeTruthy();
  });
});
