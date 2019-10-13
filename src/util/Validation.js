/***
 * Export Validation Rules object
 */

export const v = {

    /***
     *
     */
    required: value => (value),

    /***
     *
     */
    isString: str => (!str || (str && typeof str === 'string')),

    /***
     *
     */
    isBoolean: v => (typeof v === 'boolean'),

    /***
     *
     */
    isInteger: n => Number.isInteger(n),

    /***
     *
     */
    minLength: (value, l) => value.length >= l,

    /***
     *
     */
    maxLength: (value, l) => value.length <= l,

    /***
     *
     */
    isEmail: (str) => {
        if(!str || (str && typeof str != 'string')) return false; 
        // eslint-disable-next-line
        let emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegEx.test(str);        
    },

    /***
     *
     */
    minValue: (n, min) => (n>=min),

    /***
     *
     */
    maxValue: (n, max) => (n<=max)   

} 

export const DEFAULT_FORM_RULES = {

    required: message => value  => {
        return (value || typeof value === 'number' ? undefined : message);
    },

    maxLength: (max, message) => value => {
        return (value && value.length > max) ? `${message} - Max aantal karakters: ${max}` : undefined;
    },

    minLength:  (min, message) => value => {
        return (value && value.length < min) ? `${message} - Min aantal karakters: ${min}` : undefined;
    },

    isNumber: message => value => {
        return (value && isNaN(Number(value))) ? `${message}` : undefined;
    },

    isInteger: message => value => {
        return (value && Number.isInteger(value)) ? `${message}` : undefined;
    },

    minValue: (min, message) => value => {
        return (value && value < min ) ? `${message} - Minimale waarde: ${min}` : undefined;
    },

    maxValue: (max, message) => value => {
        return (value && value > max ) ? `${message} - Maximale waarde ${max}` : undefined;
    },  

    isEmail: message => value => {
        return (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ?
        `${message}` : undefined;
    },

    /* <areacode> policy
     * minlength: 6 chars
     * maxlength: 6 chars
     * 4 chars, 2 numbers
     */
    hasDutchAreacode: message => str => {    
        console.log('*** Postcode string ', str)           
        let testRegex = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/;           
        let test =  testRegex.test( str.toString() );    
        console.log('*** Test ', test)
        return (!test) ? `${message}` : undefined;
    }
}

export class PasswordService {

    construct() {
        this.getPasswordPolicies();
    }

    getPasswordPolicies() {

        this.PASSWORD_MIN_LENGTH = parseInt(process.env.RD_PASSWORD_MIN_LENGTH);
        this.PASSWORD_MAX_LENGTH = parseInt(process.env.RD_PASSWORD_MAX_LENGTH);
        this.PASSWORD_HAS_UPPERCASE = process.env.RD_PASSWORD_HAS_UPPERCASE === 'true';
        this.PASSWORD_HAS_LOWERCASE = process.env.RD_PASSWORD_HAS_LOWERCASE === 'true';
        this.PASSWORD_HAS_NUMBER = process.env.RD_PASSWORD_HAS_NUMBER === 'true';
        this.PASSWORD_HAS_SPECIAL_CHAR = process.env.RD_PASSWORD_HAS_SPECIAL_CHAR === 'true';
    }

    isValidPassword = message => value => {         

        this.getPasswordPolicies();

        let pw = value;

        let tests = []; 

        /*****
         * password string has at least one capital
         */
        const hasUpperCase = /[A-Z]/.test(pw);          
        if(this.PASSWORD_HAS_UPPERCASE) tests.push({'category': 'hasUpperCase', 'value': hasUpperCase });

        /*****
         * password string has at least one lower case character
         */
        const hasLowerCase = /[a-z]/.test(pw);
        if(this.PASSWORD_HAS_LOWERCASE) tests.push({'category': 'hasLowerCase', 'value': hasLowerCase });

        /*****
         * password string contains at least one number
         */
        const hasNumbers = /\d/.test(pw);
        if(this.PASSWORD_HAS_NUMBER) tests.push({'category': 'hasNumbers', 'value': hasNumbers});

        /*****
         * password string has at least one special character
         */
        const hasSpecialChars = /[-!$%^&*#@()_+|~=`{}[\]:";'<>?,./]/.test(pw);
        if (this.PASSWORD_HAS_SPECIAL_CHAR) tests.push({'category': 'hasSpecialChars', 'value': hasSpecialChars});

        /*****
         * password string has required minlength
         */
        const hasRequiredMinLength = (pw.length >= this.PASSWORD_MIN_LENGTH);   
        if(this.PASSWORD_MIN_LENGTH) tests.push({'category': 'hasRequiredMinLength', 'value': hasRequiredMinLength});

        /*****
         * Password does not exceed max length
         */
        const doesNotExceedMaxLength = (pw.length <= this.PASSWORD_MAX_LENGTH); 
        if (this.PASSWORD_MIN_LENGTH) tests.push({'category': 'doesNotExceedMaxLength', 'value': doesNotExceedMaxLength });
        

        let valid=true;
        Object.keys(tests).forEach( (k:string) => { if(!tests[k].value) valid=false;}); 

        return (valid) ? undefined: message;

    }
}

