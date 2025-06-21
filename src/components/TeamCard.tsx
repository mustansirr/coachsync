import { ChevronRight, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface TeamCardProps {
  team: { id: string; name: string };
  onClick?: () => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({ team, onClick }) => {
  const router = useRouter();
  return (
    <button
      className="flex w-full items-center justify-between p-4 border rounded-md shadow-sm bg-card hover:bg-muted transition-colors cursor-pointer group"
      onClick={onClick ? onClick : () => router.push(`/teams/${team.id}`)}
      type="button"
    >
      <span className="font-medium text-left flex items-center gap-2">
        <Pencil className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        {team.name}
      </span>
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </button>
  );
};
