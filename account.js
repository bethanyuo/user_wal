const sdk = require('api')('@wyre-hub/v3#6o13y011xktk7auip');
require('dotenv').config();

//console.log(process.env.API_KEY, process.env.SECRET_KEY);


sdk.auth(process.env.SECRET_KEY);
sdk.CreateAccount({
  profileFields: [
    {value: 'Sam Frank', fieldId: 'individualLegalName'},
    {fieldId: 'individualEmail', value: 'sam@gmail.com'},
    {fieldId: 'individualCellphoneNumber', value: '+16781229999'},
    {
      fieldId: 'individualResidenceAddress',
      value: {
      street1: '1 Market St',
      street2: 'Suite 402',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94105',
      country: 'US'
      }
    }
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