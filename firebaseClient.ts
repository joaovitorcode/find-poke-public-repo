import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Insira abaixo a configuração do Firebase do seu app da Web

// Cole na linha acima

if (!getApps().length) {
  initializeApp(firebaseConfig)
}

export const auth = getAuth() as any
export const db = getFirestore()
