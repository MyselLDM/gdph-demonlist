import supabase from "../../../../supabase";

const getchangelog = async () => {
  const { data, error } = await supabase.rpc("get_changelog_5");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export default getchangelog;
