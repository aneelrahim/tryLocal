exports.myFunction = function(params, callback) {
  var num = params.num;
  if(num > 10){
    return callback({err: 'Num too large'}, {result: num});
  }
  callback(undefined, {result: num});
};

exports.myFunction3 = function(params, callback) {
  var num = params.num;
  callback(undefined, {result: num});
};

exports.myFunction2 = function(params, callback) {
  var num = params.num;
  
    return callback({err: 'Num too large'}, {result: num});
};