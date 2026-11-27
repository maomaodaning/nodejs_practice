/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  //"source == null" covers "source == undefined"
  if (source == null) {
    throw new TypeError('mapArray: source should not be null or undefined');
  }
  const result: R[] = [];
  const n: number = source.length;
  for (let i = 0; i < n; i++) {
    result.push(mapper(source[i], i));
  } 
  return result;
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
  if (source == null) {
    throw new TypeError('filterArray: source should not be null or undefined');
  }
  const result: T[] = [];
  const n: number = source.length;
  for (let i = 0; i < n; i++) {
    if (predicate(source[i], i)) {
      result.push(source[i]);
    }
  }
  return result;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
  if (source == null) {
    throw new TypeError('reduceArray: source should not be null or undefined');
  }
  let acc = initial;
  const n = source.length;
  for (let i = 0; i < n; i++) {
    acc = reducer(acc, source[i], i);
  }
  return acc;
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  if (source == null) {
    throw new TypeError('partition: source should not be null or undefined');
  }
  const n = source.length;
  const pass: T[] = [];
  const fail: T[] = [];
  for (let i = 0; i < n; i++) {
    if (predicate(source[i])) {
      pass.push(source[i]);
    } else {
      fail.push(source[i]);
    }
  }
  return [pass, fail];
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
  if (source == null) {
  throw new TypeError('groupBy: source should not be null or undefined');
 }
 const acc = {} as Record<K, T[]>;
 const n = source.length;
 for (let i = 0; i < n; i++) {
  const key = keySelector(source[i]);
  if (acc[key] == null) {
    acc[key] = [];
  }
  acc[key].push(source[i]);
 }
 return acc;
}