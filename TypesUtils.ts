export default class TypesUtils {
    static isString(value: any) {
      const isValueString =
        Object.prototype.toString.call(value) === "[object String]";
  
      return isValueString;
    }
  
    static isBoolean(value: any) {
      const isValueBoolean =
        Object.prototype.toString.call(value) === "[object Boolean]";
  
      return isValueBoolean;
    }
  
    static isValidNumber(value: any) {
      const isNumber =
        Object.prototype.toString.call(value) === "[object Number]" &&
        !isNaN(value);
  
      return isNumber;
    }
  
    static isArray(value: any) {
      const isValueArray = Array.isArray(value);
  
      return isValueArray;
    }
  
    static isObjectLiteral(value: any) {
      const isValueObjectLiteral =
        Object.prototype.toString.call(value) === "[object Object]";
  
      return isValueObjectLiteral;
    }
  
    static isFunction(value: any) {
      const isValueFunction =
        Object.prototype.toString.call(value) === "[object Function]";
    }
  
    static isImage(value: string) {
      const regexForImages = /png|svg|jpg|jpeg$/gim;
      const isElementImage = regexForImages.test(value);
  
      return isElementImage;
    }
  
    static isEmail(value: string) {
      const regexForEmail =
        /\b([a-zA-Z0-9]{2,}@)([a-zA-Z0-9]){2,}\.([a-zA-Z]{1,3})\b/i;
      const isValueEmail = regexForEmail.test(value);
  
      return isValueEmail;
    }
  }
  