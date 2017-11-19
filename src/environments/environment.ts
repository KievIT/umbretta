// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production:       false,
  crud_php_api:     'http://localhost/umbretta/src/php/rest-api/api.php',
  sendmail:         'http://localhost/umbretta/src/php/sendmail.php',
  google_api_key:   'AIzaSyCESyzus6Bs7X-5_-38X0bkqJjD9ATRJVI',
  google_api_lang:  'EN',
};
