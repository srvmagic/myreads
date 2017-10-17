const iterable = {a:'10', b:'20', c:'30'};
Object.keys( iterable ).forEach( key => {
  console.log("key is "+key);
    console.log( "value is "+iterable[key] );
}); 