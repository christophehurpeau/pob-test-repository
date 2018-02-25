import { sayHello } from '../index';

test('sayHello should say "hello"', () => {
  const logMock = jest.fn();
  global.console = { log: logMock };

  sayHello();

  expect(logMock.mock.calls.length).toBe(1);
  expect(logMock.mock.calls[0][0]).toBe('hello');
});
