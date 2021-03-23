import { signInWithGoogle } from '../firebase/firebase'

<Button onClick={signInWithGoogle}>Sign in with Google</Button>

// khi sign out chỉ cần cho một cái onClick={() => auth.signOut()}