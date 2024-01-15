import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {




  return (
    <footer className="SubNav">
        <div className="icons">
            <SocialIcon url="https://www.linkedin.com/in/sarah-smallwood565/" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://www.instagram.com/redhead.aroundtheworld/" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://www.shutterstock.com/g/Redhead_ATW?_gl=1*1lym7eq*_ga*MTkwNjk3NzgzOC4xNjk3MjU1MDY1*_ga_5JRYE4Y8J9*MTcwNDk0MDExMi44LjEuMTcwNDk0MDEzMi40MC4wLjA.*_fplc*RnFvSlo4Sm0lMkZleWt0Sm9JbFQ5cWt0ODI0UThrek9qYktKVHdIT04wR3h1SjNQQm1qTHdwV3IyTlQlMkY5WlVYTlRldEJjQ01HQWk2NkpidVpFVSUyRmQwaSUyRnJTMkxEUVh0c1RhOW81bUpNQWRkaWRxa0JvZnEyN0N6VzZESyUyQnhzQSUzRCUzRA.." style={{ height: 60, width: 60, backgroundcolor: 'whitesmoke' }}/>
            <SocialIcon url="https://github.com/SarahSmallwood" style={{ height: 60, width: 60 }}/>
        </div>

    </footer>
  )
}

export default Footer