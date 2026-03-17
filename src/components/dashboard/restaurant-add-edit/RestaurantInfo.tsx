import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function RestaurantInfo() {
    return (
        <div className="space-y-4 rounded-xl border border-dashed border-border bg-muted/40 p-4">
            <div className="space-y-1">
                <Label htmlFor="restaurant-name">Name</Label>
                <Input
                    id="restaurant-name"
                    placeholder="Enter Restaurant Name"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="restaurant-description">Description</Label>
                <Textarea
                    id="restaurant-description"
                    placeholder="Give short description"
                    rows={3}
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="restaurant-logo">Logo</Label>
                <label
                    htmlFor="restaurant-logo"
                    className="flex cursor-pointer items-center justify-center rounded-md border border-dashed border-border bg-card px-4 py-6 text-sm text-muted-foreground hover:bg-muted/60"
                >
                    <span className="text-xs font-medium">Upload image</span>
                </label>
                <Input
                    id="restaurant-logo"
                    type="file"
                    accept="image/*"
                    className="hidden"
                />
            </div>

            <div className="space-y-1">
                <Label htmlFor="restaurant-license">License proof</Label>
                <label
                    htmlFor="restaurant-license"
                    className="flex cursor-pointer items-center justify-center rounded-md border border-dashed border-border bg-card px-4 py-6 text-sm text-muted-foreground hover:bg-muted/60"
                >
                    <span className="text-xs font-medium">Upload license image</span>
                </label>
                <Input
                    id="restaurant-license"
                    type="file"
                    accept="image/*"
                    className="hidden"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                    <Label htmlFor="restaurant-phone">Phone</Label>
                    <Input
                        id="restaurant-phone"
                        placeholder="Enter Restaurant Number"
                    />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="restaurant-email">Email</Label>
                    <Input
                        id="restaurant-email"
                        type="email"
                        placeholder="Enter Restaurant Email"
                    />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                    <Label htmlFor="restaurant-city">City</Label>
                    <Input id="restaurant-city" placeholder="Enter City" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="restaurant-address">Detail Address</Label>
                    <Input
                        id="restaurant-address"
                        placeholder="Enter Detail Address"
                    />
                </div>
            </div>
            <Button variant="outline" className="w-full">Save</Button>
        </div>
    );
}

export default RestaurantInfo;