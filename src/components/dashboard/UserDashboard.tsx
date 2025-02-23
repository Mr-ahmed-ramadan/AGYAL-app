import React from "react";
import ListingsGrid from "./ListingsGrid";
import HoldingsOverview from "./HoldingsOverview";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CreditCard, Wallet, LineChart } from "lucide-react";

interface UserDashboardProps {
  userName?: string;
  activeTab?: string;
  onTabChange?: (value: string) => void;
}

const UserDashboard: React.FC<UserDashboardProps> = ({
  userName = "Investor",
  activeTab = "overview",
  onTabChange = () => {},
}) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Welcome back, {userName}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Balance
                  </CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$150,000</div>
                  <p className="text-xs text-muted-foreground">
                    +20% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Investments
                  </CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">
                    Across 3 categories
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Virtual Cards
                  </CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Active cards</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue={activeTab} onValueChange={onTabChange}>
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <HoldingsOverview />
          </TabsContent>

          <TabsContent value="investments">
            <ListingsGrid />
          </TabsContent>

          <TabsContent value="cards">
            <Card>
              <CardHeader>
                <CardTitle>Virtual Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Placeholder Virtual Card */}
                  <div className="relative h-48 rounded-xl bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
                    <div className="flex flex-col justify-between h-full">
                      <div className="space-y-2">
                        <p className="text-sm opacity-75">Virtual Card</p>
                        <p className="font-mono text-xl">**** **** **** 1234</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-sm opacity-75">Card Holder</p>
                          <p>{userName}</p>
                        </div>
                        <div>
                          <p className="text-sm opacity-75">Expires</p>
                          <p>12/25</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add New Card Placeholder */}
                  <div className="flex items-center justify-center h-48 rounded-xl border-2 border-dashed border-gray-200 p-6">
                    <div className="text-center">
                      <CreditCard className="mx-auto h-8 w-8 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        Add new virtual card
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;
