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
// import news from './news_component/New';
// import news from './news_component/New';
import "./App.css";
function App() {
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
                  <StoryPeople
                    title="raghadz"
                    photo="https://i.pinimg.com/736x/b2/81/28/b28128a0546d0570f2581c452b8cdaf7.jpg"
                  />
                  <StoryPeople
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
                  />
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
        </div>
      </div>
    </div>
  );
}

export default App;
