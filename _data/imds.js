var axios   = require('axios');

module.exports = async function() {
  let url = `http://169.254.169.254/metadata/instance?api-version=2019-03-11`;
  
  return axios.get(url, 
    {
        headers: {
            Metadata: 'true'
        }
    })
      .then(function (response) {
          return response.data;
      })
      .catch(function(error) {
          console.log(error);
      });
}