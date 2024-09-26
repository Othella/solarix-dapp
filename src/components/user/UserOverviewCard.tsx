import React from 'react';

interface UserOverviewCardProps {
  title: string;
  value: React.ReactNode;
}

const UserOverviewCard: React.FC<UserOverviewCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-zinc-900 dark:text-white">{value}</div>
    </div>
  );
};

export default UserOverviewCard;