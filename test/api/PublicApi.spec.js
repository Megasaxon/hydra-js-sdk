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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OryHydra);
  }
}(this, function(expect, OryHydra) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OryHydra.PublicApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PublicApi', function() {
    describe('discoverOpenIDConfiguration', function() {
      it('should call discoverOpenIDConfiguration successfully', function(done) {
        //uncomment below and update the code to test discoverOpenIDConfiguration
        //instance.discoverOpenIDConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('oauthAuth', function() {
      it('should call oauthAuth successfully', function(done) {
        //uncomment below and update the code to test oauthAuth
        //instance.oauthAuth(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('oauthToken', function() {
      it('should call oauthToken successfully', function(done) {
        //uncomment below and update the code to test oauthToken
        //instance.oauthToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('revokeOAuth2Token', function() {
      it('should call revokeOAuth2Token successfully', function(done) {
        //uncomment below and update the code to test revokeOAuth2Token
        //instance.revokeOAuth2Token(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userinfo', function() {
      it('should call userinfo successfully', function(done) {
        //uncomment below and update the code to test userinfo
        //instance.userinfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('wellKnown', function() {
      it('should call wellKnown successfully', function(done) {
        //uncomment below and update the code to test wellKnown
        //instance.wellKnown(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
