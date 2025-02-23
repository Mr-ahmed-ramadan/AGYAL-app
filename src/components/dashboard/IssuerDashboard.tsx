import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { BarChart3, FileText, Settings } from "lucide-react";
import ListingForm from "./ListingForm";
import ListingManagement from "./ListingManagement";

interface IssuerDashboardProps {
  userName?: string;
  companyName?: string;
}

const defaultProps = {
  userName: "John Doe",
  companyName: "ACME Investments",
};

const IssuerDashboard = ({
  userName = defaultProps.userName,
  companyName = defaultProps.companyName,
}: IssuerDashboardProps) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <Card className="mb-6 p-6 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {userName}</h1>
            <p className="text-muted-foreground">
              {companyName} - Issuer Dashboard
            </p>
          </div>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Create New Listing
          </Button>
        </div>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="listings" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="listings" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Listings
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="listings" className="space-y-6">
          <ListingManagement />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card className="p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Analytics Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Total Raised
                </h3>
                <p className="text-2xl font-bold">$2,500,000</p>
                <span className="text-sm text-green-600">
                  +12.5% from last month
                </span>
              </Card>
              <Card className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Active Listings
                </h3>
                <p className="text-2xl font-bold">5</p>
                <span className="text-sm text-blue-600">
                  2 pending approval
                </span>
              </Card>
              <Card className="p-4">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Investor Count
                </h3>
                <p className="text-2xl font-bold">127</p>
                <span className="text-sm text-green-600">+15 this month</span>
              </Card>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Company Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                    value={companyName}
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Contact Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                    value="contact@acmeinvestments.com"
                    readOnly
                  />
                </div>
              </div>
              <Button variant="outline">Update Profile</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IssuerDashboard;
