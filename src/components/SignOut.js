import React from 'react'
import { auth } from '../firebase.js'

function SignOut() {
    return (
        <div className='signOut'>
            <div className='container signOut_box'>
                <h3>DG Group Chat App</h3>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
        </div>
    )
}

export default SignOut
