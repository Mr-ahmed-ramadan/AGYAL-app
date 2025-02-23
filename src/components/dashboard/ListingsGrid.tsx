import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Listing {
  id: string;
  title: string;
  returnRate: number;
  duration: number;
  riskLevel: "Low" | "Medium" | "High";
  status: "Active" | "Closed" | "Coming Soon";
  minInvestment: number;
}

interface ListingsGridProps {
  listings?: Listing[];
  onListingClick?: (listing: Listing) => void;
}

const defaultListings: Listing[] = [
  {
    id: "1",
    title: "Fixed Income Bond A",
    returnRate: 5.5,
    duration: 12,
    riskLevel: "Low",
    status: "Active",
    minInvestment: 10000,
  },
  {
    id: "2",
    title: "Corporate Sukuk B",
    returnRate: 7.2,
    duration: 24,
    riskLevel: "Medium",
    status: "Active",
    minInvestment: 25000,
  },
  {
    id: "3",
    title: "Real Estate Fund C",
    returnRate: 8.5,
    duration: 36,
    riskLevel: "High",
    status: "Coming Soon",
    minInvestment: 50000,
  },
];

const ListingsGrid = ({
  listings = defaultListings,
  onListingClick = () => {},
}: ListingsGridProps) => {
  return (
    <div className="w-full bg-white p-6">
      {/* Filters and Search Bar */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Input
            placeholder="Search listings..."
            className="max-w-sm"
            type="search"
            icon={<Search className="w-4 h-4" />}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risks</SelectItem>
              <SelectItem value="low">Low Risk</SelectItem>
              <SelectItem value="medium">Medium Risk</SelectItem>
              <SelectItem value="high">High Risk</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Durations</SelectItem>
              <SelectItem value="short">0-12 Months</SelectItem>
              <SelectItem value="medium">12-24 Months</SelectItem>
              <SelectItem value="long">24+ Months</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map((listing) => (
          <Card
            key={listing.id}
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onListingClick(listing)}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">{listing.title}</h3>
              <Badge
                variant={
                  listing.status === "Active"
                    ? "default"
                    : listing.status === "Coming Soon"
                      ? "secondary"
                      : "outline"
                }
              >
                {listing.status}
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Return Rate</p>
                  <p className="font-medium">{listing.returnRate}% p.a.</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{listing.duration} months</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Risk Level</p>
                  <Badge variant="outline" className="mt-1">
                    {listing.riskLevel}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Min. Investment
                  </p>
                  <p className="font-medium">
                    ${listing.minInvestment.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ListingsGrid;
