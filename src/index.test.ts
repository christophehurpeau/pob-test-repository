// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from "@jest/globals";
import { sayHello } from ".";

test('sayHello should say "hello"', () => {
  const logMock = jest.spyOn(console, "log").mockImplementation(() => {});

  sayHello();

  expect(logMock.mock.calls.length).toBe(1);
  expect(logMock.mock.calls[0][0]).toBe("hello");
});
