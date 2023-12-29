import React from "react";
import StoryAdd from "./Story/StoryAdd";
import StoryPeople from "./Story/StoryPeople";
import "./Story/StoryAdd.css";
import "./Story/StoryPeople.css";
import NavigationBar from "./navbar_component/Navbar";
import ProfileMenu from "./profileMenu-component/ProfileMenu";
import FollowCard from "./followCard_compontent/FollowCard";
import Createpost from "./createPost_component/CreatePost";
import Post from "./post_component/Post";
import { getstory } from "./firebase/firebase";
import { useState, useEffect } from "react";
import News from "./news_component/New";
// import news from './news_component/New';
// import news from './news_component/New';
import "./App.css";
function App() {
  const [allStory, setAllStory] = useState([]);

  useEffect(() => {
    // Function to fetch cities data asynchronously
    const fetchCitiesData = async () => {
      console.log("eeeeeeeeee");
      try {
        console.log("ttttt");

        // Call the getCities function passing your database instance
        // 'db' is assumed to be your Firebase Firestore instance
        const storylist = await getstory();

        setAllStory(storylist);
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", storylist);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCitiesData(); // Call the function when the component mounts
  }, []); // Include 'db' in the dependency array if it's a variable coming from props or context

  return (
    <div>
      <header className="Navbar">
        <NavigationBar />
      </header>
      <div className="all-component">
        <div>
          <ProfileMenu />
        </div>
        <div className="design">
          <div className="appBasic">
            <div className="scroll">
              <div className="body">
                <div className="story-gallary">
                  <StoryAdd />
                  {allStory.map((item) => {
                    return (
                      <StoryPeople title={item.forname} photo={item.imgg} />
                    );
                  })}

                  {/* <StoryPeople
                    title="haneen"
                    photo="https://th.bing.com/th/id/OIP.jpP1tJ3ckoe-qSsORHmSMQHaJl?rs=1&pid=ImgDetMain"
                  />
                  <StoryPeople
                    title="raghadsh"
                    photo="https://i.pinimg.com/564x/1a/4d/26/1a4d2676d76ed37d737b8bfedd30ae91.jpg"
                  />
                  <StoryPeople
                    title="maha"
                    photo="https://i.pinimg.com/564x/d5/be/6c/d5be6cd9a42e11949351fd1fc54a71a9.jpg"
                  />
                  <StoryPeople
                    title="raghads"
                    photo="https://i.pinimg.com/736x/6c/fe/9b/6cfe9b4819cdbd78887be8e601a11954.jpg"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="postes">
            <div className="App">
              <Createpost />
            </div>
            <div className="App">
              <Post />
            </div>
          </div>
        </div>

        <div>
          <FollowCard />
          <News />
        </div>
      </div>
    </div>
  );
}

export default App;
