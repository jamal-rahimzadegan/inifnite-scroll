import React from "react";

export default function LoadMoreIndicator  ({loader}) {
    //Added Ref to manage Load More
    return (
        <div className="loading" ref={loader}>
            <p className="m-1 text-info">در حال دریافت...</p>
        </div>
    )
}
