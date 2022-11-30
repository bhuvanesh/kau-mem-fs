import admin from 'firebase-admin';
//import serviceAccount from './serviceAccountKey.json';

const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  )


if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore();