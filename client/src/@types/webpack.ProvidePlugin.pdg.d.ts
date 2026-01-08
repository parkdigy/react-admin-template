import * as PdgTypes from '@pdg/types';
import * as PdgCompare from '@pdg/compare';
import * as PdgDateTime from '@pdg/date-time';
import * as PdgData from '@pdg/data';
import * as PdgReactHook from '@pdg/react-hook';

declare global {
  // types - ObjectArray
  type ValueOf<T> = PdgTypes.ValueOf<T>;
  type Dict<T = any> = PdgTypes.Dict<T>;
  type Arr<T = any> = PdgTypes.Arr<T>;
  type IsObject<T> = PdgTypes.IsObject<T>;
  type IsArray<T> = PdgTypes.IsArray<T>;
  type ObjectMerge<T> = PdgTypes.ObjectMerge<T>;
  type ArrayMerge<A extends any[]> = PdgTypes.ArrayMerge<A>;
  type MutableArray<T> = PdgTypes.MutableArray<T>;
  type FlattenArray<T> = PdgTypes.FlattenArray<T>;
  type Prettify<T> = PdgTypes.Prettify<T>;
  type Writable<T> = PdgTypes.Writable<T>;
  // types - Function
  type Func = PdgTypes.Func;
  // types - Data
  type Lv<
    L = unknown,
    V = unknown,
    Other = {
      [key: string]: unknown;
    },
  > = PdgTypes.Lv<L, V, Other>;
  type Vl<
    V = unknown,
    L = unknown,
    Other = {
      [key: string]: unknown;
    },
  > = PdgTypes.Vl<V, L, Other>;
  // types - Letter
  type FirstLetter<T> = PdgTypes.FirstLetter<T>;
  type UpperLetter = PdgTypes.UpperLetter;
  type LowerLetter = PdgTypes.LowerLetter;
  // types - Null
  type NullableKeys<T> = PdgTypes.NullableKeys<T>;
  type NotNullableKeys<T> = PdgTypes.NotNullableKeys<T>;
  type NullableProperties<T> = PdgTypes.NullableProperties<T>;
  type NotNullableProperties<T> = PdgTypes.NotNullableProperties<T>;
  // types - PickOmit
  type PartialPick<T, K extends keyof T> = PdgTypes.PartialPick<T, K>;
  type PartialOmit<T, K extends keyof T> = PdgTypes.PartialOmit<T, K>;
  type RequiredPick<T, K extends keyof T> = PdgTypes.RequiredPick<T, K>;
  type RequiredOmit<T, K extends keyof T> = PdgTypes.RequiredOmit<T, K>;
  // types - Spread
  type Spread<A extends readonly [...any]> = PdgTypes.Spread<A>;
  // types - Compare
  type InValue<T, TValue> = PdgTypes.InValue<T, TValue>;
  type IsEmpty<T extends Dict | any[]> = PdgTypes.IsEmpty<T>;
  type IsUnionInclude<UnionType, TargetType> = PdgTypes.IsUnionInclude<UnionType, TargetType>;
  type IsStringLiteralUnion<U> = PdgTypes.IsStringLiteralUnion<U>;

  // compare
  const ifEmpty: typeof PdgCompare.ifEmpty;
  const ifNotEmpty: typeof PdgCompare.ifNotEmpty;
  const isEmpty: typeof PdgCompare.isEmpty;
  const isNotEmpty: typeof PdgCompare.isNotEmpty;
  const empty: typeof PdgCompare.empty;
  const notEmpty: typeof PdgCompare.notEmpty;
  const ifNotNull: typeof PdgCompare.ifNotNull;
  const ifNull: typeof PdgCompare.ifNull;
  const isNotNull: typeof PdgCompare.isNotNull;
  const isNull: typeof PdgCompare.isNull;
  const ifNotUndefined: typeof PdgCompare.ifNotUndefined;
  const ifUndefined: typeof PdgCompare.ifUndefined;
  const isNotUndefined: typeof PdgCompare.isNotUndefined;
  const isUndefined: typeof PdgCompare.isUndefined;
  const ifNotNullAndUndefined: typeof PdgCompare.ifNotNullAndUndefined;
  const ifNullOrUndefined: typeof PdgCompare.ifNullOrUndefined;
  const isNotNullAndUndefined: typeof PdgCompare.isNotNullAndUndefined;
  const isNullOrUndefined: typeof PdgCompare.isNullOrUndefined;
  const isContains: typeof PdgCompare.isContains;
  const contains: typeof PdgCompare.contains;
  const isEqual: typeof PdgCompare.isEqual;
  const equal: typeof PdgCompare.equal;
  const isBusinessNo: typeof PdgCompare.isBusinessNo;
  const isEmail: typeof PdgCompare.isEmail;
  const isInteger: typeof PdgCompare.isInteger;
  const isMobileNo: typeof PdgCompare.isMobileNo;
  const isNumericText: typeof PdgCompare.isNumericText;
  const isPersonalNo: typeof PdgCompare.isPersonalNo;
  const isTelNo: typeof PdgCompare.isTelNo;
  const isUrl: typeof PdgCompare.isUrl;

  // date
  const beginDateOfDay: typeof PdgDateTime.beginDateOfDay;
  const beginDateOfMonth: typeof PdgDateTime.beginDateOfMonth;
  const endDateOfDay: typeof PdgDateTime.endDateOfDay;
  const endDateOfMonth: typeof PdgDateTime.endDateOfMonth;
  const extractDate: typeof PdgDateTime.extractDate;
  const now: typeof PdgDateTime.now;
  const nowJs: typeof PdgDateTime.nowJs;
  const nowTime: typeof PdgDateTime.nowTime;
  const weekdayText: typeof PdgDateTime.weekdayText;

  // data
  const lv: typeof PdgData.lv;
  const vl: typeof PdgData.vl;
  const copy: typeof PdgData.copy;

  // api
  type ApiRequestData = PdgApi.ApiRequestData;
  type ApiRequestOption = PdgApi.ApiRequestOption;
  type ApiOption<T = any, D = ApiRequestData> = PdgApi.ApiOption<T, D>;
  const ApiError: typeof PdgApi.ApiError;

  // react-hook
  const useChanged: typeof PdgReactHook.useChanged;
  const useFirstSkipChanged: typeof PdgReactHook.useFirstSkipChanged;
  const useEventEffect: typeof PdgReactHook.useEventEffect;
  const useEventLayoutEffect: typeof PdgReactHook.useEventLayoutEffect;
  const useFirstSkipEffect: typeof PdgReactHook.useFirstSkipEffect;
  const useFirstSkipLayoutEffect: typeof PdgReactHook.useFirstSkipLayoutEffect;
  const useForwardRef: typeof PdgReactHook.useForwardRef;
  const useMountedRef: typeof PdgReactHook.useMountedRef;
  const useAutoUpdateRef: typeof PdgReactHook.useAutoUpdateRef;
  const useTimeoutRef: typeof PdgReactHook.useTimeoutRef;
  const clearTimeoutRef: typeof PdgReactHook.clearTimeoutRef;
  const useIntervalRef: typeof PdgReactHook.useIntervalRef;
  const clearIntervalRef: typeof PdgReactHook.clearIntervalRef;
}

export {};
