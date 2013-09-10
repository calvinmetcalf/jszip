define(function(require){
    var base64 = require('jszip/base64');
    var ZipEntries = require('jszip/zipEntries');
return function(data, options) {
      var files, zipEntries, i, input;
      options = options || {};
      if(options.base64) {
         data = base64.decode(data);
      }

      zipEntries = new ZipEntries(data, options);
      files = zipEntries.files;
      for (i = 0; i < files.length; i++) {
         input = files[i];
         this.file(input.fileName, input.decompressed, {
            binary:true,
            optimizedBinaryString:true,
            date:input.date,
            dir:input.dir
         });
      }

      return this;
   };
});
