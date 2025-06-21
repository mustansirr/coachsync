import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TeamModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (name: string) => Promise<void> | void;
  initialName?: string;
  title?: string;
  submitLabel?: string;
  loading?: boolean;
  error?: string | null;
}

export const TeamModal: React.FC<TeamModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialName = "",
  title = "Create Team",
  submitLabel = "Create",
  loading = false,
  error = null,
}) => {
  const [name, setName] = useState(initialName);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    setName(initialName);
  }, [initialName, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!name.trim()) return;
    await onSubmit(name.trim());
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <Input
            autoFocus
            placeholder="Team name"
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={loading}
            className={touched && !name.trim() ? "border-destructive" : ""}
          />
          {touched && !name.trim() && (
            <div className="text-destructive text-sm">Team name is required.</div>
          )}
          {error && (
            <div className="text-destructive text-sm">{error}</div>
          )}
          <div className="flex gap-2 justify-end">
            <Button type="button" variant="ghost" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading || !name.trim()}>
              {submitLabel}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
