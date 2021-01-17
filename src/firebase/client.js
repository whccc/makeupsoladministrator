import firebase from 'firebase/app';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: 'AIzaSyC8k9UAs15bzqvBQg3qQK8GUx9YGwQjdwo',
    authDomain: 'makeupsol-55da9.firebaseapp.com',
    projectId: 'makeupsol-55da9',
    storageBucket: 'makeupsol-55da9.appspot.com',
    messagingSenderId: '440583277812',
    appId: '1:440583277812:web:4929454764c8b8d7e3a2a1',
    measurementId: 'G-TRFQVK7CXP'
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export const UploadImage = async (image, SetProgress) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    const url = await new Promise((resolve, reject) => {
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                SetProgress(progress);
            },
            (error) => {
                reject(error);
            },
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        resolve(url);
                    });
            }
        );
    });
    return url;
};

export const DeleteImage = async (fileUrl) => {
    // Create a reference to the file to delete
    const fileRef = storage.refFromURL(fileUrl);

    // Delete the file using the delete() method
    const Result = await fileRef.delete();
    console.log(Result);
};
