"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type AdminFormValues = {
    name: string;
    email: string;
    phone: string;
};

type AddEditModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    mode: "add" | "edit";
    /** For edit mode, pass initial values. Pass a key that changes when opening (e.g. open ? (editId ?? "add") : "closed") so the form resets. */
    initialValues?: Partial<AdminFormValues>;
    onSubmit?: (values: AdminFormValues) => void;
};

export default function AddEditModal({
    open,
    onOpenChange,
    mode,
    initialValues,
    onSubmit,
}: AddEditModalProps) {
    const [name, setName] = useState(initialValues?.name ?? "");
    const [email, setEmail] = useState(initialValues?.email ?? "");
    const [phone, setPhone] = useState(initialValues?.phone ?? "");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.({ name, email, phone });
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        {mode === "add" ? "Add Admin" : "Edit Admin"}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="admin-name">Name</Label>
                        <Input
                            id="admin-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="admin-email">Email</Label>
                        <Input
                            id="admin-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="admin-phone">Phone</Label>
                        <Input
                            id="admin-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter phone"
                        />
                    </div>
                    <DialogFooter className="gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancel
                        </Button>
                        <Button type="submit">
                            {mode === "add" ? "Add Admin" : "Save changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
