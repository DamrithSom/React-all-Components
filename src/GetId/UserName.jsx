import ProfilesName from "./ProfilesName";
const userData = [
  { id: 1, name: "lazy", positions: "IT" },
  { id: 2, name: "mylyza", positions: "Support" },
  { id: 3, name: "dou", positions: "Network Manager" },
  { id: 4, name: "Heng", positions: "Manager" },
];
const getIDUser = (id) => {
  const newData = userData.find(nd=>nd.id==id)
  console.log(newData)
  console.log(id);
};
const UserName = () => {
  return (
    <div>
      {userData.map((user) => {
        return <ProfilesName {...user} getID={getIDUser} key={user.id} />;
      })}
    </div>
  );
};
export default UserName;
