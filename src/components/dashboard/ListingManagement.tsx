import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, Edit, Trash2, AlertCircle } from "lucide-react";
import DummyComponent from "./ListingForm";

interface Listing {
  id: string;
  title: string;
  status: "active" | "pending" | "expired";
  returns: number;
  duration: string;
  raised: number;
  target: number;
}

interface ListingManagementProps {
  listings?: Listing[];
  onEdit?: (listing: Listing) => void;
  onDelete?: (id: string) => void;
  onView?: (listing: Listing) => void;
}

const defaultListings: Listing[] = [
  {
    id: "1",
    title: "Real Estate Investment Opportunity",
    status: "active",
    returns: 12.5,
    duration: "12 months",
    raised: 500000,
    target: 1000000,
  },
  {
    id: "2",
    title: "Commercial Property Fund",
    status: "pending",
    returns: 8.75,
    duration: "24 months",
    raised: 250000,
    target: 750000,
  },
  {
    id: "3",
    title: "Infrastructure Development Project",
    status: "expired",
    returns: 15.0,
    duration: "36 months",
    raised: 2000000,
    target: 2000000,
  },
];

const ListingManagement = ({
  listings = defaultListings,
  onEdit = () => {},
  onDelete = () => {},
  onView = () => {},
}: ListingManagementProps) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "expired":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Manage Listings</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create New Listing</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Listing</DialogTitle>
            </DialogHeader>
            <DummyComponent />
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Returns</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Raised</TableHead>
              <TableHead>Target</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listings.map((listing) => (
              <TableRow key={listing.id}>
                <TableCell className="font-medium">{listing.title}</TableCell>
                <TableCell>
                  <Badge className={getStatusBadgeColor(listing.status)}>
                    {listing.status.charAt(0).toUpperCase() +
                      listing.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{listing.returns}%</TableCell>
                <TableCell>{listing.duration}</TableCell>
                <TableCell>${listing.raised.toLocaleString()}</TableCell>
                <TableCell>${listing.target.toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onView(listing)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Dialog
                      open={isEditDialogOpen}
                      onOpenChange={setIsEditDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setSelectedListing(listing);
                            onEdit(listing);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Listing</DialogTitle>
                        </DialogHeader>
                        <DummyComponent />
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onDelete(listing.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {listings.length === 0 && (
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium">No Listings Found</h3>
          <p className="text-sm text-gray-500">
            Create your first listing to get started.
          </p>
        </div>
      )}
    </Card>
  );
};

export default ListingManagement;
