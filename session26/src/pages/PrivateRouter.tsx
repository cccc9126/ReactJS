import React from 'react'
import Account from './Account';
import Login from './Login';

function PrivateRouter() {
    const [state, setState] = React.useState(true);
  return (
      <div>PrivateRouter
          <br />
          {state?<Account/>:<Login/>}
    </div>
    
  )
}

export default PrivateRouter