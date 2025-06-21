"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { ChevronLeft, Trash, Pencil, LoaderCircle, AlertTriangle } from "lucide-react";

export default function TeamDetailPage() {
  const router = useRouter();
  const params = useParams();
  const teamId = params?.id as string;
  const [team, setTeam] = useState<{ id: string; name: string } | null>(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("teams")
        .select("id, name")
        .eq("id", teamId)
        .single();
      if (error) {
        setError("Failed to load team");
      } else {
        setTeam(data);
        setName(data.name);
      }
      setLoading(false);
    };
    if (teamId) fetchTeam();
  }, [teamId]);

  const handleSave = async () => {
    if (!name.trim()) return;
    setSaving(true);
    setError(null);
    const { error } = await supabase
      .from("teams")
      .update({ name: name.trim() })
      .eq("id", teamId);
    if (error) {
      setError("Failed to update team");
    } else if (team) {
      setTeam({ ...team, name: name.trim() });
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    setDeleting(true);
    setError(null);
    const { error } = await supabase.from("teams").delete().eq("id", teamId);
    if (error) {
      setError("Failed to delete team");
    } else {
      router.push("/dashboard");
    }
    setDeleting(false);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoaderCircle className="animate-spin h-6 w-6 text-muted-foreground mr-2" />
        <span className="text-muted-foreground">Loading...</span>
      </div>
    );
  }

  if (!team) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <AlertTriangle className="h-6 w-6 text-destructive mr-2" />
        <span className="text-destructive">Team not found.</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center gap-4">
          <Button variant="ghost" onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2">
            <ChevronLeft className="h-5 w-5" /> Back
          </Button>
          <h1 className="text-xl font-bold">Team Details</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8 max-w-md">
        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-md bg-destructive/10 px-4 py-2 text-destructive border border-destructive/20">
            <AlertTriangle className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSave();
          }}
          className="space-y-4"
        >
          <label className="block font-medium">Team Name</label>
          <div className="flex gap-2 items-center">
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              disabled={saving}
              className="flex-1"
            />
            <Button type="submit" disabled={saving || !name.trim()}>
              <Pencil className="h-4 w-4 mr-1" /> Save
            </Button>
          </div>
        </form>
        <div className="mt-8">
          <Button
            variant="destructive"
            disabled={deleting}
            onClick={() => setShowConfirm(true)}
            className="flex items-center gap-2"
          >
            <Trash className="h-4 w-4" /> Delete Team
          </Button>
        </div>
        {showConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
              <h2 className="font-bold mb-2">Delete Team?</h2>
              <p className="mb-4">Are you sure you want to delete this team? This action cannot be undone.</p>
              <div className="flex gap-2 justify-end">
                <Button variant="ghost" onClick={() => setShowConfirm(false)} disabled={deleting}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
                  <Trash className="h-4 w-4 mr-1 animate-pulse" /> Delete
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
