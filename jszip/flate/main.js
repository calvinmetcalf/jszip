define(function(require,exports){
    var USE_TYPEDARRAY =
      (typeof Uint8Array !== 'undefined') &&
      (typeof Uint16Array !== 'undefined') &&
      (typeof Uint32Array !== 'undefined');
    exports.magic = "\x08\x00";
    exports.uncompress = require('jszip/flate/inflate');
    exports.uncompressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
    exports.compress = require('jszip/flate/deflate');
    exports.compressInputType = USE_TYPEDARRAY ? "uint8array" : "array";
});
