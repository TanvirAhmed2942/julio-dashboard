"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function BankInformation() {
    return (
        <div className="space-y-4 rounded-xl border border-dashed border-border bg-muted/40 p-4">
            <h3 className="text-sm font-semibold text-foreground">Bank Information</h3>

            <div className="space-y-1">
                <Label htmlFor="account-holder">Account Holder Name</Label>
                <Input id="account-holder" placeholder="Enter account holder name" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="bank-name">Bank Name</Label>
                <Input id="bank-name" placeholder="Enter bank name" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="branch-name">Branch Name</Label>
                <Input id="branch-name" placeholder="Enter Branch name" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="account-number">Account Number</Label>
                <Input id="account-number" placeholder="Enter account number" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="swift-bic">SWIFT/BIC Code</Label>
                <Input id="swift-bic" placeholder="Enter code" />
            </div>
            <Button variant="outline" className="w-full">Save</Button>
        </div>
    );
}

export default BankInformation;
