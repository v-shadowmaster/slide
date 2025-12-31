import React from "react";

type LoaderProps = {
  loading: boolean;
};

export function Loader({ loading }: LoaderProps) {
  if (!loading) return null;

  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
    </div>
  );
}
