import React, { useState, useContext } from "react";

import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "../../lib/firebaseInstance";
import { useRouter } from "next/router";
import Head from "next/head";

import AuthContext from "../../store/AuthStore/auth-context";
import NewPostHeader from "../../components/Header/NewPostHeader/NewPostHeader";
import NewPost from "../../components/NewPost/NewPost";

const NewPostPage = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postImageLink, setPostImageLink] = useState("");

  const publishHandler = async () => {
    const db = getFirestore(app);
    const date = new Date();
    let month: number | string = date.getMonth() + 1;
    if (String(month).length === 1) {
      month = "0" + month;
    }
    const currentDate = [date.getFullYear(), month, date.getDate()].join("-");

    const docRef = await addDoc(collection(db, "posts"), {
      title: postTitle,
      image: postImageLink,
      text: postText,
      date: currentDate,
      author: authCtx?.loggedInUser["name"],
    });
    console.log("Document written with ID: ", docRef.id);
    router.replace("/");
  };

  return (
    <div>
      <Head>
        <title>Post a new story</title>
      </Head>
      <NewPostHeader onPublish={publishHandler} />
      <NewPost
        setPostTitle={setPostTitle}
        setPostText={setPostText}
        setPostImageLink={setPostImageLink}
      />
    </div>
  );
};

export default NewPostPage;
