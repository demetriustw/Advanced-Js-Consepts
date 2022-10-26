describe("First group of tests", () => {
  test("Jest is working", () => {
    expect(1).toBe(1);
  });
});

describe("Another group of tests", () => {
  test("more tests", () => {
    expect(1).toBe(1);
  });
});

function getRandomId(min = 0, max = 0, ids = []) {
  let id;
  let a = [];
  do {
    id = Math.floor(Math.random() * (max - min + 1)) + min;
    if (a.indexOf(id) === -1) {
      a.push(id);
    }
    if (a.length === max - min + 1) {
      if (ids.indexOf(id) > -1) {
        return "failed";
      }
    }
  } while (ids.indexOf(id) > -1);
  return id;
}

test("returns a random number", () => {
  const originalMath = Object.create(global.Math);
  const mockMath = Object.create(global.Math);
  mockMath.random = jest.fn(() => 0.75);
  global.Math = mockMath;
  const id = getNewId();
  expect(id).toBe(0.75);
  global.Math = originalMath;
});

test("returns an interger", () => {
  const id = getRandomId();
  expect(id).toBe(Math.floor(id));
});

test("generates a number within a specified range", () => {
  const id = getRandomId(10, 100);
  expect(id).toBeLessThanOrEqual(100);
  expect(id).toBeGreaterThanOrEqual(10);
});

test("generates a numbe within a defined range", () => {
  for (let i = 0; i < 100; i++) {
    const id = getRandomId(10, 100);

    expect(id).toBeLessThanOrEqual(100);
    expect(id).toBeGreaterThanOrEqual(10);
    expect(id).not.toBeLessThan(10);
    expect(id).not.toBeGreaterThan(100);
  }
});

test("generates a unique number", () => {
  mockIds = [1, 2, 3, 4, 5];
  let id = getRandomId(1, 5, mockIds);
  expect(id).toBe("failed");

  id = getRandomId(1, 6, mockIds);
  expect(id).toBe(6);
});
