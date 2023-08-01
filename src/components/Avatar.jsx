function Avatar({ avatar, email, first_name, last_name }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img
        width={45}
        height={45}
        src={avatar}
        alt={email}
        style={{ borderRadius: 25, marginRight: 10 }}
      />
      <p>
        {first_name} {last_name}
      </p>
    </div>
  );
}

export default Avatar;
