import "./Sharepost.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


export default function share() {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="./assets/person/1.jpeg" alt="" className="shareProfileImage" />
          <input type="text" className="shareInput" placeholder="What's on your mind, Koushik?" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FeaturedVideoIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Live video</span>
            </div>
            <div className="shareOption">
              <PermMediaIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Photos/Media</span>
            </div>
            <div className="shareOption">
              <InsertEmoticonIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feeling/actiivty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
