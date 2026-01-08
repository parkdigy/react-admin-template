import { type Location as RouterLocation, type SetURLSearchParams } from 'react-router';

let _location: RouterLocation<any> | undefined;

const location = {
  /********************************************************************************************************************
   * get
   * ******************************************************************************************************************/
  get() {
    return _location;
  },

  /********************************************************************************************************************
   * set
   * ******************************************************************************************************************/
  set(location: RouterLocation<any>) {
    _location = location;
  },

  /********************************************************************************************************************
   * deHash
   * ******************************************************************************************************************/
  deHash(location?: Location | RouterLocation) {
    const values: Dict<string> = {};
    const hash = ifUndefined(location, window.location).hash.substring(1);
    hash.replace(/([^=&]+)=([^&]*)/g, (substring, key, value) => {
      values[decodeURIComponent(key)] = decodeURIComponent(value);
      return substring;
    });
    return values;
  },

  /********************************************************************************************************************
   * updateSearchParams
   * ******************************************************************************************************************/
  updateSearchParams(setSearchParams: SetURLSearchParams, params: Dict<string | undefined>, reset = false) {
    setSearchParams((prev) => {
      if (reset) {
        prev
          .keys()
          .toArray()
          .forEach((key) => prev.delete(key));
      }

      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== undefined) {
          if (value === '') {
            prev.delete(key);
          } else {
            prev.set(key, String(value));
          }
        }
      });

      return prev;
    });
  },
};

export default location;
