import React from 'react'

function Skills() {
  return (
    <div className="skills">
      <h1 className='skillTitle'>Skills</h1>

      <h2 className='skillHead'>Front End</h2>

      <div className="logosTop">

      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" className="html" />
      <img src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" className="css" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" className="js" />
      <img src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" className="react" />

      </div>
      
      <hr/>

      <h2 className='skillHead'>Back End</h2>
      
      
      <div className='logosBottom'>
        
      <img src="https://p7.hiclipart.com/preview/306/37/167/node-js-javascript-web-application-express-js-computer-software-others.jpg" className="node" />
      <img src="https://banner2.cleanpng.com/20180721/bis/kisspng-python-javascript-logo-clip-art-soloist-5b52da84cefd16.3898762115321565488478.jpg" className="python" />
      <img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" className="mongo" />
      <img src="https://w7.pngwing.com/pngs/165/182/png-transparent-computer-icons-pl-sql-symbol-database-symbol-miscellaneous-blue-angle.png" className="sql" />

    </div>
    </div>
  )
}

export default Skills