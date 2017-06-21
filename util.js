(function(exports){
  'use strict'

  function chainLength(target){
    var count=0;

    function hasPrototype(o){
      var proto = Object.getPrototypeOf(o);

      if(!proto)
        return count;

      count++;
      return hasPrototype(proto);
    }

    return hasPrototype(target);
  }
  
  exports.utils = {
    chainLength: chainLength
  }

}((typeof export === 'undefined')
  ? window
  : exports
  )
);
