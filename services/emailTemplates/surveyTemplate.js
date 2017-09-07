const keys = require('../../config/keys')

module.exports = (survey) => {
  return `<html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      <div style="text-align: center;">
        <h3>I'd Like Your Input!</h3>
        <p>Please answer the following question:</p>
        <p>${survey.body}</p>
        <div class="">
          <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
        </div>
        <div class="">
          <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
        </div>
      </div>
    </body>
  </html>`
};
