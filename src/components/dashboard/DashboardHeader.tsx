import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Wallet, ChevronDown, Bell } from "lucide-react";

interface Profile {
  id: string;
  type: "user" | "issuer" | "admin";
  name: string;
  avatar?: string;
}

interface DashboardHeaderProps {
  currentProfile?: Profile;
  profiles?: Profile[];
  isConnected?: boolean;
  onConnect?: () => void;
  onProfileSelect?: (profile: Profile) => void;
  walletAddress?: string;
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

const DashboardHeader = ({
  currentProfile = defaultProfiles[0],
  profiles = defaultProfiles,
  isConnected = false,
  onConnect = () => {},
  onProfileSelect = () => {},
  walletAddress = "0x1234...5678",
}: DashboardHeaderProps) => {
  return (
    <header className="w-full h-20 px-6 bg-white border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-primary">AGYAL</h1>
      </div>

      <div className="flex items-center space-x-4">
        {!isConnected ? (
          <Button onClick={onConnect} className="flex items-center space-x-2">
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </Button>
        ) : (
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Wallet className="w-4 h-4" />
              <span>{walletAddress}</span>
            </Button>

            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 px-2"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentProfile.avatar} />
                    <AvatarFallback>
                      {currentProfile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">
                      {currentProfile.name}
                    </span>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {profiles.map((profile) => (
                  <DropdownMenuItem
                    key={profile.id}
                    onClick={() => onProfileSelect(profile)}
                    className="flex items-center space-x-2 p-2"
                  >
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={profile.avatar} />
                      <AvatarFallback>
                        {profile.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{profile.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
