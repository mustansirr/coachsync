import { supabase } from "./supabaseClient";

export async function getTeamsByUserId(userId: string) {
  const { data, error } = await supabase
    .from("teams")
    .select("id, name")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function createTeam(name: string, userId: string) {
  const { data, error } = await supabase
    .from("teams")
    .insert([{ name: name.trim(), user_id: userId }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteTeam(teamId: string) {
  const { error } = await supabase.from("teams").delete().eq("id", teamId);
  if (error) throw error;
}

export async function updateTeam(teamId: string, newName: string) {
  const { error } = await supabase
    .from("teams")
    .update({ name: newName.trim() })
    .eq("id", teamId);
  if (error) throw error;
}
