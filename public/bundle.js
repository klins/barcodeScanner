(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Quagga = require('quagga');
var $ = require('jquery');

var controlScanner= function(){Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#barcodeScanner')    // Or '#yourElement' (optional)
    },
    decoder : {
      readers : ["code_128_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });
}

$("button.stop").on("click", function(e) {
                e.preventDefault();
                Quagga.stop();
   });


$("button.start").on("click", function(e) {
                e.preventDefault();
                controlScanner();
   });

Quagga.onDetected(function(result) {
    var code = result.codeResult.code;
    console.log("code is" + code);
    $("input#barcodeValue").val(code);
	});
},{"jquery":2,"quagga":3}],2:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

},{}],3:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(t.toString()).default:"object"==typeof exports?exports.Quagga=t(t.toString()).default:e.Quagga=t(t.toString()).default}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=213)}([function(e,t,n){"use strict";var r=!0,o={disableLog:function(e){return"boolean"!=typeof e?new Error("Argument type: "+typeof e+". Please use a boolean."):(r=e,e?"adapter.js logging disabled":"adapter.js logging enabled")},log:function(){if("object"==typeof window){if(r)return;"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,arguments)}},extractVersion:function(e,t,n){var r=e.match(t);return r&&r.length>=n&&parseInt(r[n],10)},detectBrowser:function(){var e={};if(e.browser=null,e.version=null,"undefined"==typeof window||!window.navigator)return e.browser="Not a browser.",e;if(navigator.mozGetUserMedia)e.browser="firefox",e.version=this.extractVersion(navigator.userAgent,/Firefox\/([0-9]+)\./,1);else if(navigator.webkitGetUserMedia)if(window.webkitRTCPeerConnection)e.browser="chrome",e.version=this.extractVersion(navigator.userAgent,/Chrom(e|ium)\/([0-9]+)\./,2);else{if(!navigator.userAgent.match(/Version\/(\d+).(\d+)/))return e.browser="Unsupported webkit-based browser with GUM support but no WebRTC support.",e;e.browser="safari",e.version=this.extractVersion(navigator.userAgent,/AppleWebKit\/([0-9]+)\./,1)}else{if(!navigator.mediaDevices||!navigator.userAgent.match(/Edge\/(\d+).(\d+)$/))return e.browser="Not a supported browser.",e;e.browser="edge",e.version=this.extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2)}return e}};e.exports={log:o.log,disableLog:o.disableLog,browserDetails:o.detectBrowser(),extractVersion:o.extractVersion}},function(e,t,n){var r=n(58),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t){var n=Array.isArray;e.exports=n},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){function r(e,t){var n=i(e,t);return o(n)?n:void 0}var o=n(124),i=n(154);e.exports=r},function(e,t,n){"use strict";function r(e,t){e=a()(o(),e),c.a.call(this,e,t)}function o(){var e={};return Object.keys(r.CONFIG_KEYS).forEach(function(t){e[t]=r.CONFIG_KEYS[t].default}),e}var i=n(40),a=n.n(i),c=n(10),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u={CODE_L_START:{value:0},CODE_G_START:{value:10},START_PATTERN:{value:[1,1,1]},STOP_PATTERN:{value:[1,1,1]},MIDDLE_PATTERN:{value:[1,1,1,1,1]},EXTENSION_START_PATTERN:{value:[1,1,2]},CODE_PATTERN:{value:[[3,2,1,1],[2,2,2,1],[2,1,2,2],[1,4,1,1],[1,1,3,2],[1,2,3,1],[1,1,1,4],[1,3,1,2],[1,2,1,3],[3,1,1,2],[1,1,2,3],[1,2,2,2],[2,2,1,2],[1,1,4,1],[2,3,1,1],[1,3,2,1],[4,1,1,1],[2,1,3,1],[3,1,2,1],[2,1,1,3]]},CODE_FREQUENCY:{value:[0,11,13,14,19,25,28,21,22,26]},SINGLE_CODE_ERROR:{value:.7},AVG_CODE_ERROR:{value:.48},FORMAT:{value:"ean_13",writeable:!1}};r.prototype=Object.create(c.a.prototype,u),r.prototype.constructor=r,r.prototype._decodeCode=function(e,t){var n,r,o,i=[0,0,0,0],a=this,c=e,s=!a._row[c],u=0,f={error:Number.MAX_VALUE,code:-1,start:e,end:e};for(t||(t=a.CODE_PATTERN.length),n=c;n<a._row.length;n++)if(a._row[n]^s)i[u]++;else{if(u===i.length-1){for(r=0;r<t;r++)o=a._matchPattern(i,a.CODE_PATTERN[r]),o<f.error&&(f.code=r,f.error=o);return f.end=n,f.error>a.AVG_CODE_ERROR?null:f}u++,i[u]=1,s=!s}return null},r.prototype._findPattern=function(e,t,n,r,o){var i,a,c,s,u=[],f=this,d=0,l={error:Number.MAX_VALUE,code:-1,start:0,end:0};for(t||(t=f._nextSet(f._row)),void 0===n&&(n=!1),void 0===r&&(r=!0),void 0===o&&(o=f.AVG_CODE_ERROR),i=0;i<e.length;i++)u[i]=0;for(i=t;i<f._row.length;i++)if(f._row[i]^n)u[d]++;else{if(d===u.length-1){for(s=0,c=0;c<u.length;c++)s+=u[c];if(a=f._matchPattern(u,e),a<o)return l.error=a,l.start=i-s,l.end=i,l;if(!r)return null;for(c=0;c<u.length-2;c++)u[c]=u[c+2];u[u.length-2]=0,u[u.length-1]=0,d--}else d++;u[d]=1,n=!n}return null},r.prototype._findStart=function(){for(var e,t,n=this,r=n._nextSet(n._row);!t;){if(t=n._findPattern(n.START_PATTERN,r),!t)return null;if(e=t.start-(t.end-t.start),e>=0&&n._matchRange(e,t.start,0))return t;r=t.end,t=null}},r.prototype._verifyTrailingWhitespace=function(e){var t,n=this;return t=e.end+(e.end-e.start),t<n._row.length&&n._matchRange(e.end,t,0)?e:null},r.prototype._findEnd=function(e,t){var n=this,r=n._findPattern(n.STOP_PATTERN,e,t,!1);return null!==r?n._verifyTrailingWhitespace(r):null},r.prototype._calculateFirstDigit=function(e){var t,n=this;for(t=0;t<n.CODE_FREQUENCY.length;t++)if(e===n.CODE_FREQUENCY[t])return t;return null},r.prototype._decodePayload=function(e,t,n){var r,o,i=this,a=0;for(r=0;r<6;r++){if(e=i._decodeCode(e.end),!e)return null;e.code>=i.CODE_G_START?(e.code=e.code-i.CODE_G_START,a|=1<<5-r):a|=0<<5-r,t.push(e.code),n.push(e)}if(o=i._calculateFirstDigit(a),null===o)return null;if(t.unshift(o),e=i._findPattern(i.MIDDLE_PATTERN,e.end,!0,!1),null===e)return null;for(n.push(e),r=0;r<6;r++){if(e=i._decodeCode(e.end,i.CODE_G_START),!e)return null;n.push(e),t.push(e.code)}return e},r.prototype._decode=function(){var e,t,n=this,r=[],o=[],i={};if(e=n._findStart(),!e)return null;if(t={code:e.code,start:e.start,end:e.end},o.push(t),t=n._decodePayload(t,r,o),!t)return null;if(t=n._findEnd(t.end,!1),!t)return null;if(o.push(t),!n._checksum(r))return null;if(this.supplements.length>0){var a=this._decodeExtensions(t.end);if(!a)return null;var c=a.decodedCodes[a.decodedCodes.length-1],u={start:c.start+((c.end-c.start)/2|0),end:c.end};if(!n._verifyTrailingWhitespace(u))return null;i={supplement:a,code:r.join("")+a.code}}return s({code:r.join(""),start:e.start,end:t.end,codeset:"",startInfo:e,decodedCodes:o},i)},r.prototype._decodeExtensions=function(e){var t,n,r=this._nextSet(this._row,e),o=this._findPattern(this.EXTENSION_START_PATTERN,r,!1,!1);if(null===o)return null;for(t=0;t<this.supplements.length;t++)if(n=this.supplements[t].decode(this._row,o.end),null!==n)return{code:n.code,start:r,startInfo:o,end:n.end,codeset:"",decodedCodes:n.decodedCodes};return null},r.prototype._checksum=function(e){var t,n=0;for(t=e.length-2;t>=0;t-=2)n+=e[t];for(n*=3,t=e.length-1;t>=0;t-=2)n+=e[t];return n%10===0},r.CONFIG_KEYS={supplements:{type:"arrayOf(string)",default:[],description:"Allowed extensions to be decoded (2 and/or 5)"}},t.a=r},function(e,t,n){function r(e){return null==e?void 0===e?s:c:u&&u in Object(e)?i(e):a(e)}var o=n(12),i=n(152),a=n(183),c="[object Null]",s="[object Undefined]",u=o?o.toStringTag:void 0;e.exports=r},function(e,t,n){function r(e,t){return o(e)?e:i(e,t)?[e]:a(c(e))}var o=n(2),i=n(165),a=n(192),c=n(203);e.exports=r},function(e,t,n){function r(e,t,n,r){var a=!n;n||(n={});for(var c=-1,s=t.length;++c<s;){var u=t[c],f=r?r(n[u],e[u],u,n,e):void 0;void 0===f&&(f=e[u]),a?i(n,u,f):o(n,u,f)}return n}var o=n(29),i=n(30);e.exports=r},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";function r(e,t){return this._row=[],this.config=e||{},this.supplements=t,this}r.prototype._nextUnset=function(e,t){var n;for(void 0===t&&(t=0),n=t;n<e.length;n++)if(!e[n])return n;return e.length},r.prototype._matchPattern=function(e,t,n){var r,o,i,a,c=0,s=0,u=0,f=0;for(n=n||this.SINGLE_CODE_ERROR||1,r=0;r<e.length;r++)u+=e[r],f+=t[r];if(u<f)return Number.MAX_VALUE;for(o=u/f,n*=o,r=0;r<e.length;r++){if(i=e[r],a=t[r]*o,s=Math.abs(i-a)/a,s>n)return Number.MAX_VALUE;c+=s}return c/f},r.prototype._nextSet=function(e,t){var n;for(t=t||0,n=t;n<e.length;n++)if(e[n])return n;return e.length},r.prototype._correctBars=function(e,t,n){for(var r=n.length,o=0;r--;)o=e[n[r]]*(1-(1-t)/2),o>1&&(e[n[r]]=o)},r.prototype._matchTrace=function(e,t){var n,r,o=[],i=this,a=i._nextSet(i._row),c=!i._row[a],s=0,u={error:Number.MAX_VALUE,code:-1,start:0};if(e){for(n=0;n<e.length;n++)o.push(0);for(n=a;n<i._row.length;n++)if(i._row[n]^c)o[s]++;else{if(s===o.length-1)return r=i._matchPattern(o,e),r<t?(u.start=n-a,u.end=n,u.counter=o,u):null;s++,o[s]=1,c=!c}}else for(o.push(0),n=a;n<i._row.length;n++)i._row[n]^c?o[s]++:(s++,o.push(0),o[s]=1,c=!c);return u.start=a,u.end=i._row.length-1,u.counter=o,u},r.prototype.decodePattern=function(e){var t,n=this;return n._row=e,t=n._decode(),null===t?(n._row.reverse(),t=n._decode(),t&&(t.direction=r.DIRECTION.REVERSE,t.start=n._row.length-t.start,t.end=n._row.length-t.end)):t.direction=r.DIRECTION.FORWARD,t&&(t.format=n.FORMAT),t},r.prototype._matchRange=function(e,t,n){var r;for(e=e<0?0:e,r=e;r<t;r++)if(this._row[r]!==n)return!1;return!0},r.prototype._fillCounters=function(e,t,n){var r,o=this,i=0,a=[];for(n="undefined"==typeof n||n,e="undefined"!=typeof e?e:o._nextUnset(o._row),t=t||o._row.length,a[i]=0,r=e;r<t;r++)o._row[r]^n?a[i]++:(i++,a[i]=1,n=!n);return a},Object.defineProperty(r.prototype,"FORMAT",{value:"unknown",writeable:!1}),r.DIRECTION={FORWARD:1,REVERSE:-1},r.Exception={StartNotFoundException:"Start-Info was not found!",CodeNotFoundException:"Code could not be found!",PatternNotFoundException:"Pattern could not be found!"},r.CONFIG_KEYS={},t.a=r},function(e,t){function n(e){var t=new Float32Array(2);return t[0]=e[0],t[1]=e[1],t}e.exports=n},function(e,t,n){var r=n(1),o=r.Symbol;e.exports=o},function(e,t,n){"use strict";t.a={init:function(e,t){for(var n=e.length;n--;)e[n]=t},shuffle:function(e){var t,n,r=e.length-1;for(r;r>=0;r--)t=Math.floor(Math.random()*r),n=e[r],e[r]=e[t],e[t]=n;return e},toPointList:function(e){var t,n,r=[],o=[];for(t=0;t<e.length;t++){for(r=[],n=0;n<e[t].length;n++)r[n]=e[t][n];o[t]="["+r.join(",")+"]"}return"["+o.join(",\r\n")+"]"},threshold:function(e,t,n){var r,o=[];for(r=0;r<e.length;r++)n.apply(e,[e[r]])>=t&&o.push(e[r]);return o},maxIndex:function(e){var t,n=0;for(t=0;t<e.length;t++)e[t]>e[n]&&(n=t);return n},max:function e(t){var n,e=0;for(n=0;n<t.length;n++)t[n]>e&&(e=t[n]);return e},sum:function e(t){for(var n=t.length,e=0;n--;)e+=t[n];return e}}},function(e,t,n){"use strict";t.a={drawRect:function(e,t,n,r){n.strokeStyle=r.color,n.fillStyle=r.color,n.lineWidth=1,n.beginPath(),n.strokeRect(e.x,e.y,t.x,t.y)},drawPath:function(e,t,n,r){n.strokeStyle=r.color,n.fillStyle=r.color,n.lineWidth=r.lineWidth,n.beginPath(),n.moveTo(e[0][t.x],e[0][t.y]);for(var o=1;o<e.length;o++)n.lineTo(e[o][t.x],e[o][t.y]);n.closePath(),n.stroke()},drawImage:function(e,t,n){var r,o=n.getImageData(0,0,t.x,t.y),i=o.data,a=e.length,c=i.length;if(c/a!==4)return!1;for(;a--;)r=e[a],i[--c]=255,i[--c]=r,i[--c]=r,i[--c]=r;return n.putImageData(o,0,0),!0}}},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(168),i=n(169),a=n(170),c=n(171),s=n(172);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=c,r.prototype.set=s,e.exports=r},function(e,t,n){function r(e,t){for(var n=e.length;n--;)if(o(e[n][0],t))return n;return-1}var o=n(21);e.exports=r},function(e,t,n){function r(e,t){var n=e.__data__;return o(t)?n["string"==typeof t?"string":"hash"]:n.map}var o=n(166);e.exports=r},function(e,t){function n(e,t){return t=null==t?r:t,!!t&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;e.exports=n},function(e,t,n){var r=n(4),o=r(Object,"create");e.exports=o},function(e,t,n){function r(e){if("string"==typeof e||o(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}var o=n(38),i=1/0;e.exports=r},function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},function(e,t,n){var r=n(123),o=n(9),i=Object.prototype,a=i.hasOwnProperty,c=i.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(e){return o(e)&&a.call(e,"callee")&&!c.call(e,"callee")};e.exports=s},function(e,t,n){function r(e){return null!=e&&i(e.length)&&!o(e)}var o=n(36),i=n(37);e.exports=r},function(e,t,n){function r(e){return a(e)?o(e,!0):i(e)}var o=n(47),i=n(127),a=n(23);e.exports=r},function(e,t,n){"use strict";function r(e,t){var n={x:e,y:t,toVec2:function(){return w.clone([this.x,this.y])},toVec3:function(){return x.clone([this.x,this.y,1])},round:function(){return this.x=this.x>0?Math.floor(this.x+.5):Math.floor(this.x-.5),this.y=this.y>0?Math.floor(this.y+.5):Math.floor(this.y-.5),this}};return n}function o(e,t,n){n||(n=e);for(var r=e.data,o=r.length,i=n.data;o--;)i[o]=r[o]<t?1:0}function i(e,t){t||(t=8);for(var n=e.data,r=n.length,o=8-t,i=1<<t,a=new Int32Array(i);r--;)a[n[r]>>o]++;return a}function a(e,t){function n(e,t){var n,r=0;for(n=e;n<=t;n++)r+=a[n];return r}function r(e,t){var n,r=0;for(n=e;n<=t;n++)r+=n*a[n];return r}function o(){var o,c,s,u,f,d,l,p=[0],h=(1<<t)-1;for(a=i(e,t),u=1;u<h;u++)o=n(0,u),c=n(u+1,h),s=o*c,0===s&&(s=1),f=r(0,u)*c,d=r(u+1,h)*o,l=f-d,p[u]=l*l/s;return _.a.maxIndex(p)}t||(t=8);var a,c,s=8-t;return c=o(),c<<s}function c(e,t){var n=a(e);return o(e,n,t),n}function s(e,t,n){function r(e){var t=!1;for(i=0;i<s.length;i++)a=s[i],a.fits(e)&&(a.add(e),t=!0);return t}var o,i,a,c,s=[];for(n||(n="rad"),o=0;o<e.length;o++)c=b.a.createPoint(e[o],o,n),r(c)||s.push(b.a.create(c,t));return s}function u(e,t,n){var r,o,i,a,c=0,s=0,u=[];for(r=0;r<t;r++)u[r]={score:0,item:null};for(r=0;r<e.length;r++)if(o=n.apply(this,[e[r]]),o>s)for(i=u[c],i.score=o,i.item=e[r],s=Number.MAX_VALUE,a=0;a<t;a++)u[a].score<s&&(s=u[a].score,c=a);return u}function f(e,t,n){for(var r,o=0,i=t.x,a=Math.floor(e.length/4),c=t.x/2,s=0,u=t.x;i<a;){for(r=0;r<c;r++)n[s]=Math.floor((.299*e[4*o+0]+.587*e[4*o+1]+.114*e[4*o+2]+(.299*e[4*(o+1)+0]+.587*e[4*(o+1)+1]+.114*e[4*(o+1)+2])+(.299*e[4*i+0]+.587*e[4*i+1]+.114*e[4*i+2])+(.299*e[4*(i+1)+0]+.587*e[4*(i+1)+1]+.114*e[4*(i+1)+2]))/4),s++,o+=2,i+=2;o+=u,i+=u}}function d(e,t,n){var r,o=e.length/4|0,i=n&&n.singleChannel===!0;if(i)for(r=0;r<o;r++)t[r]=e[4*r+0];else for(r=0;r<o;r++)t[r]=Math.floor(.299*e[4*r+0]+.587*e[4*r+1]+.114*e[4*r+2])}function l(e,t){for(var n=e.data,r=e.size.x,o=t.data,i=0,a=r,c=n.length,s=r/2,u=0;a<c;){for(var f=0;f<s;f++)o[u]=Math.floor((n[i]+n[i+1]+n[a]+n[a+1])/4),u++,i+=2,a+=2;i+=r,a+=r}}function p(e,t){var n=e[0],r=e[1],o=e[2],i=o*r,a=i*(1-Math.abs(n/60%2-1)),c=o-i,s=0,u=0,f=0;return t=t||[0,0,0],n<60?(s=i,u=a):n<120?(s=a,u=i):n<180?(u=i,f=a):n<240?(u=a,f=i):n<300?(s=a,f=i):n<360&&(s=i,f=a),t[0]=255*(s+c)|0,t[1]=255*(u+c)|0,t[2]=255*(f+c)|0,t}function h(e){var t,n=[],r=[];for(t=1;t<Math.sqrt(e)+1;t++)e%t===0&&(r.push(t),t!==e/t&&n.unshift(Math.floor(e/t)));return r.concat(n)}function v(e,t){for(var n=0,r=0,o=[];n<e.length&&r<t.length;)e[n]===t[r]?(o.push(e[n]),n++,r++):e[n]>t[r]?r++:n++;return o}function g(e,t){function n(e){for(var t=0,n=e[Math.floor(e.length/2)];t<e.length-1&&e[t]<l;)t++;return t>0&&(n=Math.abs(e[t]-l)>Math.abs(e[t-1]-l)?e[t-1]:e[t]),l/n<s[f+1]/s[f]&&l/n>s[f-1]/s[f]?{x:n,y:n}:null}var r,o=h(t.x),i=h(t.y),a=Math.max(t.x,t.y),c=v(o,i),s=[8,10,15,20,32,60,80],u={"x-small":5,small:4,medium:3,large:2,"x-large":1},f=u[e]||u.medium,d=s[f],l=Math.floor(a/d);return r=n(c),r||(r=n(h(a)),r||(r=n(h(l*d)))),r}function m(e){var t={value:parseFloat(e),unit:(e.indexOf("%")===e.length-1,"%")};return t}function y(e,t,n){var r={width:e,height:t},o=Object.keys(n).reduce(function(e,t){var o=n[t],i=m(o),a=C[t](i,r);return e[t]=a,e},{});return{sx:o.left,sy:o.top,sw:o.right-o.left,sh:o.bottom-o.top}}var b=n(73),_=n(13);t.b=r,t.f=c,t.g=s,t.h=u,t.c=f,t.d=d,t.i=l,t.a=p,t.e=g,t.j=y;var w={clone:n(11)},x={clone:n(104)},C={top:function(e,t){if("%"===e.unit)return Math.floor(t.height*(e.value/100))},right:function(e,t){if("%"===e.unit)return Math.floor(t.width-t.width*(e.value/100))},bottom:function(e,t){if("%"===e.unit)return Math.floor(t.height-t.height*(e.value/100))},left:function(e,t){if("%"===e.unit)return Math.floor(t.width*(e.value/100))}}},function(e,t,n){"use strict";function r(e,t,n,r){t?this.data=t:n?(this.data=new n(e.x*e.y),n===Array&&r&&a.a.init(this.data,0)):(this.data=new Uint8Array(e.x*e.y),Uint8Array===Array&&r&&a.a.init(this.data,0)),this.size=e}var o=n(76),i=n(25),a=n(13),c={clone:n(11)};r.prototype.inImageWithBorder=function(e,t){return e.x>=t&&e.y>=t&&e.x<this.size.x-t&&e.y<this.size.y-t},r.sample=function(e,t,n){var r=Math.floor(t),o=Math.floor(n),i=e.size.x,a=o*e.size.x+r,c=e.data[a+0],s=e.data[a+1],u=e.data[a+i],f=e.data[a+i+1],d=c-s;t-=r,n-=o;var l=Math.floor(t*(n*(d-u+f)-d)+n*(u-c)+c);return l},r.clearArray=function(e){for(var t=e.length;t--;)e[t]=0},r.prototype.subImage=function(e,t){return new o.a(e,t,this)},r.prototype.subImageAsCopy=function(e,t){var n,r,o=e.size.y,i=e.size.x;for(n=0;n<i;n++)for(r=0;r<o;r++)e.data[r*i+n]=this.data[(t.y+r)*this.size.x+t.x+n]},r.prototype.copyTo=function(e){for(var t=this.data.length,n=this.data,r=e.data;t--;)r[t]=n[t]},r.prototype.get=function(e,t){return this.data[t*this.size.x+e]},r.prototype.getSafe=function(e,t){var n;if(!this.indexMapping){for(this.indexMapping={x:[],y:[]},n=0;n<this.size.x;n++)this.indexMapping.x[n]=n,this.indexMapping.x[n+this.size.x]=n;for(n=0;n<this.size.y;n++)this.indexMapping.y[n]=n,this.indexMapping.y[n+this.size.y]=n}return this.data[this.indexMapping.y[t+this.size.y]*this.size.x+this.indexMapping.x[e+this.size.x]]},r.prototype.set=function(e,t,n){return this.data[t*this.size.x+e]=n,this},r.prototype.zeroBorder=function(){var e,t=this.size.x,n=this.size.y,r=this.data;for(e=0;e<t;e++)r[e]=r[(n-1)*t+e]=0;for(e=1;e<n-1;e++)r[e*t]=r[e*t+(t-1)]=0},r.prototype.invert=function(){for(var e=this.data,t=e.length;t--;)e[t]=e[t]?0:1},r.prototype.convolve=function(e){var t,n,r,o,i=e.length/2|0,a=0;for(n=0;n<this.size.y;n++)for(t=0;t<this.size.x;t++){for(a=0,o=-i;o<=i;o++)for(r=-i;r<=i;r++)a+=e[o+i][r+i]*this.getSafe(t+r,n+o);this.data[n*this.size.x+t]=a}},r.prototype.moments=function(e){var t,n,r,o,i,a,s,u,f,d,l,p,h=this.data,v=this.size.y,g=this.size.x,m=[],y=[],b=Math.PI,_=b/4;if(e<=0)return y;for(i=0;i<e;i++)m[i]={m00:0,m01:0,m10:0,m11:0,m02:0,m20:0,theta:0,rad:0};for(n=0;n<v;n++)for(o=n*n,t=0;t<g;t++)r=h[n*g+t],r>0&&(a=m[r-1],a.m00+=1,a.m01+=n,a.m10+=t,a.m11+=t*n,a.m02+=o,a.m20+=t*t);for(i=0;i<e;i++)a=m[i],isNaN(a.m00)||0===a.m00||(d=a.m10/a.m00,l=a.m01/a.m00,s=a.m11/a.m00-d*l,u=a.m02/a.m00-l*l,f=a.m20/a.m00-d*d,p=(u-f)/(2*s),p=.5*Math.atan(p)+(s>=0?_:-_)+b,a.theta=(180*p/b+90)%180-90,a.theta<0&&(a.theta+=180),a.rad=p>b?p-b:p,a.vec=c.clone([Math.cos(p),Math.sin(p)]),y.push(a));return y},r.prototype.show=function(e,t){var n,r,o,i,a,c,s;for(t||(t=1),n=e.getContext("2d"),e.width=this.size.x,e.height=this.size.y,r=n.getImageData(0,0,e.width,e.height),o=r.data,i=0,s=0;s<this.size.y;s++)for(c=0;c<this.size.x;c++)a=s*this.size.x+c,i=this.get(c,s)*t,o[4*a+0]=i,o[4*a+1]=i,o[4*a+2]=i,o[4*a+3]=255;n.putImageData(r,0,0)},r.prototype.overlay=function(e,t,r){(!t||t<0||t>360)&&(t=360);for(var o=[0,1,1],a=[0,0,0],c=[255,255,255],s=[0,0,0],u=[],f=e.getContext("2d"),d=f.getImageData(r.x,r.y,this.size.x,this.size.y),l=d.data,p=this.data.length;p--;)o[0]=this.data[p]*t,u=o[0]<=0?c:o[0]>=360?s:n.i(i.a)(o,a),l[4*p+0]=u[0],l[4*p+1]=u[1],l[4*p+2]=u[2],l[4*p+3]=255;f.putImageData(d,r.x,r.y)},t.a=r},function(e,t,n){var r=n(4),o=n(1),i=r(o,"Map");e.exports=i},function(e,t){function n(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}e.exports=n},function(e,t,n){function r(e,t,n){var r=e[t];c.call(e,t)&&i(r,n)&&(void 0!==n||t in e)||o(e,t,n)}var o=n(30),i=n(21),a=Object.prototype,c=a.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t,n){"__proto__"==t&&o?o(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var o=n(56);e.exports=r},function(e,t,n){function r(e){var t=new e.constructor(e.byteLength);return new o(t).set(new o(e)),t}var o=n(109);e.exports=r},function(e,t,n){var r=n(62),o=r(Object.getPrototypeOf,Object);e.exports=o},function(e,t,n){var r=n(115),o=n(69),i=Object.prototype,a=i.propertyIsEnumerable,c=Object.getOwnPropertySymbols,s=c?function(e){return null==e?[]:(e=Object(e),r(c(e),function(t){return a.call(e,t)}))}:o;e.exports=s},function(e,t){function n(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||r;return e===n}var r=Object.prototype;e.exports=n},function(e,t,n){(function(e){var r=n(1),o=n(201),i="object"==typeof t&&t&&!t.nodeType&&t,a=i&&"object"==typeof e&&e&&!e.nodeType&&e,c=a&&a.exports===i,s=c?r.Buffer:void 0,u=s?s.isBuffer:void 0,f=u||o;e.exports=f}).call(t,n(41)(e))},function(e,t,n){function r(e){if(!i(e))return!1;var t=o(e);return t==c||t==s||t==a||t==u}var o=n(6),i=n(3),a="[object AsyncFunction]",c="[object Function]",s="[object GeneratorFunction]",u="[object Proxy]";e.exports=r},function(e,t){function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}var r=9007199254740991;e.exports=n},function(e,t,n){function r(e){return"symbol"==typeof e||i(e)&&o(e)==a}var o=n(6),i=n(9),a="[object Symbol]";e.exports=r},function(e,t,n){function r(e){return a(e)?o(e):i(e)}var o=n(47),i=n(126),a=n(23);e.exports=r},function(e,t,n){var r=n(128),o=n(148),i=o(function(e,t,n){r(e,t,n)});e.exports=i},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,configurable:!1,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,configurable:!1,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";var r={searchDirections:[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]],create:function(e,t){function n(e,t,n,r){var o,f,d;for(o=0;o<7;o++){if(f=e.cy+s[e.dir][0],d=e.cx+s[e.dir][1],i=f*u+d,a[i]===t&&(0===c[i]||c[i]===n))return c[i]=n,e.cy=f,e.cx=d,!0;0===c[i]&&(c[i]=r),e.dir=(e.dir+1)%8}return!1}function r(e,t,n){return{dir:n,x:e,y:t,next:null,prev:null}}function o(e,t,o,i,a){var c,s,u,f=null,d={cx:t,cy:e,dir:0};if(n(d,i,o,a)){f=r(t,e,d.dir),c=f,u=d.dir,s=r(d.cx,d.cy,0),s.prev=c,c.next=s,s.next=null,c=s;do d.dir=(d.dir+6)%8,n(d,i,o,a),u!==d.dir?(c.dir=d.dir,s=r(d.cx,d.cy,0),s.prev=c,c.next=s,s.next=null,c=s):(c.dir=u,c.x=d.cx,c.y=d.cy),u=d.dir;while(d.cx!==t||d.cy!==e);f.prev=c.prev,c.prev.next=f}return f}var i,a=e.data,c=t.data,s=this.searchDirections,u=e.size.x;return{trace:function(e,t,r,o){return n(e,t,r,o)},contourTracing:function(e,t,n,r,i){return o(e,t,n,r,i)}}}};t.a=r},function(e,t,n){"use strict";function r(){o.a.call(this)}var o=n(10),i=n(13),a={ALPHABETH_STRING:{value:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%"},ALPHABET:{value:[48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,45,46,32,42,36,47,43,37]},CHARACTER_ENCODINGS:{value:[52,289,97,352,49,304,112,37,292,100,265,73,328,25,280,88,13,268,76,28,259,67,322,19,274,82,7,262,70,22,385,193,448,145,400,208,133,388,196,148,168,162,138,42]},ASTERISK:{value:148},FORMAT:{value:"code_39",writeable:!1}};r.prototype=Object.create(o.a.prototype,a),r.prototype.constructor=r,r.prototype._toCounters=function(e,t){var n,r=this,o=t.length,a=r._row.length,c=!r._row[e],s=0;for(i.a.init(t,0),n=e;n<a;n++)if(r._row[n]^c)t[s]++;else{if(s++,s===o)break;t[s]=1,c=!c}return t},r.prototype._decode=function(){var e,t,n,r,o=this,a=[0,0,0,0,0,0,0,0,0],c=[],s=o._findStart();if(!s)return null;r=o._nextSet(o._row,s.end);do{if(a=o._toCounters(r,a),n=o._toPattern(a),n<0)return null;if(e=o._patternToChar(n),e<0)return null;c.push(e),t=r,r+=i.a.sum(a),r=o._nextSet(o._row,r)}while("*"!==e);return c.pop(),c.length&&o._verifyTrailingWhitespace(t,r,a)?{code:c.join(""),start:s.start,end:r,startInfo:s,decodedCodes:c}:null},r.prototype._verifyTrailingWhitespace=function(e,t,n){var r,o=i.a.sum(n);return r=t-e-o,3*r>=o},r.prototype._patternToChar=function(e){var t,n=this;for(t=0;t<n.CHARACTER_ENCODINGS.length;t++)if(n.CHARACTER_ENCODINGS[t]===e)return String.fromCharCode(n.ALPHABET[t]);return-1},r.prototype._findNextWidth=function(e,t){var n,r=Number.MAX_VALUE;for(n=0;n<e.length;n++)e[n]<r&&e[n]>t&&(r=e[n]);return r},r.prototype._toPattern=function(e){for(var t,n,r=e.length,o=0,i=r,a=0,c=this;i>3;){for(o=c._findNextWidth(e,o),i=0,t=0,n=0;n<r;n++)e[n]>o&&(t|=1<<r-1-n,i++,a+=e[n]);if(3===i){for(n=0;n<r&&i>0;n++)if(e[n]>o&&(i--,2*e[n]>=a))return-1;return t}}return-1},r.prototype._findStart=function(){var e,t,n,r=this,o=r._nextSet(r._row),i=o,a=[0,0,0,0,0,0,0,0,0],c=0,s=!1;for(e=o;e<r._row.length;e++)if(r._row[e]^s)a[c]++;else{if(c===a.length-1){if(r._toPattern(a)===r.ASTERISK&&(n=Math.floor(Math.max(0,i-(e-i)/4)),r._matchRange(n,i,0)))return{start:i,end:e};for(i+=a[0]+a[1],t=0;t<7;t++)a[t]=a[t+2];a[7]=0,a[8]=0,c--}else c++;a[c]=1,s=!s}return null},t.a=r},function(e,t){function n(e,t){return e[0]*t[0]+e[1]*t[1]}e.exports=n},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(173),i=n(174),a=n(175),c=n(176),s=n(177);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=c,r.prototype.set=s,e.exports=r},function(e,t,n){function r(e){var t=this.__data__=new o(e);this.size=t.size}var o=n(15),i=n(187),a=n(188),c=n(189),s=n(190),u=n(191);r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=c,r.prototype.has=s,r.prototype.set=u,e.exports=r},function(e,t,n){function r(e,t){var n=a(e),r=!n&&i(e),f=!n&&!r&&c(e),l=!n&&!r&&!f&&u(e),p=n||r||f||l,h=p?o(e.length,String):[],v=h.length;for(var g in e)!t&&!d.call(e,g)||p&&("length"==g||f&&("offset"==g||"parent"==g)||l&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||s(g,v))||h.push(g);return h}var o=n(136),i=n(22),a=n(2),c=n(35),s=n(18),u=n(68),f=Object.prototype,d=f.hasOwnProperty;e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}e.exports=n},function(e,t){function n(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}e.exports=n},function(e,t,n){function r(e,t,n){(void 0===n||i(e[t],n))&&(void 0!==n||t in e)||o(e,t,n)}var o=n(30),i=n(21);e.exports=r},function(e,t,n){function r(e,t){t=o(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[i(t[n++])];return n&&n==r?e:void 0}var o=n(7),i=n(20);e.exports=r},function(e,t,n){function r(e,t,n){var r=t(e);return i(e)?r:o(r,n(e))}var o=n(28),i=n(2);e.exports=r},function(e,t,n){(function(e){function r(e,t){if(t)return e.slice();var n=e.length,r=u?u(n):new e.constructor(n);return e.copy(r),r}var o=n(1),i="object"==typeof t&&t&&!t.nodeType&&t,a=i&&"object"==typeof e&&e&&!e.nodeType&&e,c=a&&a.exports===i,s=c?o.Buffer:void 0,u=s?s.allocUnsafe:void 0;e.exports=r}).call(t,n(41)(e))},function(e,t,n){function r(e,t){var n=t?o(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var o=n(31);e.exports=r},function(e,t){function n(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}e.exports=n},function(e,t,n){var r=n(4),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t,n){function r(e){return a(i(e,void 0,o),e+"")}var o=n(194),i=n(63),a=n(64);e.exports=r},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(70))},function(e,t,n){function r(e){return o(e,a,i)}var o=n(52),i=n(60),a=n(24);e.exports=r},function(e,t,n){var r=n(28),o=n(32),i=n(33),a=n(69),c=Object.getOwnPropertySymbols,s=c?function(e){for(var t=[];e;)r(t,i(e)),e=o(e);return t}:a;e.exports=s},function(e,t,n){function r(e){return"function"!=typeof e.constructor||a(e)?{}:o(i(e))}var o=n(119),i=n(32),a=n(34);e.exports=r},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t,n){function r(e,t,n){return t=i(void 0===t?e.length-1:t,0),function(){for(var r=arguments,a=-1,c=i(r.length-t,0),s=Array(c);++a<c;)s[a]=r[t+a];a=-1;for(var u=Array(t+1);++a<t;)u[a]=r[a];return u[t]=n(s),o(e,this,u)}}var o=n(113),i=Math.max;e.exports=r},function(e,t,n){var r=n(134),o=n(186),i=o(r);e.exports=i},function(e,t){function n(e){if(null!=e){try{return o.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var r=Function.prototype,o=r.toString;e.exports=n},function(e,t){function n(e){return e}e.exports=n},function(e,t,n){function r(e){if(!a(e)||o(e)!=c)return!1;var t=i(e);if(null===t)return!0;var n=d.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&f.call(n)==l}var o=n(6),i=n(32),a=n(9),c="[object Object]",s=Function.prototype,u=Object.prototype,f=s.toString,d=u.hasOwnProperty,l=f.call(Object);e.exports=r},function(e,t,n){var r=n(125),o=n(138),i=n(182),a=i&&i.isTypedArray,c=a?o(a):r;e.exports=c},function(e,t){function n(){return[]}e.exports=n},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(t,n,r){"use strict";function o(e){f(e),A=U.a.create(K.decoder,P)}function i(e){var t;if("VideoStream"===K.inputStream.type)t=document.createElement("video"),R=H.a.createVideoStream(t);else if("ImageStream"===K.inputStream.type)R=H.a.createImageStream();else if("LiveStream"===K.inputStream.type){var n=a();n&&(t=n.querySelector("video"),t||(t=document.createElement("video"),n.appendChild(t))),R=H.a.createLiveStream(t),G.a.request(t,K.inputStream.constraints).then(function(){R.trigger("canrecord")}).catch(function(t){return e(t)})}R.setAttribute("preload","auto"),R.setInputStream(K.inputStream),R.addEventListener("canrecord",c.bind(void 0,e))}function a(){var e=K.inputStream.target;if(e&&e.nodeName&&1===e.nodeType)return e;var t="string"==typeof e?e:"#interactive.viewport";return document.querySelector(t)}function c(e){L.a.checkImageConstraints(R,K.locator),u(K),O=q.a.create(R,$.dom.image),T(K.numOfWorkers,function(){0===K.numOfWorkers&&o(),s(e)})}function s(e){R.play(),e()}function u(){if("undefined"!=typeof document){var e=a();if($.dom.image=document.querySelector("canvas.imgBuffer"),$.dom.image||($.dom.image=document.createElement("canvas"),$.dom.image.className="imgBuffer",e&&"ImageStream"===K.inputStream.type&&e.appendChild($.dom.image)),$.ctx.image=$.dom.image.getContext("2d"),$.dom.image.width=R.getCanvasSize().x,$.dom.image.height=R.getCanvasSize().y,$.dom.overlay=document.querySelector("canvas.drawingBuffer"),!$.dom.overlay){$.dom.overlay=document.createElement("canvas"),$.dom.overlay.className="drawingBuffer",e&&e.appendChild($.dom.overlay);var t=document.createElement("br");t.setAttribute("clear","all"),e&&e.appendChild(t)}$.ctx.overlay=$.dom.overlay.getContext("2d"),$.dom.overlay.width=R.getCanvasSize().x,$.dom.overlay.height=R.getCanvasSize().y}}function f(e){P=e?e:new z.a({x:R.getWidth(),y:R.getHeight()}),D=[Y.clone([0,0]),Y.clone([0,P.size.y]),Y.clone([P.size.x,P.size.y]),Y.clone([P.size.x,0])],L.a.init(P,K.locator)}function d(){return K.locate?L.a.locate():[[Y.clone(D[0]),Y.clone(D[1]),Y.clone(D[2]),Y.clone(D[3])]]}function l(e){function t(e){for(var t=e.length;t--;)e[t][0]+=i,e[t][1]+=a}function n(e){e[0].x+=i,e[0].y+=a,e[1].x+=i,e[1].y+=a}var r,o=R.getTopRight(),i=o.x,a=o.y;if(0!==i||0!==a){if(e.barcodes)for(r=0;r<e.barcodes.length;r++)l(e.barcodes[r]);if(e.line&&2===e.line.length&&n(e.line),e.box&&t(e.box),e.boxes&&e.boxes.length>0)for(r=0;r<e.boxes.length;r++)t(e.boxes[r])}}function p(e,t){t&&j&&(e.barcodes?e.barcodes.filter(function(e){return e.codeResult}).forEach(function(e){return p(e,t)}):e.codeResult&&j.addResult(t,R.getCanvasSize(),e.codeResult))}function h(e){return e&&(e.barcodes?e.barcodes.some(function(e){return e.codeResult}):e.codeResult)}function v(e,t){var n=e;e&&J&&(l(e),p(e,t),n=e.barcodes||e),F.a.publish("processed",n),h(e)&&F.a.publish("detected",n)}function g(){var e,t;t=d(),t?(e=A.decodeFromBoundingBoxes(t),
e=e||{},e.boxes=t,v(e,P.data)):v()}function m(){var e;if(J){if(Q.length>0){if(e=Q.filter(function(e){return!e.busy})[0],!e)return;O.attachData(e.imageData)}else O.attachData(P.data);O.grab()&&(e?(e.busy=!0,e.worker.postMessage({cmd:"process",imageData:e.imageData},[e.imageData.buffer])):g())}else g()}function y(){var e=null,t=1e3/(K.frequency||60);S=!1,function n(r){e=e||r,S||(r>=e&&(e+=t,m()),window.requestAnimFrame(n))}(performance.now())}function b(){J&&"LiveStream"===K.inputStream.type?y():m()}function _(e){var t,n={worker:void 0,imageData:new Uint8Array(R.getWidth()*R.getHeight()),busy:!0};t=C(),n.worker=new Worker(t),n.worker.onmessage=function(r){return"initialized"===r.data.event?(URL.revokeObjectURL(t),n.busy=!1,n.imageData=new Uint8Array(r.data.imageData),e(n)):void("processed"===r.data.event?(n.imageData=new Uint8Array(r.data.imageData),n.busy=!1,v(r.data.result,n.imageData)):"error"===r.data.event)},n.worker.postMessage({cmd:"init",size:{x:R.getWidth(),y:R.getHeight()},imageData:n.imageData,config:w(K)},[n.imageData.buffer])}function w(e){return X({},e,{inputStream:X({},e.inputStream,{target:null})})}function x(e){function t(e){self.postMessage({event:"processed",imageData:o.data,result:e},[o.data.buffer])}function n(){self.postMessage({event:"initialized",imageData:o.data},[o.data.buffer])}if(e){var r=e().default;if(!r)return void self.postMessage({event:"error",message:"Quagga could not be created"})}var o;self.onmessage=function(e){if("init"===e.data.cmd){var i=e.data.config;i.numOfWorkers=0,o=new r.ImageWrapper({x:e.data.size.x,y:e.data.size.y},new Uint8Array(e.data.imageData)),r.init(i,n,o),r.onProcessed(t)}else"process"===e.data.cmd?(o.data=new Uint8Array(e.data.imageData),r.start()):"setReaders"===e.data.cmd&&r.setReaders(e.data.readers)}}function C(){var t,n;return"undefined"!=typeof e&&(n=e),t=new Blob(["("+x.toString()+")("+n+");"],{type:"text/javascript"}),window.URL.createObjectURL(t)}function E(e){A?A.setReaders(e):J&&Q.length>0&&Q.forEach(function(t){t.worker.postMessage({cmd:"setReaders",readers:e})})}function T(e,t){var n=e-Q.length;if(0===n)return t&&t();if(n<0){var r=Q.slice(n);return r.forEach(function(e){e.worker.terminate()}),Q=Q.slice(0,n),t&&t()}for(var o=function(n){Q.push(n),Q.length>=e&&t&&t()},i=0;i<n;i++)_(o)}Object.defineProperty(n,"__esModule",{value:!0});var R,O,S,P,D,A,j,M=r(40),I=r.n(M),k=r(77),N=(r.n(k),r(205)),z=(r.n(N),r(26)),L=r(87),U=r(80),F=r(74),G=r(82),B=r(14),W=r(72),V=r(78),H=r(86),q=r(84),X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y={clone:r(11)},$={ctx:{image:null,overlay:null},dom:{image:null,overlay:null}},Q=[],J=!0,K={};n.default={init:function(e,t,n){return K=I()({},V.a,e),n?(J=!1,o(n),t()):void i(t)},start:function(){b()},stop:function(){S=!0,T(0),"LiveStream"===K.inputStream.type&&(G.a.release(),R.clearEventHandlers())},pause:function(){S=!0},onDetected:function(e){F.a.subscribe("detected",e)},offDetected:function(e){F.a.unsubscribe("detected",e)},onProcessed:function(e){F.a.subscribe("processed",e)},offProcessed:function(e){F.a.unsubscribe("processed",e)},setReaders:function(e){E(e)},registerResultCollector:function(e){e&&"function"==typeof e.addResult&&(j=e)},canvas:$,decodeSingle:function(e,t){var n=this;e=I()({inputStream:{type:"ImageStream",sequence:!1,size:800,src:e.src},numOfWorkers:1,locator:{halfSample:!1}},e),this.init(e,function(){F.a.once("processed",function(e){n.stop(),t.call(null,e)},!0),b()})},ImageWrapper:z.a,ImageDebug:B.a,ResultCollector:W.a,CameraAccess:G.a}},function(e,t,n){"use strict";function r(e,t){return!!t&&t.some(function(t){return Object.keys(t).every(function(n){return t[n]===e[n]})})}function o(e,t){return"function"!=typeof t||t(e)}var i=n(14);t.a={create:function(e){function t(t){return s&&t&&!r(t,e.blacklist)&&o(t,e.filter)}var n=document.createElement("canvas"),a=n.getContext("2d"),c=[],s=e.capacity||20,u=e.capture===!0;return{addResult:function(e,r,o){var f={};t(o)&&(s--,f.codeResult=o,u&&(n.width=r.x,n.height=r.y,i.a.drawImage(e,r,a),f.frame=n.toDataURL()),c.push(f))},getResults:function(){return c}}}}},function(e,t,n){"use strict";var r={clone:n(11),dot:n(44)};t.a={create:function(e,t){function n(){o(e),i()}function o(e){s[e.id]=e,a.push(e)}function i(){var e,t=0;for(e=0;e<a.length;e++)t+=a[e].rad;c.rad=t/a.length,c.vec=r.clone([Math.cos(c.rad),Math.sin(c.rad)])}var a=[],c={rad:0,vec:r.clone([0,0])},s={};return n(),{add:function(e){s[e.id]||(o(e),i())},fits:function(e){var n=Math.abs(r.dot(e.point.vec,c.vec));return n>t},getPoints:function(){return a},getCenter:function(){return c}}},createPoint:function(e,t,n){return{rad:e[n],point:e,id:t}}}},function(e,t,n){"use strict";t.a=function(){function e(e){return o[e]||(o[e]={subscribers:[]}),o[e]}function t(){o={}}function n(e,t){e.async?setTimeout(function(){e.callback(t)},4):e.callback(t)}function r(t,n,r){var o;if("function"==typeof n)o={callback:n,async:r};else if(o=n,!o.callback)throw"Callback was not specified on options";e(t).subscribers.push(o)}var o={};return{subscribe:function(e,t,n){return r(e,t,n)},publish:function(t,r){var o=e(t),i=o.subscribers;i.filter(function(e){return!!e.once}).forEach(function(e){n(e,r)}),o.subscribers=i.filter(function(e){return!e.once}),o.subscribers.forEach(function(e){n(e,r)})},once:function(e,t,n){r(e,{callback:t,async:n,once:!0})},unsubscribe:function(n,r){var o;n?(o=e(n),o&&r?o.subscribers=o.subscribers.filter(function(e){return e.callback!==r}):o.subscribers=[]):t()}}}()},function(e,t,n){"use strict";function r(){return navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.enumerateDevices?navigator.mediaDevices.enumerateDevices():Promise.reject(new Error("enumerateDevices is not defined"))}function o(e){return navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(e):Promise.reject(new Error("getUserMedia is not defined"))}t.b=r,t.a=o},function(e,t,n){"use strict";function r(e,t,n){n||(n={data:null,size:t}),this.data=n.data,this.originalSize=n.size,this.I=n,this.from=e,this.size=t}r.prototype.show=function(e,t){var n,r,o,i,a,c,s;for(t||(t=1),n=e.getContext("2d"),e.width=this.size.x,e.height=this.size.y,r=n.getImageData(0,0,e.width,e.height),o=r.data,i=0,a=0;a<this.size.y;a++)for(c=0;c<this.size.x;c++)s=a*this.size.x+c,i=this.get(c,a)*t,o[4*s+0]=i,o[4*s+1]=i,o[4*s+2]=i,o[4*s+3]=255;r.data=o,n.putImageData(r,0,0)},r.prototype.get=function(e,t){return this.data[(this.from.y+t)*this.originalSize.x+this.from.x+e]},r.prototype.updateData=function(e){this.originalSize=e.size,this.data=e.data},r.prototype.updateFrom=function(e){return this.from=e,this},t.a=r},function(e,t){"undefined"!=typeof window&&(window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}()),Math.imul=Math.imul||function(e,t){var n=e>>>16&65535,r=65535&e,o=t>>>16&65535,i=65535&t;return r*i+(n*i+r*o<<16>>>0)|0},"function"!=typeof Object.assign&&(Object.assign=function(e){"use strict";if(null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(null!==r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t})},function(e,t,n){"use strict";var r=void 0;r=n(79),t.a=r},function(e,t){e.exports={inputStream:{name:"Live",type:"LiveStream",constraints:{width:640,height:480,facingMode:"environment"},area:{top:"0%",right:"0%",left:"0%",bottom:"0%"},singleChannel:!1},locate:!0,numOfWorkers:4,decoder:{readers:["code_128_reader"]},locator:{halfSample:!0,patchSize:"medium"}}},function(e,t,n){"use strict";var r=n(81),o=(n(14),n(91)),i=n(5),a=n(43),c=n(92),s=n(90),u=n(98),f=n(95),d=n(93),l=n(94),p=n(97),h=n(96),v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g={code_128_reader:o.a,ean_reader:i.a,ean_5_reader:l.a,ean_2_reader:d.a,ean_8_reader:f.a,code_39_reader:a.a,code_39_vin_reader:c.a,codabar_reader:s.a,upc_reader:u.a,upc_e_reader:p.a,i2of5_reader:h.a};t.a={create:function(e,t){function n(){}function o(){e.readers.forEach(function(e){var t,n={},r=[];"object"===("undefined"==typeof e?"undefined":v(e))?(t=e.format,n=e.config):"string"==typeof e&&(t=e),n.supplements&&(r=n.supplements.map(function(e){return new g[e]})),p.push(new g[t](n,r))})}function i(){}function a(e,n,r){function o(t){var r={y:t*Math.sin(n),x:t*Math.cos(n)};e[0].y-=r.y,e[0].x-=r.x,e[1].y+=r.y,e[1].x+=r.x}for(o(r);r>1&&(!t.inImageWithBorder(e[0],0)||!t.inImageWithBorder(e[1],0));)r-=Math.ceil(r/2),o(-r);return e}function c(e){return[{x:(e[1][0]-e[0][0])/2+e[0][0],y:(e[1][1]-e[0][1])/2+e[0][1]},{x:(e[3][0]-e[2][0])/2+e[2][0],y:(e[3][1]-e[2][1])/2+e[2][1]}]}function s(e){var n,o=null,i=r.a.getBarcodeLine(t,e[0],e[1]);for(r.a.toBinaryLine(i),n=0;n<p.length&&null===o;n++)o=p[n].decodePattern(i.line);return null===o?null:{codeResult:o,barcodeLine:i}}function u(e,t,n){var r,o,i,a=Math.sqrt(Math.pow(e[1][0]-e[0][0],2)+Math.pow(e[1][1]-e[0][1],2)),c=16,u=null,f=Math.sin(n),d=Math.cos(n);for(r=1;r<c&&null===u;r++)o=a/c*r*(r%2===0?-1:1),i={y:o*f,x:o*d},t[0].y+=i.x,t[0].x-=i.y,t[1].y+=i.x,t[1].x-=i.y,u=s(t);return u}function f(e){return Math.sqrt(Math.pow(Math.abs(e[1].y-e[0].y),2)+Math.pow(Math.abs(e[1].x-e[0].x),2))}function d(e){var t,n,r,o;l.ctx.overlay;return t=c(e),o=f(t),n=Math.atan2(t[1].y-t[0].y,t[1].x-t[0].x),t=a(t,n,Math.floor(.1*o)),null===t?null:(r=s(t),null===r&&(r=u(e,t,n)),null===r?null:{codeResult:r.codeResult,line:t,angle:n,pattern:r.barcodeLine.line,threshold:r.barcodeLine.threshold})}var l={ctx:{frequency:null,pattern:null,overlay:null},dom:{frequency:null,pattern:null,overlay:null}},p=[];return n(),o(),i(),{decodeFromBoundingBox:function(e){return d(e)},decodeFromBoundingBoxes:function(t){var n,r,o=[],i=e.multiple;for(n=0;n<t.length;n++){var a=t[n];if(r=d(a)||{},r.box=a,i)o.push(r);else if(r.codeResult)return r}if(i)return{barcodes:o}},setReaders:function(t){e.readers=t,p.length=0,o()}}}}},function(e,t,n){"use strict";var r=(n(26),{}),o={DIR:{UP:1,DOWN:-1}};r.getBarcodeLine=function(e,t,n){function r(e,t){d=y[t*b+e],_+=d,w=d<w?d:w,x=d>x?d:x,m.push(d)}var o,i,a,c,s,u,f,d,l=0|t.x,p=0|t.y,h=0|n.x,v=0|n.y,g=Math.abs(v-p)>Math.abs(h-l),m=[],y=e.data,b=e.size.x,_=0,w=255,x=0;for(g&&(u=l,l=p,p=u,u=h,h=v,v=u),l>h&&(u=l,l=h,h=u,u=p,p=v,v=u),o=h-l,i=Math.abs(v-p),a=o/2|0,s=p,c=p<v?1:-1,f=l;f<h;f++)g?r(s,f):r(f,s),a-=i,a<0&&(s+=c,a+=o);return{line:m,min:w,max:x}},r.toBinaryLine=function(e){var t,n,r,i,a,c,s=e.min,u=e.max,f=e.line,d=s+(u-s)/2,l=[],p=(u-s)/12,h=-p;for(r=f[0]>d?o.DIR.UP:o.DIR.DOWN,l.push({pos:0,val:f[0]}),a=0;a<f.length-2;a++)t=f[a+1]-f[a],n=f[a+2]-f[a+1],i=t+n<h&&f[a+1]<1.5*d?o.DIR.DOWN:t+n>p&&f[a+1]>.5*d?o.DIR.UP:r,r!==i&&(l.push({pos:a,val:f[a]}),r=i);for(l.push({pos:f.length,val:f[f.length-1]}),c=l[0].pos;c<l[1].pos;c++)f[c]=f[c]>d?0:1;for(a=1;a<l.length-1;a++)for(p=l[a+1].val>l[a].val?l[a].val+(l[a+1].val-l[a].val)/3*2|0:l[a+1].val+(l[a].val-l[a+1].val)/3|0,c=l[a].pos;c<l[a+1].pos;c++)f[c]=f[c]>p?0:1;return{line:f,threshold:p}},r.debug={printFrequency:function(e,t){var n,r=t.getContext("2d");for(t.width=e.length,t.height=256,r.beginPath(),r.strokeStyle="blue",n=0;n<e.length;n++)r.moveTo(n,255),r.lineTo(n,255-e[n]);r.stroke(),r.closePath()},printPattern:function(e,t){var n,r=t.getContext("2d");for(t.width=e.length,r.fillColor="black",n=0;n<e.length;n++)1===e[n]&&r.fillRect(n,0,1,100)}},t.a=r},function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){function r(){o>0?e.videoWidth>0&&e.videoHeight>0?t():window.setTimeout(r,500):n("Unable to play video stream. Is webcam working?"),o--}var o=10;r()})}function o(e,t){return n.i(h.a)(t).then(function(t){return new Promise(function(n){u=t,e.setAttribute("autoplay","true"),e.srcObject=t,e.addEventListener("loadedmetadata",function(){e.play(),n()})})}).then(r.bind(null,e))}function i(e){var t=d()(e,["width","height","facingMode","aspectRatio","deviceId"]);return"undefined"!=typeof e.minAspectRatio&&e.minAspectRatio>0&&(t.aspectRatio=e.minAspectRatio,console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead")),"undefined"!=typeof e.facing&&(t.facingMode=e.facing,console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'")),t}function a(e){var t=e.video.facingMode,r=g[t];return r?n.i(h.b)().then(function(t){var n=t.filter(function(e){return"videoinput"===e.kind&&r.test(e.label)}).map(function(e){return e.deviceId})[0];return n&&(e=v({},e,{video:v({},p()(e.video,["facingMode"]),{deviceId:n})})),Promise.resolve(e)}):Promise.resolve(e)}function c(e){var t={audio:!1,video:i(e)};return!t.video.deviceId&&"string"==typeof t.video.facingMode&&t.video.facingMode.length>0?a(t):Promise.resolve(t)}function s(){return n.i(h.b)().then(function(e){return e.filter(function(e){return"videoinput"===e.kind})})}var u,f=n(200),d=n.n(f),l=n(199),p=n.n(l),h=n(75),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g={user:/front/i,environment:/back/i};t.a={request:function(e,t){return c(t).then(o.bind(null,e))},release:function(){var e=u&&u.getVideoTracks();e&&e.length&&e[0].stop(),u=null},enumerateVideoDevices:s,getActiveStreamLabel:function(){if(u){var e=u.getVideoTracks();if(e&&e.length)return e[0].label}}}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return/^blob\:/i.test(e)?i(e).then(o).then(function(e){return a(e,t)}):Promise.resolve(null)}function o(e){return new Promise(function(t){var n=new FileReader;n.onload=function(e){return t(e.target.result)},n.readAsArrayBuffer(e)})}function i(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="blob",r.onreadystatechange=function(){r.readyState!==XMLHttpRequest.DONE||200!==r.status&&0!==r.status||t(this.response)},r.onerror=n,r.send()})}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,n=new DataView(e),r=e.byteLength,o=t.reduce(function(e,t){var n=Object.keys(d).filter(function(e){return d[e]===t})[0];return n&&(e[n]=t),e},{}),i=2,a=void 0;if(255!==n.getUint8(0)||216!==n.getUint8(1))return!1;for(;i<r;){if(255!==n.getUint8(i))return!1;if(a=n.getUint8(i+1),225===a)return c(n,i+4,o);i+=2+n.getUint16(i+2)}}function c(e,t,n){if("Exif"!==f(e,t,4))return!1;var r=t+6,o=void 0,i=void 0;if(18761===e.getUint16(r))o=!1;else{if(19789!==e.getUint16(r))return!1;o=!0}if(42!==e.getUint16(r+2,!o))return!1;var a=e.getUint32(r+4,!o);return!(a<8)&&(i=s(e,r,r+a,n,o))}function s(e,t,n,r,o){for(var i=e.getUint16(n,!o),a={},c=0;c<i;c++){var s=n+12*c+2,f=r[e.getUint16(s,!o)];f&&(a[f]=u(e,s,t,n,o))}return a}function u(e,t,n,r,o){var i=e.getUint16(t+2,!o),a=e.getUint32(t+4,!o);switch(i){case 3:if(1===a)return e.getUint16(t+8,!o)}}function f(e,t,n){for(var r="",o=t;o<t+n;o++)r+=String.fromCharCode(e.getUint8(o));return r}t.a=r;var d={274:"orientation"},l=Object.keys(d).map(function(e){return d[e]})},function(e,t,n){"use strict";function r(e,t){e.width!==t.x&&(e.width=t.x),e.height!==t.y&&(e.height=t.y)}var o=n(25),i=Math.PI/180,a={};a.create=function(e,t){var a,c={},s=e.getConfig(),u=(n.i(o.b)(e.getRealWidth(),e.getRealHeight()),e.getCanvasSize()),f=n.i(o.b)(e.getWidth(),e.getHeight()),d=e.getTopRight(),l=d.x,p=d.y,h=null,v=null;return a=t?t:document.createElement("canvas"),a.width=u.x,a.height=u.y,h=a.getContext("2d"),v=new Uint8Array(f.x*f.y),c.attachData=function(e){v=e},c.getData=function(){return v},c.grab=function(){var t,c=s.halfSample,d=e.getFrame(),g=d,m=0;if(g){if(r(a,u),"ImageStream"===s.type&&(g=d.img,d.tags&&d.tags.orientation))switch(d.tags.orientation){case 6:m=90*i;break;case 8:m=-90*i}return 0!==m?(h.translate(u.x/2,u.y/2),h.rotate(m),h.drawImage(g,-u.y/2,-u.x/2,u.y,u.x),h.rotate(-m),h.translate(-u.x/2,-u.y/2)):h.drawImage(g,0,0,u.x,u.y),t=h.getImageData(l,p,f.x,f.y).data,c?n.i(o.c)(t,f,v):n.i(o.d)(t,v,s),!0}return!1},c.getSize=function(){return f},c},t.a=a},function(e,t,n){"use strict";function r(e,t){e.onload=function(){t.loaded(this)}}var o=n(83),i={};i.load=function(e,t,i,a,c){var s,u,f,d=new Array(a),l=new Array(d.length);if(c===!1)d[0]=e;else for(s=0;s<d.length;s++)f=i+s,d[s]=e+"image-"+("00"+f).slice(-3)+".jpg";for(l.notLoaded=[],l.addImage=function(e){l.notLoaded.push(e)},l.loaded=function(r){for(var i=l.notLoaded,a=0;a<i.length;a++)if(i[a]===r){i.splice(a,1);for(var s=0;s<d.length;s++){var u=d[s].substr(d[s].lastIndexOf("/"));if(r.src.lastIndexOf(u)!==-1){l[s]={img:r};break}}break}0===i.length&&(c===!1?n.i(o.a)(e,["orientation"]).then(function(e){l[0].tags=e,t(l)}).catch(function(e){console.log(e),t(l)}):t(l))},s=0;s<d.length;s++)u=new Image,l.addImage(u),r(u,l),u.src=d[s]},t.a=i},function(e,t,n){"use strict";var r=n(85),o={};o.createVideoStream=function(e){function t(){var t=e.videoWidth,o=e.videoHeight;n=i.size?t/o>1?i.size:Math.floor(t/o*i.size):t,r=i.size?t/o>1?Math.floor(o/t*i.size):i.size:o,u.x=n,u.y=r}var n,r,o={},i=null,a=["canrecord","ended"],c={},s={x:0,y:0},u={x:0,y:0};return o.getRealWidth=function(){return e.videoWidth},o.getRealHeight=function(){return e.videoHeight},o.getWidth=function(){return n},o.getHeight=function(){return r},o.setWidth=function(e){n=e},o.setHeight=function(e){r=e},o.setInputStream=function(t){i=t,e.src="undefined"!=typeof t.src?t.src:""},o.ended=function(){return e.ended},o.getConfig=function(){return i},o.setAttribute=function(t,n){e.setAttribute(t,n)},o.pause=function(){e.pause()},o.play=function(){e.play()},o.setCurrentTime=function(t){"LiveStream"!==i.type&&(e.currentTime=t)},o.addEventListener=function(t,n,r){a.indexOf(t)!==-1?(c[t]||(c[t]=[]),c[t].push(n)):e.addEventListener(t,n,r)},o.clearEventHandlers=function(){a.forEach(function(t){var n=c[t];n&&n.length>0&&n.forEach(function(n){e.removeEventListener(t,n)})})},o.trigger=function(e,n){var r,i=c[e];if("canrecord"===e&&t(),i&&i.length>0)for(r=0;r<i.length;r++)i[r].apply(o,n)},o.setTopRight=function(e){s.x=e.x,s.y=e.y},o.getTopRight=function(){return s},o.setCanvasSize=function(e){u.x=e.x,u.y=e.y},o.getCanvasSize=function(){return u},o.getFrame=function(){return e},o},o.createLiveStream=function(e){e.setAttribute("autoplay",!0);var t=o.createVideoStream(e);return t.ended=function(){return!1},t},o.createImageStream=function(){function e(){d=!1,r.a.load(v,function(e){if(l=e,e[0].tags&&e[0].tags.orientation)switch(e[0].tags.orientation){case 6:case 8:c=e[0].img.height,s=e[0].img.width;break;default:c=e[0].img.width,s=e[0].img.height}else c=e[0].img.width,s=e[0].img.height;n=a.size?c/s>1?a.size:Math.floor(c/s*a.size):c,o=a.size?c/s>1?Math.floor(s/c*a.size):a.size:s,_.x=n,_.y=o,d=!0,u=0,setTimeout(function(){t("canrecord",[])},0)},h,p,a.sequence)}function t(e,t){var n,r=y[e];if(r&&r.length>0)for(n=0;n<r.length;n++)r[n].apply(i,t)}var n,o,i={},a=null,c=0,s=0,u=0,f=!0,d=!1,l=null,p=0,h=1,v=null,g=!1,m=["canrecord","ended"],y={},b={x:0,y:0},_={x:0,y:0};return i.trigger=t,i.getWidth=function(){return n},i.getHeight=function(){return o},i.setWidth=function(e){n=e},i.setHeight=function(e){o=e},i.getRealWidth=function(){return c},i.getRealHeight=function(){return s},i.setInputStream=function(t){a=t,t.sequence===!1?(v=t.src,p=1):(v=t.src,p=t.length),e()},i.ended=function(){return g},i.setAttribute=function(){},i.getConfig=function(){return a},i.pause=function(){f=!0},i.play=function(){f=!1},i.setCurrentTime=function(e){u=e},i.addEventListener=function(e,t){m.indexOf(e)!==-1&&(y[e]||(y[e]=[]),y[e].push(t))},i.setTopRight=function(e){b.x=e.x,b.y=e.y},i.getTopRight=function(){return b},i.setCanvasSize=function(e){_.x=e.x,_.y=e.y},i.getCanvasSize=function(){return _},i.getFrame=function(){var e;return d?(f||(e=l[u],u<p-1?u++:setTimeout(function(){g=!0,t("ended",[])},0)),e):null},i},t.a=o},function(e,t,n){"use strict";(function(e){function r(){var t;v=h.halfSample?new R.a({x:E.size.x/2|0,y:E.size.y/2|0}):E,C=n.i(O.e)(h.patchSize,v.size),k.x=v.size.x/C.x|0,k.y=v.size.y/C.y|0,x=new R.a(v.size,void 0,Uint8Array,!1),y=new R.a(C,void 0,Array,!0),t=new ArrayBuffer(65536),m=new R.a(C,new Uint8Array(t,0,C.x*C.y)),g=new R.a(C,new Uint8Array(t,C.x*C.y*3,C.x*C.y),void 0,!0),T=n.i(A.a)("undefined"!=typeof window?window:"undefined"!=typeof self?self:e,{size:C.x},t),w=new R.a({x:v.size.x/m.size.x|0,y:v.size.y/m.size.y|0},void 0,Array,!0),b=new R.a(w.size,void 0,void 0,!0),_=new R.a(w.size,void 0,Int32Array,!0)}function o(){h.useWorker||"undefined"==typeof document||(I.dom.binary=document.createElement("canvas"),I.dom.binary.className="binaryBuffer",I.ctx.binary=I.dom.binary.getContext("2d"),I.dom.binary.width=x.size.x,I.dom.binary.height=x.size.y)}function i(e){var t,n,r,o,i,a,c,s=x.size.x,u=x.size.y,f=-x.size.x,d=-x.size.y;for(t=0,n=0;n<e.length;n++)o=e[n],t+=o.rad;for(t/=e.length,t=(180*t/Math.PI+90)%180-90,t<0&&(t+=180),t=(180-t)*Math.PI/180,i=M.copy(M.create(),[Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t)]),n=0;n<e.length;n++)for(o=e[n],r=0;r<4;r++)j.transformMat2(o.box[r],o.box[r],i);for(n=0;n<e.length;n++)for(o=e[n],r=0;r<4;r++)o.box[r][0]<s&&(s=o.box[r][0]),o.box[r][0]>f&&(f=o.box[r][0]),o.box[r][1]<u&&(u=o.box[r][1]),o.box[r][1]>d&&(d=o.box[r][1]);for(a=[[s,u],[f,u],[f,d],[s,d]],c=h.halfSample?2:1,i=M.invert(i,i),r=0;r<4;r++)j.transformMat2(a[r],a[r],i);for(r=0;r<4;r++)j.scale(a[r],a[r],c);return a}function a(){n.i(O.f)(v,x),x.zeroBorder()}function c(){var e,t,n,r,o,i,a,c=[];for(e=0;e<k.x;e++)for(t=0;t<k.y;t++)n=m.size.x*e,r=m.size.y*t,d(n,r),g.zeroBorder(),S.a.init(y.data,0),i=P.a.create(g,y),a=i.rasterize(0),o=y.moments(a.count),c=c.concat(l(o,[e,t],n,r));return c}function s(e){var t,n,r=[],o=[];for(t=0;t<e;t++)r.push(0);for(n=_.data.length;n--;)_.data[n]>0&&r[_.data[n]-1]++;return r=r.map(function(e,t){return{val:e,label:t+1}}),r.sort(function(e,t){return t.val-e.val}),o=r.filter(function(e){return e.val>=5})}function u(e,t){var n,r,o,a,c=[],s=[];for(n=0;n<e.length;n++){for(r=_.data.length,c.length=0;r--;)_.data[r]===e[n].label&&(o=w.data[r],c.push(o));a=i(c),a&&s.push(a)}return s}function f(e){var t=n.i(O.g)(e,.9),r=n.i(O.h)(t,1,function(e){return e.getPoints().length}),o=[],i=[];if(1===r.length){o=r[0].item.getPoints();for(var a=0;a<o.length;a++)i.push(o[a].point)}return i}function d(e,t){x.subImageAsCopy(m,n.i(O.b)(e,t)),T.skeletonize()}function l(e,t,n,r){var o,i,a,c,s=[],u=[],d=Math.ceil(C.x/3);if(e.length>=2){for(o=0;o<e.length;o++)e[o].m00>d&&s.push(e[o]);if(s.length>=2){for(a=f(s),i=0,o=0;o<a.length;o++)i+=a[o].rad;a.length>1&&a.length>=s.length/4*3&&a.length>e.length/4&&(i/=a.length,c={index:t[1]*k.x+t[0],pos:{x:n,y:r},box:[j.clone([n,r]),j.clone([n+m.size.x,r]),j.clone([n+m.size.x,r+m.size.y]),j.clone([n,r+m.size.y])],moments:a,rad:i,vec:j.clone([Math.cos(i),Math.sin(i)])},u.push(c))}}return u}function p(e){function t(){var e;for(e=0;e<_.data.length;e++)if(0===_.data[e]&&1===b.data[e])return e;return _.length}function n(e){var t,r,o,c,s,u,f={x:e%_.size.x,y:e/_.size.x|0};if(e<_.data.length)for(o=w.data[e],_.data[e]=i,s=0;s<D.a.searchDirections.length;s++)r=f.y+D.a.searchDirections[s][0],t=f.x+D.a.searchDirections[s][1],c=r*_.size.x+t,0!==b.data[c]?0===_.data[c]&&(u=Math.abs(j.dot(w.data[c].vec,o.vec)),u>a&&n(c)):_.data[c]=Number.MAX_VALUE}var r,o,i=0,a=.95,c=0;for(S.a.init(b.data,0),S.a.init(_.data,0),S.a.init(w.data,null),r=0;r<e.length;r++)o=e[r],w.data[o.index]=o,b.data[o.index]=1;for(b.zeroBorder();(c=t())<_.data.length;)i++,n(c);return i}var h,v,g,m,y,b,_,w,x,C,E,T,R=n(26),O=n(25),S=n(13),P=(n(14),n(88)),D=n(42),A=n(89),j={clone:n(11),dot:n(44),scale:n(102),transformMat2:n(103)},M={copy:n(99),create:n(100),invert:n(101)},I={ctx:{binary:null},dom:{binary:null}},k={x:0,y:0};t.a={init:function(e,t){h=t,E=e,r(),o()},locate:function(){var e,t,r;if(h.halfSample&&n.i(O.i)(E,v),a(),e=c(),e.length<k.x*k.y*.05)return null;var o=p(e);return o<1?null:(t=s(o),0===t.length?null:r=u(t,o))},checkImageConstraints:function(e,t){var r,o,i,a=e.getWidth(),c=e.getHeight(),s=t.halfSample?.5:1;if(e.getConfig().area&&(i=n.i(O.j)(a,c,e.getConfig().area),e.setTopRight({x:i.sx,y:i.sy}),e.setCanvasSize({x:a,y:c}),a=i.sw,c=i.sh),o={x:Math.floor(a*s),y:Math.floor(c*s)},r=n.i(O.e)(t.patchSize,o),e.setWidth(Math.floor(Math.floor(o.x/r.x)*(1/s)*r.x)),e.setHeight(Math.floor(Math.floor(o.y/r.y)*(1/s)*r.y)),e.getWidth()%r.x===0&&e.getHeight()%r.y===0)return!0;throw new Error("Image dimensions do not comply with the current settings: Width ("+a+" )and height ("+c+") must a multiple of "+r.x)}}}).call(t,n(70))},function(e,t,n){"use strict";var r=n(42),o={createContour2D:function(){return{dir:null,index:null,firstVertex:null,insideContours:null,nextpeer:null,prevpeer:null}},CONTOUR_DIR:{CW_DIR:0,CCW_DIR:1,UNKNOWN_DIR:2},DIR:{OUTSIDE_EDGE:-32767,INSIDE_EDGE:-32766},create:function(e,t){var n=e.data,i=t.data,a=e.size.x,c=e.size.y,s=r.a.create(e,t);return{rasterize:function(e){var t,r,u,f,d,l,p,h,v,g,m,y,b=[],_=0;for(y=0;y<400;y++)b[y]=0;for(b[0]=n[0],v=null,l=1;l<c-1;l++)for(f=0,r=b[0],d=1;d<a-1;d++)if(m=l*a+d,0===i[m])if(t=n[m],t!==r){if(0===f)u=_+1,b[u]=t,r=t,p=s.contourTracing(l,d,u,t,o.DIR.OUTSIDE_EDGE),null!==p&&(_++,f=u,h=o.createContour2D(),h.dir=o.CONTOUR_DIR.CW_DIR,h.index=f,h.firstVertex=p,h.nextpeer=v,h.insideContours=null,null!==v&&(v.prevpeer=h),v=h);else if(p=s.contourTracing(l,d,o.DIR.INSIDE_EDGE,t,f),null!==p){for(h=o.createContour2D(),h.firstVertex=p,h.insideContours=null,0===e?h.dir=o.CONTOUR_DIR.CCW_DIR:h.dir=o.CONTOUR_DIR.CW_DIR,h.index=e,g=v;null!==g&&g.index!==f;)g=g.nextpeer;null!==g&&(h.nextpeer=g.insideContours,null!==g.insideContours&&(g.insideContours.prevpeer=h),g.insideContours=h)}}else i[m]=f;else i[m]===o.DIR.OUTSIDE_EDGE||i[m]===o.DIR.INSIDE_EDGE?(f=0,r=i[m]===o.DIR.INSIDE_EDGE?n[m]:b[0]):(f=i[m],r=b[f]);for(g=v;null!==g;)g.index=e,g=g.nextpeer;return{cc:v,count:_}},debug:{drawContour:function(e,t){var n,r,i,a=e.getContext("2d"),c=t;for(a.strokeStyle="red",a.fillStyle="red",a.lineWidth=1,n=null!==c?c.insideContours:null;null!==c;){switch(null!==n?(r=n,n=n.nextpeer):(r=c,c=c.nextpeer,n=null!==c?c.insideContours:null),r.dir){case o.CONTOUR_DIR.CW_DIR:a.strokeStyle="red";break;case o.CONTOUR_DIR.CCW_DIR:a.strokeStyle="blue";break;case o.CONTOUR_DIR.UNKNOWN_DIR:a.strokeStyle="green"}i=r.firstVertex,a.beginPath(),a.moveTo(i.x,i.y);do i=i.next,a.lineTo(i.x,i.y);while(i!==r.firstVertex);a.stroke()}}}}}};t.a=o},function(module, exports, __webpack_require__) {"use strict";function Skeletonizer(stdlib, foreign, buffer) {"use asm";var images=new stdlib.Uint8Array(buffer),size=foreign.size|0,imul=stdlib.Math.imul;function erode(inImagePtr, outImagePtr) {inImagePtr=inImagePtr|0;outImagePtr=outImagePtr|0;var v=0,u=0,sum=0,yStart1=0,yStart2=0,xStart1=0,xStart2=0,offset=0;for (v=1; (v|0)<(size - 1|0); v=v+1|0) {offset=offset+size|0;for (u=1; (u|0)<(size - 1|0); u=u+1|0) {yStart1=offset - size|0;yStart2=offset+size|0;xStart1=u - 1|0;xStart2=u+1|0;sum=(images[inImagePtr+yStart1+xStart1|0]|0)+(images[inImagePtr+yStart1+xStart2|0]|0)+(images[inImagePtr+offset+u|0]|0)+(images[inImagePtr+yStart2+xStart1|0]|0)+(images[inImagePtr+yStart2+xStart2|0]|0)|0;if ((sum|0) == (5|0)) {images[outImagePtr+offset+u|0]=1;} else {images[outImagePtr+offset+u|0]=0;}}}return;}function subtract(aImagePtr, bImagePtr, outImagePtr) {aImagePtr=aImagePtr|0;bImagePtr=bImagePtr|0;outImagePtr=outImagePtr|0;var length=0;length=imul(size, size)|0;while ((length|0)>0) {length=length - 1|0;images[outImagePtr+length|0]=(images[aImagePtr+length|0]|0) - (images[bImagePtr+length|0]|0)|0;}}function bitwiseOr(aImagePtr, bImagePtr, outImagePtr) {aImagePtr=aImagePtr|0;bImagePtr=bImagePtr|0;outImagePtr=outImagePtr|0;var length=0;length=imul(size, size)|0;while ((length|0)>0) {length=length - 1|0;images[outImagePtr+length|0]=images[aImagePtr+length|0]|0|(images[bImagePtr+length|0]|0)|0;}}function countNonZero(imagePtr) {imagePtr=imagePtr|0;var sum=0,length=0;length=imul(size, size)|0;while ((length|0)>0) {length=length - 1|0;sum=(sum|0)+(images[imagePtr+length|0]|0)|0;}return sum|0;}function init(imagePtr, value) {imagePtr=imagePtr|0;value=value|0;var length=0;length=imul(size, size)|0;while ((length|0)>0) {length=length - 1|0;images[imagePtr+length|0]=value;}}function dilate(inImagePtr, outImagePtr) {inImagePtr=inImagePtr|0;outImagePtr=outImagePtr|0;var v=0,u=0,sum=0,yStart1=0,yStart2=0,xStart1=0,xStart2=0,offset=0;for (v=1; (v|0)<(size - 1|0); v=v+1|0) {offset=offset+size|0;for (u=1; (u|0)<(size - 1|0); u=u+1|0) {yStart1=offset - size|0;yStart2=offset+size|0;xStart1=u - 1|0;xStart2=u+1|0;sum=(images[inImagePtr+yStart1+xStart1|0]|0)+(images[inImagePtr+yStart1+xStart2|0]|0)+(images[inImagePtr+offset+u|0]|0)+(images[inImagePtr+yStart2+xStart1|0]|0)+(images[inImagePtr+yStart2+xStart2|0]|0)|0;if ((sum|0)>(0|0)) {images[outImagePtr+offset+u|0]=1;} else {images[outImagePtr+offset+u|0]=0;}}}return;}function memcpy(srcImagePtr, dstImagePtr) {srcImagePtr=srcImagePtr|0;dstImagePtr=dstImagePtr|0;var length=0;length=imul(size, size)|0;while ((length|0)>0) {length=length - 1|0;images[dstImagePtr+length|0]=images[srcImagePtr+length|0]|0;}}function zeroBorder(imagePtr) {imagePtr=imagePtr|0;var x=0,y=0;for (x=0; (x|0)<(size - 1|0); x=x+1|0) {images[imagePtr+x|0]=0;images[imagePtr+y|0]=0;y=y+size - 1|0;images[imagePtr+y|0]=0;y=y+1|0;}for (x=0; (x|0)<(size|0); x=x+1|0) {images[imagePtr+y|0]=0;y=y+1|0;}}function skeletonize() {var subImagePtr=0,erodedImagePtr=0,tempImagePtr=0,skelImagePtr=0,sum=0,done=0;erodedImagePtr=imul(size, size)|0;tempImagePtr=erodedImagePtr+erodedImagePtr|0;skelImagePtr=tempImagePtr+erodedImagePtr|0;init(skelImagePtr, 0);zeroBorder(subImagePtr);do {erode(subImagePtr, erodedImagePtr);dilate(erodedImagePtr, tempImagePtr);subtract(subImagePtr, tempImagePtr, tempImagePtr);bitwiseOr(skelImagePtr, tempImagePtr, skelImagePtr);memcpy(erodedImagePtr, subImagePtr);sum=countNonZero(subImagePtr)|0;done=(sum|0) == 0|0;} while (!done);}return {skeletonize: skeletonize};} exports["a"]=Skeletonizer; },function(e,t,n){"use strict";function r(){o.a.call(this),this._counters=[]}var o=n(10),i={ALPHABETH_STRING:{value:"0123456789-$:/.+ABCD"},ALPHABET:{value:[48,49,50,51,52,53,54,55,56,57,45,36,58,47,46,43,65,66,67,68]},CHARACTER_ENCODINGS:{value:[3,6,9,96,18,66,33,36,48,72,12,24,69,81,84,21,26,41,11,14]},START_END:{value:[26,41,11,14]},MIN_ENCODED_CHARS:{value:4},MAX_ACCEPTABLE:{value:2},PADDING:{value:1.5},FORMAT:{value:"codabar",writeable:!1}};r.prototype=Object.create(o.a.prototype,i),r.prototype.constructor=r,r.prototype._decode=function(){var e,t,n,r,o,i=this,a=[];if(this._counters=i._fillCounters(),e=i._findStart(),!e)return null;r=e.startCounter;do{if(n=i._toPattern(r),n<0)return null;if(t=i._patternToChar(n),t<0)return null;if(a.push(t),r+=8,a.length>1&&i._isStartEnd(n))break}while(r<i._counters.length);return a.length-2<i.MIN_ENCODED_CHARS||!i._isStartEnd(n)?null:i._verifyWhitespace(e.startCounter,r-8)&&i._validateResult(a,e.startCounter)?(r=r>i._counters.length?i._counters.length:r,o=e.start+i._sumCounters(e.startCounter,r-8),{code:a.join(""),start:e.start,end:o,startInfo:e,decodedCodes:a}):null},r.prototype._verifyWhitespace=function(e,t){return(e-1<=0||this._counters[e-1]>=this._calculatePatternLength(e)/2)&&(t+8>=this._counters.length||this._counters[t+7]>=this._calculatePatternLength(t)/2)},r.prototype._calculatePatternLength=function(e){var t,n=0;for(t=e;t<e+7;t++)n+=this._counters[t];return n},r.prototype._thresholdResultPattern=function(e,t){var n,r,o,i,a,c=this,s={space:{narrow:{size:0,counts:0,min:0,max:Number.MAX_VALUE},wide:{size:0,counts:0,min:0,max:Number.MAX_VALUE}},bar:{narrow:{size:0,counts:0,min:0,max:Number.MAX_VALUE},wide:{size:0,counts:0,min:0,max:Number.MAX_VALUE}}},u=t;for(o=0;o<e.length;o++){for(a=c._charToPattern(e[o]),i=6;i>=0;i--)n=2===(1&i)?s.bar:s.space,r=1===(1&a)?n.wide:n.narrow,r.size+=c._counters[u+i],r.counts++,a>>=1;u+=8}return["space","bar"].forEach(function(e){var t=s[e];t.wide.min=Math.floor((t.narrow.size/t.narrow.counts+t.wide.size/t.wide.counts)/2),t.narrow.max=Math.ceil(t.wide.min),t.wide.max=Math.ceil((t.wide.size*c.MAX_ACCEPTABLE+c.PADDING)/t.wide.counts)}),s},r.prototype._charToPattern=function(e){var t,n=this,r=e.charCodeAt(0);for(t=0;t<n.ALPHABET.length;t++)if(n.ALPHABET[t]===r)return n.CHARACTER_ENCODINGS[t];return 0},r.prototype._validateResult=function(e,t){var n,r,o,i,a,c,s=this,u=s._thresholdResultPattern(e,t),f=t;for(n=0;n<e.length;n++){for(c=s._charToPattern(e[n]),r=6;r>=0;r--){if(o=0===(1&r)?u.bar:u.space,i=1===(1&c)?o.wide:o.narrow,a=s._counters[f+r],a<i.min||a>i.max)return!1;c>>=1}f+=8}return!0},r.prototype._patternToChar=function(e){var t,n=this;for(t=0;t<n.CHARACTER_ENCODINGS.length;t++)if(n.CHARACTER_ENCODINGS[t]===e)return String.fromCharCode(n.ALPHABET[t]);return-1},r.prototype._computeAlternatingThreshold=function(e,t){var n,r,o=Number.MAX_VALUE,i=0;for(n=e;n<t;n+=2)r=this._counters[n],r>i&&(i=r),r<o&&(o=r);return(o+i)/2|0},r.prototype._toPattern=function(e){var t,n,r,o,i=7,a=e+i,c=1<<i-1,s=0;if(a>this._counters.length)return-1;for(t=this._computeAlternatingThreshold(e,a),n=this._computeAlternatingThreshold(e+1,a),r=0;r<i;r++)o=0===(1&r)?t:n,this._counters[e+r]>o&&(s|=c),c>>=1;return s},r.prototype._isStartEnd=function(e){var t;for(t=0;t<this.START_END.length;t++)if(this.START_END[t]===e)return!0;return!1},r.prototype._sumCounters=function(e,t){var n,r=0;for(n=e;n<t;n++)r+=this._counters[n];return r},r.prototype._findStart=function(){var e,t,n,r=this,o=r._nextUnset(r._row);for(e=1;e<this._counters.length;e++)if(t=r._toPattern(e),t!==-1&&r._isStartEnd(t))return o+=r._sumCounters(0,e),n=o+r._sumCounters(e,e+8),{start:o,end:n,startCounter:e,endCounter:e+8}},t.a=r},function(e,t,n){"use strict";function r(){i.a.call(this)}function o(e,t,n){for(var r=n.length,o=0,i=0;r--;)i+=e[n[r]],o+=t[n[r]];return i/o}var i=n(10),a={CODE_SHIFT:{value:98},CODE_C:{value:99},CODE_B:{value:100},CODE_A:{value:101},START_CODE_A:{value:103},START_CODE_B:{value:104},START_CODE_C:{value:105},STOP_CODE:{value:106},CODE_PATTERN:{value:[[2,1,2,2,2,2],[2,2,2,1,2,2],[2,2,2,2,2,1],[1,2,1,2,2,3],[1,2,1,3,2,2],[1,3,1,2,2,2],[1,2,2,2,1,3],[1,2,2,3,1,2],[1,3,2,2,1,2],[2,2,1,2,1,3],[2,2,1,3,1,2],[2,3,1,2,1,2],[1,1,2,2,3,2],[1,2,2,1,3,2],[1,2,2,2,3,1],[1,1,3,2,2,2],[1,2,3,1,2,2],[1,2,3,2,2,1],[2,2,3,2,1,1],[2,2,1,1,3,2],[2,2,1,2,3,1],[2,1,3,2,1,2],[2,2,3,1,1,2],[3,1,2,1,3,1],[3,1,1,2,2,2],[3,2,1,1,2,2],[3,2,1,2,2,1],[3,1,2,2,1,2],[3,2,2,1,1,2],[3,2,2,2,1,1],[2,1,2,1,2,3],[2,1,2,3,2,1],[2,3,2,1,2,1],[1,1,1,3,2,3],[1,3,1,1,2,3],[1,3,1,3,2,1],[1,1,2,3,1,3],[1,3,2,1,1,3],[1,3,2,3,1,1],[2,1,1,3,1,3],[2,3,1,1,1,3],[2,3,1,3,1,1],[1,1,2,1,3,3],[1,1,2,3,3,1],[1,3,2,1,3,1],[1,1,3,1,2,3],[1,1,3,3,2,1],[1,3,3,1,2,1],[3,1,3,1,2,1],[2,1,1,3,3,1],[2,3,1,1,3,1],[2,1,3,1,1,3],[2,1,3,3,1,1],[2,1,3,1,3,1],[3,1,1,1,2,3],[3,1,1,3,2,1],[3,3,1,1,2,1],[3,1,2,1,1,3],[3,1,2,3,1,1],[3,3,2,1,1,1],[3,1,4,1,1,1],[2,2,1,4,1,1],[4,3,1,1,1,1],[1,1,1,2,2,4],[1,1,1,4,2,2],[1,2,1,1,2,4],[1,2,1,4,2,1],[1,4,1,1,2,2],[1,4,1,2,2,1],[1,1,2,2,1,4],[1,1,2,4,1,2],[1,2,2,1,1,4],[1,2,2,4,1,1],[1,4,2,1,1,2],[1,4,2,2,1,1],[2,4,1,2,1,1],[2,2,1,1,1,4],[4,1,3,1,1,1],[2,4,1,1,1,2],[1,3,4,1,1,1],[1,1,1,2,4,2],[1,2,1,1,4,2],[1,2,1,2,4,1],[1,1,4,2,1,2],[1,2,4,1,1,2],[1,2,4,2,1,1],[4,1,1,2,1,2],[4,2,1,1,1,2],[4,2,1,2,1,1],[2,1,2,1,4,1],[2,1,4,1,2,1],[4,1,2,1,2,1],[1,1,1,1,4,3],[1,1,1,3,4,1],[1,3,1,1,4,1],[1,1,4,1,1,3],[1,1,4,3,1,1],[4,1,1,1,1,3],[4,1,1,3,1,1],[1,1,3,1,4,1],[1,1,4,1,3,1],[3,1,1,1,4,1],[4,1,1,1,3,1],[2,1,1,4,1,2],[2,1,1,2,1,4],[2,1,1,2,3,2],[2,3,3,1,1,1,2]]},SINGLE_CODE_ERROR:{value:.64},AVG_CODE_ERROR:{value:.3},FORMAT:{value:"code_128",writeable:!1},MODULE_INDICES:{value:{bar:[0,2,4],space:[1,3,5]}}};r.prototype=Object.create(i.a.prototype,a),r.prototype.constructor=r,r.prototype._decodeCode=function(e,t){var n,r,i,a=[0,0,0,0,0,0],c=this,s=e,u=!c._row[s],f=0,d={error:Number.MAX_VALUE,code:-1,start:e,end:e,correction:{bar:1,space:1}};for(n=s;n<c._row.length;n++)if(c._row[n]^u)a[f]++;else{if(f===a.length-1){for(t&&c._correct(a,t),r=0;r<c.CODE_PATTERN.length;r++)i=c._matchPattern(a,c.CODE_PATTERN[r]),i<d.error&&(d.code=r,d.error=i);return d.end=n,d.code===-1||d.error>c.AVG_CODE_ERROR?null:(c.CODE_PATTERN[d.code]&&(d.correction.bar=o(c.CODE_PATTERN[d.code],a,this.MODULE_INDICES.bar),d.correction.space=o(c.CODE_PATTERN[d.code],a,this.MODULE_INDICES.space)),d)}f++,a[f]=1,u=!u}return null},r.prototype._correct=function(e,t){this._correctBars(e,t.bar,this.MODULE_INDICES.bar),this._correctBars(e,t.space,this.MODULE_INDICES.space)},r.prototype._findStart=function(){var e,t,n,r,i,a=[0,0,0,0,0,0],c=this,s=c._nextSet(c._row),u=!1,f=0,d={error:Number.MAX_VALUE,code:-1,start:0,end:0,correction:{bar:1,space:1}};for(e=s;e<c._row.length;e++)if(c._row[e]^u)a[f]++;else{if(f===a.length-1){for(i=0,r=0;r<a.length;r++)i+=a[r];for(t=c.START_CODE_A;t<=c.START_CODE_C;t++)n=c._matchPattern(a,c.CODE_PATTERN[t]),n<d.error&&(d.code=t,d.error=n);if(d.error<c.AVG_CODE_ERROR)return d.start=e-i,d.end=e,d.correction.bar=o(c.CODE_PATTERN[d.code],a,this.MODULE_INDICES.bar),d.correction.space=o(c.CODE_PATTERN[d.code],a,this.MODULE_INDICES.space),d;for(r=0;r<4;r++)a[r]=a[r+2];a[4]=0,a[5]=0,f--}else f++;a[f]=1,u=!u}return null},r.prototype._decode=function(){var e,t,n=this,r=n._findStart(),o=null,i=!1,a=[],c=0,s=0,u=[],f=[],d=!1,l=!0;if(null===r)return null;switch(o={code:r.code,start:r.start,end:r.end,correction:{bar:r.correction.bar,space:r.correction.space}},f.push(o),s=o.code,o.code){case n.START_CODE_A:e=n.CODE_A;break;case n.START_CODE_B:e=n.CODE_B;break;case n.START_CODE_C:e=n.CODE_C;break;default:return null}for(;!i;){if(t=d,d=!1,o=n._decodeCode(o.end,o.correction),null!==o)switch(o.code!==n.STOP_CODE&&(l=!0),o.code!==n.STOP_CODE&&(u.push(o.code),c++,s+=c*o.code),f.push(o),e){case n.CODE_A:if(o.code<64)a.push(String.fromCharCode(32+o.code));else if(o.code<96)a.push(String.fromCharCode(o.code-64));else switch(o.code!==n.STOP_CODE&&(l=!1),o.code){case n.CODE_SHIFT:d=!0,e=n.CODE_B;break;case n.CODE_B:e=n.CODE_B;break;case n.CODE_C:e=n.CODE_C;break;case n.STOP_CODE:i=!0}break;case n.CODE_B:if(o.code<96)a.push(String.fromCharCode(32+o.code));else switch(o.code!==n.STOP_CODE&&(l=!1),o.code){case n.CODE_SHIFT:d=!0,e=n.CODE_A;break;case n.CODE_A:e=n.CODE_A;break;case n.CODE_C:e=n.CODE_C;break;case n.STOP_CODE:i=!0}break;case n.CODE_C:if(o.code<100)a.push(o.code<10?"0"+o.code:o.code);else switch(o.code!==n.STOP_CODE&&(l=!1),o.code){case n.CODE_A:e=n.CODE_A;break;case n.CODE_B:e=n.CODE_B;break;case n.STOP_CODE:i=!0}}else i=!0;t&&(e=e===n.CODE_A?n.CODE_B:n.CODE_A)}return null===o?null:(o.end=n._nextUnset(n._row,o.end),n._verifyTrailingWhitespace(o)?(s-=c*u[u.length-1],s%103!==u[u.length-1]?null:a.length?(l&&a.splice(a.length-1,1),{code:a.join(""),start:r.start,end:o.end,codeset:e,startInfo:r,decodedCodes:f,endInfo:o}):null):null)},i.a.prototype._verifyTrailingWhitespace=function(e){var t,n=this;return t=e.end+(e.end-e.start)/2,t<n._row.length&&n._matchRange(e.end,t,0)?e:null},t.a=r},function(e,t,n){"use strict";function r(){o.a.call(this)}var o=n(43),i={IOQ:/[IOQ]/g,AZ09:/[A-Z0-9]{17}/};r.prototype=Object.create(o.a.prototype),r.prototype.constructor=r,r.prototype._decode=function(){var e=o.a.prototype._decode.apply(this);if(!e)return null;var t=e.code;return t?(t=t.replace(i.IOQ,""),t.match(i.AZ09)&&this._checkChecksum(t)?(e.code=t,e):null):null},r.prototype._checkChecksum=function(e){return!!e},t.a=r},function(e,t,n){"use strict";function r(){o.a.call(this)}var o=n(5),i={FORMAT:{value:"ean_2",writeable:!1}};r.prototype=Object.create(o.a.prototype,i),r.prototype.constructor=r,r.prototype.decode=function(e,t){this._row=e;var n,r=0,o=0,i=t,a=this._row.length,c=[],s=[];for(o=0;o<2&&i<a;o++){if(n=this._decodeCode(i),!n)return null;s.push(n),c.push(n.code%10),n.code>=this.CODE_G_START&&(r|=1<<1-o),1!=o&&(i=this._nextSet(this._row,n.end),i=this._nextUnset(this._row,i))}return 2!=c.length||parseInt(c.join(""))%4!==r?null:{code:c.join(""),decodedCodes:s,end:n.end}},t.a=r},function(e,t,n){"use strict";function r(){a.a.call(this)}function o(e){var t;for(t=0;t<10;t++)if(e===s[t])return t;return null}function i(e){var t,n=e.length,r=0;for(t=n-2;t>=0;t-=2)r+=e[t];for(r*=3,t=n-1;t>=0;t-=2)r+=e[t];return r*=3,r%10}var a=n(5),c={FORMAT:{value:"ean_5",writeable:!1}},s=[24,20,18,17,12,6,3,10,9,5];r.prototype=Object.create(a.a.prototype,c),r.prototype.constructor=r,r.prototype.decode=function(e,t){this._row=e;var n,r=0,a=0,c=t,s=this._row.length,u=[],f=[];for(a=0;a<5&&c<s;a++){if(n=this._decodeCode(c),!n)return null;f.push(n),u.push(n.code%10),n.code>=this.CODE_G_START&&(r|=1<<4-a),4!=a&&(c=this._nextSet(this._row,n.end),c=this._nextUnset(this._row,c))}return 5!=u.length?null:i(u)!==o(r)?null:{code:u.join(""),decodedCodes:f,end:n.end}},t.a=r},function(e,t,n){"use strict";function r(e,t){o.a.call(this,e,t)}var o=n(5),i={FORMAT:{value:"ean_8",writeable:!1}};r.prototype=Object.create(o.a.prototype,i),r.prototype.constructor=r,r.prototype._decodePayload=function(e,t,n){var r,o=this;for(r=0;r<4;r++){if(e=o._decodeCode(e.end,o.CODE_G_START),!e)return null;t.push(e.code),n.push(e)}if(e=o._findPattern(o.MIDDLE_PATTERN,e.end,!0,!1),null===e)return null;for(n.push(e),r=0;r<4;r++){if(e=o._decodeCode(e.end,o.CODE_G_START),!e)return null;n.push(e),t.push(e.code)}return e},t.a=r},function(e,t,n){"use strict";function r(e){e=a()(o(),e),c.a.call(this,e),this.barSpaceRatio=[1,1],e.normalizeBarSpaceWidth&&(this.SINGLE_CODE_ERROR=.38,this.AVG_CODE_ERROR=.09)}function o(){var e={};return Object.keys(r.CONFIG_KEYS).forEach(function(t){e[t]=r.CONFIG_KEYS[t].default}),e}var i=n(40),a=n.n(i),c=n(10),s=1,u=3,f={START_PATTERN:{value:[s,s,s,s]},STOP_PATTERN:{value:[s,s,u]},CODE_PATTERN:{value:[[s,s,u,u,s],[u,s,s,s,u],[s,u,s,s,u],[u,u,s,s,s],[s,s,u,s,u],[u,s,u,s,s],[s,u,u,s,s],[s,s,s,u,u],[u,s,s,u,s],[s,u,s,u,s]]},SINGLE_CODE_ERROR:{value:.78,writable:!0},AVG_CODE_ERROR:{value:.38,writable:!0},MAX_CORRECTION_FACTOR:{value:5},FORMAT:{value:"i2of5"}};r.prototype=Object.create(c.a.prototype,f),r.prototype.constructor=r,r.prototype._matchPattern=function(e,t){if(this.config.normalizeBarSpaceWidth){var n,r=[0,0],o=[0,0],i=[0,0],a=this.MAX_CORRECTION_FACTOR,s=1/a;for(n=0;n<e.length;n++)r[n%2]+=e[n],o[n%2]+=t[n];for(i[0]=o[0]/r[0],i[1]=o[1]/r[1],i[0]=Math.max(Math.min(i[0],a),s),i[1]=Math.max(Math.min(i[1],a),s),this.barSpaceRatio=i,n=0;n<e.length;n++)e[n]*=this.barSpaceRatio[n%2]}return c.a.prototype._matchPattern.call(this,e,t)},r.prototype._findPattern=function(e,t,n,r){var o,i,a,c,s=[],u=this,f=0,d={error:Number.MAX_VALUE,code:-1,start:0,end:0},l=u.AVG_CODE_ERROR;for(n=n||!1,r=r||!1,t||(t=u._nextSet(u._row)),o=0;o<e.length;o++)s[o]=0;for(o=t;o<u._row.length;o++)if(u._row[o]^n)s[f]++;else{if(f===s.length-1){for(c=0,a=0;a<s.length;a++)c+=s[a];if(i=u._matchPattern(s,e),i<l)return d.error=i,d.start=o-c,d.end=o,d;if(!r)return null;for(a=0;a<s.length-2;a++)s[a]=s[a+2];s[s.length-2]=0,s[s.length-1]=0,f--}else f++;s[f]=1,n=!n}return null},r.prototype._findStart=function(){for(var e,t,n=this,r=n._nextSet(n._row),o=1;!t;){if(t=n._findPattern(n.START_PATTERN,r,!1,!0),!t)return null;if(o=Math.floor((t.end-t.start)/4),e=t.start-10*o,e>=0&&n._matchRange(e,t.start,0))return t;r=t.end,t=null}},r.prototype._verifyTrailingWhitespace=function(e){var t,n=this;return t=e.end+(e.end-e.start)/2,t<n._row.length&&n._matchRange(e.end,t,0)?e:null},r.prototype._findEnd=function(){var e,t,n=this;return n._row.reverse(),e=n._findPattern(n.STOP_PATTERN),n._row.reverse(),null===e?null:(t=e.start,e.start=n._row.length-e.end,e.end=n._row.length-t,null!==e?n._verifyTrailingWhitespace(e):null)},r.prototype._decodePair=function(e){var t,n,r=[],o=this;for(t=0;t<e.length;t++){if(n=o._decodeCode(e[t]),!n)return null;r.push(n)}return r},r.prototype._decodeCode=function(e){var t,n,r,o=this,i=0,a=o.AVG_CODE_ERROR,c={error:Number.MAX_VALUE,code:-1,start:0,end:0};for(t=0;t<e.length;t++)i+=e[t];for(r=0;r<o.CODE_PATTERN.length;r++)n=o._matchPattern(e,o.CODE_PATTERN[r]),n<c.error&&(c.code=r,c.error=n);if(c.error<a)return c},r.prototype._decodePayload=function(e,t,n){for(var r,o,i=this,a=0,c=e.length,s=[[0,0,0,0,0],[0,0,0,0,0]];a<c;){for(r=0;r<5;r++)s[0][r]=e[a]*this.barSpaceRatio[0],s[1][r]=e[a+1]*this.barSpaceRatio[1],a+=2;if(o=i._decodePair(s),!o)return null;for(r=0;r<o.length;r++)t.push(o[r].code+""),n.push(o[r])}return o},r.prototype._verifyCounterLength=function(e){return e.length%10===0},r.prototype._decode=function(){var e,t,n,r,o=this,i=[],a=[];return(e=o._findStart())?(a.push(e),(t=o._findEnd())?(r=o._fillCounters(e.end,t.start,!1),o._verifyCounterLength(r)&&(n=o._decodePayload(r,i,a))?i.length%2!==0||i.length<6?null:(a.push(t),{code:i.join(""),start:e.start,end:t.end,startInfo:e,decodedCodes:a}):null):null):null},r.CONFIG_KEYS={normalizeBarSpaceWidth:{type:"boolean",default:!1,description:"If true, the reader tries to normalize thewidth-difference between bars and spaces"}},t.a=r},function(e,t,n){"use strict";function r(e,t){o.a.call(this,e,t)}var o=n(5),i={CODE_FREQUENCY:{value:[[56,52,50,49,44,38,35,42,41,37],[7,11,13,14,19,25,28,21,22,26]]},STOP_PATTERN:{value:[1/6*7,1/6*7,1/6*7,1/6*7,1/6*7,1/6*7]},FORMAT:{value:"upc_e",writeable:!1}};r.prototype=Object.create(o.a.prototype,i),r.prototype.constructor=r,r.prototype._decodePayload=function(e,t,n){var r,o=this,i=0;for(r=0;r<6;r++){if(e=o._decodeCode(e.end),!e)return null;e.code>=o.CODE_G_START&&(e.code=e.code-o.CODE_G_START,i|=1<<5-r),t.push(e.code),n.push(e)}return o._determineParity(i,t)?e:null},r.prototype._determineParity=function(e,t){var n,r;for(r=0;r<this.CODE_FREQUENCY.length;r++)for(n=0;n<this.CODE_FREQUENCY[r].length;n++)if(e===this.CODE_FREQUENCY[r][n])return t.unshift(r),t.push(n),!0;return!1},r.prototype._convertToUPCA=function(e){var t=[e[0]],n=e[e.length-2];return t=n<=2?t.concat(e.slice(1,3)).concat([n,0,0,0,0]).concat(e.slice(3,6)):3===n?t.concat(e.slice(1,4)).concat([0,0,0,0,0]).concat(e.slice(4,6)):4===n?t.concat(e.slice(1,5)).concat([0,0,0,0,0,e[5]]):t.concat(e.slice(1,6)).concat([0,0,0,0,n]),t.push(e[e.length-1]),t},r.prototype._checksum=function(e){return o.a.prototype._checksum.call(this,this._convertToUPCA(e))},r.prototype._findEnd=function(e,t){return t=!0,o.a.prototype._findEnd.call(this,e,t)},r.prototype._verifyTrailingWhitespace=function(e){var t,n=this;if(t=e.end+(e.end-e.start)/2,t<n._row.length&&n._matchRange(e.end,t,0))return e},t.a=r},function(e,t,n){"use strict";function r(e,t){o.a.call(this,e,t)}var o=n(5),i={FORMAT:{value:"upc_a",writeable:!1}};r.prototype=Object.create(o.a.prototype,i),r.prototype.constructor=r,r.prototype._decode=function(){var e=o.a.prototype._decode.call(this);return e&&e.code&&13===e.code.length&&"0"===e.code.charAt(0)?(e.code=e.code.substring(1),e):null},t.a=r},function(e,t){function n(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}e.exports=n},function(e,t){function n(){var e=new Float32Array(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e}e.exports=n},function(e,t){function n(e,t){var n=t[0],r=t[1],o=t[2],i=t[3],a=n*i-o*r;return a?(a=1/a,e[0]=i*a,e[1]=-r*a,e[2]=-o*a,e[3]=n*a,e):null}e.exports=n},function(e,t){function n(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}e.exports=n},function(e,t){function n(e,t,n){var r=t[0],o=t[1];return e[0]=n[0]*r+n[2]*o,e[1]=n[1]*r+n[3]*o,e}e.exports=n},function(e,t){function n(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}e.exports=n},function(e,t,n){var r=n(4),o=n(1),i=r(o,"DataView");e.exports=i},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var o=n(156),i=n(157),a=n(158),c=n(159),s=n(160);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=c,r.prototype.set=s,e.exports=r},function(e,t,n){var r=n(4),o=n(1),i=r(o,"Promise");e.exports=i},function(e,t,n){var r=n(4),o=n(1),i=r(o,"Set");e.exports=i},function(e,t,n){var r=n(1),o=r.Uint8Array;e.exports=o},function(e,t,n){var r=n(4),o=n(1),i=r(o,"WeakMap");e.exports=i},function(e,t){function n(e,t){return e.set(t[0],t[1]),e}e.exports=n},function(e,t){function n(e,t){return e.add(t),e}e.exports=n},function(e,t){function n(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}e.exports=n},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}e.exports=n},function(e,t){function n(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}e.exports=n},function(e,t,n){function r(e,t){return e&&o(t,i(t),e)}var o=n(8),i=n(39);e.exports=r},function(e,t,n){function r(e,t){return e&&o(t,i(t),e)}var o=n(8),i=n(24);e.exports=r},function(e,t,n){function r(e,t,n,O,S,P){var D,M=t&C,I=t&E,N=t&T;if(n&&(D=S?n(e,O,S,P):n(e)),void 0!==D)return D;if(!w(e))return e;var z=b(e);if(z){if(D=g(e),!M)return f(e,D)}else{var L=v(e),U=L==A||L==j;if(_(e))return u(e,M);if(L==k||L==R||U&&!S){if(D=I||U?{}:y(e),!M)return I?l(e,s(D,e)):d(e,c(D,e))}else{if(!K[L])return S?e:{};D=m(e,L,r,M)}}P||(P=new o);var F=P.get(e);if(F)return F;P.set(e,D);var G=N?I?h:p:I?keysIn:x,B=z?void 0:G(e);return i(B||e,function(o,i){B&&(i=o,o=e[i]),a(D,i,r(o,t,n,i,e,P))}),D}var o=n(46),i=n(114),a=n(29),c=n(116),s=n(117),u=n(53),f=n(55),d=n(145),l=n(146),p=n(151),h=n(59),v=n(153),g=n(161),m=n(162),y=n(61),b=n(2),_=n(35),w=n(3),x=n(39),C=1,E=2,T=4,R="[object Arguments]",O="[object Array]",S="[object Boolean]",P="[object Date]",D="[object Error]",A="[object Function]",j="[object GeneratorFunction]",M="[object Map]",I="[object Number]",k="[object Object]",N="[object RegExp]",z="[object Set]",L="[object String]",U="[object Symbol]",F="[object WeakMap]",G="[object ArrayBuffer]",B="[object DataView]",W="[object Float32Array]",V="[object Float64Array]",H="[object Int8Array]",q="[object Int16Array]",X="[object Int32Array]",Y="[object Uint8Array]",$="[object Uint8ClampedArray]",Q="[object Uint16Array]",J="[object Uint32Array]",K={};K[R]=K[O]=K[G]=K[B]=K[S]=K[P]=K[W]=K[V]=K[H]=K[q]=K[X]=K[M]=K[I]=K[k]=K[N]=K[z]=K[L]=K[U]=K[Y]=K[$]=K[Q]=K[J]=!0,K[D]=K[A]=K[F]=!1,e.exports=r},function(e,t,n){var r=n(3),o=Object.create,i=function(){function e(){}return function(t){if(!r(t))return{};if(o)return o(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=i},function(e,t,n){function r(e,t,n,a,c){var s=-1,u=e.length;for(n||(n=i),c||(c=[]);++s<u;){var f=e[s];t>0&&n(f)?t>1?r(f,t-1,n,a,c):o(c,f):a||(c[c.length]=f)}return c}var o=n(28),i=n(163);e.exports=r},function(e,t,n){var r=n(149),o=r();e.exports=o},function(e,t){function n(e,t){return null!=e&&t in Object(e)}e.exports=n},function(e,t,n){function r(e){return i(e)&&o(e)==a}var o=n(6),i=n(9),a="[object Arguments]";e.exports=r},function(e,t,n){function r(e){if(!a(e)||i(e))return!1;var t=o(e)?h:u;return t.test(c(e))}var o=n(36),i=n(167),a=n(3),c=n(65),s=/[\\^$.*+?()[\]{}|]/g,u=/^\[object .+?Constructor\]$/,f=Function.prototype,d=Object.prototype,l=f.toString,p=d.hasOwnProperty,h=RegExp("^"+l.call(p).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},function(e,t,n){function r(e){return a(e)&&i(e.length)&&!!A[o(e)]}var o=n(6),i=n(37),a=n(9),c="[object Arguments]",s="[object Array]",u="[object Boolean]",f="[object Date]",d="[object Error]",l="[object Function]",p="[object Map]",h="[object Number]",v="[object Object]",g="[object RegExp]",m="[object Set]",y="[object String]",b="[object WeakMap]",_="[object ArrayBuffer]",w="[object DataView]",x="[object Float32Array]",C="[object Float64Array]",E="[object Int8Array]",T="[object Int16Array]",R="[object Int32Array]",O="[object Uint8Array]",S="[object Uint8ClampedArray]",P="[object Uint16Array]",D="[object Uint32Array]",A={};A[x]=A[C]=A[E]=A[T]=A[R]=A[O]=A[S]=A[P]=A[D]=!0,A[c]=A[s]=A[_]=A[u]=A[w]=A[f]=A[d]=A[l]=A[p]=A[h]=A[v]=A[g]=A[m]=A[y]=A[b]=!1,e.exports=r},function(e,t,n){function r(e){if(!o(e))return i(e);var t=[];for(var n in Object(e))c.call(e,n)&&"constructor"!=n&&t.push(n);return t}var o=n(34),i=n(180),a=Object.prototype,c=a.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){if(!o(e))return a(e);var t=i(e),n=[];for(var r in e)("constructor"!=r||!t&&s.call(e,r))&&n.push(r);return n}var o=n(3),i=n(34),a=n(181),c=Object.prototype,s=c.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t,n,f,d){e!==t&&a(t,function(a,u){if(s(a))d||(d=new o),c(e,t,u,n,r,f,d);else{var l=f?f(e[u],a,u+"",e,t,d):void 0;void 0===l&&(l=a),i(e,u,l)}},u)}var o=n(46),i=n(50),a=n(121),c=n(129),s=n(3),u=n(24);e.exports=r},function(e,t,n){function r(e,t,n,r,y,b,_){var w=e[n],x=t[n],C=_.get(x);if(C)return void o(e,n,C);var E=b?b(w,x,n+"",e,t,_):void 0,T=void 0===E;if(T){var R=f(x),O=!R&&l(x),S=!R&&!O&&g(x);E=x,R||O||S?f(w)?E=w:d(w)?E=c(w):O?(T=!1,E=i(x,!0)):S?(T=!1,E=a(x,!0)):E=[]:v(x)||u(x)?(E=w,u(w)?E=m(w):(!h(w)||r&&p(w))&&(E=s(x))):T=!1}T&&(_.set(x,E),y(E,x,r,b,_),_.delete(x)),o(e,n,E)}var o=n(50),i=n(53),a=n(54),c=n(55),s=n(61),u=n(22),f=n(2),d=n(196),l=n(35),p=n(36),h=n(3),v=n(67),g=n(68),m=n(202);e.exports=r},function(e,t,n){function r(e,t){return o(e,t,function(t,n){return i(e,n)})}var o=n(131),i=n(195);e.exports=r},function(e,t,n){function r(e,t,n){for(var r=-1,c=t.length,s={};++r<c;){var u=t[r],f=o(e,u);n(f,u)&&i(s,a(u,e),f)}return s}var o=n(51),i=n(133),a=n(7);e.exports=r},function(e,t,n){function r(e,t){return a(i(e,t,o),e+"")}var o=n(66),i=n(63),a=n(64);e.exports=r},function(e,t,n){function r(e,t,n,r){if(!c(e))return e;t=i(t,e);for(var u=-1,f=t.length,d=f-1,l=e;null!=l&&++u<f;){var p=s(t[u]),h=n;if(u!=d){var v=l[p];h=r?r(v,p,l):void 0,void 0===h&&(h=c(v)?v:a(t[u+1])?[]:{})}o(l,p,h),l=l[p]}return e}var o=n(29),i=n(7),a=n(18),c=n(3),s=n(20);e.exports=r},function(e,t,n){var r=n(193),o=n(56),i=n(66),a=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:i;e.exports=a},function(e,t){function n(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=Array(o);++r<o;)i[r]=e[r+t];return i}e.exports=n},function(e,t){function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}e.exports=n},function(e,t,n){function r(e){if("string"==typeof e)return e;if(a(e))return i(e,r)+"";if(c(e))return f?f.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}var o=n(12),i=n(48),a=n(2),c=n(38),s=1/0,u=o?o.prototype:void 0,f=u?u.toString:void 0;e.exports=r},function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},function(e,t,n){function r(e,t){return t=o(t,e),e=a(e,t),null==e||delete e[c(i(t))]}var o=n(7),i=n(197),a=n(184),c=n(20);e.exports=r},function(e,t,n){function r(e,t){var n=t?o(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var o=n(31);e.exports=r},function(e,t,n){function r(e,t,n){var r=t?n(a(e),c):a(e);return i(r,o,new e.constructor)}var o=n(111),i=n(49),a=n(178),c=1;e.exports=r},function(e,t){function n(e){var t=new e.constructor(e.source,r.exec(e));return t.lastIndex=e.lastIndex,t}var r=/\w*$/;e.exports=n},function(e,t,n){function r(e,t,n){var r=t?n(a(e),c):a(e);return i(r,o,new e.constructor)}var o=n(112),i=n(49),a=n(185),c=1;e.exports=r},function(e,t,n){function r(e){return a?Object(a.call(e)):{}}var o=n(12),i=o?o.prototype:void 0,a=i?i.valueOf:void 0;e.exports=r},function(e,t,n){function r(e,t){return o(e,i(e),t)}var o=n(8),i=n(33);e.exports=r},function(e,t,n){function r(e,t){return o(e,i(e),t)}var o=n(8),i=n(60);e.exports=r},function(e,t,n){var r=n(1),o=r["__core-js_shared__"];e.exports=o},function(e,t,n){function r(e){return o(function(t,n){var r=-1,o=n.length,a=o>1?n[o-1]:void 0,c=o>2?n[2]:void 0;for(a=e.length>3&&"function"==typeof a?(o--,a):void 0,c&&i(n[0],n[1],c)&&(a=o<3?void 0:a,o=1),t=Object(t);++r<o;){var s=n[r];s&&e(t,s,r,a)}return t})}var o=n(132),i=n(164);e.exports=r},function(e,t){function n(e){return function(t,n,r){for(var o=-1,i=Object(t),a=r(t),c=a.length;c--;){var s=a[e?c:++o];if(n(i[s],s,i)===!1)break}return t}}e.exports=n},function(e,t,n){function r(e){return o(e)?void 0:e}var o=n(67);e.exports=r},function(e,t,n){function r(e){return o(e,a,i)}var o=n(52),i=n(33),a=n(39);e.exports=r},function(e,t,n){function r(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[s]=n:delete e[s]),o}var o=n(12),i=Object.prototype,a=i.hasOwnProperty,c=i.toString,s=o?o.toStringTag:void 0;e.exports=r},function(e,t,n){var r=n(105),o=n(27),i=n(107),a=n(108),c=n(110),s=n(6),u=n(65),f="[object Map]",d="[object Object]",l="[object Promise]",p="[object Set]",h="[object WeakMap]",v="[object DataView]",g=u(r),m=u(o),y=u(i),b=u(a),_=u(c),w=s;(r&&w(new r(new ArrayBuffer(1)))!=v||o&&w(new o)!=f||i&&w(i.resolve())!=l||a&&w(new a)!=p||c&&w(new c)!=h)&&(w=function(e){var t=s(e),n=t==d?e.constructor:void 0,r=n?u(n):"";if(r)switch(r){case g:return v;case m:return f;case y:return l;case b:return p;case _:return h}return t}),e.exports=w},function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},function(e,t,n){function r(e,t,n){t=o(t,e);for(var r=-1,f=t.length,d=!1;++r<f;){var l=u(t[r]);if(!(d=null!=e&&n(e,l)))break;e=e[l]}return d||++r!=f?d:(f=null==e?0:e.length,!!f&&s(f)&&c(l,f)&&(a(e)||i(e)))}var o=n(7),i=n(22),a=n(2),c=n(18),s=n(37),u=n(20);e.exports=r},function(e,t,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(19);e.exports=r},function(e,t){function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=n},function(e,t,n){function r(e){var t=this.__data__;if(o){var n=t[e];return n===i?void 0:n}return c.call(t,e)?t[e]:void 0}var o=n(19),i="__lodash_hash_undefined__",a=Object.prototype,c=a.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){var t=this.__data__;return o?void 0!==t[e]:a.call(t,e)}var o=n(19),i=Object.prototype,a=i.hasOwnProperty;e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=o&&void 0===t?i:t,this}var o=n(19),i="__lodash_hash_undefined__";e.exports=r},function(e,t){function n(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&o.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var r=Object.prototype,o=r.hasOwnProperty;e.exports=n},function(e,t,n){function r(e,t,n,r){var D=e.constructor;switch(t){case b:return o(e);case d:case l:return new D(+e);case _:return i(e,r);case w:case x:case C:case E:case T:case R:case O:case S:case P:return f(e,r);case p:return a(e,r,n);case h:case m:return new D(e);case v:return c(e);case g:return s(e,r,n);case y:return u(e)}}var o=n(31),i=n(140),a=n(141),c=n(142),s=n(143),u=n(144),f=n(54),d="[object Boolean]",l="[object Date]",p="[object Map]",h="[object Number]",v="[object RegExp]",g="[object Set]",m="[object String]",y="[object Symbol]",b="[object ArrayBuffer]",_="[object DataView]",w="[object Float32Array]",x="[object Float64Array]",C="[object Int8Array]",E="[object Int16Array]",T="[object Int32Array]",R="[object Uint8Array]",O="[object Uint8ClampedArray]",S="[object Uint16Array]",P="[object Uint32Array]";e.exports=r},function(e,t,n){function r(e){return a(e)||i(e)||!!(c&&e&&e[c])}var o=n(12),i=n(22),a=n(2),c=o?o.isConcatSpreadable:void 0;e.exports=r},function(e,t,n){function r(e,t,n){if(!c(n))return!1;var r=typeof t;return!!("number"==r?i(n)&&a(t,n.length):"string"==r&&t in n)&&o(n[t],e)}var o=n(21),i=n(23),a=n(18),c=n(3);e.exports=r},function(e,t,n){function r(e,t){if(o(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||(c.test(e)||!a.test(e)||null!=t&&e in Object(t))}var o=n(2),i=n(38),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;e.exports=r},function(e,t){function n(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},function(e,t,n){function r(e){return!!i&&i in e}var o=n(147),i=function(){var e=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=r},function(e,t){function n(){this.__data__=[],this.size=0}e.exports=n},function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():a.call(t,n,1),--this.size,!0}var o=n(16),i=Array.prototype,a=i.splice;e.exports=r},function(e,t,n){function r(e){var t=this.__data__,n=o(t,e);return n<0?void 0:t[n][1]}var o=n(16);e.exports=r},function(e,t,n){function r(e){return o(this.__data__,e)>-1}var o=n(16);e.exports=r},function(e,t,n){function r(e,t){var n=this.__data__,r=o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var o=n(16);e.exports=r},function(e,t,n){function r(){this.size=0,this.__data__={hash:new o,map:new(a||i),string:new o}}var o=n(106),i=n(15),a=n(27);e.exports=r},function(e,t,n){function r(e){var t=o(this,e).delete(e);return this.size-=t?1:0,t}var o=n(17);e.exports=r},function(e,t,n){function r(e){return o(this,e).get(e)}var o=n(17);e.exports=r},function(e,t,n){function r(e){return o(this,e).has(e)}var o=n(17);e.exports=r},function(e,t,n){function r(e,t){var n=o(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var o=n(17);e.exports=r},function(e,t){function n(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}e.exports=n},function(e,t,n){function r(e){var t=o(e,function(e){return n.size===i&&n.clear(),e}),n=t.cache;return t}var o=n(198),i=500;e.exports=r},function(e,t,n){var r=n(62),o=r(Object.keys,Object);e.exports=o},function(e,t){function n(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}e.exports=n},function(e,t,n){(function(e){var r=n(58),o="object"==typeof t&&t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,a=i&&i.exports===o,c=a&&r.process,s=function(){try{return c&&c.binding&&c.binding("util")}catch(e){}}();e.exports=s}).call(t,n(41)(e))},function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},function(e,t,n){function r(e,t){return t.length<2?e:o(e,i(t,0,-1))}var o=n(51),i=n(135);e.exports=r},function(e,t){function n(e){var t=-1,n=Array(e.size);
return e.forEach(function(e){n[++t]=e}),n}e.exports=n},function(e,t){function n(e){var t=0,n=0;return function(){var a=i(),c=o-(a-n);if(n=a,c>0){if(++t>=r)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var r=800,o=16,i=Date.now;e.exports=n},function(e,t,n){function r(){this.__data__=new o,this.size=0}var o=n(15);e.exports=r},function(e,t){function n(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}e.exports=n},function(e,t){function n(e){return this.__data__.get(e)}e.exports=n},function(e,t){function n(e){return this.__data__.has(e)}e.exports=n},function(e,t,n){function r(e,t){var n=this.__data__;if(n instanceof o){var r=n.__data__;if(!i||r.length<c-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new a(r)}return n.set(e,t),this.size=n.size,this}var o=n(15),i=n(27),a=n(45),c=200;e.exports=r},function(e,t,n){var r=n(179),o=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,c=r(function(e){var t=[];return o.test(e)&&t.push(""),e.replace(i,function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)}),t});e.exports=c},function(e,t){function n(e){return function(){return e}}e.exports=n},function(e,t,n){function r(e){var t=null==e?0:e.length;return t?o(e,1):[]}var o=n(120);e.exports=r},function(e,t,n){function r(e,t){return null!=e&&i(e,t,o)}var o=n(122),i=n(155);e.exports=r},function(e,t,n){function r(e){return i(e)&&o(e)}var o=n(23),i=n(9);e.exports=r},function(e,t){function n(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}e.exports=n},function(e,t,n){function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(i);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(r.Cache||o),n}var o=n(45),i="Expected a function";r.Cache=o,e.exports=r},function(e,t,n){var r=n(48),o=n(118),i=n(139),a=n(7),c=n(8),s=n(150),u=n(57),f=n(59),d=1,l=2,p=4,h=u(function(e,t){var n={};if(null==e)return n;var u=!1;t=r(t,function(t){return t=a(t,e),u||(u=t.length>1),t}),c(e,f(e),n),u&&(n=o(n,d|l|p,s));for(var h=t.length;h--;)i(n,t[h]);return n});e.exports=h},function(e,t,n){var r=n(130),o=n(57),i=o(function(e,t){return null==e?{}:r(e,t)});e.exports=i},function(e,t){function n(){return!1}e.exports=n},function(e,t,n){function r(e){return o(e,i(e))}var o=n(8),i=n(24);e.exports=r},function(e,t,n){function r(e){return null==e?"":o(e)}var o=n(137);e.exports=r},function(e,t,n){"use strict";var r={};r.generateIdentifier=function(){return Math.random().toString(36).substr(2,10)},r.localCName=r.generateIdentifier(),r.splitLines=function(e){return e.trim().split("\n").map(function(e){return e.trim()})},r.splitSections=function(e){var t=e.split("\nm=");return t.map(function(e,t){return(t>0?"m="+e:e).trim()+"\r\n"})},r.matchPrefix=function(e,t){return r.splitLines(e).filter(function(e){return 0===e.indexOf(t)})},r.parseCandidate=function(e){var t;t=0===e.indexOf("a=candidate:")?e.substring(12).split(" "):e.substring(10).split(" ");for(var n={foundation:t[0],component:t[1],protocol:t[2].toLowerCase(),priority:parseInt(t[3],10),ip:t[4],port:parseInt(t[5],10),type:t[7]},r=8;r<t.length;r+=2)switch(t[r]){case"raddr":n.relatedAddress=t[r+1];break;case"rport":n.relatedPort=parseInt(t[r+1],10);break;case"tcptype":n.tcpType=t[r+1]}return n},r.writeCandidate=function(e){var t=[];t.push(e.foundation),t.push(e.component),t.push(e.protocol.toUpperCase()),t.push(e.priority),t.push(e.ip),t.push(e.port);var n=e.type;return t.push("typ"),t.push(n),"host"!==n&&e.relatedAddress&&e.relatedPort&&(t.push("raddr"),t.push(e.relatedAddress),t.push("rport"),t.push(e.relatedPort)),e.tcpType&&"tcp"===e.protocol.toLowerCase()&&(t.push("tcptype"),t.push(e.tcpType)),"candidate:"+t.join(" ")},r.parseRtpMap=function(e){var t=e.substr(9).split(" "),n={payloadType:parseInt(t.shift(),10)};return t=t[0].split("/"),n.name=t[0],n.clockRate=parseInt(t[1],10),n.numChannels=3===t.length?parseInt(t[2],10):1,n},r.writeRtpMap=function(e){var t=e.payloadType;return void 0!==e.preferredPayloadType&&(t=e.preferredPayloadType),"a=rtpmap:"+t+" "+e.name+"/"+e.clockRate+(1!==e.numChannels?"/"+e.numChannels:"")+"\r\n"},r.parseExtmap=function(e){var t=e.substr(9).split(" ");return{id:parseInt(t[0],10),uri:t[1]}},r.writeExtmap=function(e){return"a=extmap:"+(e.id||e.preferredId)+" "+e.uri+"\r\n"},r.parseFmtp=function(e){for(var t,n={},r=e.substr(e.indexOf(" ")+1).split(";"),o=0;o<r.length;o++)t=r[o].trim().split("="),n[t[0].trim()]=t[1];return n},r.writeFmtp=function(e){var t="",n=e.payloadType;if(void 0!==e.preferredPayloadType&&(n=e.preferredPayloadType),e.parameters&&Object.keys(e.parameters).length){var r=[];Object.keys(e.parameters).forEach(function(t){r.push(t+"="+e.parameters[t])}),t+="a=fmtp:"+n+" "+r.join(";")+"\r\n"}return t},r.parseRtcpFb=function(e){var t=e.substr(e.indexOf(" ")+1).split(" ");return{type:t.shift(),parameter:t.join(" ")}},r.writeRtcpFb=function(e){var t="",n=e.payloadType;return void 0!==e.preferredPayloadType&&(n=e.preferredPayloadType),e.rtcpFeedback&&e.rtcpFeedback.length&&e.rtcpFeedback.forEach(function(e){t+="a=rtcp-fb:"+n+" "+e.type+(e.parameter&&e.parameter.length?" "+e.parameter:"")+"\r\n"}),t},r.parseSsrcMedia=function(e){var t=e.indexOf(" "),n={ssrc:parseInt(e.substr(7,t-7),10)},r=e.indexOf(":",t);return r>-1?(n.attribute=e.substr(t+1,r-t-1),n.value=e.substr(r+1)):n.attribute=e.substr(t+1),n},r.getDtlsParameters=function(e,t){var n=r.splitLines(e);n=n.concat(r.splitLines(t));var o=n.filter(function(e){return 0===e.indexOf("a=fingerprint:")})[0].substr(14),i={role:"auto",fingerprints:[{algorithm:o.split(" ")[0],value:o.split(" ")[1]}]};return i},r.writeDtlsParameters=function(e,t){var n="a=setup:"+t+"\r\n";return e.fingerprints.forEach(function(e){n+="a=fingerprint:"+e.algorithm+" "+e.value+"\r\n"}),n},r.getIceParameters=function(e,t){var n=r.splitLines(e);n=n.concat(r.splitLines(t));var o={usernameFragment:n.filter(function(e){return 0===e.indexOf("a=ice-ufrag:")})[0].substr(12),password:n.filter(function(e){return 0===e.indexOf("a=ice-pwd:")})[0].substr(10)};return o},r.writeIceParameters=function(e){return"a=ice-ufrag:"+e.usernameFragment+"\r\na=ice-pwd:"+e.password+"\r\n"},r.parseRtpParameters=function(e){for(var t={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=r.splitLines(e),o=n[0].split(" "),i=3;i<o.length;i++){var a=o[i],c=r.matchPrefix(e,"a=rtpmap:"+a+" ")[0];if(c){var s=r.parseRtpMap(c),u=r.matchPrefix(e,"a=fmtp:"+a+" ");switch(s.parameters=u.length?r.parseFmtp(u[0]):{},s.rtcpFeedback=r.matchPrefix(e,"a=rtcp-fb:"+a+" ").map(r.parseRtcpFb),t.codecs.push(s),s.name.toUpperCase()){case"RED":case"ULPFEC":t.fecMechanisms.push(s.name.toUpperCase())}}}return r.matchPrefix(e,"a=extmap:").forEach(function(e){t.headerExtensions.push(r.parseExtmap(e))}),t},r.writeRtpDescription=function(e,t){var n="";return n+="m="+e+" ",n+=t.codecs.length>0?"9":"0",n+=" UDP/TLS/RTP/SAVPF ",n+=t.codecs.map(function(e){return void 0!==e.preferredPayloadType?e.preferredPayloadType:e.payloadType}).join(" ")+"\r\n",n+="c=IN IP4 0.0.0.0\r\n",n+="a=rtcp:9 IN IP4 0.0.0.0\r\n",t.codecs.forEach(function(e){n+=r.writeRtpMap(e),n+=r.writeFmtp(e),n+=r.writeRtcpFb(e)}),n+="a=rtcp-mux\r\n",t.headerExtensions.forEach(function(e){n+=r.writeExtmap(e)}),n},r.parseRtpEncodingParameters=function(e){var t,n=[],o=r.parseRtpParameters(e),i=o.fecMechanisms.indexOf("RED")!==-1,a=o.fecMechanisms.indexOf("ULPFEC")!==-1,c=r.matchPrefix(e,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(e){return"cname"===e.attribute}),s=c.length>0&&c[0].ssrc,u=r.matchPrefix(e,"a=ssrc-group:FID").map(function(e){var t=e.split(" ");return t.shift(),t.map(function(e){return parseInt(e,10)})});u.length>0&&u[0].length>1&&u[0][0]===s&&(t=u[0][1]),o.codecs.forEach(function(e){if("RTX"===e.name.toUpperCase()&&e.parameters.apt){var r={ssrc:s,codecPayloadType:parseInt(e.parameters.apt,10),rtx:{payloadType:e.payloadType,ssrc:t}};n.push(r),i&&(r=JSON.parse(JSON.stringify(r)),r.fec={ssrc:t,mechanism:a?"red+ulpfec":"red"},n.push(r))}}),0===n.length&&s&&n.push({ssrc:s});var f=r.matchPrefix(e,"b=");return f.length&&(0===f[0].indexOf("b=TIAS:")?f=parseInt(f[0].substr(7),10):0===f[0].indexOf("b=AS:")&&(f=parseInt(f[0].substr(5),10)),n.forEach(function(e){e.maxBitrate=f})),n},r.writeSessionBoilerplate=function(){return"v=0\r\no=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},r.writeMediaSection=function(e,t,n,o){var i=r.writeRtpDescription(e.kind,t);if(i+=r.writeIceParameters(e.iceGatherer.getLocalParameters()),i+=r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":"active"),i+="a=mid:"+e.mid+"\r\n",i+=e.rtpSender&&e.rtpReceiver?"a=sendrecv\r\n":e.rtpSender?"a=sendonly\r\n":e.rtpReceiver?"a=recvonly\r\n":"a=inactive\r\n",e.rtpSender){var a="msid:"+o.id+" "+e.rtpSender.track.id+"\r\n";i+="a="+a,i+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+a}return i+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+r.localCName+"\r\n"},r.getDirection=function(e,t){for(var n=r.splitLines(e),o=0;o<n.length;o++)switch(n[o]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return n[o].substr(2)}return t?r.getDirection(t):"sendrecv"},e.exports=r},function(e,t,n){"use strict";!function(){var t=n(0).log,r=n(0).browserDetails;e.exports.browserDetails=r,e.exports.extractVersion=n(0).extractVersion,e.exports.disableLog=n(0).disableLog;var o=n(206)||null,i=n(208)||null,a=n(210)||null,c=n(212)||null;switch(r.browser){case"opera":case"chrome":if(!o||!o.shimPeerConnection)return void t("Chrome shim is not included in this adapter release.");t("adapter.js shimming chrome."),e.exports.browserShim=o,o.shimGetUserMedia(),o.shimMediaStream(),o.shimSourceObject(),o.shimPeerConnection(),o.shimOnTrack();break;case"firefox":if(!a||!a.shimPeerConnection)return void t("Firefox shim is not included in this adapter release.");t("adapter.js shimming firefox."),e.exports.browserShim=a,a.shimGetUserMedia(),a.shimSourceObject(),a.shimPeerConnection(),a.shimOnTrack();break;case"edge":if(!i||!i.shimPeerConnection)return void t("MS edge shim is not included in this adapter release.");t("adapter.js shimming edge."),e.exports.browserShim=i,i.shimGetUserMedia(),i.shimPeerConnection();break;case"safari":if(!c)return void t("Safari shim is not included in this adapter release.");t("adapter.js shimming safari."),e.exports.browserShim=c,c.shimGetUserMedia();break;default:t("Unsupported browser!")}}()},function(e,t,n){"use strict";var r=n(0).log,o=n(0).browserDetails,i={shimMediaStream:function(){window.MediaStream=window.MediaStream||window.webkitMediaStream},shimOnTrack:function(){"object"!=typeof window||!window.RTCPeerConnection||"ontrack"in window.RTCPeerConnection.prototype||Object.defineProperty(window.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(e){var t=this;this._ontrack&&(this.removeEventListener("track",this._ontrack),this.removeEventListener("addstream",this._ontrackpoly)),this.addEventListener("track",this._ontrack=e),this.addEventListener("addstream",this._ontrackpoly=function(e){e.stream.addEventListener("addtrack",function(n){var r=new Event("track");r.track=n.track,r.receiver={track:n.track},r.streams=[e.stream],t.dispatchEvent(r)}),e.stream.getTracks().forEach(function(t){var n=new Event("track");n.track=t,n.receiver={track:t},n.streams=[e.stream],this.dispatchEvent(n)}.bind(this))}.bind(this))}})},shimSourceObject:function(){"object"==typeof window&&(!window.HTMLMediaElement||"srcObject"in window.HTMLMediaElement.prototype||Object.defineProperty(window.HTMLMediaElement.prototype,"srcObject",{get:function(){return this._srcObject},set:function(e){var t=this;return this._srcObject=e,this.src&&URL.revokeObjectURL(this.src),e?(this.src=URL.createObjectURL(e),e.addEventListener("addtrack",function(){t.src&&URL.revokeObjectURL(t.src),t.src=URL.createObjectURL(e)}),void e.addEventListener("removetrack",function(){t.src&&URL.revokeObjectURL(t.src),t.src=URL.createObjectURL(e)})):void(this.src="")}}))},shimPeerConnection:function(){window.RTCPeerConnection=function(e,t){r("PeerConnection"),e&&e.iceTransportPolicy&&(e.iceTransports=e.iceTransportPolicy);var n=new webkitRTCPeerConnection(e,t),o=n.getStats.bind(n);return n.getStats=function(e,t,n){var r=this,i=arguments;if(arguments.length>0&&"function"==typeof e)return o(e,t);var a=function(e){var t={},n=e.result();return n.forEach(function(e){var n={id:e.id,timestamp:e.timestamp,type:e.type};e.names().forEach(function(t){n[t]=e.stat(t)}),t[n.id]=n}),t},c=function(e,t){var n=new Map(Object.keys(e).map(function(t){return[t,e[t]]}));return t=t||e,Object.keys(t).forEach(function(e){n[e]=t[e]}),n};if(arguments.length>=2){var s=function(e){i[1](c(a(e)))};return o.apply(this,[s,arguments[0]])}return new Promise(function(t,n){1===i.length&&"object"==typeof e?o.apply(r,[function(e){t(c(a(e)))},n]):o.apply(r,[function(e){t(c(a(e),e.result()))},n])}).then(t,n)},n},window.RTCPeerConnection.prototype=webkitRTCPeerConnection.prototype,webkitRTCPeerConnection.generateCertificate&&Object.defineProperty(window.RTCPeerConnection,"generateCertificate",{get:function(){return webkitRTCPeerConnection.generateCertificate}}),["createOffer","createAnswer"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=this;if(arguments.length<1||1===arguments.length&&"object"==typeof arguments[0]){var n=1===arguments.length?arguments[0]:void 0;return new Promise(function(r,o){t.apply(e,[r,o,n])})}return t.apply(this,arguments)}}),o.version<51&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=arguments,n=this,r=new Promise(function(r,o){t.apply(n,[e[0],r,o])});return e.length<2?r:r.then(function(){e[1].apply(null,[])},function(t){e.length>=3&&e[2].apply(null,[t])})}}),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){return arguments[0]=new("addIceCandidate"===e?RTCIceCandidate:RTCSessionDescription)(arguments[0]),t.apply(this,arguments)}});var e=RTCPeerConnection.prototype.addIceCandidate;RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?e.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}};e.exports={shimMediaStream:i.shimMediaStream,shimOnTrack:i.shimOnTrack,shimSourceObject:i.shimSourceObject,shimPeerConnection:i.shimPeerConnection,shimGetUserMedia:n(207)}},function(e,t,n){"use strict";var r=n(0).log;e.exports=function(){var e=function(e){if("object"!=typeof e||e.mandatory||e.optional)return e;var t={};return Object.keys(e).forEach(function(n){if("require"!==n&&"advanced"!==n&&"mediaSource"!==n){var r="object"==typeof e[n]?e[n]:{ideal:e[n]};void 0!==r.exact&&"number"==typeof r.exact&&(r.min=r.max=r.exact);var o=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):"deviceId"===t?"sourceId":t};if(void 0!==r.ideal){t.optional=t.optional||[];var i={};"number"==typeof r.ideal?(i[o("min",n)]=r.ideal,t.optional.push(i),i={},i[o("max",n)]=r.ideal,t.optional.push(i)):(i[o("",n)]=r.ideal,t.optional.push(i))}void 0!==r.exact&&"number"!=typeof r.exact?(t.mandatory=t.mandatory||{},t.mandatory[o("",n)]=r.exact):["min","max"].forEach(function(e){void 0!==r[e]&&(t.mandatory=t.mandatory||{},t.mandatory[o(e,n)]=r[e])})}}),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t},t=function(t,n){if(t=JSON.parse(JSON.stringify(t)),t&&t.audio&&(t.audio=e(t.audio)),t&&"object"==typeof t.video){var o=t.video.facingMode;if(o=o&&("object"==typeof o?o:{ideal:o}),o&&("user"===o.exact||"environment"===o.exact||"user"===o.ideal||"environment"===o.ideal)&&(!navigator.mediaDevices.getSupportedConstraints||!navigator.mediaDevices.getSupportedConstraints().facingMode)&&(delete t.video.facingMode,"environment"===o.exact||"environment"===o.ideal))return navigator.mediaDevices.enumerateDevices().then(function(i){i=i.filter(function(e){return"videoinput"===e.kind});var a=i.find(function(e){return e.label.toLowerCase().indexOf("back")!==-1})||i.length&&i[i.length-1];return a&&(t.video.deviceId=o.exact?{exact:a.deviceId}:{ideal:a.deviceId}),t.video=e(t.video),r("chrome: "+JSON.stringify(t)),n(t)});t.video=e(t.video)}return r("chrome: "+JSON.stringify(t)),n(t)},n=function(e){return{name:{PermissionDeniedError:"NotAllowedError",ConstraintNotSatisfiedError:"OverconstrainedError"}[e.name]||e.name,message:e.message,constraint:e.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},o=function(e,r,o){t(e,function(e){navigator.webkitGetUserMedia(e,r,function(e){o(n(e))})})};navigator.getUserMedia=o;var i=function(e){return new Promise(function(t,n){navigator.getUserMedia(e,t,n)})};if(navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:i,enumerateDevices:function(){return new Promise(function(e){var t={audio:"audioinput",video:"videoinput"};return MediaStreamTrack.getSources(function(n){e(n.map(function(e){return{label:e.label,kind:t[e.kind],deviceId:e.id,groupId:""}}))})})}}),navigator.mediaDevices.getUserMedia){var a=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(e){return t(e,function(e){return a(e).then(function(t){if(e.audio&&!t.getAudioTracks().length||e.video&&!t.getVideoTracks().length)throw t.getTracks().forEach(function(e){e.stop()}),new DOMException("","NotFoundError");return t},function(e){return Promise.reject(n(e))})})}}else navigator.mediaDevices.getUserMedia=function(e){return i(e)};"undefined"==typeof navigator.mediaDevices.addEventListener&&(navigator.mediaDevices.addEventListener=function(){r("Dummy mediaDevices.addEventListener called.")}),"undefined"==typeof navigator.mediaDevices.removeEventListener&&(navigator.mediaDevices.removeEventListener=function(){r("Dummy mediaDevices.removeEventListener called.")})}},function(e,t,n){"use strict";var r=n(204),o=n(0).browserDetails,i={shimPeerConnection:function(){if(window.RTCIceGatherer){window.RTCIceCandidate||(window.RTCIceCandidate=function(e){return e}),window.RTCSessionDescription||(window.RTCSessionDescription=function(e){return e});var e=Object.getOwnPropertyDescriptor(MediaStreamTrack.prototype,"enabled");Object.defineProperty(MediaStreamTrack.prototype,"enabled",{set:function(t){e.set.call(this,t);var n=new Event("enabled");n.enabled=t,this.dispatchEvent(n)}})}window.RTCPeerConnection=function(e){var t=this,n=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){t[e]=n[e].bind(n)}),this.onicecandidate=null,this.onaddstream=null,this.ontrack=null,this.onremovestream=null,this.onsignalingstatechange=null,this.oniceconnectionstatechange=null,this.onnegotiationneeded=null,this.ondatachannel=null,this.localStreams=[],this.remoteStreams=[],this.getLocalStreams=function(){return t.localStreams},this.getRemoteStreams=function(){return t.remoteStreams},this.localDescription=new RTCSessionDescription({type:"",sdp:""}),this.remoteDescription=new RTCSessionDescription({type:"",sdp:""}),this.signalingState="stable",this.iceConnectionState="new",this.iceGatheringState="new",this.iceOptions={gatherPolicy:"all",iceServers:[]},e&&e.iceTransportPolicy)switch(e.iceTransportPolicy){case"all":case"relay":this.iceOptions.gatherPolicy=e.iceTransportPolicy;break;case"none":throw new TypeError('iceTransportPolicy "none" not supported')}if(this.usingBundle=e&&"max-bundle"===e.bundlePolicy,e&&e.iceServers){var r=JSON.parse(JSON.stringify(e.iceServers));this.iceOptions.iceServers=r.filter(function(e){if(e&&e.urls){var t=e.urls;return"string"==typeof t&&(t=[t]),t=t.filter(function(e){return 0===e.indexOf("turn:")&&e.indexOf("transport=udp")!==-1&&e.indexOf("turn:[")===-1||0===e.indexOf("stun:")&&o.version>=14393})[0],!!t}return!1})}this._config=e,this.transceivers=[],this._localIceCandidatesBuffer=[]},window.RTCPeerConnection.prototype._emitBufferedCandidates=function(){var e=this,t=r.splitSections(e.localDescription.sdp);this._localIceCandidatesBuffer.forEach(function(n){var r=!n.candidate||0===Object.keys(n.candidate).length;if(r)for(var o=1;o<t.length;o++)t[o].indexOf("\r\na=end-of-candidates\r\n")===-1&&(t[o]+="a=end-of-candidates\r\n");else n.candidate.candidate.indexOf("typ endOfCandidates")===-1&&(t[n.candidate.sdpMLineIndex+1]+="a="+n.candidate.candidate+"\r\n");if(e.localDescription.sdp=t.join(""),e.dispatchEvent(n),null!==e.onicecandidate&&e.onicecandidate(n),!n.candidate&&"complete"!==e.iceGatheringState){var i=e.transceivers.every(function(e){return e.iceGatherer&&"completed"===e.iceGatherer.state});i&&(e.iceGatheringState="complete")}}),this._localIceCandidatesBuffer=[]},window.RTCPeerConnection.prototype.getConfiguration=function(){return this._config},window.RTCPeerConnection.prototype.addStream=function(e){var t=e.clone();e.getTracks().forEach(function(e,n){var r=t.getTracks()[n];e.addEventListener("enabled",function(e){r.enabled=e.enabled})}),this.localStreams.push(t),this._maybeFireNegotiationNeeded()},window.RTCPeerConnection.prototype.removeStream=function(e){var t=this.localStreams.indexOf(e);t>-1&&(this.localStreams.splice(t,1),this._maybeFireNegotiationNeeded())},window.RTCPeerConnection.prototype.getSenders=function(){return this.transceivers.filter(function(e){return!!e.rtpSender}).map(function(e){return e.rtpSender})},window.RTCPeerConnection.prototype.getReceivers=function(){return this.transceivers.filter(function(e){return!!e.rtpReceiver}).map(function(e){return e.rtpReceiver})},window.RTCPeerConnection.prototype._getCommonCapabilities=function(e,t){var n={codecs:[],headerExtensions:[],fecMechanisms:[]};return e.codecs.forEach(function(e){for(var r=0;r<t.codecs.length;r++){var o=t.codecs[r];if(e.name.toLowerCase()===o.name.toLowerCase()&&e.clockRate===o.clockRate){o.numChannels=Math.min(e.numChannels,o.numChannels),n.codecs.push(o),o.rtcpFeedback=o.rtcpFeedback.filter(function(t){for(var n=0;n<e.rtcpFeedback.length;n++)if(e.rtcpFeedback[n].type===t.type&&e.rtcpFeedback[n].parameter===t.parameter)return!0;return!1});break}}}),e.headerExtensions.forEach(function(e){for(var r=0;r<t.headerExtensions.length;r++){var o=t.headerExtensions[r];if(e.uri===o.uri){n.headerExtensions.push(o);break}}}),n},window.RTCPeerConnection.prototype._createIceAndDtlsTransports=function(e,t){var n=this,o=new RTCIceGatherer(n.iceOptions),i=new RTCIceTransport(o);o.onlocalcandidate=function(a){var c=new Event("icecandidate");c.candidate={sdpMid:e,sdpMLineIndex:t};var s=a.candidate,u=!s||0===Object.keys(s).length;u?(void 0===o.state&&(o.state="completed"),c.candidate.candidate="candidate:1 1 udp 1 0.0.0.0 9 typ endOfCandidates"):(s.component="RTCP"===i.component?2:1,c.candidate.candidate=r.writeCandidate(s));var f=r.splitSections(n.localDescription.sdp);c.candidate.candidate.indexOf("typ endOfCandidates")===-1?f[c.candidate.sdpMLineIndex+1]+="a="+c.candidate.candidate+"\r\n":f[c.candidate.sdpMLineIndex+1]+="a=end-of-candidates\r\n",n.localDescription.sdp=f.join("");var d=n.transceivers.every(function(e){return e.iceGatherer&&"completed"===e.iceGatherer.state});switch(n.iceGatheringState){case"new":n._localIceCandidatesBuffer.push(c),u&&d&&n._localIceCandidatesBuffer.push(new Event("icecandidate"));break;case"gathering":n._emitBufferedCandidates(),n.dispatchEvent(c),null!==n.onicecandidate&&n.onicecandidate(c),d&&(n.dispatchEvent(new Event("icecandidate")),null!==n.onicecandidate&&n.onicecandidate(new Event("icecandidate")),n.iceGatheringState="complete");break;case"complete":}},i.onicestatechange=function(){n._updateConnectionState()};var a=new RTCDtlsTransport(i);return a.ondtlsstatechange=function(){n._updateConnectionState()},a.onerror=function(){a.state="failed",n._updateConnectionState()},{iceGatherer:o,iceTransport:i,dtlsTransport:a}},window.RTCPeerConnection.prototype._transceive=function(e,t,n){var o=this._getCommonCapabilities(e.localCapabilities,e.remoteCapabilities);t&&e.rtpSender&&(o.encodings=e.sendEncodingParameters,o.rtcp={cname:r.localCName},e.recvEncodingParameters.length&&(o.rtcp.ssrc=e.recvEncodingParameters[0].ssrc),e.rtpSender.send(o)),n&&e.rtpReceiver&&("video"===e.kind&&e.recvEncodingParameters&&e.recvEncodingParameters.forEach(function(e){delete e.rtx}),o.encodings=e.recvEncodingParameters,o.rtcp={cname:e.cname},e.sendEncodingParameters.length&&(o.rtcp.ssrc=e.sendEncodingParameters[0].ssrc),e.rtpReceiver.receive(o))},window.RTCPeerConnection.prototype.setLocalDescription=function(e){var t,n,o=this;if("offer"===e.type)this._pendingOffer&&(t=r.splitSections(e.sdp),n=t.shift(),t.forEach(function(e,t){var n=r.parseRtpParameters(e);o._pendingOffer[t].localCapabilities=n}),this.transceivers=this._pendingOffer,delete this._pendingOffer);else if("answer"===e.type){t=r.splitSections(o.remoteDescription.sdp),n=t.shift();var i=r.matchPrefix(n,"a=ice-lite").length>0;t.forEach(function(e,t){var a=o.transceivers[t],c=a.iceGatherer,s=a.iceTransport,u=a.dtlsTransport,f=a.localCapabilities,d=a.remoteCapabilities,l="0"===e.split("\n",1)[0].split(" ",2)[1];if(!l&&!a.isDatachannel){var p=r.getIceParameters(e,n);if(i){var h=r.matchPrefix(e,"a=candidate:").map(function(e){return r.parseCandidate(e)}).filter(function(e){return"1"===e.component});h.length&&s.setRemoteCandidates(h)}var v=r.getDtlsParameters(e,n);i&&(v.role="server"),o.usingBundle&&0!==t||(s.start(c,p,i?"controlling":"controlled"),u.start(v));var g=o._getCommonCapabilities(f,d);o._transceive(a,g.codecs.length>0,!1)}})}switch(this.localDescription={type:e.type,sdp:e.sdp},e.type){case"offer":this._updateSignalingState("have-local-offer");break;case"answer":this._updateSignalingState("stable");break;default:throw new TypeError('unsupported type "'+e.type+'"')}var a=arguments.length>1&&"function"==typeof arguments[1];if(a){var c=arguments[1];window.setTimeout(function(){c(),"new"===o.iceGatheringState&&(o.iceGatheringState="gathering"),o._emitBufferedCandidates()},0)}var s=Promise.resolve();return s.then(function(){a||("new"===o.iceGatheringState&&(o.iceGatheringState="gathering"),window.setTimeout(o._emitBufferedCandidates.bind(o),500))}),s},window.RTCPeerConnection.prototype.setRemoteDescription=function(e){var t=this,n=new MediaStream,o=[],i=r.splitSections(e.sdp),a=i.shift(),c=r.matchPrefix(a,"a=ice-lite").length>0;switch(this.usingBundle=r.matchPrefix(a,"a=group:BUNDLE ").length>0,i.forEach(function(i,s){var u=r.splitLines(i),f=u[0].substr(2).split(" "),d=f[0],l="0"===f[1],p=r.getDirection(i,a),h=r.matchPrefix(i,"a=mid:");if(h=h.length?h[0].substr(6):r.generateIdentifier(),"application"===d&&"DTLS/SCTP"===f[2])return void(t.transceivers[s]={mid:h,isDatachannel:!0});var v,g,m,y,b,_,w,x,C,E,T,R,O=r.parseRtpParameters(i);l||(T=r.getIceParameters(i,a),R=r.getDtlsParameters(i,a),R.role="client"),x=r.parseRtpEncodingParameters(i);var S,P=r.matchPrefix(i,"a=ssrc:").map(function(e){return r.parseSsrcMedia(e)}).filter(function(e){return"cname"===e.attribute})[0];P&&(S=P.value);var D=r.matchPrefix(i,"a=end-of-candidates",a).length>0,A=r.matchPrefix(i,"a=candidate:").map(function(e){return r.parseCandidate(e)}).filter(function(e){return"1"===e.component});if("offer"!==e.type||l)"answer"!==e.type||l||(v=t.transceivers[s],g=v.iceGatherer,m=v.iceTransport,y=v.dtlsTransport,b=v.rtpSender,_=v.rtpReceiver,w=v.sendEncodingParameters,C=v.localCapabilities,t.transceivers[s].recvEncodingParameters=x,t.transceivers[s].remoteCapabilities=O,t.transceivers[s].cname=S,(c||D)&&A.length&&m.setRemoteCandidates(A),t.usingBundle&&0!==s||(m.start(g,T,"controlling"),y.start(R)),t._transceive(v,"sendrecv"===p||"recvonly"===p,"sendrecv"===p||"sendonly"===p),!_||"sendrecv"!==p&&"sendonly"!==p?delete v.rtpReceiver:(E=_.track,o.push([E,_]),n.addTrack(E)));else{var j=t.usingBundle&&s>0?{iceGatherer:t.transceivers[0].iceGatherer,iceTransport:t.transceivers[0].iceTransport,dtlsTransport:t.transceivers[0].dtlsTransport}:t._createIceAndDtlsTransports(h,s);if(D&&j.iceTransport.setRemoteCandidates(A),C=RTCRtpReceiver.getCapabilities(d),C.codecs=C.codecs.filter(function(e){return"rtx"!==e.name}),w=[{ssrc:1001*(2*s+2)}],_=new RTCRtpReceiver(j.dtlsTransport,d),E=_.track,o.push([E,_]),n.addTrack(E),t.localStreams.length>0&&t.localStreams[0].getTracks().length>=s){var M;"audio"===d?M=t.localStreams[0].getAudioTracks()[0]:"video"===d&&(M=t.localStreams[0].getVideoTracks()[0]),M&&(b=new RTCRtpSender(M,j.dtlsTransport))}t.transceivers[s]={iceGatherer:j.iceGatherer,iceTransport:j.iceTransport,dtlsTransport:j.dtlsTransport,localCapabilities:C,remoteCapabilities:O,rtpSender:b,rtpReceiver:_,kind:d,mid:h,cname:S,sendEncodingParameters:w,recvEncodingParameters:x},t._transceive(t.transceivers[s],!1,"sendrecv"===p||"sendonly"===p)}}),this.remoteDescription={type:e.type,sdp:e.sdp},e.type){case"offer":this._updateSignalingState("have-remote-offer");break;case"answer":this._updateSignalingState("stable");break;default:throw new TypeError('unsupported type "'+e.type+'"')}return n.getTracks().length&&(t.remoteStreams.push(n),window.setTimeout(function(){var e=new Event("addstream");e.stream=n,t.dispatchEvent(e),null!==t.onaddstream&&window.setTimeout(function(){t.onaddstream(e)},0),o.forEach(function(r){var o=r[0],i=r[1],a=new Event("track");a.track=o,a.receiver=i,a.streams=[n],t.dispatchEvent(e),null!==t.ontrack&&window.setTimeout(function(){t.ontrack(a)},0)})},0)),arguments.length>1&&"function"==typeof arguments[1]&&window.setTimeout(arguments[1],0),Promise.resolve()},window.RTCPeerConnection.prototype.close=function(){this.transceivers.forEach(function(e){e.iceTransport&&e.iceTransport.stop(),e.dtlsTransport&&e.dtlsTransport.stop(),e.rtpSender&&e.rtpSender.stop(),e.rtpReceiver&&e.rtpReceiver.stop()}),this._updateSignalingState("closed")},window.RTCPeerConnection.prototype._updateSignalingState=function(e){this.signalingState=e;var t=new Event("signalingstatechange");this.dispatchEvent(t),null!==this.onsignalingstatechange&&this.onsignalingstatechange(t)},window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded=function(){var e=new Event("negotiationneeded");this.dispatchEvent(e),null!==this.onnegotiationneeded&&this.onnegotiationneeded(e)},window.RTCPeerConnection.prototype._updateConnectionState=function(){var e,t=this,n={new:0,closed:0,connecting:0,checking:0,connected:0,completed:0,failed:0};if(this.transceivers.forEach(function(e){n[e.iceTransport.state]++,n[e.dtlsTransport.state]++}),n.connected+=n.completed,e="new",n.failed>0?e="failed":n.connecting>0||n.checking>0?e="connecting":n.disconnected>0?e="disconnected":n.new>0?e="new":(n.connected>0||n.completed>0)&&(e="connected"),e!==t.iceConnectionState){t.iceConnectionState=e;var r=new Event("iceconnectionstatechange");this.dispatchEvent(r),null!==this.oniceconnectionstatechange&&this.oniceconnectionstatechange(r)}},window.RTCPeerConnection.prototype.createOffer=function(){var e=this;if(this._pendingOffer)throw new Error("createOffer called while there is a pending offer.");var t;1===arguments.length&&"function"!=typeof arguments[0]?t=arguments[0]:3===arguments.length&&(t=arguments[2]);var n=[],o=0,i=0;if(this.localStreams.length&&(o=this.localStreams[0].getAudioTracks().length,i=this.localStreams[0].getVideoTracks().length),t){if(t.mandatory||t.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");void 0!==t.offerToReceiveAudio&&(o=t.offerToReceiveAudio),void 0!==t.offerToReceiveVideo&&(i=t.offerToReceiveVideo)}for(this.localStreams.length&&this.localStreams[0].getTracks().forEach(function(e){n.push({kind:e.kind,track:e,wantReceive:"audio"===e.kind?o>0:i>0}),"audio"===e.kind?o--:"video"===e.kind&&i--});o>0||i>0;)o>0&&(n.push({kind:"audio",wantReceive:!0}),o--),i>0&&(n.push({kind:"video",wantReceive:!0
}),i--);var a=r.writeSessionBoilerplate(),c=[];n.forEach(function(t,n){var o=t.track,i=t.kind,a=r.generateIdentifier(),s=e.usingBundle&&n>0?{iceGatherer:c[0].iceGatherer,iceTransport:c[0].iceTransport,dtlsTransport:c[0].dtlsTransport}:e._createIceAndDtlsTransports(a,n),u=RTCRtpSender.getCapabilities(i);u.codecs=u.codecs.filter(function(e){return"rtx"!==e.name}),u.codecs.forEach(function(e){"H264"===e.name&&void 0===e.parameters["level-asymmetry-allowed"]&&(e.parameters["level-asymmetry-allowed"]="1")});var f,d,l=[{ssrc:1001*(2*n+1)}];o&&(f=new RTCRtpSender(o,s.dtlsTransport)),t.wantReceive&&(d=new RTCRtpReceiver(s.dtlsTransport,i)),c[n]={iceGatherer:s.iceGatherer,iceTransport:s.iceTransport,dtlsTransport:s.dtlsTransport,localCapabilities:u,remoteCapabilities:null,rtpSender:f,rtpReceiver:d,kind:i,mid:a,sendEncodingParameters:l,recvEncodingParameters:null}}),this.usingBundle&&(a+="a=group:BUNDLE "+c.map(function(e){return e.mid}).join(" ")+"\r\n"),n.forEach(function(t,n){var o=c[n];a+=r.writeMediaSection(o,o.localCapabilities,"offer",e.localStreams[0])}),this._pendingOffer=c;var s=new RTCSessionDescription({type:"offer",sdp:a});return arguments.length&&"function"==typeof arguments[0]&&window.setTimeout(arguments[0],0,s),Promise.resolve(s)},window.RTCPeerConnection.prototype.createAnswer=function(){var e=this,t=r.writeSessionBoilerplate();this.usingBundle&&(t+="a=group:BUNDLE "+this.transceivers.map(function(e){return e.mid}).join(" ")+"\r\n"),this.transceivers.forEach(function(n){if(n.isDatachannel)return void(t+="m=application 0 DTLS/SCTP 5000\r\nc=IN IP4 0.0.0.0\r\na=mid:"+n.mid+"\r\n");var o=e._getCommonCapabilities(n.localCapabilities,n.remoteCapabilities);t+=r.writeMediaSection(n,o,"answer",e.localStreams[0])});var n=new RTCSessionDescription({type:"answer",sdp:t});return arguments.length&&"function"==typeof arguments[0]&&window.setTimeout(arguments[0],0,n),Promise.resolve(n)},window.RTCPeerConnection.prototype.addIceCandidate=function(e){if(e){var t=e.sdpMLineIndex;if(e.sdpMid)for(var n=0;n<this.transceivers.length;n++)if(this.transceivers[n].mid===e.sdpMid){t=n;break}var o=this.transceivers[t];if(o){var i=Object.keys(e.candidate).length>0?r.parseCandidate(e.candidate):{};if("tcp"===i.protocol&&(0===i.port||9===i.port))return;if("1"!==i.component)return;"endOfCandidates"===i.type&&(i={}),o.iceTransport.addRemoteCandidate(i);var a=r.splitSections(this.remoteDescription.sdp);a[t+1]+=(i.type?e.candidate.trim():"a=end-of-candidates")+"\r\n",this.remoteDescription.sdp=a.join("")}}else this.transceivers.forEach(function(e){e.iceTransport.addRemoteCandidate({})});return arguments.length>1&&"function"==typeof arguments[1]&&window.setTimeout(arguments[1],0),Promise.resolve()},window.RTCPeerConnection.prototype.getStats=function(){var e=[];this.transceivers.forEach(function(t){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach(function(n){t[n]&&e.push(t[n].getStats())})});var t=arguments.length>1&&"function"==typeof arguments[1]&&arguments[1];return new Promise(function(n){var r=new Map;Promise.all(e).then(function(e){e.forEach(function(e){Object.keys(e).forEach(function(t){r.set(t,e[t]),r[t]=e[t]})}),t&&window.setTimeout(t,0,r),n(r)})})}}};e.exports={shimPeerConnection:i.shimPeerConnection,shimGetUserMedia:n(209)}},function(e,t,n){"use strict";e.exports=function(){var e=function(e){return{name:{PermissionDeniedError:"NotAllowedError"}[e.name]||e.name,message:e.message,constraint:e.constraint,toString:function(){return this.name}}},t=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(n){return t(n).catch(function(t){return Promise.reject(e(t))})}}},function(e,t,n){"use strict";var r=n(0).browserDetails,o={shimOnTrack:function(){"object"!=typeof window||!window.RTCPeerConnection||"ontrack"in window.RTCPeerConnection.prototype||Object.defineProperty(window.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(e){this._ontrack&&(this.removeEventListener("track",this._ontrack),this.removeEventListener("addstream",this._ontrackpoly)),this.addEventListener("track",this._ontrack=e),this.addEventListener("addstream",this._ontrackpoly=function(e){e.stream.getTracks().forEach(function(t){var n=new Event("track");n.track=t,n.receiver={track:t},n.streams=[e.stream],this.dispatchEvent(n)}.bind(this))}.bind(this))}})},shimSourceObject:function(){"object"==typeof window&&(!window.HTMLMediaElement||"srcObject"in window.HTMLMediaElement.prototype||Object.defineProperty(window.HTMLMediaElement.prototype,"srcObject",{get:function(){return this.mozSrcObject},set:function(e){this.mozSrcObject=e}}))},shimPeerConnection:function(){if("object"==typeof window&&(window.RTCPeerConnection||window.mozRTCPeerConnection)){window.RTCPeerConnection||(window.RTCPeerConnection=function(e,t){if(r.version<38&&e&&e.iceServers){for(var n=[],o=0;o<e.iceServers.length;o++){var i=e.iceServers[o];if(i.hasOwnProperty("urls"))for(var a=0;a<i.urls.length;a++){var c={url:i.urls[a]};0===i.urls[a].indexOf("turn")&&(c.username=i.username,c.credential=i.credential),n.push(c)}else n.push(e.iceServers[o])}e.iceServers=n}return new mozRTCPeerConnection(e,t)},window.RTCPeerConnection.prototype=mozRTCPeerConnection.prototype,mozRTCPeerConnection.generateCertificate&&Object.defineProperty(window.RTCPeerConnection,"generateCertificate",{get:function(){return mozRTCPeerConnection.generateCertificate}}),window.RTCSessionDescription=mozRTCSessionDescription,window.RTCIceCandidate=mozRTCIceCandidate),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var t=RTCPeerConnection.prototype[e];RTCPeerConnection.prototype[e]=function(){return arguments[0]=new("addIceCandidate"===e?RTCIceCandidate:RTCSessionDescription)(arguments[0]),t.apply(this,arguments)}});var e=RTCPeerConnection.prototype.addIceCandidate;if(RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?e.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())},r.version<48){var t=function(e){var t=new Map;return Object.keys(e).forEach(function(n){t.set(n,e[n]),t[n]=e[n]}),t},n=RTCPeerConnection.prototype.getStats;RTCPeerConnection.prototype.getStats=function(e,r,o){return n.apply(this,[e||null]).then(function(e){return t(e)}).then(r,o)}}}}};e.exports={shimOnTrack:o.shimOnTrack,shimSourceObject:o.shimSourceObject,shimPeerConnection:o.shimPeerConnection,shimGetUserMedia:n(211)}},function(e,t,n){"use strict";var r=n(0).log,o=n(0).browserDetails;e.exports=function(){var e=function(e){return{name:{SecurityError:"NotAllowedError",PermissionDeniedError:"NotAllowedError"}[e.name]||e.name,message:{"The operation is insecure.":"The request is not allowed by the user agent or the platform in the current context."}[e.message]||e.message,constraint:e.constraint,toString:function(){return this.name+(this.message&&": ")+this.message}}},t=function(t,n,i){var a=function(e){if("object"!=typeof e||e.require)return e;var t=[];return Object.keys(e).forEach(function(n){if("require"!==n&&"advanced"!==n&&"mediaSource"!==n){var r=e[n]="object"==typeof e[n]?e[n]:{ideal:e[n]};if(void 0===r.min&&void 0===r.max&&void 0===r.exact||t.push(n),void 0!==r.exact&&("number"==typeof r.exact?r.min=r.max=r.exact:e[n]=r.exact,delete r.exact),void 0!==r.ideal){e.advanced=e.advanced||[];var o={};"number"==typeof r.ideal?o[n]={min:r.ideal,max:r.ideal}:o[n]=r.ideal,e.advanced.push(o),delete r.ideal,Object.keys(r).length||delete e[n]}}}),t.length&&(e.require=t),e};return t=JSON.parse(JSON.stringify(t)),o.version<38&&(r("spec: "+JSON.stringify(t)),t.audio&&(t.audio=a(t.audio)),t.video&&(t.video=a(t.video)),r("ff37: "+JSON.stringify(t))),navigator.mozGetUserMedia(t,n,function(t){i(e(t))})},n=function(e){return new Promise(function(n,r){t(e,n,r)})};if(navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:n,addEventListener:function(){},removeEventListener:function(){}}),navigator.mediaDevices.enumerateDevices=navigator.mediaDevices.enumerateDevices||function(){return new Promise(function(e){var t=[{kind:"audioinput",deviceId:"default",label:"",groupId:""},{kind:"videoinput",deviceId:"default",label:"",groupId:""}];e(t)})},o.version<41){var i=navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);navigator.mediaDevices.enumerateDevices=function(){return i().then(void 0,function(e){if("NotFoundError"===e.name)return[];throw e})}}if(o.version<49){var a=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(t){return a(t).then(function(e){if(t.audio&&!e.getAudioTracks().length||t.video&&!e.getVideoTracks().length)throw e.getTracks().forEach(function(e){e.stop()}),new DOMException("The object can not be found here.","NotFoundError");return e},function(t){return Promise.reject(e(t))})}}navigator.getUserMedia=function(e,n,r){return o.version<44?t(e,n,r):(console.warn("navigator.getUserMedia has been replaced by navigator.mediaDevices.getUserMedia"),void navigator.mediaDevices.getUserMedia(e).then(n,r))}}},function(e,t,n){"use strict";var r={shimGetUserMedia:function(){navigator.getUserMedia=navigator.webkitGetUserMedia}};e.exports={shimGetUserMedia:r.shimGetUserMedia}},function(e,t,n){e.exports=n(71)}])});
},{}]},{},[1]);
