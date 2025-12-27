// types - ObjectArray
declare type ValueOf<T> = import('@pdg/types').ValueOf<T>;
declare type Dict<T = any> = import('@pdg/types').Dict<T>;
declare type Arr<T = any> = import('@pdg/types').Arr<T>;
declare type IsObject<T> = import('@pdg/types').IsObject<T>;
declare type IsArray<T> = import('@pdg/types').IsArray<T>;
declare type ObjectMerge<T> = import('@pdg/types').ObjectMerge<T>;
declare type ArrayMerge<A extends any[]> = import('@pdg/types').ArrayMerge<A>;
declare type MutableArray<T> = import('@pdg/types').MutableArray<T>;
declare type FlattenArray<T> = import('@pdg/types').FlattenArray<T>;
declare type Prettify<T> = import('@pdg/types').Prettify<T>;
declare type Writable<T> = import('@pdg/types').Writable<T>;
// types - Function
declare type Func = import('@pdg/types').Func;
// types - Data
declare type Lv<
  L = unknown,
  V = unknown,
  Other = {
    [key: string]: unknown;
  },
> = import('@pdg/types').Lv<L, V, Other>;
declare type Vl<
  V = unknown,
  L = unknown,
  Other = {
    [key: string]: unknown;
  },
> = import('@pdg/types').Vl<V, L, Other>;
// types - Letter
declare type FirstLetter<T> = import('@pdg/types').FirstLetter<T>;
declare type UpperLetter = import('@pdg/types').UpperLetter;
declare type LowerLetter = import('@pdg/types').LowerLetter;
// types - Null
declare type NullableKeys<T> = import('@pdg/types').NullableKeys<T>;
declare type NotNullableKeys<T> = import('@pdg/types').NotNullableKeys<T>;
declare type NullableProperties<T> = import('@pdg/types').NullableProperties<T>;
declare type NotNullableProperties<T> = import('@pdg/types').NotNullableProperties<T>;
// types - PickOmit
declare type PartialPick<T, K extends keyof T> = import('@pdg/types').PartialPick<T, K>;
declare type PartialOmit<T, K extends keyof T> = import('@pdg/types').PartialOmit<T, K>;
declare type RequiredPick<T, K extends keyof T> = import('@pdg/types').RequiredPick<T, K>;
declare type RequiredOmit<T, K extends keyof T> = import('@pdg/types').RequiredOmit<T, K>;
// types - Spread
declare type Spread<A extends readonly [...any]> = import('@pdg/types').Spread<A>;
// types - Compare
declare type InValue<T, TValue> = import('@pdg/types').InValue<T, TValue>;
declare type IsEmpty<T extends Dict | any[]> = import('@pdg/types').IsEmpty<T>;
declare type IsUnionInclude<UnionType, TargetType> = import('@pdg/types').IsUnionInclude<UnionType, TargetType>;
declare type IsStringLiteralUnion<U> = import('@pdg/types').IsStringLiteralUnion<U>;

// compare
declare const ifEmpty: typeof import('@pdg/compare').ifEmpty;
declare const ifNotEmpty: typeof import('@pdg/compare').ifNotEmpty;
declare const isEmpty: typeof import('@pdg/compare').isEmpty;
declare const isNotEmpty: typeof import('@pdg/compare').isNotEmpty;
declare const empty: typeof import('@pdg/compare').empty;
declare const notEmpty: typeof import('@pdg/compare').notEmpty;
declare const ifNotNull: typeof import('@pdg/compare').ifNotNull;
declare const ifNull: typeof import('@pdg/compare').ifNull;
declare const isNotNull: typeof import('@pdg/compare').isNotNull;
declare const isNull: typeof import('@pdg/compare').isNull;
declare const ifNotUndefined: typeof import('@pdg/compare').ifNotUndefined;
declare const ifUndefined: typeof import('@pdg/compare').ifUndefined;
declare const isNotUndefined: typeof import('@pdg/compare').isNotUndefined;
declare const isUndefined: typeof import('@pdg/compare').isUndefined;
declare const ifNotNullAndUndefined: typeof import('@pdg/compare').ifNotNullAndUndefined;
declare const ifNullOrUndefined: typeof import('@pdg/compare').ifNullOrUndefined;
declare const isNotNullAndUndefined: typeof import('@pdg/compare').isNotNullAndUndefined;
declare const isNullOrUndefined: typeof import('@pdg/compare').isNullOrUndefined;
declare const isContains: typeof import('@pdg/compare').isContains;
declare const contains: typeof import('@pdg/compare').contains;
declare const isEqual: typeof import('@pdg/compare').isEqual;
declare const equal: typeof import('@pdg/compare').equal;
declare const isBusinessNo: typeof import('@pdg/compare').isBusinessNo;
declare const isEmail: typeof import('@pdg/compare').isEmail;
declare const isInteger: typeof import('@pdg/compare').isInteger;
declare const isMobileNo: typeof import('@pdg/compare').isMobileNo;
declare const isNumericText: typeof import('@pdg/compare').isNumericText;
declare const isPersonalNo: typeof import('@pdg/compare').isPersonalNo;
declare const isTelNo: typeof import('@pdg/compare').isTelNo;
declare const isUrl: typeof import('@pdg/compare').isUrl;

// date
declare const beginDateOfDay: typeof import('@pdg/date-time').beginDateOfDay;
declare const beginDateOfMonth: typeof import('@pdg/date-time').beginDateOfMonth;
declare const endDateOfDay: typeof import('@pdg/date-time').endDateOfDay;
declare const endDateOfMonth: typeof import('@pdg/date-time').endDateOfMonth;
declare const extractDate: typeof import('@pdg/date-time').extractDate;
declare const now: typeof import('@pdg/date-time').now;
declare const nowJs: typeof import('@pdg/date-time').nowJs;
declare const nowTime: typeof import('@pdg/date-time').nowTime;
declare const weekdayText: typeof import('@pdg/date-time').weekdayText;

// data
declare const lv: typeof import('@pdg/data').lv;
declare const vl: typeof import('@pdg/data').vl;
declare const copy: typeof import('@pdg/data').copy;

// react-hook
declare const useChanged: typeof import('@pdg/react-hook').useChanged;
declare const useForwardRef: typeof import('@pdg/react-hook').useForwardRef;
declare const useMountedRef: typeof import('@pdg/react-hook').useMountedRef;
declare const useAutoUpdateRef: typeof import('@pdg/react-hook').useAutoUpdateRef;
declare const useTimeoutRef: typeof import('@pdg/react-hook').useTimeoutRef;
declare const clearTimeoutRef: typeof import('@pdg/react-hook').clearTimeoutRef;
declare const useIntervalRef: typeof import('@pdg/react-hook').useIntervalRef;
declare const clearIntervalRef: typeof import('@pdg/react-hook').clearIntervalRef;
