import React from "react";

function SocialItem(props) {
  console.log(props);
  return (
    <li>
      <span className="label">Followers</span>
      <span className="quantity">1000</span>
    </li>
  );
}

export default SocialItem;
