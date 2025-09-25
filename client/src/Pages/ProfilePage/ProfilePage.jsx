

export default function ProfilePage({user}) {
  console.log(user)
  
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   axiosInstance.get('/userId').then((response) => {
  //     setUser(response.data);
  //   });
  // }, []);

  return (
    <>
       <div>hi{user.login}</div>
    </>
  );
}

