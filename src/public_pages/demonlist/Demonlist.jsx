import { useQuery } from "@tanstack/react-query";
import { getRange, list_type } from "./components/helper";
import getDemonlist from "./components/GetDemonlist";
import LoadingDiv from "../../global/async/Loading";
import ListMap from "./components/ListMap";

const Demonlist = ({ demonlistType }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["demonlist", demonlistType],
    queryFn: () => getDemonlist([1, 1000]),
  });

  if (error instanceof Error) return <p>Error: {error.message}</p>;
  if (data) console.log(data);
  if (isLoading) return <LoadingDiv text={"Fetching Your Levels!"} />;

  return (
    <>
      <div>
        <ListMap data={data} list_type={list_type[0]} />
      </div>
    </>
  );
};

export default Demonlist;
