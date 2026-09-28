"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Activity, User, AlertTriangle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeamCard } from "@/components/TeamCard";
import { TeamModal } from "@/components/TeamModal";

export default function DashboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [teams, setTeams] = useState<{ id: string; name: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignOut = async () => {
    // TODO: Clear auth state / cookies / session
    router.push("/sign-in");
  };

  const handleAddTeam = async (name: string) => {
    if (!name.trim()) return;
    setModalLoading(true);
    setModalError(null);
    // TODO: Replace with custom API call to create team in database
    const newTeam = { id: Date.now().toString(), name: name.trim() };
    setTeams((prev) => [newTeam, ...prev]);
    setModalLoading(false);
    setModalOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CoachSync</span>
          </Link>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-primary"
            >
              <User className="h-5 w-5" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md z-10">
                <button
                  onClick={handleSignOut}
                  className="block w-full px-4 py-2 text-left text-sm text-muted-foreground hover:bg-muted hover:text-primary"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Teams</h1>
        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-md bg-destructive/10 px-4 py-2 text-destructive border border-destructive/20">
            <AlertTriangle className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}
        <div className="flex items-center mb-4">
          <Button onClick={() => setModalOpen(true)} className="ml-auto">
            <Plus className="mr-2 h-4 w-4" /> Create Team
          </Button>
        </div>
        <TeamModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setModalError(null);
          }}
          onSubmit={handleAddTeam}
          loading={modalLoading}
          error={modalError}
        />
        <div className="space-y-4">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </main>
    </div>
  );
}