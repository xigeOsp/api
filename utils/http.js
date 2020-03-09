const http = require( 'http' )

const request = ({
  url
}) => {
  return new Promise(( resolved,rejected ) => {
    http.get( url,  (res) => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', async () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log( parsedData )
          resolved( parsedData )
        } catch (e) {
          // console.error(e.message);
        }
      });
    }).on('error', (e) => {
      // console.error(`Got error: ${e.message}`);
    });
  })
}

module.exports = request 