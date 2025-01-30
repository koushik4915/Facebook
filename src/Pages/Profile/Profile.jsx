import "./Profile.css";
import Feed from "../../Components/Feed/Feed";
import Leftbar from "../../Components/Leftbar/Leftbar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Topbar from "../../Components/Topbar/Topbar";

export default function profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImage" src="./assets/post/3.jpeg" alt="" />
              <img className="profileImage" src="./assets/person/7.jpeg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Gantyada Koushik</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>

        </div>

      </div>
    </>
  )
}
