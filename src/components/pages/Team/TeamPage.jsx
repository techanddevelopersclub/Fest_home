import React from 'react';
import TeamCard from './TeamCard';
import { teamData } from './mockTeam';
import './TeamPage.css';

const TeamPage = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 drop-shadow-2xl">
            Meet Our Team
          </h1>
          <div className="h-1.5 w-48 bg-gradient-to-r from-rose-400 via-purple-500 to-blue-500 rounded-full mx-auto shadow-lg shadow-purple-400/50 mb-6"></div>
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-medium drop-shadow-lg">
            The brilliant minds behind Cieszyc
          </p>
        </div>

        {/* Core Team Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
              Core Team
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mx-auto shadow-lg shadow-rose-400/50"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamData.coreTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Technical Team Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
              Technical Team
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto shadow-lg shadow-blue-400/50"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {teamData.technicalTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Marketing Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
              Marketing Team
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto shadow-lg shadow-purple-400/50"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {teamData.marketingTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;
