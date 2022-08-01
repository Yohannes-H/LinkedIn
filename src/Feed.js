import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import {
  collection,
  addDoc,
  doc,
  onSnapshot,
  where,
  query,
  setDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import Post from "./Post";
import { db } from "./firebase";
function Feed() {
  const [posts, setPosts] = React.useState([]);
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    // const unsubscribe = onSnapshot(
    //   collection(db, "posts"),
    //   { includeMetadataChanges: true },
    //   (snapshot) => {
    //     // console.log(snapshot);
    //     const p = snapshot.docs.map(
    //       (d) => d._document.data.value.mapValue.fields
    //     );
    //     console.log("posts", p);
    //   },
    //   (error) => {
    //     // ...
    //   }
    // );

    //////////////
    const q = query(
      collection(db, "posts"),
      where("flag", "==", "true"),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const POSTS = [];
      querySnapshot.forEach((doc) => {
        if (doc.metadata.hasPendingWrites) {
          console.log(
            `document ${doc.id} has pending write: `,
            doc.metadata.hasPendingWrites
          );
        }
        POSTS.push(doc.data());
      });
      console.log("Current posts: ", POSTS);
      setPosts((prevPosts) => [...POSTS]);
    });

    /////////
    // db.collection("posts").onSnapshot((snapshot) => {
    //   setPosts(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       data: doc.data(),
    //     }))
    //   );
    // });
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "posts"), {
      name: "Johnny Dev",
      description: "this is a test description",
      flag: "true",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    //////////
    // db.collection("posts").add({
    //   name: "Johnny Dev",
    //   description: "this is a test description",
    //   message: "hi",
    // });
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#78b5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/*posts */}

      {posts.map((post, index) => (
        <Post
          key={index}
          name={post.name}
          description={post.description}
          message={post.message}
          photoUrl={post.photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
