import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'
import profilePic from '../img/profilePic.png'
function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <>

            <div class="card-category-5">
                <ul class="all-pr-cards">
                    <li>
                        <div class="per-card-3">
                            <div class="card-image">
                                <span></span>
                                {/* <img src="https://avatars.githubusercontent.com/u/71375621?v=4" /> */}
                                <img src={profilePic} />
                                <span class="per-name">DG Chat Group</span>
                            </div>

                            <div class="card-content">
                                <span class="per-position">Project Manager</span>
                                <div class="card-text">
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                                </div>
                                <div class="social-icons">
                                    <div class="card-btn">
                                        <button type="button"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} title="Connect" onClick={signInWithGoogle}>
                                            <i class="fa fa-google d-block" aria-hidden="true"></i>
                                            <span>Sign In With Google</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }} >
                <Button style={{ background: '#eee', padding: '20px', fontSize: '20px', borderRadius: '6px', fontWeight: '600' }}
                    onClick={signInWithGoogle} > Sign In With Google </Button>
            </div> */}
        </>
    )
}

export default SignIn