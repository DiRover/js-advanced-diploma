import { calcTileType } from '../utils';

test('check top-left', () => {
  const expected = 'top-left';
  const received = calcTileType(0, 8);
  expect(received).toBe(expected);
});

test('check top-right', () => {
  const expected = 'top-right';
  const received = calcTileType(7, 8);
  expect(received).toBe(expected);
});

test('check bottom-right', () => {
  const expected = 'bottom-right';
  const received = calcTileType(63, 8);
  expect(received).toBe(expected);
});

test('check bottom-left', () => {
  const expected = 'bottom-left';
  const received = calcTileType(56, 8);
  expect(received).toBe(expected);
});

test('check top 1', () => {
  const expected = 'top';
  const received = calcTileType(2, 8);
  expect(received).toBe(expected);
});

test('check top 6', () => {
  const expected = 'top';
  const received = calcTileType(6, 8);
  expect(received).toBe(expected);
});

test('check bottom 57', () => {
  const expected = 'bottom';
  const received = calcTileType(57, 8);
  expect(received).toBe(expected);
});

test('check bottom 62', () => {
  const expected = 'bottom';
  const received = calcTileType(62, 8);
  expect(received).toBe(expected);
});

test('check left 8', () => {
  const expected = 'left';
  const received = calcTileType(8, 8);
  expect(received).toBe(expected);
});

test('check left 48', () => {
  const expected = 'left';
  const received = calcTileType(48, 8);
  expect(received).toBe(expected);
});

test('check right 15', () => {
  const expected = 'right';
  const received = calcTileType(15, 8);
  expect(received).toBe(expected);
});

test('check right 55', () => {
  const expected = 'right';
  const received = calcTileType(55, 8);
  expect(received).toBe(expected);
});

test('check center 14', () => {
  const expected = 'center';
  const received = calcTileType(14, 8);
  expect(received).toBe(expected);
});

test('check center 31', () => {
  const expected = 'center';
  const received = calcTileType(30, 8);
  expect(received).toBe(expected);
});

