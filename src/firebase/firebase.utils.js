import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBpJqww_8WAhzW_NcZCTOIFQ9Nfz7kUYFQ",
	authDomain: "crwn-db-e6194.firebaseapp.com",
	databaseURL: "https://crwn-db-e6194.firebaseio.com",
	projectId: "crwn-db-e6194",
	storageBucket: "crwn-db-e6194.appspot.com",
	messagingSenderId: "919544728247",
	appId: "1:919544728247:web:587953318d11e4ae16db32",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
