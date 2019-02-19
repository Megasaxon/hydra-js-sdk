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


import ApiClient from "../ApiClient";
import GenericError from '../model/GenericError';
import JSONWebKeySet from '../model/JSONWebKeySet';
import OauthTokenResponse from '../model/OauthTokenResponse';
import UserinfoResponse from '../model/UserinfoResponse';
import WellKnown from '../model/WellKnown';

/**
* Public service.
* @module api/PublicApi
* @version latest
*/
export default class PublicApi {

    /**
    * Constructs a new PublicApi. 
    * @alias module:api/PublicApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the discoverOpenIDConfiguration operation.
     * @callback module:api/PublicApi~discoverOpenIDConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WellKnown} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OpenID Connect Discovery
     * The well known endpoint an be used to retrieve information for OpenID Connect clients. We encourage you to not roll your own OpenID Connect client but to use an OpenID Connect client library instead. You can learn more on this flow at https://openid.net/specs/openid-connect-discovery-1_0.html
     * @param {module:api/PublicApi~discoverOpenIDConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WellKnown}
     */
    discoverOpenIDConfiguration(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WellKnown;

      return this.apiClient.callApi(
        '/.well-known/openid-configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oauthAuth operation.
     * @callback module:api/PublicApi~oauthAuthCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The OAuth 2.0 authorize endpoint
     * This endpoint is not documented here because you should never use your own implementation to perform OAuth2 flows. OAuth2 is a very popular protocol and a library for your programming language will exists.  To learn more about this flow please refer to the specification: https://tools.ietf.org/html/rfc6749
     * @param {module:api/PublicApi~oauthAuthCallback} callback The callback function, accepting three arguments: error, data, response
     */
    oauthAuth(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/oauth2/auth', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the oauthToken operation.
     * @callback module:api/PublicApi~oauthTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OauthTokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The OAuth 2.0 token endpoint
     * This endpoint is not documented here because you should never use your own implementation to perform OAuth2 flows. OAuth2 is a very popular protocol and a library for your programming language will exists.  To learn more about this flow please refer to the specification: https://tools.ietf.org/html/rfc6749
     * @param {module:api/PublicApi~oauthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OauthTokenResponse}
     */
    oauthToken(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthTokenResponse;

      return this.apiClient.callApi(
        '/oauth2/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the revokeOAuth2Token operation.
     * @callback module:api/PublicApi~revokeOAuth2TokenCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke OAuth2 tokens
     * Revoking a token (both access and refresh) means that the tokens will be invalid. A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token. Revoking a refresh token also invalidates the access token that was created with it.
     * @param {String} token 
     * @param {module:api/PublicApi~revokeOAuth2TokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    revokeOAuth2Token(token, callback) {
      let postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling revokeOAuth2Token");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'token': token
      };

      let authNames = ['basic', 'oauth2'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/oauth2/revoke', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userinfo operation.
     * @callback module:api/PublicApi~userinfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserinfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * OpenID Connect Userinfo
     * This endpoint returns the payload of the ID Token, including the idTokenExtra values, of the provided OAuth 2.0 access token. The endpoint implements http://openid.net/specs/openid-connect-core-1_0.html#UserInfo .
     * @param {module:api/PublicApi~userinfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserinfoResponse}
     */
    userinfo(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserinfoResponse;

      return this.apiClient.callApi(
        '/userinfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the wellKnown operation.
     * @callback module:api/PublicApi~wellKnownCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JSONWebKeySet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * JSON Web Keys Discovery
     * This endpoint returns JSON Web Keys to be used as public keys for verifying OpenID Connect ID Tokens and, if enabled, OAuth 2.0 JWT Access Tokens. This endpoint can be used with client libraries like [node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) among others.
     * @param {module:api/PublicApi~wellKnownCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JSONWebKeySet}
     */
    wellKnown(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = JSONWebKeySet;

      return this.apiClient.callApi(
        '/.well-known/jwks.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
