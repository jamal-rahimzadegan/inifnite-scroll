import React from "react";

export default function RenderPosts({posts}) {
    return posts.map((post, i) => (
            <div key={post.id} className="w-100 bg-light m-2 p-2 rounded card shadow-sm">
                <p>{i} </p>
                <img src={post.thumbnailUrl}/>
                <p>{post.title} </p>
            </div>
        )
    )
}
