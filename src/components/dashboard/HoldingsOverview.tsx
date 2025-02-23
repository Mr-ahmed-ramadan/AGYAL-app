import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Percent,
} from "lucide-react";

interface HoldingData {
  name: string;
  value: number;
  change: number;
  apy: number;
}

interface HoldingsOverviewProps {
  holdings?: HoldingData[];
  totalValue?: number;
  totalChange?: number;
}

const defaultHoldings: HoldingData[] = [
  {
    name: "Fixed Income Fund A",
    value: 50000,
    change: 5.2,
    apy: 8.5,
  },
  {
    name: "Sukuk Portfolio B",
    value: 75000,
    change: -2.1,
    apy: 6.7,
  },
  {
    name: "Real Estate Trust C",
    value: 25000,
    change: 3.8,
    apy: 7.2,
  },
];

const HoldingsOverview: React.FC<HoldingsOverviewProps> = ({
  holdings = defaultHoldings,
  totalValue = 150000,
  totalChange = 2.3,
}) => {
  return (
    <div className="w-full bg-background p-6 rounded-lg space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Portfolio Value
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalValue.toLocaleString()}
            </div>
            <div className="flex items-center pt-1 text-sm">
              {totalChange >= 0 ? (
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              )}
              <span
                className={totalChange >= 0 ? "text-green-500" : "text-red-500"}
              >
                {Math.abs(totalChange)}%
              </span>
              <span className="text-muted-foreground ml-1">
                from last month
              </span>
            </div>
          </CardContent>
        </Card>

        {holdings.map((holding, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {holding.name}
              </CardTitle>
              <Percent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${holding.value.toLocaleString()}
              </div>
              <div className="mt-2">
                <Progress value={holding.apy * 10} className="h-2" />
              </div>
              <div className="flex items-center pt-1 text-sm">
                <span className="text-muted-foreground">APY: </span>
                <span className="text-primary ml-1">{holding.apy}%</span>
                <span className="ml-auto flex items-center">
                  {holding.change >= 0 ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={
                      holding.change >= 0 ? "text-green-500" : "text-red-500"
                    }
                  >
                    {Math.abs(holding.change)}%
                  </span>
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HoldingsOverview;
