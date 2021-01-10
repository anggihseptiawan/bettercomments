import * as firebase from "firebase";
import "firebase/auth";

const {
	NEXT_PUBLIC_FIREBASE_APIKEY,
	NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	NEXT_PUBLIC_FIREBASE_PROJECTID,
} = process.env;

if (!firebase.apps.length) {
	const firebaseConfig = {
		apiKey: NEXT_PUBLIC_FIREBASE_APIKEY,
		authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
		projectId: NEXT_PUBLIC_FIREBASE_PROJECTID,
	};

	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
}

export default firebase;
