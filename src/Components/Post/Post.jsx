import "./Post.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Users} from "../../dummyData";
import { useState } from "react";


export default function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler =()=>{
        setLike(isLiked?like-1:like+1);
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfile" src={Users.filter((u)=>u.id===post.userId)[0].profilePicture } alt="" />
                        <span className="postUsername">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreHorizIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.photo} alt="" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postLikeIcon" src="./assets/like.png" onClick={likeHandler} alt="" />
                        <img className="postLikeIcon" src="./assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComments">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
