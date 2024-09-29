import { useState } from "react"

export default function LikeButton() {
    let [isLike, setIsLike] = useState(false);

    let toggleLike = () => {
        setIsLike(!isLike);
        console.log("liked")
    }

    let likeStye = { color: "red" }
    return <>
        <div>
            <p onClick={toggleLike}>
                {
                    isLike ? (
                        <i class="fa-solid fa-heart" style={likeStye}></i>
                    ) : (
                        <i className="fa-regular fa-heart"></i>
                    )}
            </p>
        </div>
    </>
}