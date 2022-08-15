import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import moment from 'moment'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            date: moment(new Date()).format(' HH:mm:ss'),
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })

    }
    return (
        <div className='sendMsg'>
            <form onSubmit={sendMessage}>
                <div className="sendMsg_box container">
                    <input placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <button type="submit">Send <i class="fa fa-paper-plane ms-2" aria-hidden="true"></i></button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
