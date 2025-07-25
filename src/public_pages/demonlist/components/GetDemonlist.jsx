import supabase from "../../../supabase";

export default async function getDemonlist(range) {
  const max_pos = range[1];
  const min_pos = range[0];

  const { data, error } = await supabase.rpc("get_top_levels", {
    max_pos: max_pos,
    min_pos: min_pos,
  });

  if (error) {
    console.log(error);
  }

  return data;
}
