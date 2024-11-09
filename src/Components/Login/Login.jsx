import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import React, { useState } from 'react'
import auth from '../Firebase/Firebase'

export default function Login() {
  const [user, setUser] = useState(null)

  const provider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGoogleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user)
        setUser(result.user)
      })
      .catch(error => {
        console.log('ERROR', error)
        setUser(null)
      })

  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user)
        setUser(result.user)
      })
      .catch(error => {
        console.log('ERROR', error)
        setUser(null)
      })
  }

  const handleSignOut = () => {

    signOut(auth)
      .then(() => {
        console.log('sign Out complete')
        setUser(null)
      })
      .cath(error => {
        console.log(error)
      })
  }



  return (
    <div>
      {
        user ?
          <button onClick={handleSignOut}>Sign Out</button>
          : <>
            <button onClick={handleGoogleClick}>Login with Google</button>

            <button onClick={handleGithubSignIn}>SignIn With Github</button>

          </>

      }


      {user &&
        <div>
          <h4>{user.displayName}</h4>
          <p>Email:{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  )
}
