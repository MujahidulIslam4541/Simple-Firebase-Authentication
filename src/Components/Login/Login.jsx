import { signInWithPopup } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import React from 'react'
import auth from '../Firebase/Firebase'

export default function Login() {

  const provider =new GoogleAuthProvider()

  const handleGoogleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      })
      .catch(error => {
        console.log('ERROR', error)
      })

  }
  return (
    <div>
      <button onClick={handleGoogleClick}>Login with Google</button>
    </div>
  )
}
