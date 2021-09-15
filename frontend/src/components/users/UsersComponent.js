const UsersComponent = ({ email, displayName, photoURL }) => {
  return (
    <div>
      {photoURL ? <img src={photoURL} alt={displayName} /> : null}
      <div>
        <p>{displayName}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UsersComponent;
