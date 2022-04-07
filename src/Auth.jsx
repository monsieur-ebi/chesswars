import React from 'react'
import {authenticate} from './Stx'
// import {signIn} from './Near'

function Auth() {
  return (
    <div>
        <button onClick={authenticate()}>stx</button>
        {/* <button onClick={signIn()}>Near</button> */}
    </div>
  )
}

export default Auth