function fn() {
 var env = karate.env; // get system property 'karate.env'
 karate.log('karate.env system property was:', env);
 if (!env) {
   env = 'dev';
 }
 var config = {
   env: env,
   myVarName: 'hello karate',
   baseUrl: 'https://gorest.co.in/',
   tokenID: '4c95be0f76009682376991366b7d0348e991ecdc4c78f354a049a04dc9909872',
 }
 if (env == 'dev') {
   // customize
   // e.g. config.foo = 'bar';
 } else if (env == 'e2e') {
   // customize
 }
 return config;
}