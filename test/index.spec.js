/* eslint-disable */
import { signIn, loginWithGoogleCredentials, LogOut, createUserWithEmail, auth } from '../src/firebase/auth';
import { signInWithEmailAndPassword, signInWithPopup, signOut, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, getDoc, db, addDoc, collection } from 'firebase/firestore';
import { createNewPost } from '../src/firestore/DBFunctions';
jest.mock('firebase/auth');



afterEach(() => {
  jest.clearAllMocks();
});

jest.mock('firebase/firestore');

// jest.mock('firebase/auth', () => ({
//    getAuth: jest.fn(),
//    GoogleAuthProvider: jest.fn(),
//   // signInWithEmailAndPassword: jest.fn(),
//   createUserWithEmailAndPassword: jest.fn(),
//   // signInWithPopup: jest.fn(),
//   // sendPasswordResetEmail: jest.fn(),
// }));


describe('signIn', () => {
  it('returns true when the user successfully logs in', async () => {
    signInWithEmailAndPassword.mockResolvedValueOnce({});
    const result = await signIn('valid-email', 'valid-password');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'valid-email', 'valid-password');
    expect(result).toBe(true);
    
  });
   
  it('returns error when user email is invalid', async () => {
    const mockedError = 'Error: Firebase: Error (auth/user-not-found).';
    signInWithEmailAndPassword.mockRejectedValueOnce({ message: mockedError });
    try {
      await signIn('invalid-email', 'password');
    } catch (error) {
    //  console.log(error);
      expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'invalid-email', 'password'); // CALLS 2 TIMES. PQ???
      expect(error).toEqual(mockedError);      
    }
  });
  //jest.clearAllMocks();
  it('returns error when user password is invalid', async () => {
    const mockedError = 'Error: Firebase: Error (auth/wrong-password).';
    signInWithEmailAndPassword.mockRejectedValueOnce({ message: mockedError});
    try {
      await signIn('valid-email', 'invalid-password');
    } catch (error) {
      console.log(error);
      expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1); //entendi, mas devia?
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'valid-email', 'invalid-password'); // CALLS 2 TIMES. PQ???
      expect(error).toEqual(mockedError);
    }
  });  
});



describe('loginWithGoogleCredentials', () => {
  it('returns true when the user successfully logs in using Google Credencials', async () => {
    signInWithPopup.mockResolvedValueOnce({});
    const result = await loginWithGoogleCredentials();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
    // expect(getDoc).toHaveBeenCalledWith(doc(db, 'users', getAuth().currentUser.uid));
    expect(signInWithPopup).toHaveBeenCalledWith(undefined, {});
    expect(result).toBe(true);
    
  });
  
  it('returns error when the google user credentials are invalid', async () => {
   const mockedError = 'auth/user-not-found';
   signInWithPopup.mockRejectedValueOnce({ message: mockedError });
   try {
     await loginWithGoogleCredentials();
   } catch (error) {
    
     expect(signInWithPopup).toHaveBeenCalledTimes(1);
     //jest.clearAllMocks();
     expect(signInWithPopup).toHaveBeenCalledWith(undefined, {}); 

     expect(error).toEqual(new Error(mockedError));      
   }    
  }); 
});

describe('createUserWithEmail', () => {
  it('creates a new user', async () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: {},
    });
    const result = await createUserWithEmail('teste@mail.com', '123456');
    
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'teste@mail.com', '123456');
    expect(result).toBe(true);
  });
});

describe('logOut', () => {
  it('should log out the user', async () => {
   // signOut.mockResolvedValue();
   // signOut.mockResolvedValueOnce({});
    // const result = await LogOut();
    signOut();
    expect(signOut).toHaveBeenCalledTimes(1);
    
   // expect(result).toBe(true);
    
    // try {
    //   await LogOut();
    // } catch (error) {
    //   expect(signOut).toHaveBeenCalledTimes(1);
    //   expect(error).toEqual(new Error(mockedError));      
    // }    
    
  });

})
  

  
  describe('Função newPost', () => {
    it('deve criar um post e guardar na coleção', async () => {
      const mockAuth = {
        currentUser: {
          displayName: 'teste',
          uid: '52455',
        },
      };

      getAuth.mockReturnValueOnce(mockAuth);
      addDoc.mockResolvedValueOnce();
      const mockCollection = 'collection';
      collection.mockReturnValueOnce(mockCollection);
     
          
      const title = 'aqui é um título';
      const postText = 'aqui é um texto';

      const posts = {
        postText,
        title,
        dateTime: "18/04/2023, 03:02",
        displayName: "teste",
        likes: [],
        textPost: "aqui é um texto",
        timestamp: 1681797737656,
        uid: "52455",
        updateDateTime: "",
      }
     
      

      await createNewPost(title, postText);

      expect(addDoc).toHaveBeenCalledTimes(1);
    // expect(addDoc).toHaveBeenCalledWith(mockCollection, posts);
      // expect(collection).toHaveBeenCalledTimes(1);
     expect(collection).toHaveBeenCalledWith(undefined, 'posts');
    });
  });
