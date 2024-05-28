import Profiles from "./Profiles";
const userData = [
  { id: 1, name: "Ly", position: "Acc" },
  { id: 2, name: "Reo", position: "IT" },
  { id: 3, name: "Orey", position: "Managar" },
  { id: 4, name: "Rrey", position: "Assistant" },
];
const getIdUser = (id)=>{
    const newUser = userData.find(nu=>nu.id==id)
    console.log(newUser)
}
const User = () => {
  return (
    <div>
      {userData.map((user) => {
        return <Profiles {...user} getId={getIdUser} key={user.id} />;
      })}
    </div>
 
  );
};

export default User;
