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
 * The OauthTokenResponse model module.
 * @module model/OauthTokenResponse
 * @version latest
 */
class OauthTokenResponse {
    /**
     * Constructs a new <code>OauthTokenResponse</code>.
     * The token response
     * @alias module:model/OauthTokenResponse
     */
    constructor() { 
        
        OauthTokenResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OauthTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OauthTokenResponse} obj Optional instance to populate.
     * @return {module:model/OauthTokenResponse} The populated <code>OauthTokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OauthTokenResponse();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
            }
            if (data.hasOwnProperty('id_token')) {
                obj['id_token'] = ApiClient.convertToType(data['id_token'], 'Number');
            }
            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'Number');
            }
            if (data.hasOwnProperty('token_type')) {
                obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The access token issued by the authorization server.
 * @member {String} access_token
 */
OauthTokenResponse.prototype['access_token'] = undefined;

/**
 * The lifetime in seconds of the access token.  For example, the value \"3600\" denotes that the access token will expire in one hour from the time the response was generated.
 * @member {Number} expires_in
 */
OauthTokenResponse.prototype['expires_in'] = undefined;

/**
 * To retrieve a refresh token request the id_token scope.
 * @member {Number} id_token
 */
OauthTokenResponse.prototype['id_token'] = undefined;

/**
 * The refresh token, which can be used to obtain new access tokens. To retrieve it add the scope \"offline\" to your access token request.
 * @member {String} refresh_token
 */
OauthTokenResponse.prototype['refresh_token'] = undefined;

/**
 * The scope of the access token
 * @member {Number} scope
 */
OauthTokenResponse.prototype['scope'] = undefined;

/**
 * The type of the token issued
 * @member {String} token_type
 */
OauthTokenResponse.prototype['token_type'] = undefined;






export default OauthTokenResponse;

