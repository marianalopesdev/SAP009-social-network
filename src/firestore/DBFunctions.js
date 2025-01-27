/* eslint-disable no-use-before-define */
import {
  getDocs, collection, addDoc, updateDoc, doc, deleteDoc, getDoc,
} from 'firebase/firestore';

import { getAuth } from 'firebase/auth';

import { db } from './firestore.js';

import { auth } from '../firebase/auth';

import { app } from '../firebase/app.js';

export const createNewPost = async (title, textPost) => {
  const authentication = getAuth(app);
  const post = {
    uid: authentication.currentUser.uid,
    displayName: authentication.currentUser.displayName,
    title,
    textPost,
    dateTime: new Date().toLocaleTimeString([], {
      year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit',
    }),
    updateDateTime: '',
    likes: [],
    timestamp: new Date().getTime(),
  };

  await addDoc(collection(db, 'posts'), post);
};

export const updatePost = async (title, textPost, postId) => {
  await updateDoc(doc(db, 'posts', postId), {
    title,
    textPost,
    updateDateTime: new Date().toLocaleTimeString([], {
      year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit',
    }),
    timestamp: new Date().getTime(),
  });
  return getAllUsersPosts();
};

export const deletePost = async (postId) => {
  const docReference = doc(db, 'posts', postId);
  await deleteDoc(docReference);
};

export const getLoggedUserAllPosts = async () => {
  const postsCollection = await getDocs(collection(db, 'posts'));
  const posts = [];
  postsCollection.forEach((post) => {
    const data = post.data();
    if (data.uid === auth.currentUser.uid) {
      data.id = post.id;
      posts.push(data);
    }
  });
  return posts;
};

export const getAllUsersPosts = async () => {
  const allPostsCollection = await getDocs(collection(db, 'posts'));
  const allPosts = [];
  allPostsCollection.forEach((post) => {
    const data = post.data();
    data.id = post.id;
    allPosts.push(data);
  });
  // console.log('getalluserspost');
  return allPosts;
};

export const getLoggedUserLikes = async () => {
  const userDocReference = doc(db, 'users', auth.currentUser.uid);
  const userDoc = await getDoc(userDocReference);
  const userLikes = userDoc.data().likes || [];
  const postDocRefs = userLikes.map((postId) => doc(db, 'posts', postId));
  const postDocs = await Promise.all(postDocRefs.map(getDoc));
  const likedPosts = postDocs
    .filter((postDoc) => postDoc.exists())
    .map((postDoc) => {
      const postData = postDoc.data();
      postData.id = postDoc.id;
      return postData;
    });

  // console.log(likedPosts);
  return likedPosts;
};

export const likePosts = async (post, userId) => {
  const postDocReference = doc(db, 'posts', post.id);
  const getPostDoc = await getDoc(postDocReference);
  const likes = getPostDoc.data().likes || [];
  let newLikes;
  if (likes.includes(userId)) {
    newLikes = likes.filter((id) => id !== userId);
  } else {
    newLikes = [...likes, userId];
  }
  await updateDoc(postDocReference, { likes: newLikes });

  const userDocReference = doc(db, 'users', userId);
  const getUserDoc = await getDoc(userDocReference);
  const userLikes = getUserDoc.data().likes || [];
  let userNewLikes;
  if (userLikes.includes(post.id)) {
    userNewLikes = userLikes.filter((id) => id !== post.id);
  } else {
    userNewLikes = [post.id, ...userLikes];
  }
  await updateDoc(userDocReference, { likes: userNewLikes });

  const updatedPosts = await getAllUsersPosts();
  return updatedPosts;
};
