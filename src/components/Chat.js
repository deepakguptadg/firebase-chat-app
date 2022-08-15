import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'
import { collection, query, where } from "firebase/firestore";

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    const [popup, setPopup] = useState(false)
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    const moreOption = (e, id) => {
        alert(id)
    }
    console.log('messages', messages)
    return (
        <>
            <SignOut />
            <div className='container'>
                <div className="msgs">
                    {messages.map(({ id, text, photoURL, uid, date }) => (
                        <div>
                            <div style={{ position: 'relative' }} key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                <img src={photoURL} alt="" />
                                <p>{text}</p>
                                <div className='date'>
                                    <small style={{ display: 'block' }}>{date}</small>
                                    {uid === auth.currentUser.uid ?
                                        <>
                                            <i className="fa fa-ellipsis-v three-dot" aria-hidden="true" onClick={(e) => setPopup(!popup)}></i>
                                            {
                                                // popup ?
                                                //     <div className='morePopup'>
                                                //         <p>Delete Message</p>
                                                //     </div>
                                                //     : ''
                                            }
                                        </>
                                        : ''}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <SendMessage scroll={scroll} />
                <div ref={scroll}></div>
            </div>
        </>
    )
}

export default Chat
