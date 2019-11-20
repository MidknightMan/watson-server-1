const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const personalityInsights = new PersonalityInsightsV3({
  authenticator: new IamAuthenticator({
    apikey: 'uy3-_2ryPhtGdlk4CFk0bdpK1edzHdXvmCSKBNv_I-39'
  }),
  version: '2017-10-13',
  url: 'https://gateway-lon.watsonplatform.net/personality-insights/api'
});

exports.getPersonality = wordPool =>
  personalityInsights
    .profile({
      content: wordPool,
      contentType: 'text/plain',
      consumptionPreferences: true
    })
    .then(response => {
      const formattedData = JSON.stringify(response.result, null, 2);
      return formattedData;
    });
