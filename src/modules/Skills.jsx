import React from 'react'

function Skills() {
  return (
    <div className="skills">
      

      <h2 className='skillHead'>Front End</h2>

      <div className="logosTop">

      <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" className="html" />
      <img alt='' src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png" className="css" />
      <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" className="js" />
      <img alt='' src="https://ionicframework.com/docs/icons/logo-react-icon.png" className="react" />

      </div>
  

      <h2 className='skillHead'>Back End</h2>
      
      
      <div className='logosBottom'>
        
      <img alt='' src="https://seeklogo.com/images/N/nodejs-logo-D26404F360-seeklogo.com.png" className="node" />
      <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" className="python" />
      <img alt='' src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" className="mongo" />
      <img alt='' src="https://w7.pngwing.com/pngs/170/924/png-transparent-microsoft-sql-server-microsoft-azure-sql-database-microsoft-text-logo-microsoft-azure.png" className="sql" />

    </div>
    </div>
  )
}

export default Skills