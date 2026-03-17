"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function OwnerInfo() {
    return (
        <div className="space-y-4 rounded-xl border border-dashed border-border bg-muted/40 p-4">
            <h3 className="text-sm font-semibold text-foreground">Owners Information</h3>

            <div className="space-y-1">
                <Label htmlFor="owner-name">Name</Label>
                <Input id="owner-name" placeholder="Enter your name" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="owner-contact">Contact Number</Label>
                <Input id="owner-contact" placeholder="Enter your contact number" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="owner-contact-additional">Additional Contact Number</Label>
                <Input id="owner-contact-additional" placeholder="Enter your contact number" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="owner-email">Email</Label>
                <Input id="owner-email" type="email" placeholder="Enter Restaurant Email" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="owner-address">Detail Address</Label>
                <Input id="owner-address" placeholder="Enter Detail Address" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="owner-nid">National Identity Card</Label>
                <Input id="owner-nid" placeholder="Enter Nid number" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="owner-nid-proof">NID Proof</Label>
                <label
                    htmlFor="owner-nid-proof"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-border bg-card px-4 py-6 text-sm text-muted-foreground hover:bg-muted/60"
                >
                    <span className="text-xs font-medium">Upload Nid Card</span>
                </label>
                <Input
                    id="owner-nid-proof"
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                />
            </div>
            <Button variant="outline" className="w-full">Save</Button>
        </div>
    );
}
