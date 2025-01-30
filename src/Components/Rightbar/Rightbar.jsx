import "./Rightbar.css";
import { Users } from "../../dummyData";

export default function Rightbar({ profile }) {

  const homeRightBar = () => (
    <>
      <div className="birthdayContainer">
        <img src="./assets/gift.png" alt="" className="birthdayImg" />
        <span className="birthdayText">
          <b>Nagesh</b> and <b>3 other friends</b> have a birthday today
        </span>
      </div>
      <img src="./assets/ad.png" alt="" className="rightAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((user) => (
          <li className="rightbarFriend" key={user.id}>
            <div className="rightbarProfileImageContainer">
              <img src={user.profilePicture} alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
        ))}
      </ul>
    </>
  );

  const profileRightBar = () => {
    return(
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarinfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">City: </span>
          <span className="rightbarInfoValue">Vishakapatnam</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">From: </span>
          <span className="rightbarInfoValue">Vizianagaram</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">Relationship: </span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarFollowings">
        <div className="rightbarfollowing">
          <img src="./assets/Person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Koushik</span>
        </div>
        <div className="rightbarfollowing">
          <img src="./assets/Person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Koushik</span>
        </div>
        <div className="rightbarfollowing">
          <img src="./assets/Person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Koushik</span>
        </div>
        <div className="rightbarfollowing">
          <img src="./assets/Person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Koushik</span>
        </div>
        <div className="rightbarfollowing">
          <img src="./assets/Person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Koushik</span>
        </div>
        <div className="rightbarfollowing">
          <img src="./assets/Person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Koushik</span>
        </div>
      </div>
    </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {profile ? profileRightBar() : homeRightBar()}
      </div>
    </div>
  );
}
