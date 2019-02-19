/**
 * ORY Hydra
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.
 *
 * OpenAPI spec version: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The JSONWebKey model module.
 * @module model/JSONWebKey
 * @version latest
 */
class JSONWebKey {
    /**
     * Constructs a new <code>JSONWebKey</code>.
     * @alias module:model/JSONWebKey
     * @param alg {String} The \"alg\" (algorithm) parameter identifies the algorithm intended for use with the key.  The values used should either be registered in the IANA \"JSON Web Signature and Encryption Algorithms\" registry established by [JWA] or be a value that contains a Collision- Resistant Name.
     * @param kid {String} The \"kid\" (key ID) parameter is used to match a specific key.  This is used, for instance, to choose among a set of keys within a JWK Set during key rollover.  The structure of the \"kid\" value is unspecified.  When \"kid\" values are used within a JWK Set, different keys within the JWK Set SHOULD use distinct \"kid\" values.  (One example in which different keys might use the same \"kid\" value is if they have different \"kty\" (key type) values but are considered to be equivalent alternatives by the application using them.)  The \"kid\" value is a case-sensitive string.
     * @param kty {String} The \"kty\" (key type) parameter identifies the cryptographic algorithm family used with the key, such as \"RSA\" or \"EC\". \"kty\" values should either be registered in the IANA \"JSON Web Key Types\" registry established by [JWA] or be a value that contains a Collision- Resistant Name.  The \"kty\" value is a case-sensitive string.
     * @param use {String} Use (\"public key use\") identifies the intended use of the public key. The \"use\" parameter is employed to indicate whether a public key is used for encrypting data or verifying the signature on data. Values are commonly \"sig\" (signature) or \"enc\" (encryption).
     */
    constructor(alg, kid, kty, use) { 
        
        JSONWebKey.initialize(this, alg, kid, kty, use);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, alg, kid, kty, use) { 
        obj['alg'] = alg;
        obj['kid'] = kid;
        obj['kty'] = kty;
        obj['use'] = use;
    }

    /**
     * Constructs a <code>JSONWebKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JSONWebKey} obj Optional instance to populate.
     * @return {module:model/JSONWebKey} The populated <code>JSONWebKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JSONWebKey();

            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('crv')) {
                obj['crv'] = ApiClient.convertToType(data['crv'], 'String');
            }
            if (data.hasOwnProperty('d')) {
                obj['d'] = ApiClient.convertToType(data['d'], 'String');
            }
            if (data.hasOwnProperty('dp')) {
                obj['dp'] = ApiClient.convertToType(data['dp'], 'String');
            }
            if (data.hasOwnProperty('dq')) {
                obj['dq'] = ApiClient.convertToType(data['dq'], 'String');
            }
            if (data.hasOwnProperty('e')) {
                obj['e'] = ApiClient.convertToType(data['e'], 'String');
            }
            if (data.hasOwnProperty('k')) {
                obj['k'] = ApiClient.convertToType(data['k'], 'String');
            }
            if (data.hasOwnProperty('kid')) {
                obj['kid'] = ApiClient.convertToType(data['kid'], 'String');
            }
            if (data.hasOwnProperty('kty')) {
                obj['kty'] = ApiClient.convertToType(data['kty'], 'String');
            }
            if (data.hasOwnProperty('n')) {
                obj['n'] = ApiClient.convertToType(data['n'], 'String');
            }
            if (data.hasOwnProperty('p')) {
                obj['p'] = ApiClient.convertToType(data['p'], 'String');
            }
            if (data.hasOwnProperty('q')) {
                obj['q'] = ApiClient.convertToType(data['q'], 'String');
            }
            if (data.hasOwnProperty('qi')) {
                obj['qi'] = ApiClient.convertToType(data['qi'], 'String');
            }
            if (data.hasOwnProperty('use')) {
                obj['use'] = ApiClient.convertToType(data['use'], 'String');
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'String');
            }
            if (data.hasOwnProperty('x5c')) {
                obj['x5c'] = ApiClient.convertToType(data['x5c'], ['String']);
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The \"alg\" (algorithm) parameter identifies the algorithm intended for use with the key.  The values used should either be registered in the IANA \"JSON Web Signature and Encryption Algorithms\" registry established by [JWA] or be a value that contains a Collision- Resistant Name.
 * @member {String} alg
 */
JSONWebKey.prototype['alg'] = undefined;

/**
 * @member {String} crv
 */
JSONWebKey.prototype['crv'] = undefined;

/**
 * @member {String} d
 */
JSONWebKey.prototype['d'] = undefined;

/**
 * @member {String} dp
 */
JSONWebKey.prototype['dp'] = undefined;

/**
 * @member {String} dq
 */
JSONWebKey.prototype['dq'] = undefined;

/**
 * @member {String} e
 */
JSONWebKey.prototype['e'] = undefined;

/**
 * @member {String} k
 */
JSONWebKey.prototype['k'] = undefined;

/**
 * The \"kid\" (key ID) parameter is used to match a specific key.  This is used, for instance, to choose among a set of keys within a JWK Set during key rollover.  The structure of the \"kid\" value is unspecified.  When \"kid\" values are used within a JWK Set, different keys within the JWK Set SHOULD use distinct \"kid\" values.  (One example in which different keys might use the same \"kid\" value is if they have different \"kty\" (key type) values but are considered to be equivalent alternatives by the application using them.)  The \"kid\" value is a case-sensitive string.
 * @member {String} kid
 */
JSONWebKey.prototype['kid'] = undefined;

/**
 * The \"kty\" (key type) parameter identifies the cryptographic algorithm family used with the key, such as \"RSA\" or \"EC\". \"kty\" values should either be registered in the IANA \"JSON Web Key Types\" registry established by [JWA] or be a value that contains a Collision- Resistant Name.  The \"kty\" value is a case-sensitive string.
 * @member {String} kty
 */
JSONWebKey.prototype['kty'] = undefined;

/**
 * @member {String} n
 */
JSONWebKey.prototype['n'] = undefined;

/**
 * @member {String} p
 */
JSONWebKey.prototype['p'] = undefined;

/**
 * @member {String} q
 */
JSONWebKey.prototype['q'] = undefined;

/**
 * @member {String} qi
 */
JSONWebKey.prototype['qi'] = undefined;

/**
 * Use (\"public key use\") identifies the intended use of the public key. The \"use\" parameter is employed to indicate whether a public key is used for encrypting data or verifying the signature on data. Values are commonly \"sig\" (signature) or \"enc\" (encryption).
 * @member {String} use
 */
JSONWebKey.prototype['use'] = undefined;

/**
 * @member {String} x
 */
JSONWebKey.prototype['x'] = undefined;

/**
 * The \"x5c\" (X.509 certificate chain) parameter contains a chain of one or more PKIX certificates [RFC5280].  The certificate chain is represented as a JSON array of certificate value strings.  Each string in the array is a base64-encoded (Section 4 of [RFC4648] -- not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value. The PKIX certificate containing the key value MUST be the first certificate.
 * @member {Array.<String>} x5c
 */
JSONWebKey.prototype['x5c'] = undefined;

/**
 * @member {String} y
 */
JSONWebKey.prototype['y'] = undefined;






export default JSONWebKey;
