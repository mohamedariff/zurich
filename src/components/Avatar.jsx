import { memo } from "react";

function Avatar(props) {
  const {
    avatar,
    email,
    first_name,
    last_name,
    width,
    height,
    style,
    picture,
    nickname,
  } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img
        style={{ borderRadius: width / 2, ...style }}
        height={height}
        width={width}
        src={picture || avatar}
        alt={email || nickname}
      />
      <p>
        {first_name} {last_name}
      </p>
    </div>
  );
}

export default memo(Avatar);
