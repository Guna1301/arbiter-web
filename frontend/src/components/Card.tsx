import type { ReactNode } from "react";
interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
      {children}
    </div>
  );
};

export default Card;