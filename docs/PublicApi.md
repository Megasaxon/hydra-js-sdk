# OryHydra.PublicApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**discoverOpenIDConfiguration**](PublicApi.md#discoverOpenIDConfiguration) | **GET** /.well-known/openid-configuration | OpenID Connect Discovery
[**oauthAuth**](PublicApi.md#oauthAuth) | **GET** /oauth2/auth | The OAuth 2.0 authorize endpoint
[**oauthToken**](PublicApi.md#oauthToken) | **POST** /oauth2/token | The OAuth 2.0 token endpoint
[**revokeOAuth2Token**](PublicApi.md#revokeOAuth2Token) | **POST** /oauth2/revoke | Revoke OAuth2 tokens
[**userinfo**](PublicApi.md#userinfo) | **GET** /userinfo | OpenID Connect Userinfo
[**wellKnown**](PublicApi.md#wellKnown) | **GET** /.well-known/jwks.json | JSON Web Keys Discovery


<a name="discoverOpenIDConfiguration"></a>
# **discoverOpenIDConfiguration**
> WellKnown discoverOpenIDConfiguration()

OpenID Connect Discovery

The well known endpoint an be used to retrieve information for OpenID Connect clients. We encourage you to not roll your own OpenID Connect client but to use an OpenID Connect client library instead. You can learn more on this flow at https://openid.net/specs/openid-connect-discovery-1_0.html

### Example
```javascript
import OryHydra from 'ory_hydra';

let apiInstance = new OryHydra.PublicApi();
apiInstance.discoverOpenIDConfiguration((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**WellKnown**](WellKnown.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="oauthAuth"></a>
# **oauthAuth**
> oauthAuth()

The OAuth 2.0 authorize endpoint

This endpoint is not documented here because you should never use your own implementation to perform OAuth2 flows. OAuth2 is a very popular protocol and a library for your programming language will exists.  To learn more about this flow please refer to the specification: https://tools.ietf.org/html/rfc6749

### Example
```javascript
import OryHydra from 'ory_hydra';

let apiInstance = new OryHydra.PublicApi();
apiInstance.oauthAuth((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="oauthToken"></a>
# **oauthToken**
> OauthTokenResponse oauthToken()

The OAuth 2.0 token endpoint

This endpoint is not documented here because you should never use your own implementation to perform OAuth2 flows. OAuth2 is a very popular protocol and a library for your programming language will exists.  To learn more about this flow please refer to the specification: https://tools.ietf.org/html/rfc6749

### Example
```javascript
import OryHydra from 'ory_hydra';
let defaultClient = OryHydra.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OryHydra.PublicApi();
apiInstance.oauthToken((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OauthTokenResponse**](OauthTokenResponse.md)

### Authorization

[basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="revokeOAuth2Token"></a>
# **revokeOAuth2Token**
> revokeOAuth2Token(token)

Revoke OAuth2 tokens

Revoking a token (both access and refresh) means that the tokens will be invalid. A revoked access token can no longer be used to make access requests, and a revoked refresh token can no longer be used to refresh an access token. Revoking a refresh token also invalidates the access token that was created with it.

### Example
```javascript
import OryHydra from 'ory_hydra';
let defaultClient = OryHydra.ApiClient.instance;
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OryHydra.PublicApi();
let token = "token_example"; // String | 
apiInstance.revokeOAuth2Token(token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="userinfo"></a>
# **userinfo**
> UserinfoResponse userinfo()

OpenID Connect Userinfo

This endpoint returns the payload of the ID Token, including the idTokenExtra values, of the provided OAuth 2.0 access token. The endpoint implements http://openid.net/specs/openid-connect-core-1_0.html#UserInfo .

### Example
```javascript
import OryHydra from 'ory_hydra';
let defaultClient = OryHydra.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OryHydra.PublicApi();
apiInstance.userinfo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserinfoResponse**](UserinfoResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="wellKnown"></a>
# **wellKnown**
> JSONWebKeySet wellKnown()

JSON Web Keys Discovery

This endpoint returns JSON Web Keys to be used as public keys for verifying OpenID Connect ID Tokens and, if enabled, OAuth 2.0 JWT Access Tokens. This endpoint can be used with client libraries like [node-jwks-rsa](https://github.com/auth0/node-jwks-rsa) among others.

### Example
```javascript
import OryHydra from 'ory_hydra';

let apiInstance = new OryHydra.PublicApi();
apiInstance.wellKnown((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**JSONWebKeySet**](JSONWebKeySet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json
