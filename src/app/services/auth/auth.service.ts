import { Injectable, NgZone } from '@angular/core'
import * as auth from 'firebase/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'
import { User } from 'src/app/types/user'
import { SystemConstants } from 'src/app/common/system.constants'
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component'
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    userData: User | undefined // Save logged in user data

    constructor(
        public afs: AngularFirestore, // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,
        public ngZone: NgZone // NgZone service to remove outside scope warning
    ) {
        // Saving user data in localstorage when
        // logged in and setting up null when logged out
        this.afAuth.authState.subscribe((user) => {
            console.log('authState')
            console.log(localStorage)
            if (user) {
                this.userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER)!)
                console.log(this.userData)
            } else {
                this.userData = undefined
                localStorage.removeItem(SystemConstants.CURRENT_USER)
                JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER)!)
            }
        })
    }

    // Returns true when user is looged in and email is verified
    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER)!)
        return user !== null && user.emailVerified !== false
    }

    // Sign in with Google
    async GoogleAuth() {
        const provider = new auth.GoogleAuthProvider()
        await this.AuthLogin(provider)
    }

    // Auth logic to run auth providers
    async AuthLogin(provider: any) {
        try {
            const result = await this.afAuth.signInWithPopup(provider)
            if (result.user?.email?.endsWith('@odds.team')) {
                console.log('Sign in successful')
                this.SetUserData(result.user)
                await Swal.fire({
                    icon: 'success',
                    title: 'Sign in successful',
                })
                if (localStorage.getItem(SystemConstants.REDIRECT_TO)) {
                    this.router.navigateByUrl(localStorage.getItem(SystemConstants.REDIRECT_TO)!)
                }
            } else {
                console.log('Sign in failed')
                await Swal.fire({
                    icon: 'error',
                    title: 'Please sign in with odds.team',
                })
            }
        } catch (error) {
            console.log('Sign in error')
            window.alert(error)
        }
    }

    // Setting up user data when sign in with username/password,
    // sign up with username/password and sign in with social auth
    // provider in Firestore database using AngularFirestore + AngularFirestoreDocument service
    SetUserData(user: any) {
        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
        }
        this.userData = userData
        localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(userData))
        console.log('Set user data')
        console.log(userData)
    }

    // Sign out
    async SignOut() {
        console.log('Sign out')
        await this.afAuth.signOut()
        this.userData = undefined
        localStorage.removeItem(SystemConstants.CURRENT_USER)
        await Swal.fire({
            icon: 'success',
            title: 'Sign out successful',
        })
        this.router.navigate(['home'])
    }
}
