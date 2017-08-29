import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDFgpFGxN6912bCCQptFI3apxdURMIHQ0c',
  authDomain: 'meeting-invite-e9e18.firebaseio.com',
  databaseURL: 'https://meeting-invite-e9e18.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
