import supabase from "../../../../supabase";

async function getRandomUrl() {
  const { data, error } = await supabase.rpc("get_random_level_img");

  if (error) throw new Error(error.message);
  return data?.[0] ?? null; // The RPC returns an array with one row
}

export default getRandomUrl;
