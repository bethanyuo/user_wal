const sdk = require('api')('@wyre-hub/v3#6o13y011xktk7auip');
require('dotenv').config();

//console.log(process.env.API_KEY, process.env.SECRET_KEY);


sdk.auth(process.env.SECRET_KEY);
sdk.CreateAccount({
  profileFields: [
    {value: 'Sam Frank', fieldId: 'individualLegalName'},
    {fieldId: 'individualEmail', value: 'sam@gmail.com'}
  ],
  subaccount: true,
  type: 'INDIVIDUAL',
  country: 'US'
})
  .then(res => console.log(res))
  .catch(err => console.error(err));

//const sdk = require('api')('@wyre-hub/v3#6o13y011xktk7auip');

sdk.auth(process.env.SECRET_KEY);
sdk.GetMasterAccount()
  .then(res => console.log(res))
  .catch(err => console.error(err));