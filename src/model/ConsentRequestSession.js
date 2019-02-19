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
 * The ConsentRequestSession model module.
 * @module model/ConsentRequestSession
 * @version latest
 */
class ConsentRequestSession {
    /**
     * Constructs a new <code>ConsentRequestSession</code>.
     * @alias module:model/ConsentRequestSession
     */
    constructor() { 
        
        ConsentRequestSession.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConsentRequestSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConsentRequestSession} obj Optional instance to populate.
     * @return {module:model/ConsentRequestSession} The populated <code>ConsentRequestSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConsentRequestSession();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], {'String': Object});
            }
            if (data.hasOwnProperty('id_token')) {
                obj['id_token'] = ApiClient.convertToType(data['id_token'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * AccessToken sets session data for the access and refresh token, as well as any future tokens issued by the refresh grant. Keep in mind that this data will be available to anyone performing OAuth 2.0 Challenge Introspection. If only your services can perform OAuth 2.0 Challenge Introspection, this is usually fine. But if third parties can access that endpoint as well, sensitive data from the session might be exposed to them. Use with care!
 * @member {Object.<String, Object>} access_token
 */
ConsentRequestSession.prototype['access_token'] = undefined;

/**
 * IDToken sets session data for the OpenID Connect ID token. Keep in mind that the session'id payloads are readable by anyone that has access to the ID Challenge. Use with care!
 * @member {Object.<String, Object>} id_token
 */
ConsentRequestSession.prototype['id_token'] = undefined;






export default ConsentRequestSession;

