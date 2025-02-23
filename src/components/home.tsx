import React, { useState } from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import UserDashboard from "./dashboard/UserDashboard";
import IssuerDashboard from "./dashboard/IssuerDashboard";

interface Profile {
  id: string;
  type: "user" | "issuer" | "admin";
  name: string;
  avatar?: string;
}

const defaultProfiles: Profile[] = [
  {
    id: "1",
    type: "user",
    name: "Investor Account",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=investor",
  },
  {
    id: "2",
    type: "issuer",
    name: "Issuer Account",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=issuer",
  },
];

const Home = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [currentProfile, setCurrentProfile] = useState<Profile>(
    defaultProfiles[0],
  );

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleProfileSelect = (profile: Profile) => {
    setCurrentProfile(profile);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader
        currentProfile={currentProfile}
        profiles={defaultProfiles}
        isConnected={isConnected}
        onConnect={handleConnect}
        onProfileSelect={handleProfileSelect}
        walletAddress="0x1234...5678"
      />

      {isConnected && (
        <main className="container mx-auto">
          {currentProfile.type === "user" && (
            <UserDashboard
              userName={currentProfile.name}
              activeTab="overview"
              onTabChange={() => {}}
            />
          )}
          {currentProfile.type === "issuer" && (
            <IssuerDashboard
              userName={currentProfile.name}
              companyName="ACME Investments"
            />
          )}
        </main>
      )}

      {!isConnected && (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50">
          <div className="text-center space-y-4 p-8 max-w-md">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to AGYAL Platform
            </h1>
            <p className="text-gray-600">
              Connect your wallet to access the multi-profile dashboard system
              for fixed-income opportunities.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
