/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ideal-postcodes/core-axios/esm/agent.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/esm/agent.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Agent": function() { return /* binding */ Agent; },
/* harmony export */   "toHeader": function() { return /* binding */ toHeader; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ideal-postcodes/core-interface */ "./node_modules/@ideal-postcodes/core-interface/esm/index.js");


const { 
/**
 * Ideal Postcodes base error class implemented in [core-interface](https://core-interface.ideal-postcodes.dev/classes/idealpostcodeserror.html)
 */
IdealPostcodesError, } = _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_1__.errors;
/**
 * Converts a Got header object to one that can be used by the client
 *
 * @hidden
 */
const toHeader = (gotHeaders) => Object.keys(gotHeaders).reduce((headers, key) => {
    const val = gotHeaders[key];
    if (typeof val === "string") {
        headers[key] = val;
    }
    else if (Array.isArray(val)) {
        headers[key] = val.join(",");
    }
    return headers;
}, {});
/**
 * Adapts got responses to a format consumable by core-interface
 *
 * @hidden
 */
const toHttpResponse = (httpRequest, response) => ({
    httpRequest,
    body: response.data,
    httpStatus: response.status || 0,
    header: toHeader(response.headers),
    metadata: { response },
});
/**
 * Catch non-response errors (e.g. network failure, DNS failure, timeout)
 * wrap in our Error class and return
 *
 * @hidden
 */
const handleError = (error) => {
    const idpcError = new IdealPostcodesError({
        message: `[${error.name}] ${error.message}`,
        httpStatus: 0,
        metadata: { axios: error },
    });
    return Promise.reject(idpcError);
};
// Don't throw errors for any HTTP status code
// Allow core-interface to absorb these and emit own errors
const validateStatus = () => true;
/**
 * Agent
 *
 * @hidden
 */
class Agent {
    constructor() {
        this.Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({ validateStatus });
    }
    requestWithBody(httpRequest) {
        const { body, method, timeout, url, header, query } = httpRequest;
        return this.Axios.request({
            url,
            method,
            headers: header,
            params: query,
            data: body,
            timeout,
        })
            .then((response) => toHttpResponse(httpRequest, response))
            .catch(handleError);
    }
    request(httpRequest) {
        const { method, timeout, url, header, query } = httpRequest;
        return this.Axios.request({
            url,
            method,
            headers: header,
            params: query,
            timeout,
        })
            .then((response) => toHttpResponse(httpRequest, response))
            .catch(handleError);
    }
    http(httpRequest) {
        if (httpRequest.body !== undefined)
            return this.requestWithBody(httpRequest);
        return this.request(httpRequest);
    }
}


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/esm/client.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/esm/client.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Client": function() { return /* binding */ Client; }
/* harmony export */ });
/* harmony import */ var _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ideal-postcodes/core-interface */ "./node_modules/@ideal-postcodes/core-interface/esm/index.js");
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agent */ "./node_modules/@ideal-postcodes/core-axios/esm/agent.js");


class Client extends _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.Client {
    /**
     * Client constructor extends CoreInterface
     */
    constructor(config) {
        const agent = new _agent__WEBPACK_IMPORTED_MODULE_1__.Agent();
        super({ agent, ...config });
    }
}


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/esm/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/esm/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Agent": function() { return /* reexport safe */ _agent__WEBPACK_IMPORTED_MODULE_2__.Agent; },
/* harmony export */   "Client": function() { return /* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_1__.Client; },
/* harmony export */   "addresses": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.addresses; },
/* harmony export */   "autocomplete": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.autocomplete; },
/* harmony export */   "checkKeyUsability": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.checkKeyUsability; },
/* harmony export */   "defaults": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.defaults; },
/* harmony export */   "errors": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.errors; },
/* harmony export */   "keys": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.keys; },
/* harmony export */   "lookupAddress": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.lookupAddress; },
/* harmony export */   "lookupPostcode": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.lookupPostcode; },
/* harmony export */   "lookupUdprn": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.lookupUdprn; },
/* harmony export */   "lookupUmprn": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.lookupUmprn; },
/* harmony export */   "ping": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.ping; },
/* harmony export */   "postcodes": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.postcodes; },
/* harmony export */   "udprn": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.udprn; },
/* harmony export */   "umprn": function() { return /* reexport safe */ _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__.umprn; }
/* harmony export */ });
/* harmony import */ var _ideal_postcodes_core_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ideal-postcodes/core-interface */ "./node_modules/@ideal-postcodes/core-interface/esm/index.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ "./node_modules/@ideal-postcodes/core-axios/esm/client.js");
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agent */ "./node_modules/@ideal-postcodes/core-axios/esm/agent.js");
/**
 * @module Library Exports
 */
/**
 * Export core-interface helpers and resources
 */

/**
 * Export HTTP Client with HTTP agent
 */




/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/index.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/adapters/xhr.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/adapters/xhr.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/createError.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/defaults.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/Cancel.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/axios.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/axios.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/env/data.js").version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/Cancel.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/Cancel.js ***!
  \******************************************************************************************/
/***/ (function(module) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/CancelToken.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/CancelToken.js ***!
  \***********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/isCancel.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/isCancel.js ***!
  \********************************************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/Axios.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/Axios.js ***!
  \***************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/InterceptorManager.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/InterceptorManager.js ***!
  \****************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/buildFullPath.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/buildFullPath.js ***!
  \***********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/createError.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/createError.js ***!
  \*********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/dispatchRequest.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/dispatchRequest.js ***!
  \*************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/defaults.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/cancel/Cancel.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/enhanceError.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/enhanceError.js ***!
  \**********************************************************************************************/
/***/ (function(module) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/mergeConfig.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/mergeConfig.js ***!
  \*********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/settle.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/settle.js ***!
  \****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/transformData.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/transformData.js ***!
  \***********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/defaults.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/defaults.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/defaults.js ***!
  \*************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/core/enhanceError.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/env/data.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/env/data.js ***!
  \*************************************************************************************/
/***/ (function(module) {

module.exports = {
  "version": "0.24.0"
};

/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/bind.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/bind.js ***!
  \*****************************************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/buildURL.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/buildURL.js ***!
  \*********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/combineURLs.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/combineURLs.js ***!
  \************************************************************************************************/
/***/ (function(module) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/cookies.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/cookies.js ***!
  \********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \**************************************************************************************************/
/***/ (function(module) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/isAxiosError.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/isAxiosError.js ***!
  \*************************************************************************************************/
/***/ (function(module) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \****************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \********************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/parseHeaders.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/spread.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/spread.js ***!
  \*******************************************************************************************/
/***/ (function(module) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/validator.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/validator.js ***!
  \**********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var VERSION = (__webpack_require__(/*! ../env/data */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/env/data.js").version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/utils.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/@ideal-postcodes/core-axios/node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/client.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/client.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Client": function() { return /* binding */ Client; },
/* harmony export */   "defaults": function() { return /* binding */ defaults; }
/* harmony export */ });
/**
 * @module Client
 *
 * @description HTTP API Client
 */
/**
 * Default configuration
 */
const defaults = {
    tls: true,
    api_key: "",
    baseUrl: "api.ideal-postcodes.co.uk",
    version: "v1",
    strictAuthorisation: false,
    timeout: 10000,
    header: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    tags: [],
    agent: {},
};
/**
 * Client Class
 */
class Client {
    constructor(config) {
        this.config = { ...defaults, ...config };
        this.config.header = {
            ...defaults.header,
            ...(config.header && config.header),
        };
    }
    /**
     * Return base URL for API requests
     */
    url() {
        const { baseUrl, version } = this.config;
        return `${this.protocol()}://${baseUrl}/${version}`;
    }
    protocol() {
        return this.config.tls ? "https" : "http";
    }
}


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/error.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/error.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdealPostcodesError": function() { return /* binding */ IdealPostcodesError; },
/* harmony export */   "IdpcApiError": function() { return /* binding */ IdpcApiError; },
/* harmony export */   "IdpcBadRequestError": function() { return /* binding */ IdpcBadRequestError; },
/* harmony export */   "IdpcBalanceDepletedError": function() { return /* binding */ IdpcBalanceDepletedError; },
/* harmony export */   "IdpcInvalidKeyError": function() { return /* binding */ IdpcInvalidKeyError; },
/* harmony export */   "IdpcKeyNotFoundError": function() { return /* binding */ IdpcKeyNotFoundError; },
/* harmony export */   "IdpcLimitReachedError": function() { return /* binding */ IdpcLimitReachedError; },
/* harmony export */   "IdpcPostcodeNotFoundError": function() { return /* binding */ IdpcPostcodeNotFoundError; },
/* harmony export */   "IdpcRequestFailedError": function() { return /* binding */ IdpcRequestFailedError; },
/* harmony export */   "IdpcResourceNotFoundError": function() { return /* binding */ IdpcResourceNotFoundError; },
/* harmony export */   "IdpcServerError": function() { return /* binding */ IdpcServerError; },
/* harmony export */   "IdpcUdprnNotFoundError": function() { return /* binding */ IdpcUdprnNotFoundError; },
/* harmony export */   "IdpcUmprnNotFoundError": function() { return /* binding */ IdpcUmprnNotFoundError; },
/* harmony export */   "IdpcUnauthorisedError": function() { return /* binding */ IdpcUnauthorisedError; },
/* harmony export */   "parse": function() { return /* binding */ parse; }
/* harmony export */ });
/**
 * @module Errors
 *
 * @description Exports error classes which may be returned by this client
 */
// Take note of https://github.com/Microsoft/TypeScript/issues/13965
/**
 * IdealPostcodesError
 *
 * Base error class for all API responses that return an error. This class
 * is used where a JSON body is not provided or invalid
 * E.g. 503 rate limit response, JSON parse failure response
 */
class IdealPostcodesError extends Error {
    /**
     * Instantiate IdealPostcodesError
     */
    constructor(options) {
        const trueProto = new.target.prototype;
        super();
        this.__proto__ = trueProto;
        const { message, httpStatus, metadata = {} } = options;
        this.message = message;
        this.name = "Ideal Postcodes Error";
        this.httpStatus = httpStatus;
        this.metadata = metadata;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, IdealPostcodesError);
        }
    }
}
/**
 * IdpcApiError
 *
 * Base error class for API responses with a JSON body. Typically a subclass
 * will be used to capture the error category (e.g. 400, 401, 500, etc)
 */
class IdpcApiError extends IdealPostcodesError {
    /**
     * Returns an API error instance
     */
    constructor(httpResponse) {
        super({
            httpStatus: httpResponse.httpStatus,
            message: httpResponse.body.message,
        });
        this.response = httpResponse;
    }
}
/**
 * IdpcBadRequestError
 *
 * Captures API responses that return a 400 (Bad Request Error) response
 *
 * Examples include:
 * - Invalid syntax submitted
 * - Invalid date range submitted
 * - Invalid tag submitted
 */
class IdpcBadRequestError extends IdpcApiError {
}
/**
 * IdpcUnauthorisedError
 *
 * Captures API responses that return a 401 (Unauthorised) response
 *
 * Examples include:
 * - Invalid api_key
 * - Invalid user_token
 * - Invalid licensee
 */
class IdpcUnauthorisedError extends IdpcApiError {
}
/**
 * IpdcInvalidKeyError
 *
 * Invalid API Key presented for request
 */
class IdpcInvalidKeyError extends IdpcUnauthorisedError {
}
/**
 * IdpcRequestFailedError
 *
 * Captures API responses that return a 402 (Request Failed) response
 *
 * Examples include:
 * - Key balance depleted
 * - Daily key limit reached
 */
class IdpcRequestFailedError extends IdpcApiError {
}
/**
 * IdpcBalanceDepleted
 *
 * Balance on key has been depleted
 */
class IdpcBalanceDepletedError extends IdpcRequestFailedError {
}
/**
 * IdpcLimitReachedError
 *
 * Limit reached. One of your lookup limits has been breached for today. This
 * could either be your total daily limit on your key or the individual IP
 * limit. You can either wait for for the limit to reset (after a day) or
 * manually disable or increase your limit.
 */
class IdpcLimitReachedError extends IdpcRequestFailedError {
}
/**
 * IdpcResourceNotFoundError
 *
 * Captures API responses that return a 404 (Resource Not Found) response
 *
 * Examples include:
 * - Postcode not found
 * - UDPRN not found
 * - Key not found
 */
class IdpcResourceNotFoundError extends IdpcApiError {
}
/**
 * IdpcPostcodeNotFoundError
 *
 * Requested postcode does not exist
 */
class IdpcPostcodeNotFoundError extends IdpcResourceNotFoundError {
}
/**
 * IdpcKeyNotFoundError
 *
 * Requested API Key does not exist
 */
class IdpcKeyNotFoundError extends IdpcResourceNotFoundError {
}
/**
 * IdpcUdprnNotFoundError
 *
 * Requested UDPRN does not exist
 */
class IdpcUdprnNotFoundError extends IdpcResourceNotFoundError {
}
/**
 * IdpcUmprnNotFoundError
 *
 * Requested UMPRN does not exist
 */
class IdpcUmprnNotFoundError extends IdpcResourceNotFoundError {
}
/**
 * IdpcServerError
 *
 * Captures API responses that return a 500 (Server Error) response
 */
class IdpcServerError extends IdpcApiError {
}
// 200 Responses
const OK = 200;
// 300 Responses
const REDIRECT = 300;
// 400 Responses
const BAD_REQUEST = 400;
// 401 Responses
const UNAUTHORISED = 401;
const INVALID_KEY = 4010;
// 402 Responses
const PAYMENT_REQUIRED = 402;
const BALANCE_DEPLETED = 4020;
const LIMIT_REACHED = 4021;
// 404 Responses
const NOT_FOUND = 404;
const POSTCODE_NOT_FOUND = 4040;
const KEY_NOT_FOUND = 4042;
const UDPRN_NOT_FOUND = 4044;
const UMPRN_NOT_FOUND = 4046;
// 500 Responses
const SERVER_ERROR = 500;
const isSuccess = (code) => {
    if (code < OK)
        return false;
    if (code >= REDIRECT)
        return false;
    return true;
};
const isObject = (o) => {
    if (o === null)
        return false;
    if (typeof o !== "object")
        return false;
    return true;
};
const isErrorResponse = (body) => {
    if (!isObject(body))
        return false;
    if (typeof body.message !== "string")
        return false;
    if (typeof body.code !== "number")
        return false;
    return true;
};
/**
 * parse
 *
 * Parses API responses and returns an error for non 2xx responses
 *
 * Upon detecting an error an instance of IdealPostcodesError is returned
 */
const parse = (response) => {
    const { httpStatus, body } = response;
    if (isSuccess(httpStatus))
        return;
    if (isErrorResponse(body)) {
        // Test for specific API errors of interest
        const { code } = body;
        if (code === INVALID_KEY)
            return new IdpcInvalidKeyError(response);
        if (code === POSTCODE_NOT_FOUND)
            return new IdpcPostcodeNotFoundError(response);
        if (code === KEY_NOT_FOUND)
            return new IdpcKeyNotFoundError(response);
        if (code === UDPRN_NOT_FOUND)
            return new IdpcUdprnNotFoundError(response);
        if (code === UMPRN_NOT_FOUND)
            return new IdpcUmprnNotFoundError(response);
        if (code === BALANCE_DEPLETED)
            return new IdpcBalanceDepletedError(response);
        if (code === LIMIT_REACHED)
            return new IdpcLimitReachedError(response);
        // If no API errors of interest detected, fall back to http status code
        if (httpStatus === NOT_FOUND)
            return new IdpcResourceNotFoundError(response);
        if (httpStatus === BAD_REQUEST)
            return new IdpcBadRequestError(response);
        if (httpStatus === PAYMENT_REQUIRED)
            return new IdpcRequestFailedError(response);
        if (httpStatus === UNAUTHORISED)
            return new IdpcUnauthorisedError(response);
        if (httpStatus === SERVER_ERROR)
            return new IdpcServerError(response);
    }
    // Generate generic error (backstop)
    return new IdealPostcodesError({ httpStatus, message: JSON.stringify(body) });
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/helpers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/helpers.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkKeyUsability": function() { return /* binding */ checkKeyUsability; },
/* harmony export */   "lookupAddress": function() { return /* binding */ lookupAddress; },
/* harmony export */   "lookupPostcode": function() { return /* binding */ lookupPostcode; },
/* harmony export */   "lookupUdprn": function() { return /* binding */ lookupUdprn; },
/* harmony export */   "lookupUmprn": function() { return /* binding */ lookupUmprn; },
/* harmony export */   "ping": function() { return /* binding */ ping; }
/* harmony export */ });
/* harmony import */ var _resources_addresses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/addresses */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/addresses.js");
/* harmony import */ var _resources_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/keys */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/keys.js");
/* harmony import */ var _resources_postcodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/postcodes */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/postcodes.js");
/* harmony import */ var _resources_udprn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/udprn */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/udprn.js");
/* harmony import */ var _resources_umprn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/umprn */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/umprn.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@ideal-postcodes/core-interface/esm/util.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error */ "./node_modules/@ideal-postcodes/core-interface/esm/error.js");
/**
 * @module Helper Methods
 */







/**
 * Ping API base (`/`)
 *
 * Dispatches HTTP request to root endpoint "`/`"
 */
const ping = (client) => {
    const method = "GET";
    const url = `${client.protocol()}://${client.config.baseUrl}/`;
    return client.config.agent.http({
        method,
        url,
        header: {},
        query: {},
        timeout: client.config.timeout,
    });
};
/**
 * Lookup Postcode
 *
 * Search for addresses given a postcode. Postcode queries are case and space insensitive
 *
 * Invalid postcodes return an empty array address result `[]`
 *
 * [API Documentation for /postcodes](https://ideal-postcodes.co.uk/documentation/postcodes#postcode)
 */
const lookupPostcode = (options) => {
    const queryOptions = toAddressIdQuery(options);
    const { page } = options;
    if (page !== undefined)
        queryOptions.query.page = page.toString();
    return _resources_postcodes__WEBPACK_IMPORTED_MODULE_2__.retrieve(options.client, options.postcode, queryOptions)
        .then((response) => response.body.result)
        .catch((error) => {
        if (error instanceof _error__WEBPACK_IMPORTED_MODULE_6__.IdpcPostcodeNotFoundError)
            return [];
        throw error;
    });
};
/**
 * Lookup Address
 *
 * Search for an address given a query
 *
 * [API Documentation for /addresses](https://ideal-postcodes.co.uk/documentation/addresses#query)
 */
const lookupAddress = (options) => {
    const header = {};
    const query = { query: options.query };
    const { client } = options;
    (0,_util__WEBPACK_IMPORTED_MODULE_5__.appendAuthorization)({ client, header, options });
    (0,_util__WEBPACK_IMPORTED_MODULE_5__.appendIp)({ header, options });
    (0,_util__WEBPACK_IMPORTED_MODULE_5__.appendFilter)({ query, options });
    (0,_util__WEBPACK_IMPORTED_MODULE_5__.appendTags)({ client, query, options });
    (0,_util__WEBPACK_IMPORTED_MODULE_5__.appendPage)({ query, options });
    const queryOptions = { header, query };
    if (options.timeout !== undefined)
        queryOptions.timeout = options.timeout;
    return _resources_addresses__WEBPACK_IMPORTED_MODULE_0__.list(client, queryOptions)
        .then((response) => response.body.result.hits);
};
/**
 * Generates a request object. Bundles together commonly used header/query extractions:
 * - Authorization (api_key, licensee, user_token)
 * - Source IP forwarding
 * - Result filtering
 * - Tagging
 */
const toAddressIdQuery = (options) => {
    const header = {};
    const query = {};
    const { client } = options;
    (0,_util__WEBPACK_IMPORTED_MODULE_5__.appendAuthorization)({ client, header, options });
    (0,_util__WEBPACK_IMPORTED_MODULE_5__.appendIp)({ header, options });
    (0,_util__WEBPACK_IMPORTED_MODULE_5__.appendFilter)({ query, options });
    (0,_util__WEBPACK_IMPORTED_MODULE_5__.appendTags)({ client, query, options });
    const request = { header, query };
    if (options.timeout !== undefined)
        request.timeout = options.timeout;
    return request;
};
/**
 * Lookup UDPRN
 *
 * Search for an address given a UDPRN
 *
 * Invalid UDPRN returns `null`
 *
 * [API Documentation for /udprn](https://ideal-postcodes.co.uk/documentation/udprn)
 */
const lookupUdprn = (options) => {
    const queryOptions = toAddressIdQuery(options);
    return _resources_udprn__WEBPACK_IMPORTED_MODULE_3__.retrieve(options.client, options.udprn.toString(), queryOptions)
        .then((response) => response.body.result)
        .catch((error) => {
        if (error instanceof _error__WEBPACK_IMPORTED_MODULE_6__.IdpcUdprnNotFoundError)
            return null;
        throw error;
    });
};
/**
 * Lookup UMPRN
 *
 * Search for an address given a UDPRN
 *
 * Invalid UDPRN returns `null`
 *
 * [API Documentation for /udprn](https://ideal-postcodes.co.uk/documentation/udprn)
 */
const lookupUmprn = (options) => {
    const queryOptions = toAddressIdQuery(options);
    return _resources_umprn__WEBPACK_IMPORTED_MODULE_4__.retrieve(options.client, options.umprn.toString(), queryOptions)
        .then((response) => response.body.result)
        .catch((error) => {
        if (error instanceof _error__WEBPACK_IMPORTED_MODULE_6__.IdpcUmprnNotFoundError)
            return null;
        throw error;
    });
};
/**
 * Check Key Availability
 *
 * Checks if a key can bey used
 *
 * [API Documentation for /keys]()https://ideal-postcodes.co.uk/documentation/keys#key)
 */
const checkKeyUsability = (options) => {
    const { client, timeout } = options;
    const api_key = options.api_key || options.client.config.api_key;
    const { licensee } = options;
    let query;
    if (licensee === undefined) {
        query = {};
    }
    else {
        query = { licensee };
    }
    const queryOptions = { query, header: {} };
    if (timeout !== undefined)
        queryOptions.timeout = timeout;
    return _resources_keys__WEBPACK_IMPORTED_MODULE_1__.retrieve(client, api_key, queryOptions)
        .then((response) => response.body.result); // Assert that we're retrieving public key information as no user_token provided
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Client": function() { return /* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_0__.Client; },
/* harmony export */   "addresses": function() { return /* reexport module object */ _resources_addresses__WEBPACK_IMPORTED_MODULE_3__; },
/* harmony export */   "autocomplete": function() { return /* reexport module object */ _resources_autocomplete__WEBPACK_IMPORTED_MODULE_4__; },
/* harmony export */   "checkKeyUsability": function() { return /* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.checkKeyUsability; },
/* harmony export */   "defaults": function() { return /* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_0__.defaults; },
/* harmony export */   "errors": function() { return /* reexport module object */ _error__WEBPACK_IMPORTED_MODULE_9__; },
/* harmony export */   "keys": function() { return /* reexport module object */ _resources_keys__WEBPACK_IMPORTED_MODULE_5__; },
/* harmony export */   "lookupAddress": function() { return /* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.lookupAddress; },
/* harmony export */   "lookupPostcode": function() { return /* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.lookupPostcode; },
/* harmony export */   "lookupUdprn": function() { return /* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.lookupUdprn; },
/* harmony export */   "lookupUmprn": function() { return /* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.lookupUmprn; },
/* harmony export */   "ping": function() { return /* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_1__.ping; },
/* harmony export */   "postcodes": function() { return /* reexport module object */ _resources_postcodes__WEBPACK_IMPORTED_MODULE_6__; },
/* harmony export */   "udprn": function() { return /* reexport module object */ _resources_udprn__WEBPACK_IMPORTED_MODULE_7__; },
/* harmony export */   "umprn": function() { return /* reexport module object */ _resources_umprn__WEBPACK_IMPORTED_MODULE_8__; }
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./node_modules/@ideal-postcodes/core-interface/esm/client.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./node_modules/@ideal-postcodes/core-interface/esm/helpers.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@ideal-postcodes/core-interface/esm/types.js");
/* harmony import */ var _resources_addresses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/addresses */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/addresses.js");
/* harmony import */ var _resources_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/autocomplete */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/autocomplete.js");
/* harmony import */ var _resources_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/keys */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/keys.js");
/* harmony import */ var _resources_postcodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/postcodes */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/postcodes.js");
/* harmony import */ var _resources_udprn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources/udprn */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/udprn.js");
/* harmony import */ var _resources_umprn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources/umprn */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/umprn.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error */ "./node_modules/@ideal-postcodes/core-interface/esm/error.js");
/**
 * @module Exports
 *
 * @description Direct exports of core-interface
 */













/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/resources/addresses.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/resources/addresses.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": function() { return /* binding */ list; }
/* harmony export */ });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/resource.js");

const resource = "addresses";
const list = (client, request) => (0,_resource__WEBPACK_IMPORTED_MODULE_0__.listMethod)({ resource, client })(request);


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/resources/autocomplete.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/resources/autocomplete.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": function() { return /* binding */ list; }
/* harmony export */ });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/resource.js");

const resource = "autocomplete/addresses";
const list = (client, request) => (0,_resource__WEBPACK_IMPORTED_MODULE_0__.listMethod)({ resource, client })(request);


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/resources/keys.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/resources/keys.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retrieve": function() { return /* binding */ retrieve; },
/* harmony export */   "usage": function() { return /* binding */ usage; }
/* harmony export */ });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/resource.js");

const resource = "keys";
const retrieve = (client, apiKey, request) => (0,_resource__WEBPACK_IMPORTED_MODULE_0__.retrieveMethod)({
    resource,
    client,
})(apiKey, request);
const usage = (client, apiKey, request) => (0,_resource__WEBPACK_IMPORTED_MODULE_0__.retrieveMethod)({
    resource,
    client,
    action: "usage",
})(apiKey, request);


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/resources/postcodes.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/resources/postcodes.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retrieve": function() { return /* binding */ retrieve; }
/* harmony export */ });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/resource.js");

const resource = "postcodes";
const retrieve = (client, postcode, request) => (0,_resource__WEBPACK_IMPORTED_MODULE_0__.retrieveMethod)({
    resource,
    client,
})(postcode, request);


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/resources/resource.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/resources/resource.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listMethod": function() { return /* binding */ listMethod; },
/* harmony export */   "retrieveMethod": function() { return /* binding */ retrieveMethod; }
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/@ideal-postcodes/core-interface/esm/util.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error */ "./node_modules/@ideal-postcodes/core-interface/esm/error.js");


// Writes a resource to URL string
const toRetrieveUrl = (options, id) => [
    options.client.url(),
    options.resource,
    encodeURIComponent(id),
    options.action,
]
    .filter((e) => e !== undefined)
    .join("/");
const retrieveMethod = (options) => {
    const { client } = options;
    return (id, request) => client.config.agent
        .http({
        method: "GET",
        url: toRetrieveUrl(options, id),
        query: (0,_util__WEBPACK_IMPORTED_MODULE_0__.toStringMap)(request.query),
        header: (0,_util__WEBPACK_IMPORTED_MODULE_0__.toHeader)(request, client),
        timeout: (0,_util__WEBPACK_IMPORTED_MODULE_0__.toTimeout)(request, client),
    })
        .then((response) => {
        const error = (0,_error__WEBPACK_IMPORTED_MODULE_1__.parse)(response);
        if (error)
            throw error;
        return response;
    });
};
const listMethod = (options) => {
    const { client, resource } = options;
    return (request) => client.config.agent
        .http({
        method: "GET",
        url: `${client.url()}/${resource}`,
        query: (0,_util__WEBPACK_IMPORTED_MODULE_0__.toStringMap)(request.query),
        header: (0,_util__WEBPACK_IMPORTED_MODULE_0__.toHeader)(request, client),
        timeout: (0,_util__WEBPACK_IMPORTED_MODULE_0__.toTimeout)(request, client),
    })
        .then((response) => {
        const error = (0,_error__WEBPACK_IMPORTED_MODULE_1__.parse)(response);
        if (error)
            throw error;
        return response;
    });
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/resources/udprn.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/resources/udprn.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retrieve": function() { return /* binding */ retrieve; }
/* harmony export */ });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/resource.js");

const resource = "udprn";
const retrieve = (client, udprn, request) => (0,_resource__WEBPACK_IMPORTED_MODULE_0__.retrieveMethod)({ resource, client })(udprn, request);


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/resources/umprn.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/resources/umprn.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retrieve": function() { return /* binding */ retrieve; }
/* harmony export */ });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./node_modules/@ideal-postcodes/core-interface/esm/resources/resource.js");

const resource = "umprn";
const retrieve = (client, umprn, request) => (0,_resource__WEBPACK_IMPORTED_MODULE_0__.retrieveMethod)({ resource, client })(umprn, request);


/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/types.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @module Misc Types
 */



/***/ }),

/***/ "./node_modules/@ideal-postcodes/core-interface/esm/util.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/core-interface/esm/util.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendAuthorization": function() { return /* binding */ appendAuthorization; },
/* harmony export */   "appendFilter": function() { return /* binding */ appendFilter; },
/* harmony export */   "appendIp": function() { return /* binding */ appendIp; },
/* harmony export */   "appendPage": function() { return /* binding */ appendPage; },
/* harmony export */   "appendTags": function() { return /* binding */ appendTags; },
/* harmony export */   "toAuthHeader": function() { return /* binding */ toAuthHeader; },
/* harmony export */   "toHeader": function() { return /* binding */ toHeader; },
/* harmony export */   "toStringMap": function() { return /* binding */ toStringMap; },
/* harmony export */   "toTimeout": function() { return /* binding */ toTimeout; }
/* harmony export */ });
/**
 * @module Utils
 */
/**
 * toQuery
 *
 * Shallow copies object while omitting undefined attributes
 */
const toStringMap = (optional) => {
    if (optional === undefined)
        return {};
    return Object.keys(optional).reduce((result, key) => {
        const value = optional[key];
        const reduce = reduceStringMap(value);
        if (reduce.length > 0)
            result[key] = reduce;
        return result;
    }, {});
};
const isString = (i) => typeof i === "string";
const isArray = (i) => Array.isArray(i);
const reduceStringMap = (value) => {
    const result = [];
    if (isArray(value)) {
        value.forEach((val) => {
            if (isNumber(val))
                result.push(val.toString());
            if (isString(val))
                result.push(val);
        });
        return result.join(",");
    }
    if (isNumber(value))
        return value.toString();
    if (isString(value))
        return value;
    return "";
};
const isNumber = (n) => typeof n === "number";
/**
 * toTimeout
 *
 * Returns timeout value from request object. Delegates to default client
 * timeout if not specified
 */
const toTimeout = ({ timeout }, client) => {
    if (isNumber(timeout))
        return timeout;
    return client.config.timeout;
};
/**
 * toHeader
 *
 * Extracts HTTP Header object from request and client default headers
 *
 * Precendence is given to request specific headers
 */
const toHeader = ({ header = {} }, client) => {
    return { ...client.config.header, ...toStringMap(header) };
};
/**
 * toAuthHeader
 *
 * Extracts credentials into authorization header format
 */
const toAuthHeader = (client, options) => {
    const credentials = [];
    const api_key = options.api_key || client.config.api_key;
    credentials.push(["api_key", api_key]);
    const licensee = options.licensee;
    if (licensee !== undefined)
        credentials.push(["licensee", licensee]);
    const user_token = options.user_token;
    if (user_token !== undefined)
        credentials.push(["user_token", user_token]);
    return `IDEALPOSTCODES ${toCredentialString(credentials)}`;
};
/**
 * appendAuthorization
 *
 * Mutates a headers object to include Authorization header. Will insert if found:
 * - api_key
 * - licensee
 * - user_token
 */
const appendAuthorization = ({ header, options, client, }) => {
    header.Authorization = toAuthHeader(client, options);
    return header;
};
const toCredentialString = (credentials) => {
    return credentials.map(([key, value]) => `${key}="${value}"`).join(" ");
};
// Adds source IP to headers
const appendIp = ({ header, options }) => {
    const { sourceIp } = options;
    if (sourceIp !== undefined)
        header["IDPC-Source-IP"] = sourceIp;
    return header;
};
// Adds filters to query
const appendFilter = ({ query, options, }) => {
    const { filter } = options;
    if (filter !== undefined)
        query.filter = filter.join(",");
    return query;
};
// Adds tags to query
const appendTags = ({ client, query, options, }) => {
    let tags;
    if (client.config.tags.length)
        tags = client.config.tags;
    if (options.tags)
        tags = options.tags;
    if (tags !== undefined)
        query.tags = tags.join(",");
    return query;
};
// Adds pagination attributes to query
const appendPage = ({ query, options, }) => {
    const { page, limit } = options;
    if (page !== undefined)
        query.page = page.toString();
    if (limit !== undefined)
        query.limit = limit.toString();
    return query;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/address.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/address.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addressRetrieval": function() { return /* binding */ addressRetrieval; },
/* harmony export */   "extract": function() { return /* binding */ extract; },
/* harmony export */   "getFields": function() { return /* binding */ getFields; },
/* harmony export */   "join": function() { return /* binding */ join; },
/* harmony export */   "notInAddress": function() { return /* binding */ notInAddress; },
/* harmony export */   "numberOfLines": function() { return /* binding */ numberOfLines; },
/* harmony export */   "populateAddress": function() { return /* binding */ populateAddress; },
/* harmony export */   "removeOrganisation": function() { return /* binding */ removeOrganisation; },
/* harmony export */   "searchLabels": function() { return /* binding */ searchLabels; },
/* harmony export */   "searchNames": function() { return /* binding */ searchNames; },
/* harmony export */   "toAddressLines": function() { return /* binding */ toAddressLines; },
/* harmony export */   "updateAddressLines": function() { return /* binding */ updateAddressLines; }
/* harmony export */ });
/* harmony import */ var capitalise_post_town__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! capitalise-post-town */ "./node_modules/capitalise-post-town/dist/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ "./node_modules/@ideal-postcodes/jsutil/esm/input.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./node_modules/@ideal-postcodes/jsutil/esm/dom.js");
/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country */ "./node_modules/@ideal-postcodes/jsutil/esm/country.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string */ "./node_modules/@ideal-postcodes/jsutil/esm/string.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@ideal-postcodes/jsutil/esm/util.js");






const updateAddressLines = (targets, address) => {
    const [line_1, line_2, line_3] = toAddressLines(numberOfLines(targets), address);
    (0,_input__WEBPACK_IMPORTED_MODULE_1__.update)(targets.line_1, line_1, true);
    (0,_input__WEBPACK_IMPORTED_MODULE_1__.update)(targets.line_2, line_2);
    (0,_input__WEBPACK_IMPORTED_MODULE_1__.update)(targets.line_3, line_3);
};
const addressRetrieval = ({ targets, config }) => (address) => {
    updateAddressLines(targets, address);
    (0,_input__WEBPACK_IMPORTED_MODULE_1__.update)(targets.post_town, address.post_town);
    (0,_input__WEBPACK_IMPORTED_MODULE_1__.update)(targets.postcode, address.postcode);
    (0,_country__WEBPACK_IMPORTED_MODULE_3__.updateCountry)(targets.country, address);
    if (config.populateOrganisation)
        (0,_input__WEBPACK_IMPORTED_MODULE_1__.update)(targets.organisation, address.organisation_name);
    if (config.populateCounty)
        (0,_input__WEBPACK_IMPORTED_MODULE_1__.update)(targets.county, address.county);
};
const numberOfLines = (targets) => {
    const { line_2, line_3 } = targets;
    if (!line_2)
        return 1;
    if (!line_3)
        return 2;
    return 3;
};
const join = (list) => list
    .filter((e) => {
    if ((0,_string__WEBPACK_IMPORTED_MODULE_4__.isString)(e))
        return !!e.trim();
    return !!e;
})
    .join(", ");
const toAddressLines = (n, address) => {
    const { line_1, line_2, line_3 } = address;
    if (n === 3)
        return [line_1, line_2, line_3];
    if (n === 2)
        return [line_1, join([line_2, line_3]), ""];
    return [join([line_1, line_2, line_3]), "", ""];
};
const extract = (a, attr) => {
    const result = a[attr];
    if (typeof result === "number")
        return result.toString();
    if (result === undefined)
        return "";
    return result;
};
const notInAddress = (o, attr) => o[attr] === undefined;
const getFields = (o) => ({
    ...o.outputFields,
    ...searchNames(o.names || {}, o.config.scope),
    ...searchLabels(o.labels || {}, o.config.scope),
});
const updateLines = (fields, address, scope) => {
    const [line_1, line_2, line_3] = toAddressLines(numberOfLines(fields), address);
    (0,_input__WEBPACK_IMPORTED_MODULE_1__.update)((0,_dom__WEBPACK_IMPORTED_MODULE_2__.toElem)(fields.line_1 || null, scope), line_1);
    (0,_input__WEBPACK_IMPORTED_MODULE_1__.update)((0,_dom__WEBPACK_IMPORTED_MODULE_2__.toElem)(fields.line_2 || null, scope), line_2);
    (0,_input__WEBPACK_IMPORTED_MODULE_1__.update)((0,_dom__WEBPACK_IMPORTED_MODULE_2__.toElem)(fields.line_3 || null, scope), line_3);
};
const searchNames = (names, scope) => {
    const result = {};
    let key;
    for (key in names) {
        if (!names.hasOwnProperty(key))
            continue;
        const name = names[key];
        const named = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.toElem)(`[name="${name}"]`, scope);
        if (named) {
            result[key] = named;
            continue;
        }
        const ariaNamed = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.toElem)(`[aria-name="${name}"]`, scope);
        if (ariaNamed)
            result[key] = ariaNamed;
    }
    return result;
};
const searchLabels = (labels, scope) => {
    const result = {};
    if (labels === undefined)
        return labels;
    let key;
    for (key in labels) {
        if (!labels.hasOwnProperty(key))
            continue;
        const name = labels[key];
        if (!name)
            continue;
        const first = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.contains)(scope, "label", name);
        const label = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.toElem)(first, scope);
        if (!label)
            continue;
        const forEl = label.getAttribute("for");
        if (forEl) {
            const byId = scope.querySelector(`#${(0,_util__WEBPACK_IMPORTED_MODULE_5__.cssEscape)(forEl)}`);
            if (byId) {
                result[key] = byId;
                continue;
            }
        }
        const inner = label.querySelector("input");
        if (inner)
            result[key] = inner;
    }
    return result;
};
const populateAddress = (options) => {
    const { config } = options;
    const address = { ...options.address };
    const { scope, titleizePostTown, populateOrganisation, populateCounty } = config;
    const fields = getFields(options);
    if (config.removeOrganisation)
        removeOrganisation(address);
    if (titleizePostTown)
        address.post_town = (0,capitalise_post_town__WEBPACK_IMPORTED_MODULE_0__.capitalisePostTown)(address.post_town);
    updateLines(fields, address, scope);
    delete address.line_1;
    delete address.line_2;
    delete address.line_3;
    (0,_country__WEBPACK_IMPORTED_MODULE_3__.updateCountry)((0,_dom__WEBPACK_IMPORTED_MODULE_2__.toElem)(fields.country || null, scope), address);
    delete address.country;
    if (populateOrganisation === false)
        delete address.organisation_name;
    if (populateCounty === false)
        delete address.county;
    let e;
    for (e in fields) {
        if (notInAddress(address, e))
            continue;
        if (fields.hasOwnProperty(e)) {
            const value = fields[e];
            if (!value)
                continue;
            (0,_input__WEBPACK_IMPORTED_MODULE_1__.update)((0,_dom__WEBPACK_IMPORTED_MODULE_2__.toElem)(value, scope), extract(address, e));
        }
    }
};
const removeOrganisation = (address) => {
    if (address.organisation_name.length === 0)
        return address;
    if (address.line_2.length === 0 && address.line_3.length === 0)
        return address;
    if (address.line_1 === address.organisation_name) {
        address.line_1 = address.line_2;
        address.line_2 = address.line_3;
        address.line_3 = "";
    }
    return address;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/assets.js":
/*!************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/assets.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autocompletePresent": function() { return /* binding */ autocompletePresent; },
/* harmony export */   "clearCache": function() { return /* binding */ clearCache; },
/* harmony export */   "downloadAutocomplete": function() { return /* binding */ downloadAutocomplete; },
/* harmony export */   "downloadAutocompleteStyle": function() { return /* binding */ downloadAutocompleteStyle; },
/* harmony export */   "downloadJQuery": function() { return /* binding */ downloadJQuery; },
/* harmony export */   "downloadPostcodeLookup": function() { return /* binding */ downloadPostcodeLookup; },
/* harmony export */   "downloadScript": function() { return /* binding */ downloadScript; },
/* harmony export */   "injectStyle": function() { return /* binding */ injectStyle; },
/* harmony export */   "jQueryPresent": function() { return /* binding */ jQueryPresent; },
/* harmony export */   "loadAutocomplete": function() { return /* binding */ loadAutocomplete; },
/* harmony export */   "loadPostcodeLookup": function() { return /* binding */ loadPostcodeLookup; },
/* harmony export */   "loadScript": function() { return /* binding */ loadScript; },
/* harmony export */   "loadStyle": function() { return /* binding */ loadStyle; },
/* harmony export */   "postcodeLookupPresent": function() { return /* binding */ postcodeLookupPresent; },
/* harmony export */   "readyAssets": function() { return /* binding */ readyAssets; }
/* harmony export */ });
let autocompleteLink;
const downloadAutocompleteStyle = (d) => {
    if (autocompleteLink !== undefined)
        return autocompleteLink;
    const document = d || window.document;
    autocompleteLink = loadStyle("https://cdn.jsdelivr.net/npm/ideal-postcodes-autocomplete@0.2.1/css/ideal-postcodes-autocomplete.css", document);
    document.head.appendChild(autocompleteLink);
    return autocompleteLink;
};
const autocompletePresent = (w) => {
    if (w.IdealPostcodes === undefined)
        return false;
    if (w.IdealPostcodes.Autocomplete === undefined)
        return false;
    if (w.IdealPostcodes.Autocomplete.Controller === undefined)
        return false;
    return true;
};
const loadAutocomplete = (config) => {
    if (config.autocomplete !== true)
        return "complete";
    if (autocompletePresent(window))
        return "complete";
    downloadAutocompleteStyle();
    downloadAutocomplete();
    return "loading";
};
const jQueryPresent = (w) => w.jQuery !== undefined;
const postcodeLookupPresent = (w) => {
    if (jQueryPresent(w) === false)
        return false;
    return w.jQuery.prototype.setupPostcodeLookup !== undefined;
};
const loadPostcodeLookup = (config) => {
    if (config.postcodeLookup !== true)
        return "complete";
    if (postcodeLookupPresent(window))
        return "complete";
    downloadJQuery();
    if (jQueryPresent(window))
        downloadPostcodeLookup();
    return "loading";
};
const cache = {};
const clearCache = () => {
    for (const url of Object.keys(cache)) {
        delete cache[url];
    }
    autocompleteLink = undefined;
};
const downloadScript = (url, integrity) => (d) => {
    if (cache[url])
        return cache[url];
    const document = d || window.document;
    const script = loadScript(url, integrity, document);
    document.head.appendChild(script);
    cache[url] = script;
    return script;
};
const downloadJQuery = downloadScript("https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js", "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=");
const downloadPostcodeLookup = downloadScript("https://cdn.jsdelivr.net/npm/jquery-postcodes@3.0.8/dist/postcodes.min.js", "sha256-JZSN3ZEXOFlpSMFjQkHjbKnjHlsFVf8N7p1SbCI0XHI=");
const downloadAutocomplete = downloadScript("https://cdn.jsdelivr.net/npm/ideal-postcodes-autocomplete@0.2.1/dist/ideal-postcodes-autocomplete.min.js", "sha256-lZPaPHBx7V2Gj9iAc8QfVcW02KlWB2gbrqXpGfiEGgo=");
const loadStyle = (href, document) => {
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = href;
    return link;
};
const loadScript = (src, integrity, document) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    script.integrity = integrity;
    script.src = src;
    return script;
};
const readyAssets = ({ config, window }) => {
    let ready = true;
    if (config.autocomplete) {
        loadAutocomplete(config);
        if (!autocompletePresent(window))
            ready = false;
    }
    if (config.postcodeLookup) {
        loadPostcodeLookup(config);
        if (!postcodeLookupPresent(window))
            ready = false;
    }
    return ready;
};
const injectStyle = (css, document) => {
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
    return style;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/country.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/country.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toCiIso": function() { return /* binding */ toCiIso; },
/* harmony export */   "toCountry": function() { return /* binding */ toCountry; },
/* harmony export */   "toIso": function() { return /* binding */ toIso; },
/* harmony export */   "updateCountry": function() { return /* binding */ updateCountry; }
/* harmony export */ });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./node_modules/@ideal-postcodes/jsutil/esm/input.js");

const toCiIso = (address) => {
    if (/^GY/.test(address.postcode))
        return "GG";
    if (/^JE/.test(address.postcode))
        return "JE";
    return null;
};
const UK = "United Kingdom";
const IOM = "Isle of Man";
const EN = "England";
const SC = "Scotland";
const WA = "Wales";
const NI = "Northern Ireland";
const CI = "Channel Islands";
const toIso = (address) => {
    const country = address.country;
    if (country === EN)
        return "GB";
    if (country === SC)
        return "GB";
    if (country === WA)
        return "GB";
    if (country === NI)
        return "GB";
    if (country === IOM)
        return "IM";
    if (country === CI)
        return toCiIso(address);
    return null;
};
const toCountry = (address) => {
    const country = address.country;
    if (country === EN)
        return UK;
    if (country === SC)
        return UK;
    if (country === WA)
        return UK;
    if (country === NI)
        return UK;
    if (country === IOM)
        return IOM;
    if (country === CI) {
        const iso = toCiIso(address);
        if (iso === "GG")
            return "Guernsey";
        if (iso === "JE")
            return "Jersey";
    }
    return null;
};
const updateCountry = (select, address) => {
    if (!select)
        return;
    if ((0,_input__WEBPACK_IMPORTED_MODULE_0__.isSelect)(select)) {
        const iso = toIso(address);
        if ((0,_input__WEBPACK_IMPORTED_MODULE_0__.hasValue)(select, iso))
            (0,_input__WEBPACK_IMPORTED_MODULE_0__.change)({ e: select, value: iso });
        const bcc = toCountry(address);
        if ((0,_input__WEBPACK_IMPORTED_MODULE_0__.hasValue)(select, bcc))
            (0,_input__WEBPACK_IMPORTED_MODULE_0__.change)({ e: select, value: bcc });
    }
    if ((0,_input__WEBPACK_IMPORTED_MODULE_0__.isInput)(select)) {
        const bcc = toCountry(address);
        (0,_input__WEBPACK_IMPORTED_MODULE_0__.change)({ e: select, value: bcc });
    }
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/debounce.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/debounce.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": function() { return /* binding */ debounce; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; }
/* harmony export */ });
const isObject = (value) => {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
};
const debounce = function (func, wait, options) {
    let lastArgs, lastThis, maxWait, result, timerId, lastCallTime;
    let lastInvokeTime = 0;
    let leading = false;
    let maxing = false;
    let trailing = true;
    if (typeof func !== "function") {
        throw new TypeError("Expected a function");
    }
    wait = +wait || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        const args = lastArgs;
        const thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        const timeSinceLastCall = time - lastCallTime;
        const timeSinceLastInvoke = time - lastInvokeTime;
        const timeWaiting = wait - timeSinceLastCall;
        return maxing
            ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
            : timeWaiting;
    }
    function shouldInvoke(time) {
        const timeSinceLastCall = time - lastCallTime;
        const timeSinceLastInvoke = time - lastInvokeTime;
        return (lastCallTime === undefined ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0 ||
            (maxing && timeSinceLastInvoke >= maxWait));
    }
    function timerExpired() {
        const time = Date.now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function pending() {
        return timerId !== undefined;
    }
    function debounced(...args) {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);
        lastArgs = args;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.pending = pending;
    return debounced;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/dom.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/dom.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contains": function() { return /* binding */ contains; },
/* harmony export */   "getAnchors": function() { return /* binding */ getAnchors; },
/* harmony export */   "getDocument": function() { return /* binding */ getDocument; },
/* harmony export */   "getParent": function() { return /* binding */ getParent; },
/* harmony export */   "getScope": function() { return /* binding */ getScope; },
/* harmony export */   "hasWindow": function() { return /* binding */ hasWindow; },
/* harmony export */   "hide": function() { return /* binding */ hide; },
/* harmony export */   "insertBefore": function() { return /* binding */ insertBefore; },
/* harmony export */   "loaded": function() { return /* binding */ loaded; },
/* harmony export */   "markLoaded": function() { return /* binding */ markLoaded; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "restoreStyle": function() { return /* binding */ restoreStyle; },
/* harmony export */   "setStyle": function() { return /* binding */ setStyle; },
/* harmony export */   "show": function() { return /* binding */ show; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "toElem": function() { return /* binding */ toElem; },
/* harmony export */   "toHtmlElem": function() { return /* binding */ toHtmlElem; }
/* harmony export */ });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./node_modules/@ideal-postcodes/jsutil/esm/string.js");

const hasWindow = () => typeof window !== "undefined";
const toArray = (nodeList) => Array.prototype.slice.call(nodeList);
const loaded = (elem, prefix = "idpc") => elem.getAttribute(prefix) === "true";
const markLoaded = (elem, prefix = "idpc") => elem.setAttribute(prefix, "true");
const isTrue = () => true;
const getParent = (node, entity, test = isTrue) => {
    let parent = node;
    const tagName = entity.toUpperCase();
    while (parent.tagName !== "HTML") {
        if (parent.tagName === tagName && test(parent))
            return parent;
        if (parent.parentNode === null)
            return null;
        parent = parent.parentNode;
    }
    return null;
};
const toHtmlElem = (parent, selector) => (selector ? parent.querySelector(selector) : null);
const getAnchors = (selector, d) => {
    const matches = (d || window.document).querySelectorAll(selector);
    const anchors = toArray(matches).filter((e) => !loaded(e));
    if (anchors.length === 0)
        return [];
    anchors.forEach((anchor) => markLoaded(anchor));
    return anchors;
};
const insertBefore = ({ elem, target }) => {
    const parent = target.parentNode;
    if (parent === null)
        return;
    parent.insertBefore(elem, target);
    return elem;
};
const toElem = (elem, context) => {
    if ((0,_string__WEBPACK_IMPORTED_MODULE_0__.isString)(elem))
        return context.querySelector(elem);
    return elem;
};
const d = () => window.document;
const getScope = (scope) => {
    if ((0,_string__WEBPACK_IMPORTED_MODULE_0__.isString)(scope))
        return d().querySelector(scope);
    if (scope === null)
        return d();
    return scope;
};
const getDocument = (scope) => {
    if (scope instanceof Document)
        return scope;
    if (scope.ownerDocument)
        return scope.ownerDocument;
    return d();
};
const setStyle = (element, style) => {
    const currentRules = element.getAttribute("style");
    Object.keys(style).forEach((key) => (element.style[key] = style[key]));
    return currentRules;
};
const restoreStyle = (element, style) => {
    element.setAttribute("style", style || "");
};
const hide = (e) => {
    e.style.display = "none";
    return e;
};
const show = (e) => {
    e.style.display = "";
    return e;
};
const remove = (elem) => {
    if (elem === null || elem.parentNode === null)
        return;
    elem.parentNode.removeChild(elem);
};
const contains = (scope, selector, text) => {
    const elements = scope.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
        const e = elements[i];
        const content = e.innerText;
        if (content && content.trim() === text)
            return e;
    }
    return null;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/event.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/event.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newEvent": function() { return /* binding */ newEvent; },
/* harmony export */   "trigger": function() { return /* binding */ trigger; }
/* harmony export */ });
const newEvent = ({ event, bubbles = true, cancelable = true, }) => {
    if (typeof window.Event === "function")
        return new window.Event(event, { bubbles, cancelable });
    const e = document.createEvent("Event");
    e.initEvent(event, bubbles, cancelable);
    return e;
};
const trigger = (e, event) => e.dispatchEvent(newEvent({ event }));


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/id.js":
/*!********************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/id.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "idGen": function() { return /* binding */ idGen; }
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./node_modules/@ideal-postcodes/jsutil/esm/store.js");

const idGen = (prefix = "idpc_") => () => {
    const g = (0,_store__WEBPACK_IMPORTED_MODULE_0__.idpcState)();
    if (!g.idGen)
        g.idGen = {};
    if (g.idGen[prefix] === undefined)
        g.idGen[prefix] = 0;
    g.idGen[prefix] += 1;
    return `${prefix}${g.idGen[prefix]}`;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addressRetrieval": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.addressRetrieval; },
/* harmony export */   "autocompletePresent": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.autocompletePresent; },
/* harmony export */   "change": function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_6__.change; },
/* harmony export */   "clearCache": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.clearCache; },
/* harmony export */   "config": function() { return /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.config; },
/* harmony export */   "contains": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.contains; },
/* harmony export */   "cssEscape": function() { return /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.cssEscape; },
/* harmony export */   "debounce": function() { return /* reexport safe */ _debounce__WEBPACK_IMPORTED_MODULE_12__.debounce; },
/* harmony export */   "defaults": function() { return /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.defaults; },
/* harmony export */   "downloadAutocomplete": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.downloadAutocomplete; },
/* harmony export */   "downloadAutocompleteStyle": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.downloadAutocompleteStyle; },
/* harmony export */   "downloadJQuery": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.downloadJQuery; },
/* harmony export */   "downloadPostcodeLookup": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.downloadPostcodeLookup; },
/* harmony export */   "downloadScript": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.downloadScript; },
/* harmony export */   "extract": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.extract; },
/* harmony export */   "generateTimer": function() { return /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.generateTimer; },
/* harmony export */   "getAnchors": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.getAnchors; },
/* harmony export */   "getDocument": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.getDocument; },
/* harmony export */   "getFields": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.getFields; },
/* harmony export */   "getParent": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.getParent; },
/* harmony export */   "getScope": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.getScope; },
/* harmony export */   "getTargets": function() { return /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.getTargets; },
/* harmony export */   "hasValue": function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_6__.hasValue; },
/* harmony export */   "hasWindow": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.hasWindow; },
/* harmony export */   "hide": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.hide; },
/* harmony export */   "idGen": function() { return /* reexport safe */ _id__WEBPACK_IMPORTED_MODULE_8__.idGen; },
/* harmony export */   "idpcState": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_7__.idpcState; },
/* harmony export */   "includes": function() { return /* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_10__.includes; },
/* harmony export */   "injectStyle": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.injectStyle; },
/* harmony export */   "insertBefore": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.insertBefore; },
/* harmony export */   "isInput": function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_6__.isInput; },
/* harmony export */   "isObject": function() { return /* reexport safe */ _debounce__WEBPACK_IMPORTED_MODULE_12__.isObject; },
/* harmony export */   "isSelect": function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_6__.isSelect; },
/* harmony export */   "isString": function() { return /* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_10__.isString; },
/* harmony export */   "isTextarea": function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_6__.isTextarea; },
/* harmony export */   "jQueryPresent": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.jQueryPresent; },
/* harmony export */   "join": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.join; },
/* harmony export */   "keyCodeMapping": function() { return /* reexport safe */ _keyboard__WEBPACK_IMPORTED_MODULE_11__.keyCodeMapping; },
/* harmony export */   "loadAutocomplete": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.loadAutocomplete; },
/* harmony export */   "loadPostcodeLookup": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.loadPostcodeLookup; },
/* harmony export */   "loadScript": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.loadScript; },
/* harmony export */   "loadStyle": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.loadStyle; },
/* harmony export */   "loaded": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.loaded; },
/* harmony export */   "markLoaded": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.markLoaded; },
/* harmony export */   "newEvent": function() { return /* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_5__.newEvent; },
/* harmony export */   "notInAddress": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.notInAddress; },
/* harmony export */   "numberOfLines": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.numberOfLines; },
/* harmony export */   "populateAddress": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.populateAddress; },
/* harmony export */   "postcodeLookupPresent": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.postcodeLookupPresent; },
/* harmony export */   "readyAssets": function() { return /* reexport safe */ _assets__WEBPACK_IMPORTED_MODULE_3__.readyAssets; },
/* harmony export */   "relevantPage": function() { return /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.relevantPage; },
/* harmony export */   "remove": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.remove; },
/* harmony export */   "removeOrganisation": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.removeOrganisation; },
/* harmony export */   "reset": function() { return /* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_7__.reset; },
/* harmony export */   "restoreStyle": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.restoreStyle; },
/* harmony export */   "searchLabels": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.searchLabels; },
/* harmony export */   "searchNames": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.searchNames; },
/* harmony export */   "setStyle": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.setStyle; },
/* harmony export */   "setValue": function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_6__.setValue; },
/* harmony export */   "setup": function() { return /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.setup; },
/* harmony export */   "setupBind": function() { return /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.setupBind; },
/* harmony export */   "show": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.show; },
/* harmony export */   "supportedKeys": function() { return /* reexport safe */ _keyboard__WEBPACK_IMPORTED_MODULE_11__.supportedKeys; },
/* harmony export */   "toAddressLines": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.toAddressLines; },
/* harmony export */   "toArray": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.toArray; },
/* harmony export */   "toCiIso": function() { return /* reexport safe */ _country__WEBPACK_IMPORTED_MODULE_4__.toCiIso; },
/* harmony export */   "toCountry": function() { return /* reexport safe */ _country__WEBPACK_IMPORTED_MODULE_4__.toCountry; },
/* harmony export */   "toElem": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.toElem; },
/* harmony export */   "toHtmlElem": function() { return /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.toHtmlElem; },
/* harmony export */   "toId": function() { return /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_0__.toId; },
/* harmony export */   "toIso": function() { return /* reexport safe */ _country__WEBPACK_IMPORTED_MODULE_4__.toIso; },
/* harmony export */   "toKey": function() { return /* reexport safe */ _keyboard__WEBPACK_IMPORTED_MODULE_11__.toKey; },
/* harmony export */   "trigger": function() { return /* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_5__.trigger; },
/* harmony export */   "update": function() { return /* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_6__.update; },
/* harmony export */   "updateAddressLines": function() { return /* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_9__.updateAddressLines; },
/* harmony export */   "updateCountry": function() { return /* reexport safe */ _country__WEBPACK_IMPORTED_MODULE_4__.updateCountry; },
/* harmony export */   "watchChange": function() { return /* reexport safe */ _watcher__WEBPACK_IMPORTED_MODULE_13__.watchChange; },
/* harmony export */   "watchMutation": function() { return /* reexport safe */ _watcher__WEBPACK_IMPORTED_MODULE_13__.watchMutation; },
/* harmony export */   "watchTimer": function() { return /* reexport safe */ _watcher__WEBPACK_IMPORTED_MODULE_13__.watchTimer; }
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@ideal-postcodes/jsutil/esm/util.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/@ideal-postcodes/jsutil/esm/types.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./node_modules/@ideal-postcodes/jsutil/esm/dom.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets */ "./node_modules/@ideal-postcodes/jsutil/esm/assets.js");
/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country */ "./node_modules/@ideal-postcodes/jsutil/esm/country.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event */ "./node_modules/@ideal-postcodes/jsutil/esm/event.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input */ "./node_modules/@ideal-postcodes/jsutil/esm/input.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./node_modules/@ideal-postcodes/jsutil/esm/store.js");
/* harmony import */ var _id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./id */ "./node_modules/@ideal-postcodes/jsutil/esm/id.js");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./address */ "./node_modules/@ideal-postcodes/jsutil/esm/address.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string */ "./node_modules/@ideal-postcodes/jsutil/esm/string.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./keyboard */ "./node_modules/@ideal-postcodes/jsutil/esm/keyboard.js");
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./debounce */ "./node_modules/@ideal-postcodes/jsutil/esm/debounce.js");
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./watcher */ "./node_modules/@ideal-postcodes/jsutil/esm/watcher.js");
















/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/input.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/input.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "change": function() { return /* binding */ change; },
/* harmony export */   "hasValue": function() { return /* binding */ hasValue; },
/* harmony export */   "isInput": function() { return /* binding */ isInput; },
/* harmony export */   "isSelect": function() { return /* binding */ isSelect; },
/* harmony export */   "isTextarea": function() { return /* binding */ isTextarea; },
/* harmony export */   "setValue": function() { return /* binding */ setValue; },
/* harmony export */   "update": function() { return /* binding */ update; }
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./node_modules/@ideal-postcodes/jsutil/esm/event.js");

const isSelect = (e) => {
    if (e === null)
        return false;
    return e instanceof HTMLSelectElement;
};
const isInput = (e) => {
    if (e === null)
        return false;
    return e instanceof HTMLInputElement;
};
const isTextarea = (e) => {
    if (e === null)
        return false;
    return e instanceof HTMLTextAreaElement;
};
const update = (input, value, skipTrigger = false) => {
    if (!input)
        return;
    if (!isInput(input) && !isTextarea(input))
        return;
    change({ e: input, value, skipTrigger });
};
const hasValue = (select, value) => {
    if (value === null)
        return false;
    return select.querySelector(`[value="${value}"]`) !== null;
};
const updateSelect = ({ e, value, skipTrigger }) => {
    if (value === null)
        return;
    if (!isSelect(e))
        return;
    setValue(e, value);
    if (!skipTrigger)
        (0,_event__WEBPACK_IMPORTED_MODULE_0__.trigger)(e, "select");
    (0,_event__WEBPACK_IMPORTED_MODULE_0__.trigger)(e, "change");
};
const setValue = (e, value) => {
    const descriptor = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value");
    if (descriptor === undefined)
        return;
    if (descriptor.set === undefined)
        return;
    const setter = descriptor.set;
    setter.call(e, value);
};
const updateInput = ({ e, value, skipTrigger }) => {
    if (value === null)
        return;
    if (!isInput(e) && !isTextarea(e))
        return;
    setValue(e, value);
    if (!skipTrigger)
        (0,_event__WEBPACK_IMPORTED_MODULE_0__.trigger)(e, "input");
    (0,_event__WEBPACK_IMPORTED_MODULE_0__.trigger)(e, "change");
};
const change = (options) => {
    if (options.value === null)
        return;
    updateSelect(options);
    updateInput(options);
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/keyboard.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/keyboard.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyCodeMapping": function() { return /* binding */ keyCodeMapping; },
/* harmony export */   "supportedKeys": function() { return /* binding */ supportedKeys; },
/* harmony export */   "toKey": function() { return /* binding */ toKey; }
/* harmony export */ });
const keyCodeMapping = {
    13: "Enter",
    38: "ArrowUp",
    40: "ArrowDown",
    36: "Home",
    35: "End",
    27: "Escape",
    8: "Backspace",
};
const supportedKeys = [
    "Enter",
    "ArrowUp",
    "ArrowDown",
    "Home",
    "End",
    "Escape",
    "Backspace",
];
const supported = (k) => supportedKeys.indexOf(k) !== -1;
const toKey = (event) => {
    if (event.keyCode)
        return keyCodeMapping[event.keyCode] || null;
    return supported(event.key) ? event.key : null;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/store.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/store.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "idpcState": function() { return /* binding */ idpcState; },
/* harmony export */   "reset": function() { return /* binding */ reset; }
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/@ideal-postcodes/jsutil/esm/dom.js");

let g = {};
if ((0,_dom__WEBPACK_IMPORTED_MODULE_0__.hasWindow)()) {
    if (window.idpcGlobal) {
        g = window.idpcGlobal;
    }
    else {
        window.idpcGlobal = g;
    }
}
const idpcState = () => g;
const reset = () => Object.getOwnPropertyNames(g).forEach((p) => delete g[p]);


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/string.js":
/*!************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/string.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "includes": function() { return /* binding */ includes; },
/* harmony export */   "isString": function() { return /* binding */ isString; }
/* harmony export */ });
const isString = (input) => typeof input === "string";
const includes = (haystack, needle) => haystack.indexOf(needle) !== -1;


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/types.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/util.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/util.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "cssEscape": function() { return /* binding */ cssEscape; },
/* harmony export */   "defaults": function() { return /* binding */ defaults; },
/* harmony export */   "generateTimer": function() { return /* binding */ generateTimer; },
/* harmony export */   "getTargets": function() { return /* binding */ getTargets; },
/* harmony export */   "relevantPage": function() { return /* binding */ relevantPage; },
/* harmony export */   "setup": function() { return /* binding */ setup; },
/* harmony export */   "setupBind": function() { return /* binding */ setupBind; },
/* harmony export */   "toId": function() { return /* binding */ toId; }
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/@ideal-postcodes/jsutil/esm/dom.js");

const getTargets = (parent, selectors) => {
    const line_1 = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.toHtmlElem)(parent, selectors.line_1);
    if (line_1 === null)
        return null;
    const post_town = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.toHtmlElem)(parent, selectors.post_town);
    if (post_town === null)
        return null;
    const postcode = parent.querySelector(selectors.postcode);
    if (postcode === null)
        return null;
    const line_2 = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.toHtmlElem)(parent, selectors.line_2);
    const line_3 = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.toHtmlElem)(parent, selectors.line_3);
    const country = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.toHtmlElem)(parent, selectors.country);
    const county = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.toHtmlElem)(parent, selectors.county);
    const organisation = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.toHtmlElem)(parent, selectors.organisation);
    return {
        line_1,
        line_2,
        line_3,
        post_town,
        county,
        postcode,
        organisation,
        country,
    };
};
const relevantPage = (bindings) => bindings.some((b) => b.pageTest());
const defaults = {
    enabled: true,
    apiKey: "",
    populateOrganisation: true,
    populateCounty: false,
    autocomplete: true,
    autocompleteOverride: {},
    postcodeLookup: true,
    postcodeLookupOverride: {},
};
const config = () => {
    const c = window.idpcConfig;
    if (c === undefined)
        return;
    return { ...defaults, ...c };
};
const generateTimer = ({ pageTest, bind, interval = 1000, }) => {
    let timer = null;
    const start = (config) => {
        if (!pageTest())
            return null;
        timer = window.setInterval(() => {
            try {
                bind(config);
            }
            catch (e) {
                stop();
                console.log(e);
            }
        }, interval);
        return timer;
    };
    const stop = () => {
        if (timer === null)
            return;
        window.clearInterval(timer);
        timer = null;
    };
    return { start, stop };
};
const NOOP = () => { };
const setup = ({ bindings, callback = NOOP }) => {
    const c = config();
    if (c === undefined)
        return callback();
    if (!relevantPage(bindings))
        return callback();
    const result = bindings.reduce((prev, binding) => {
        const { pageTest, bind } = binding;
        if (!pageTest())
            return prev;
        const { start, stop } = generateTimer({ pageTest, bind });
        start(c);
        prev.push({ binding, start, stop });
        return prev;
    }, []);
    return callback(result);
};
const DEFAULT_SCOPE = "form";
const DEFAULT_ANCHOR = "line_1";
const setupBind = ({ selectors, anchorSelector, parentScope, doc, parentTest, }) => {
    const anchors = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getAnchors)(anchorSelector || selectors[DEFAULT_ANCHOR], doc);
    return anchors.reduce((prev, anchor) => {
        const parent = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getParent)(anchor, parentScope || DEFAULT_SCOPE, parentTest);
        if (!parent)
            return prev;
        const targets = getTargets(parent, selectors);
        if (targets === null)
            return prev;
        prev.push({ targets, parent, anchor });
        return prev;
    }, []);
};
const toId = (elem) => `#${elem.id}`;
const cssEscape = (value) => {
    value = String(value);
    const length = value.length;
    let index = -1;
    let codeUnit;
    let result = "";
    const firstCodeUnit = value.charCodeAt(0);
    while (++index < length) {
        codeUnit = value.charCodeAt(index);
        if (codeUnit == 0x0000) {
            result += "\uFFFD";
            continue;
        }
        if ((codeUnit >= 0x0001 && codeUnit <= 0x001f) ||
            codeUnit == 0x007f ||
            (index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
            (index == 1 &&
                codeUnit >= 0x0030 &&
                codeUnit <= 0x0039 &&
                firstCodeUnit == 0x002d)) {
            result += "\\" + codeUnit.toString(16) + " ";
            continue;
        }
        if (index == 0 && length == 1 && codeUnit == 0x002d) {
            result += "\\" + value.charAt(index);
            continue;
        }
        if (codeUnit >= 0x0080 ||
            codeUnit == 0x002d ||
            codeUnit == 0x005f ||
            (codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
            (codeUnit >= 0x0041 && codeUnit <= 0x005a) ||
            (codeUnit >= 0x0061 && codeUnit <= 0x007a)) {
            result += value.charAt(index);
            continue;
        }
        result += "\\" + value.charAt(index);
    }
    return result;
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/jsutil/esm/watcher.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/jsutil/esm/watcher.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "watchChange": function() { return /* binding */ watchChange; },
/* harmony export */   "watchMutation": function() { return /* binding */ watchMutation; },
/* harmony export */   "watchTimer": function() { return /* binding */ watchTimer; }
/* harmony export */ });
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce */ "./node_modules/@ideal-postcodes/jsutil/esm/debounce.js");

const watchTimer = ({ bind, interval = 1000 }) => {
    let timer = null;
    const start = () => {
        timer = window.setInterval(() => {
            try {
                bind();
            }
            catch (e) {
                stop();
            }
        }, interval);
        return timer;
    };
    const stop = () => {
        if (timer === null)
            return;
        window.clearInterval(timer);
        timer = null;
    };
    return { start, stop };
};
const watchMutation = ({ bind, interval = 1000, target = window.document, observerConfig = {
    subtree: true,
    childList: true,
    attributes: true,
}, }) => {
    const observer = new MutationObserver((0,_debounce__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {
        try {
            bind();
        }
        catch (e) {
            stop();
        }
    }, interval));
    const start = () => {
        observer.observe(target, observerConfig);
        return null;
    };
    const stop = () => observer.disconnect();
    return { start, stop };
};
const watchChange = (options) => {
    if (!window)
        return watchTimer(options);
    if (!window.MutationObserver)
        return watchTimer(options);
    if (options.mutationObserver)
        return watchMutation(options);
    return watchTimer(options);
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/postcode-lookup/esm/controller.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/postcode-lookup/esm/controller.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": function() { return /* binding */ Controller; },
/* harmony export */   "click": function() { return /* binding */ click; },
/* harmony export */   "defaults": function() { return /* binding */ defaults; },
/* harmony export */   "keypress": function() { return /* binding */ keypress; },
/* harmony export */   "selectEvent": function() { return /* binding */ selectEvent; }
/* harmony export */ });
/* harmony import */ var _ideal_postcodes_core_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ideal-postcodes/core-axios */ "./node_modules/@ideal-postcodes/core-axios/esm/index.js");
/* harmony import */ var _ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ideal-postcodes/jsutil */ "./node_modules/@ideal-postcodes/jsutil/esm/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/@ideal-postcodes/postcode-lookup/esm/util.js");
/**
 * @module Controller
 */
/* eslint-disable no-invalid-this */



/**
 * @hidden
 */
const NOOP = () => { };
/**
 * @hidden
 */
const returnFalse = () => false;
/**
 * Keypress listener on input field
 *
 * @hidden
 */
const keypress = function (event) {
    if ((0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.toKey)(event) === "Enter") {
        event.preventDefault();
        this.handleClick();
        return false;
    }
    return;
};
/**
 * Button Click handler
 *
 * @hidden
 */
const click = function (event) {
    event.preventDefault();
    this.options.onButtonTrigger.call(this);
    this.handleClick();
    return false;
};
/**
 * Select change handler
 *
 * @hidden
 */
const selectEvent = function () {
    const value = parseInt(this.select.value, 10);
    if (isNaN(value))
        return;
    this.selectAddress(value);
};
/**
 * Default Controller configuration
 */
const defaults = {
    // Client
    apiKey: "",
    checkKey: true,
    context: "",
    // DOM
    outputScope: null,
    // Callbacks
    onButtonTrigger: NOOP,
    onSearchCompleted: NOOP,
    onAddressesRetrieved: NOOP,
    onAddressSelected: NOOP,
    onSelectCreated: NOOP,
    onSelectRemoved: NOOP,
    onLookupTriggered: NOOP,
    shouldLookupTrigger: () => true,
    onSearchError: NOOP,
    onLoaded: NOOP,
    onFailedCheck: NOOP,
    onRemove: NOOP,
    onAddressPopulated: NOOP,
    onUnhide: NOOP,
    // Input
    input: null,
    inputId: null,
    inputClass: "idpc-input",
    inputAriaLabel: "Search a postcode to retrieve your address",
    placeholder: "Search your postcode",
    // Button
    button: null,
    buttonId: null,
    buttonLabel: "Find my Address",
    buttonClass: "idpc-button",
    // Select
    selectContainer: null,
    selectId: null,
    selectClass: "idpc-select",
    selectContainerId: null,
    selectContainerClass: "idpc-select-container",
    selectAriaLabel: "Select your address",
    // Hide / unhide
    unhide: null,
    unhideClass: "idpc-unhide",
    // Message
    message: null,
    messageId: null,
    messageClass: "idpc-error",
    msgSelect: "Please select your address",
    msgDisabled: "Finding addresses...",
    msgNotFound: "Your postcode could not be found. Please type in your address",
    msgAddressNotFound: "We could not find a match for your address. Please type in your address",
    msgError: "Sorry, we weren't able to get the address you were looking for. Please type in your address",
    msgUnhide: "Enter address manually",
    // Plugin behaviour
    cooloff: 500,
    removeOrganisation: false,
    selectSinglePremise: false,
    titleizePostTown: true,
    postcodeSearchFormatter: _util__WEBPACK_IMPORTED_MODULE_2__.postcodeSearchFormatter,
    addressSearchFormatter: _util__WEBPACK_IMPORTED_MODULE_2__.addressSearchFormatter,
    outputFields: {},
    strictlyPostcodes: true,
    limit: 10,
    inputStyle: {},
    buttonStyle: {},
    messageStyle: {},
    selectStyle: {},
    contextStyle: {},
    hide: [],
    autocomplete: "none",
    populateCounty: true,
    populateOrganisation: true,
};
/**
 * A Postcode Lookup Controller instances manages the state of a postcode or address search widget and updates the DOM accordingly
 *
 * To detach from the DOM call use the `#removeAll()` method
 */
class Controller {
    constructor(options) {
        this.prevContext = null;
        // Merge user config with any defaults
        this.options = {
            ...{ scope: window.document, document: window.document },
            ...defaults,
            ...options,
        };
        this.client = new _ideal_postcodes_core_axios__WEBPACK_IMPORTED_MODULE_0__.Client({ ...this.options, api_key: this.options.apiKey });
        // Scope the operations of this controller to a document or DOM subtree
        this.scope = (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.getScope)(this.options.scope);
        // Assign a parent Document for elem creation
        this.document = (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.getDocument)(this.scope);
        // Assign a document or DOM subtree to scope outputs. Defaults to controller scope
        this.outputScope = this.findOrCreate(this.options.outputScope, () => this.scope);
        this.data = [];
        this.lastLookup = "";
        // Cache container element for Postcode Lookup controller instance
        this.context = this.findOrCreate(this.options.context);
        // Set context styles if configured
        this.prevContext = (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.setStyle)(this.context, this.options.contextStyle);
        this.keypress = keypress.bind(this);
        this.click = click.bind(this);
        this.selectEvent = selectEvent.bind(this);
        this.unhideEvent = this.unhideFields.bind(this);
        // Create DOM elements
        this.input = this.createInput();
        this.button = this.createButton();
        this.message = this.createMessage();
        this.select = this.createSelect();
        this.selectContainer = this.createContainer();
        this.unhide = this.createUnhide();
        this.init();
    }
    /**
     * Retrieve Element
     * - If string, assumes is valid and returns first match within scope
     * - If null, invokes the create method to return a default
     * - If HTMLElement returns instance
     *
     * @hidden
     */
    findOrCreate(q, create) {
        if ((0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.isString)(q))
            return this.scope.querySelector(q);
        if (create && q === null)
            return create();
        return q;
    }
    /**
     * Creates a clickable element that can trigger unhiding of fields
     */
    createUnhide() {
        const e = this.findOrCreate(this.options.unhide, () => {
            const e = this.document.createElement("p");
            e.innerText = this.options.msgUnhide;
            e.setAttribute("role", "button");
            e.setAttribute("tabindex", "0");
            if (this.options.unhideClass)
                e.className = this.options.unhideClass;
            return e;
        });
        e.addEventListener("click", this.unhideEvent);
        return e;
    }
    /**
     * Removes unhide elem from DOM
     */
    unmountUnhide() {
        this.unhide.removeEventListener("click", this.unhideEvent);
        if (!this.options.unhide && this.options.hide.length)
            (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.remove)(this.unhide);
    }
    /**
     * Creates select container instance
     *
     * @hidden
     */
    createContainer() {
        return this.findOrCreate(this.options.selectContainer, () => {
            const c = this.options;
            const div = this.document.createElement("div");
            if (c.selectContainerId)
                div.id = c.selectContainerId;
            if (c.selectContainerClass)
                div.className = c.selectContainerClass;
            div.setAttribute("aria-live", "polite");
            (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.hide)(div);
            return div;
        });
    }
    /**
     * Removes select container from DOM
     */
    unmountContainer() {
        (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.remove)(this.selectContainer);
    }
    /**
     * Create input field and binds event listeners
     *
     * - If a selector (this.input) is specified, that input is used
     * - If no selector specified, a new input field is generated and added to context
     *
     * @hidden
     */
    createInput() {
        const input = this.findOrCreate(this.options.input, () => {
            const i = this.document.createElement("input");
            const c = this.options;
            i.type = "text";
            if (c.inputId)
                i.id = c.inputId;
            if (c.inputClass)
                i.className = c.inputClass;
            if (c.placeholder)
                i.placeholder = c.placeholder;
            if (c.inputAriaLabel)
                i.setAttribute("aria-label", c.inputAriaLabel);
            if (c.autocomplete)
                i.setAttribute("autocomplete", c.autocomplete);
            (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.setStyle)(i, this.options.inputStyle);
            return i;
        });
        input.addEventListener("keypress", this.keypress);
        input.addEventListener("submit", returnFalse);
        return input;
    }
    /**
     * Removes address input artefacts from DOM
     * - Removes event listeners from input field
     * - Removes input field, unless input field is provided by the user
     */
    unmountInput() {
        this.input.removeEventListener("keypress", this.keypress);
        this.input.removeEventListener("submit", returnFalse);
        if (this.options.input === null)
            (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.remove)(this.input);
    }
    /**
     * Creates button and binds event listeners
     *
     * @hidden
     */
    createButton() {
        const button = this.findOrCreate(this.options.button, () => {
            const b = this.document.createElement("button");
            const c = this.options;
            b.type = "button";
            if (c.buttonLabel)
                b.innerText = c.buttonLabel;
            if (c.buttonId)
                b.id = c.buttonId;
            if (c.buttonClass)
                b.className = c.buttonClass;
            (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.setStyle)(b, this.options.buttonStyle);
            b.onclick = _util__WEBPACK_IMPORTED_MODULE_2__.preventDefault;
            return b;
        });
        button.addEventListener("submit", returnFalse);
        button.addEventListener("click", this.click);
        return button;
    }
    /**
     * unmountButton
     * - Remove listener events
     * - Remove button from DOM if generated by this controller
     */
    unmountButton() {
        this.button.removeEventListener("submit", returnFalse);
        this.button.removeEventListener("click", this.click);
        if (this.options.button === null)
            (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.remove)(this.button);
    }
    /**
     * Mounts message container
     *
     * @hidden
     */
    createMessage() {
        return this.findOrCreate(this.options.message, () => {
            const p = this.document.createElement("p");
            const c = this.options;
            if (c.messageClass)
                p.className = c.messageClass;
            if (c.messageId)
                p.id = c.messageId;
            p.setAttribute("role", "alert");
            (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.setStyle)(p, this.options.messageStyle);
            (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.hide)(p);
            return p;
        });
    }
    /**
     * Removes message container from DOM
     */
    unmountMessage() {
        if (this.options.message === null)
            (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.remove)(this.message);
    }
    /**
     * Creates Select HTML Element
     */
    createSelect() {
        const select = this.document.createElement("select");
        const c = this.options;
        if (c.selectId)
            select.id = c.selectId;
        if (c.selectClass)
            select.className = c.selectClass;
        (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.setStyle)(select, this.options.selectStyle);
        if (c.selectAriaLabel)
            select.setAttribute("aria-label", c.selectAriaLabel);
        select.addEventListener("change", this.selectEvent);
        return select;
    }
    /**
     * Mounts dropdown menu to DOM and attach event listeners
     *
     * Removes dropdown from DOM if data is undefined
     */
    mountSelect(data) {
        if (data)
            this.data = data;
        (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeOptions)(this.select);
        // Add initial select message
        this.select.appendChild(this.createOption("ideal", this.options.msgSelect));
        // Add address options
        for (let i = 0; i < this.data.length; i += 1) {
            this.select.appendChild(this.createOption(i.toString(), this.formatAddress(this.data[i])));
        }
        this.selectContainer.appendChild(this.select);
        (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.show)(this.selectContainer);
        this.options.onSelectCreated.call(this, this.select);
    }
    /**
     * Remove dropdown from DOM
     */
    unmountSelect() {
        (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.remove)(this.select);
        (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.hide)(this.selectContainer);
        this.options.onSelectRemoved.call(this);
    }
    /**
     * Selects an address by its offset `i` in the list of address results
     */
    selectAddress(i) {
        const address = this.data[i];
        if (!address)
            return;
        this.populateAddress(address);
        this.options.onAddressSelected.call(this, address);
    }
    /**
     * Callback for address search click event
     *
     * @hidden
     */
    handleClick() {
        if (!this.options.shouldLookupTrigger.call(this))
            return false;
        this.options.onLookupTriggered.call(this);
        const term = this.input.value;
        if (this.lastLookup === term)
            return false;
        this.lastLookup = term;
        this.reset();
        this.disableButton();
        this.executeSearch(term);
        return false;
    }
    /**
     * Prevents lookup button from being triggered
     */
    disableButton(message) {
        // Cancel if custom button
        if (this.options.button)
            return;
        this.button.setAttribute("disabled", "true");
        this.button.innerText = message || this.options.msgDisabled;
    }
    /**
     * Enables lookup button to trigger searches
     */
    enableButton() {
        // Cancel if custom button
        if (this.options.button)
            return;
        this.button.removeAttribute("disabled");
        this.button.innerText = this.options.buttonLabel;
    }
    /**
     * Allows lookup button to be triggered and applies a cooloff timer if configured
     */
    enableLookup() {
        if (this.options.button)
            return;
        const { cooloff } = this.options;
        if (cooloff === 0)
            return this.enableButton();
        setTimeout(() => this.enableButton(), cooloff);
    }
    /**
     * Resets address search fields
     * - Removes any existing address selection dropdown
     * - Removes any visiable messages
     */
    reset() {
        this.unmountSelect();
        this.hideMessage();
    }
    /**
     * Removes all elements from DOM including dropdown, input, button and any error message
     * - Remove all event listeners
     * - Remove non-custom elements DOM
     */
    removeAll() {
        this.unmountInput();
        this.unmountButton();
        this.unmountContainer();
        this.unmountMessage();
        this.unmountUnhide();
        (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.restoreStyle)(this.context, this.prevContext);
        this.options.onRemove.call(this);
    }
    /**
     * Returns not found message
     *
     * @hidden
     */
    notFoundMessage() {
        return this.options.strictlyPostcodes
            ? this.options.msgNotFound
            : this.options.msgAddressNotFound;
    }
    /**
     * Triggers a search based on term and mounts addresses to DOM in the address
     * dropdown
     *
     * Validate search term and then trigger postcode lookup
     *  - On successful search, display results in a dropdown menu
     *  - On successful search but no addresses, show error message
     *  - On failed search, show error message
     */
    executeSearch(term) {
        this.enableLookup();
        const query = this.options.strictlyPostcodes
            ? this.searchPostcode(term)
            : this.searchAddress(term);
        query
            .then((addresses) => {
            this.options.onSearchCompleted.call(this, null, addresses);
            if (addresses.length === 0)
                return this.setMessage(this.notFoundMessage());
            // Cache last search term
            this.lastLookup = term;
            this.data = addresses;
            // Invoke successful address search callback
            this.options.onAddressesRetrieved.call(this, addresses);
            if (this.options.selectSinglePremise && addresses.length === 1)
                return this.selectAddress(0);
            this.mountSelect(addresses);
        })
            .catch((error) => {
            this.setMessage(this.options.msgError);
            this.options.onSearchCompleted.call(this, null, []);
            this.options.onSearchError.call(this, error);
        });
    }
    /**
     * Invoke postcode lookup
     *
     * @hidden
     */
    searchPostcode(postcode) {
        return (0,_ideal_postcodes_core_axios__WEBPACK_IMPORTED_MODULE_0__.lookupPostcode)({ client: this.client, postcode });
    }
    /**
     * Invoke an address search
     *
     * @hidden
     */
    searchAddress(query) {
        return (0,_ideal_postcodes_core_axios__WEBPACK_IMPORTED_MODULE_0__.lookupAddress)({
            client: this.client,
            query,
            limit: this.options.limit,
        });
    }
    /**
     * Formats address according to whether text or postcode search is active
     *
     * @hidden
     */
    formatAddress(address) {
        const formatter = this.options.strictlyPostcodes
            ? this.options.postcodeSearchFormatter
            : this.options.addressSearchFormatter;
        return formatter(address);
    }
    createOption(value, text) {
        const option = this.document.createElement("option");
        option.text = text;
        option.value = value;
        return option;
    }
    /**
     * Sets the error message
     *
     * Removes error message from DOM if undefined
     */
    setMessage(message) {
        if (!this.message)
            return;
        if (message === undefined)
            return this.hideMessage();
        (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.show)(this.message);
        this.message.innerText = message;
    }
    /**
     * Hides any messages
     */
    hideMessage() {
        if (!this.message)
            return;
        this.message.innerText = "";
        (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.hide)(this.message);
    }
    /**
     * Call to initially render the DOM elements
     *
     * This will perform an optional keyCheck if required
     */
    init() {
        const initPlugin = () => {
            this.render();
            this.hideFields();
            this.options.onLoaded.call(this);
        };
        if (!this.options.checkKey)
            return initPlugin();
        (0,_ideal_postcodes_core_axios__WEBPACK_IMPORTED_MODULE_0__.checkKeyUsability)({ client: this.client })
            .then(({ available }) => {
            if (!available)
                return Promise.reject("Key not available");
            return initPlugin();
        })
            .catch((error) => {
            if (this.options.onFailedCheck)
                this.options.onFailedCheck(error);
        });
    }
    /**
     * Writes a selected to the input fields specified in the controller config
     */
    populateAddress(address) {
        this.unhideFields();
        const outputFields = this.options.outputFields;
        const config = { ...this.options, scope: this.outputScope };
        (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.populateAddress)({ outputFields, address, config });
        this.options.onAddressPopulated.call(this, address);
    }
    hiddenFields() {
        return this.options.hide
            .map((e) => {
            if ((0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.isString)(e))
                return (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.toHtmlElem)(this.scope, e);
            return e;
        })
            .filter((e) => e !== null);
    }
    /**
     * Hides fields marked for hiding
     */
    hideFields() {
        this.hiddenFields().forEach(_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.hide);
    }
    /**
     * Unhides fields marked for hiding and triggers callback
     */
    unhideFields() {
        this.hiddenFields().forEach(_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.show);
        this.options.onUnhide.call(this);
    }
    /**
     * Empties context and appends postcode lookup input, button, message field
     * and select container
     *
     * Does not render element if a custom element has been provided
     */
    render() {
        this.context.innerHTML = "";
        if (!this.options.input)
            this.context.appendChild(this.input);
        if (!this.options.button)
            this.context.appendChild(this.button);
        if (!this.options.selectContainer)
            this.context.appendChild(this.selectContainer);
        if (!this.options.message)
            this.context.appendChild(this.message);
        if (!this.options.unhide && this.options.hide.length)
            this.context.appendChild(this.unhide);
    }
}


/***/ }),

/***/ "./node_modules/@ideal-postcodes/postcode-lookup/esm/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/postcode-lookup/esm/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": function() { return /* reexport safe */ _controller__WEBPACK_IMPORTED_MODULE_0__.Controller; },
/* harmony export */   "PostcodeLookup": function() { return /* binding */ PostcodeLookup; },
/* harmony export */   "watch": function() { return /* reexport safe */ _watch__WEBPACK_IMPORTED_MODULE_1__.watch; }
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./node_modules/@ideal-postcodes/postcode-lookup/esm/controller.js");
/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watch */ "./node_modules/@ideal-postcodes/postcode-lookup/esm/watch.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup */ "./node_modules/@ideal-postcodes/postcode-lookup/esm/setup.js");
/**
 * @module Postcode-Lookup Exports
 */



/**
 * Namespace that exports Postcode Lookup methods and classes
 */
const PostcodeLookup = {
    controllers: _setup__WEBPACK_IMPORTED_MODULE_2__.controllers,
    setup: _setup__WEBPACK_IMPORTED_MODULE_2__.setup,
    Controller: _controller__WEBPACK_IMPORTED_MODULE_0__.Controller,
    defaults: _controller__WEBPACK_IMPORTED_MODULE_0__.defaults,
    watch: _watch__WEBPACK_IMPORTED_MODULE_1__.watch,
};



/***/ }),

/***/ "./node_modules/@ideal-postcodes/postcode-lookup/esm/setup.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/postcode-lookup/esm/setup.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controllers": function() { return /* binding */ controllers; },
/* harmony export */   "setup": function() { return /* binding */ setup; }
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./node_modules/@ideal-postcodes/postcode-lookup/esm/controller.js");
/**
 * @module Setup
 */

/**
 * Creates Postcode lookup field and button when called on <div>
 *
 * First argument `context` is a query selector string which designates where on the DOM the plugin will be instantiated
 *
 * Second argument `config` allows for advanced configuration of the plugin
 *
 * When invoked, an instance of the Postcode Lookup controller is stored in contollers
 *
 * Returns an instance of Postcode Lookup controller unless `checkKey: true`. If key checking is enabled, controller can be accessed by the `onLoaded` callback
 *
 * @example
 *
 *```javascript
 * PostcodeLookup.setup({
 *   context: "#container",
 *   apiKey: "foo",
 *   output_fields: {
 *     line_1: "#address_line_1",
 *     line_2: "#address_line_2",
 *     line_3: "#address_line_3",
 *     post_town: "#post_town",
 *     postcode: "#postcode",
 *   }
 * });
 *```
 */
const setup = (config) => {
    const controller = new _controller__WEBPACK_IMPORTED_MODULE_0__.Controller(config);
    controllers.push(controller);
    return controller;
};
/**
 * Caches all instances of the plugin created via `setup`
 */
const controllers = [];


/***/ }),

/***/ "./node_modules/@ideal-postcodes/postcode-lookup/esm/util.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/postcode-lookup/esm/util.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addressSearchFormatter": function() { return /* binding */ addressSearchFormatter; },
/* harmony export */   "postcodeSearchFormatter": function() { return /* binding */ postcodeSearchFormatter; },
/* harmony export */   "preventDefault": function() { return /* binding */ preventDefault; },
/* harmony export */   "removeOptions": function() { return /* binding */ removeOptions; },
/* harmony export */   "toValue": function() { return /* binding */ toValue; }
/* harmony export */ });
/* harmony import */ var _ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ideal-postcodes/jsutil */ "./node_modules/@ideal-postcodes/jsutil/esm/index.js");
/**
 * @module Utility
 */

/**
 * Formats an address as a suggestion to be displayed in postcode lookup select
 * menu
 */
const postcodeSearchFormatter = (address) => {
    const result = [address.line_1];
    if (address.line_2 !== "")
        result.push(address.line_2);
    return result.join(" ");
};
/**
 * Formats an address as a suggestion to be displayed in address search select
 * menu
 */
const addressSearchFormatter = (address) => {
    const result = [address.line_1];
    if (address.line_2 !== "")
        result.push(address.line_2);
    result.push(address.post_town);
    result.push(address.postcode_outward);
    return result.join(", ");
};
/**
 * @hidden
 */
const preventDefault = (e) => {
    if (e.preventDefault)
        e.preventDefault();
    return false;
};
/**
 * Extract string value of address attirube
 *
 * @hidden
 */
const toValue = (a, key) => {
    const v = a[key];
    if ((0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_0__.isString)(v))
        return v;
    if (v === undefined)
        return "";
    return v.toString();
};
/**
 * Drains select elment of options
 *
 * @hidden
 */
const removeOptions = (e) => {
    let i;
    const L = e.options.length - 1;
    for (i = L; i >= 0; i--)
        e.remove(i);
};


/***/ }),

/***/ "./node_modules/@ideal-postcodes/postcode-lookup/esm/watch.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ideal-postcodes/postcode-lookup/esm/watch.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "watch": function() { return /* binding */ watch; }
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ "./node_modules/@ideal-postcodes/postcode-lookup/esm/setup.js");
/* harmony import */ var _ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ideal-postcodes/jsutil */ "./node_modules/@ideal-postcodes/jsutil/esm/index.js");
/**
 * @module Watch
 */


const isTrue = () => true;
const NOOP = () => { };
const formScope = (anchor) => (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.getParent)(anchor, "FORM");
const getAnchors = (config, marker) => {
    const scope = (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.getScope)(config.scope || null);
    const matches = scope.querySelectorAll(config.anchor || config.context || config.scope);
    return (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.toArray)(matches).filter((e) => !(0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.loaded)(e, marker));
};
/**
 * Dynamically apply PostcodeLookup
 * when relevant html configuration appear
 * - Exits if page test is fails
 * - Not binding when context is null or already have controller bound
 * - Use controller bind to build solution
 */
const watch = (config, options = {}) => {
    const { pageTest = isTrue, onError = NOOP, onBindAttempt = NOOP, onBind = NOOP, anchor, onAnchorFound = NOOP, getScope = formScope, marker = "idpc-pl" } = options;
    let controller;
    const bind = () => {
        try {
            onBindAttempt(config);
            getAnchors({ anchor, ...config }, marker).forEach((anchor) => {
                if (!pageTest())
                    return;
                const scope = getScope(anchor);
                onAnchorFound({ anchor, scope, config });
                controller = (0,_setup__WEBPACK_IMPORTED_MODULE_0__.setup)(config);
                (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.markLoaded)(anchor, marker);
                onBind(controller);
            });
        }
        catch (error) {
            onError(error);
        }
    };
    const { start, stop } = (0,_ideal_postcodes_jsutil__WEBPACK_IMPORTED_MODULE_1__.watchChange)({ bind });
    //start watching changes
    start();
    return { start, stop, controller };
};


/***/ }),

/***/ "./node_modules/capitalise-post-town/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/capitalise-post-town/dist/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.capitalisePostTown = void 0;
var exclusion = /^(of|le|upon|on|the)$/;
var containsAmpersand = /\w+&\w+/;
// capitalise word with exceptions on exclusion list
var capitaliseWord = function (word) {
    word = word.toLowerCase();
    if (word.match(exclusion))
        return word;
    if (word.match(containsAmpersand))
        return word.toUpperCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
};
var joiner = /-/;
var joinerWord = /^(in|de|under|upon|y|on|over|the|by)$/;
// Check for names connected with hyphens
var checkJoins = function (string) {
    if (string.match(joiner) === null)
        return string;
    return string
        .split("-")
        .map(function (str) {
        if (str.match(joinerWord))
            return str.toLowerCase();
        return capitaliseWord(str);
    })
        .join("-");
};
var boness = /bo'ness/i;
var bfpo = /bfpo/i;
// Handles unusual names which cannot be easily generalised into a rule
var exceptions = function (str) {
    if (str.match(boness))
        return "Bo'Ness";
    if (str.match(bfpo))
        return "BFPO";
    return str;
};
var capitalisePostTown = function (postTown) {
    return postTown
        .split(" ")
        .map(capitaliseWord)
        .map(checkJoins)
        .map(exceptions)
        .join(" ");
};
exports.capitalisePostTown = capitalisePostTown;


/***/ }),

/***/ "./node_modules/postcode/esm/index.js":
/*!********************************************!*\
  !*** ./node_modules/postcode/esm/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AREA_REGEX": function() { return /* binding */ AREA_REGEX; },
/* harmony export */   "DISTRICT_SPLIT_REGEX": function() { return /* binding */ DISTRICT_SPLIT_REGEX; },
/* harmony export */   "FIXABLE_REGEX": function() { return /* binding */ FIXABLE_REGEX; },
/* harmony export */   "INCODE_REGEX": function() { return /* binding */ INCODE_REGEX; },
/* harmony export */   "OUTCODE_REGEX": function() { return /* binding */ OUTCODE_REGEX; },
/* harmony export */   "POSTCODE_CORPUS_REGEX": function() { return /* binding */ POSTCODE_CORPUS_REGEX; },
/* harmony export */   "POSTCODE_REGEX": function() { return /* binding */ POSTCODE_REGEX; },
/* harmony export */   "UNIT_REGEX": function() { return /* binding */ UNIT_REGEX; },
/* harmony export */   "fix": function() { return /* binding */ fix; },
/* harmony export */   "isValid": function() { return /* binding */ isValid; },
/* harmony export */   "match": function() { return /* binding */ match; },
/* harmony export */   "parse": function() { return /* binding */ parse; },
/* harmony export */   "replace": function() { return /* binding */ replace; },
/* harmony export */   "toArea": function() { return /* binding */ toArea; },
/* harmony export */   "toDistrict": function() { return /* binding */ toDistrict; },
/* harmony export */   "toIncode": function() { return /* binding */ toIncode; },
/* harmony export */   "toNormalised": function() { return /* binding */ toNormalised; },
/* harmony export */   "toOutcode": function() { return /* binding */ toOutcode; },
/* harmony export */   "toSector": function() { return /* binding */ toSector; },
/* harmony export */   "toSubDistrict": function() { return /* binding */ toSubDistrict; },
/* harmony export */   "toUnit": function() { return /* binding */ toUnit; },
/* harmony export */   "validOutcode": function() { return /* binding */ validOutcode; }
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @hidden
 */
var DISTRICT_SPLIT_REGEX = /^([a-z]{1,2}\d)([a-z])$/i;
/**
 * Tests for the unit section of a postcode
 */
var UNIT_REGEX = /[a-z]{2}$/i;
/**
 * Tests for the inward code section of a postcode
 */
var INCODE_REGEX = /\d[a-z]{2}$/i;
/**
 * Tests for the outward code section of a postcode
 */
var OUTCODE_REGEX = /^[a-z]{1,2}\d[a-z\d]?$/i;
/**
 * Tests for a valid postcode
 */
var POSTCODE_REGEX = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
/**
 * Test for a valid postcode embedded in text
 */
var POSTCODE_CORPUS_REGEX = /[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}/gi;
/**
 * Tests for the area section of a postcode
 */
var AREA_REGEX = /^[a-z]{1,2}/i;
/**
 * Invalid postcode prototype
 * @hidden
 */
var invalidPostcode = {
    valid: false,
    postcode: null,
    incode: null,
    outcode: null,
    area: null,
    district: null,
    subDistrict: null,
    sector: null,
    unit: null,
};
/**
 * Return first elem of input is RegExpMatchArray or null if input null
 * @hidden
 */
var firstOrNull = function (match) {
    if (match === null)
        return null;
    return match[0];
};
var SPACE_REGEX = /\s+/gi;
/**
 * Drop all spaces and uppercase
 * @hidden
 */
var sanitize = function (s) {
    return s.replace(SPACE_REGEX, "").toUpperCase();
};
/**
 * Sanitizes string and returns regex matches
 * @hidden
 */
var matchOn = function (s, regex) {
    return sanitize(s).match(regex);
};
/**
 * Detects a "valid" postcode
 * - Starts and ends on a non-space character
 * - Any length of intervening space is allowed
 * - Must conform to one of following schemas:
 *  - AA1A 1AA
 *  - A1A 1AA
 *  - A1 1AA
 *  - A99 9AA
 *  - AA9 9AA
 *  - AA99 9AA
 */
var isValid = function (postcode) {
    return postcode.match(POSTCODE_REGEX) !== null;
};
/**
 * Returns true if string is a valid outcode
 */
var validOutcode = function (outcode) {
    return outcode.match(OUTCODE_REGEX) !== null;
};
/**
 * Returns a normalised postcode string (i.e. uppercased and properly spaced)
 *
 * Returns null if invalid postcode
 */
var toNormalised = function (postcode) {
    var outcode = toOutcode(postcode);
    if (outcode === null)
        return null;
    var incode = toIncode(postcode);
    if (incode === null)
        return null;
    return outcode + " " + incode;
};
/**
 * Returns a correctly formatted outcode given a postcode
 *
 * Returns null if invalid postcode
 */
var toOutcode = function (postcode) {
    if (!isValid(postcode))
        return null;
    return sanitize(postcode).replace(INCODE_REGEX, "");
};
/**
 * Returns a correctly formatted incode given a postcode
 *
 * Returns null if invalid postcode
 */
var toIncode = function (postcode) {
    if (!isValid(postcode))
        return null;
    var match = matchOn(postcode, INCODE_REGEX);
    return firstOrNull(match);
};
/**
 * Returns a correctly formatted area given a postcode
 *
 * Returns null if invalid postcode
 */
var toArea = function (postcode) {
    if (!isValid(postcode))
        return null;
    var match = matchOn(postcode, AREA_REGEX);
    return firstOrNull(match);
};
/**
 * Returns a correctly formatted sector given a postcode
 *
 * Returns null if invalid postcode
 */
var toSector = function (postcode) {
    var outcode = toOutcode(postcode);
    if (outcode === null)
        return null;
    var incode = toIncode(postcode);
    if (incode === null)
        return null;
    return outcode + " " + incode[0];
};
/**
 * Returns a correctly formatted unit given a postcode
 *
 * Returns null if invalid postcode
 */
var toUnit = function (postcode) {
    if (!isValid(postcode))
        return null;
    var match = matchOn(postcode, UNIT_REGEX);
    return firstOrNull(match);
};
/**
 * Returns a correctly formatted district given a postcode
 *
 * Returns null if invalid postcode
 *
 * @example
 *
 * ```
 * toDistrict("AA9 9AA") // => "AA9"
 * toDistrict("A9A 9AA") // => "A9"
 * ```
 */
var toDistrict = function (postcode) {
    var outcode = toOutcode(postcode);
    if (outcode === null)
        return null;
    var match = outcode.match(DISTRICT_SPLIT_REGEX);
    if (match === null)
        return outcode;
    return match[1];
};
/**
 * Returns a correctly formatted subdistrict given a postcode
 *
 * Returns null if no subdistrict is available on valid postcode
 * Returns null if invalid postcode
 *
 * @example
 *
 * ```
 * toSubDistrict("AA9A 9AA") // => "AA9A"
 * toSubDistrict("A9A 9AA") // => "A9A"
 * toSubDistrict("AA9 9AA") // => null
 * toSubDistrict("A9 9AA") // => null
 * ```
 */
var toSubDistrict = function (postcode) {
    var outcode = toOutcode(postcode);
    if (outcode === null)
        return null;
    var split = outcode.match(DISTRICT_SPLIT_REGEX);
    if (split === null)
        return null;
    return outcode;
};
/**
 * Returns a ValidPostcode or InvalidPostcode object from a postcode string
 *
 * @example
 *
 * ```
 * import { parse } from "postcode";
 *
 * const {
 * postcode,    // => "SW1A 2AA"
 * outcode,     // => "SW1A"
 * incode,      // => "2AA"
 * area,        // => "SW"
 * district,    // => "SW1"
 * unit,        // => "AA"
 * sector,      // => "SW1A 2"
 * subDistrict, // => "SW1A"
 * valid,       // => true
 * } = parse("Sw1A     2aa");
 *
 * const {
 * postcode,    // => null
 * outcode,     // => null
 * incode,      // => null
 * area,        // => null
 * district,    // => null
 * unit,        // => null
 * sector,      // => null
 * subDistrict, // => null
 * valid,       // => false
 * } = parse("    Oh no, ):   ");
 * ```
 */
var parse = function (postcode) {
    if (!isValid(postcode))
        return __assign({}, invalidPostcode);
    return {
        valid: true,
        postcode: toNormalised(postcode),
        incode: toIncode(postcode),
        outcode: toOutcode(postcode),
        area: toArea(postcode),
        district: toDistrict(postcode),
        subDistrict: toSubDistrict(postcode),
        sector: toSector(postcode),
        unit: toUnit(postcode),
    };
};
/**
 * Searches a body of text for postcode matches
 *
 * Returns an empty array if no match
 *
 * @example
 *
 * ```
 * // Retrieve valid postcodes in a body of text
 * const matches = match("The PM and her no.2 live at SW1A2aa and SW1A 2AB"); // => ["SW1A2aa", "SW1A 2AB"]
 *
 * // Perform transformations like normalisation postcodes using `.map` and `toNormalised`
 * matches.map(toNormalised); // => ["SW1A 2AA", "SW1A 2AB"]
 *
 * // No matches yields empty array
 * match("Some London outward codes are SW1A, NW1 and E1"); // => []
 * ```
 */
var match = function (corpus) {
    return corpus.match(POSTCODE_CORPUS_REGEX) || [];
};
/**
 * Replaces postcodes in a body of text with a string
 *
 * By default the replacement string is empty string `""`
 *
 * @example
 *
 * ```
 * // Replace postcodes in a body of text
 * replace("The PM and her no.2 live at SW1A2AA and SW1A 2AB");
 * // => { match: ["SW1A2AA", "SW1A 2AB"], result: "The PM and her no.2 live at  and " }
 *
 * // Add custom replacement
 * replace("The PM lives at SW1A 2AA", "Downing Street");
 * // => { match: ["SW1A 2AA"], result: "The PM lives at Downing Street" };
 *
 * // No match
 * replace("Some London outward codes are SW1A, NW1 and E1");
 * // => { match: [], result: "Some London outward codes are SW1A, NW1 and E1" }
 * ```
 */
var replace = function (corpus, replaceWith) {
    if (replaceWith === void 0) { replaceWith = ""; }
    return ({
        match: match(corpus),
        result: corpus.replace(POSTCODE_CORPUS_REGEX, replaceWith),
    });
};
var FIXABLE_REGEX = /^\s*[a-z01]{1,2}[0-9oi][a-z\d]?\s*[0-9oi][a-z01]{2}\s*$/i;
/**
 * Attempts to fix and clean a postcode. Specifically:
 * - Performs character conversion on obviously wrong and commonly mixed up letters (e.g. O => 0 and vice versa)
 * - Trims string
 * - Properly adds space between outward and inward codes
 *
 * If the postcode cannot be coerced into a valid format, the original string is returned
 *
 * @example
 * ```javascript
 * fix(" SW1A  2AO") => "SW1A 2AO" // Properly spaces
 * fix("SW1A 2A0") => "SW1A 2AO" // 0 is coerced into "0"
 * ```
 *
 * Aims to be used in conjunction with parse to make postcode entry more forgiving:
 *
 * @example
 * ```javascript
 * const { inward } = parse(fix("SW1A 2A0")); // inward = "2AO"
 * ```
 */
var fix = function (s) {
    var match = s.match(FIXABLE_REGEX);
    if (match === null)
        return s;
    s = s.toUpperCase().trim().replace(/\s+/gi, "");
    var l = s.length;
    var inward = s.slice(l - 3, l);
    return coerceOutcode(s.slice(0, l - 3)) + " " + coerce("NLL", inward);
};
var toLetter = {
    "0": "O",
    "1": "I",
};
var toNumber = {
    O: "0",
    I: "1",
};
var coerceOutcode = function (i) {
    if (i.length === 2)
        return coerce("LN", i);
    if (i.length === 3)
        return coerce("L??", i);
    if (i.length === 4)
        return coerce("LLN?", i);
    return i;
};
/**
 * Given a pattern of letters, numbers and unknowns represented as a sequence
 * of L, Ns and ? respectively; coerce them into the correct type given a
 * mapping of potentially confused letters
 *
 * @hidden
 *
 * @example coerce("LLN", "0O8") => "OO8"
 */
var coerce = function (pattern, input) {
    return input
        .split("")
        .reduce(function (acc, c, i) {
        var target = pattern.charAt(i);
        if (target === "N")
            acc.push(toNumber[c] || c);
        if (target === "L")
            acc.push(toLetter[c] || c);
        if (target === "?")
            acc.push(c);
        return acc;
    }, [])
        .join("");
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ideal_postcodes_postcode_lookup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ideal-postcodes/postcode-lookup */ "./node_modules/@ideal-postcodes/postcode-lookup/esm/index.js");
/* harmony import */ var postcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postcode */ "./node_modules/postcode/esm/index.js");



class MultiStep {
  // ...
  constructor() {
    this.steps = document.getElementsByClassName('.apwb-step');
    this.postcode = document.getElementsByClassName('.apwb-postcode');
    this.btns = document.getElementsByClassName('.apwb-btn');
    this.columns = document.getElementsByClassName('.apwb-column');
    this.wpcf7 = document.getElementsByClassName('.wpcf7');
    this.loader = document.getElementsByClassName('.apwb-loader');
    this.errors = document.getElementsByClassName('.apwb-errors');
    this.bindEvents();
  } // ...


  bindEvents() {
    // Listen for step change, if > then process @stepChangeHandler.
    this.addEventListener('click', this.stepChangeHandler(e)); // Listen for input values, if > then process @updateValues.

    this.addEventListener('keyup', this.updateValues(e)); // Listen for contact form 7 submission.

    this.addEventListener('wpcf7submit', function (e) {
      // If contact form 7 is fired, move to final step.
      this.stepChange(6);
    }, false);
  } // ...


  stepChangeHandler(e) {
    // Get the button that triggered the event.
    const btn = e.target; // Get the button's data-dir attribute.

    const dir = btn.getAttribute('data-dir'); // Get the '.apwb-step' div closest to the button.

    const step = btn.closest('.apwb-step'); // Get the '.apwb-step' div's data-curStep attribute.

    const curStep = step.getAttribute('data-curStep'); // Get the '.apwb-step' div's data-xhrAction attribute.

    const xhrAction = step.getAttribute('data-xhrAction'); // Calculate the next step, based on the button's data-dir attribute.

    const nextStep = dir === 'next' ? parseInt(curStep) + 1 : parseInt(curStep) - 1; // If the next step is valid, move to the next step.

    if (this.validateStep(nextStep)) {
      // Show the ui loader.
      this.loader.classList.add('apwb-loader--active');

      switch (xhrAction) {
        // If the next step requires postcode lookup, do the lookup.
        case 'verifyPostcode':
          // Check API response here...
          if ((0,postcode__WEBPACK_IMPORTED_MODULE_1__.isValid)(this.postcode.value)) {
            const controller = _ideal_postcodes_postcode_lookup__WEBPACK_IMPORTED_MODULE_0__.AddressFinder.setup({
              apiKey: "iddqd",
              outputFields: {
                post_town: "#post_town",
                postcode: "#postcode"
              }
            });
            idealPostcodes.lookupAddress({
              query: this.postcode.value,
              limit: 1,
              page: 0
            }, function (error, searchResults) {
              if (error) {// Implement some error handling
              }

              console.log(searchResults);
            });
          } else {
            // Show the error message.
            this.errorHandler('Please enter a valid postcode.');
          }

          break;
        // Else, continue to the next step.

        default:
          this.stepChange(nextStep);
      }
    }
  } // ...


  updateValues(e) {
    // Get the input that triggered the event.
    const input = e.target; // add the postcode to the wpcf7 postcode input.
  } // ...


  stepChange(stepIndex) {
    // Hide the ui loader.
    this.loader.classList.remove('apwb-loader--active'); // Hide the error message.

    this.clearErrors(); // Set the current step visibility.

    this.steps.classList.remove('apwb-step--active'); // Set the step visibility.

    this.steps.forEach((step, index) => {
      // Hide all steps.
      step.classList.remove('apwb-step--active'); // If the stepIndex is equal to the current step, show the current step.

      if (index === stepIndex) {
        step.classList.add('apwb-step--active');
      }
    });
  } // ...


  updatePricing(prices) {
    // Set the pricing.
    this.columns.forEach((prices, index) => {// do somthing...
    });
  } // ...


  errorHandler(error) {
    // Hide the ui loader.
    this.loader.classList.remove('apwb-loader--active'); // Show the error message.

    this.errors.classList.add('apwb-errors--active'); // Set the error message.

    this.errors.innerHTML = error;
  } // ...


  clearErrors() {
    // Hide the error message.
    this.errors.classList.remove('apwb-errors--active'); // Clear the error message.

    this.errors.innerHTML = '';
  }

} // Usage:


new MultiStep();
}();
/******/ })()
;
//# sourceMappingURL=view.js.map