// supabase/api/getHeroStats.ts
import supabase from "../../../supabase"; // adjust path as needed

export const getHeroStats = async () => {
  const { data, error } = await supabase.rpc("get_hero_stats").single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
