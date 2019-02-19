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
import JSONWebKey from './JSONWebKey';

/**
 * The SwaggerJwkUpdateSetKey model module.
 * @module model/SwaggerJwkUpdateSetKey
 * @version latest
 */
class SwaggerJwkUpdateSetKey {
    /**
     * Constructs a new <code>SwaggerJwkUpdateSetKey</code>.
     * @alias module:model/SwaggerJwkUpdateSetKey
     * @param kid {String} The kid of the desired key in: path
     * @param set {String} The set in: path
     */
    constructor(kid, set) { 
        
        SwaggerJwkUpdateSetKey.initialize(this, kid, set);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, kid, set) { 
        obj['kid'] = kid;
        obj['set'] = set;
    }

    /**
     * Constructs a <code>SwaggerJwkUpdateSetKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwaggerJwkUpdateSetKey} obj Optional instance to populate.
     * @return {module:model/SwaggerJwkUpdateSetKey} The populated <code>SwaggerJwkUpdateSetKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwaggerJwkUpdateSetKey();

            if (data.hasOwnProperty('Body')) {
                obj['Body'] = JSONWebKey.constructFromObject(data['Body']);
            }
            if (data.hasOwnProperty('kid')) {
                obj['kid'] = ApiClient.convertToType(data['kid'], 'String');
            }
            if (data.hasOwnProperty('set')) {
                obj['set'] = ApiClient.convertToType(data['set'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/JSONWebKey} Body
 */
SwaggerJwkUpdateSetKey.prototype['Body'] = undefined;

/**
 * The kid of the desired key in: path
 * @member {String} kid
 */
SwaggerJwkUpdateSetKey.prototype['kid'] = undefined;

/**
 * The set in: path
 * @member {String} set
 */
SwaggerJwkUpdateSetKey.prototype['set'] = undefined;






export default SwaggerJwkUpdateSetKey;

