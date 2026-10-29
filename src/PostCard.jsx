import { useState } from "react";

function PostCard(props) {
    const { title, body } = props;
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked((prev) => !prev);
    }

    return (
        <div
            onClick={handleClick}
            className={`${clicked ? "bg-blue-100" : "bg-white"} p-6 rounded-lg shadow hover:shadow-md transition-all cursor-pointer`}
        >
            <h2 className="text-xl font-semibold text-gray-800 capitalize mb-2">
                {title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
                {body}
            </p>
        </div>
    );
}

export default PostCard;
