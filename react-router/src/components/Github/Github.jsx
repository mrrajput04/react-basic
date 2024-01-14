import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/mrrajput04")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // });
  const data = useLoaderData();
  return (
    <div className="text-center bg-gray-600 m-4 text-white p-4 text-3xl">
      Github: {data.name} {data.location}
      <img src={data.avatar_url} alt="image" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mrrajput04");
  return response;
};
