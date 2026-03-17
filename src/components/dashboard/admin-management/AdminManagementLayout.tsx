"use client";

import { useState } from "react";
import SmallPageInfo from "@/components/common/smallPageInfo/smallPageInfo";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import AddEditModal from "./AddEditModal";

export type AdminRow = {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    avatarUrl?: string;
    createdAt: string;
};

const ADMIN_DATA: AdminRow[] = [
    { id: "1", name: "Jenny Wilson", email: "jenny@example.com", phone: "+1 234 567 890", createdAt: "22 Oct, 2021" },
    { id: "2", name: "Savannah Nguyen", email: "savannah@example.com", phone: "+1 234 567 891", createdAt: "22 Nov, 2022" },
    { id: "3", name: "Darrell Steward", email: "darrell@example.com", phone: "+1 234 567 892", createdAt: "22 Jan, 2023" },
    { id: "4", name: "Esther Howard", email: "esther@example.com", phone: "+1 234 567 893", createdAt: "22 April, 2024" },
];

function AdminTable({
    data = ADMIN_DATA,
    onEdit,
    onDelete,
}: {
    data?: AdminRow[];
    onEdit?: (row: AdminRow) => void;
    onDelete?: (row: AdminRow) => void;
}) {
    return (
        <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow className="border-b border-border bg-muted/50 hover:bg-muted/50">
                        <TableHead className="h-11 w-12 font-semibold text-foreground">SI</TableHead>
                        <TableHead className="font-semibold text-foreground">Name</TableHead>
                        <TableHead className="font-semibold text-foreground">Created At</TableHead>
                        <TableHead className="font-semibold text-foreground text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            key={row.id}
                            className={cn(
                                "border-b border-border border-dashed bg-card hover:bg-muted/30 transition-colors"
                            )}
                        >
                            <TableCell className="w-12 font-medium text-foreground">
                                {String(index + 1).padStart(2, "0")}
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-muted">
                                        {row.avatarUrl ? (
                                            /* eslint-disable-next-line @next/next/no-img-element */
                                            <img
                                                src={row.avatarUrl}
                                                alt=""
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-muted-foreground">
                                                {row.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                    <span className="font-medium text-foreground">{row.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{row.createdAt}</TableCell>
                            <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-1">
                                    <Button
                                        size="icon-sm"
                                        variant="ghost"
                                        onClick={() => onEdit?.(row)}
                                        aria-label="Edit"
                                    >
                                        <Pencil className="size-4" />
                                    </Button>
                                    <Button
                                        size="icon-sm"
                                        variant="ghost"
                                        className="text-muted-foreground hover:text-destructive"
                                        onClick={() => onDelete?.(row)}
                                        aria-label="Delete"
                                    >
                                        <Trash2 className="size-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

function AdminManagementLayout() {
    const [modalOpen, setModalOpen] = useState(false);
    const [mode, setMode] = useState<"add" | "edit">("add");
    const [selectedAdmin, setSelectedAdmin] = useState<AdminRow | null>(null);

    const handleAdd = () => {
        setMode("add");
        setSelectedAdmin(null);
        setModalOpen(true);
    };

    const handleEdit = (row: AdminRow) => {
        setMode("edit");
        setSelectedAdmin(row);
        setModalOpen(true);
    };

    const handleSubmit = () => {
        if (mode === "add") {
            // TODO: add admin API
        } else if (selectedAdmin) {
            // TODO: update admin API
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <SmallPageInfo
                    title="Admin Management"
                    description="Manage your admins"
                />
                <Button variant="outline" onClick={handleAdd}>
                    <Plus />
                    Add Admin
                </Button>
            </div>
            <AdminTable onEdit={handleEdit} onDelete={() => { }} />
            <AddEditModal
                key={modalOpen ? (mode === "edit" ? selectedAdmin?.id ?? "edit" : "add") : "closed"}
                open={modalOpen}
                onOpenChange={setModalOpen}
                mode={mode}
                initialValues={
                    mode === "edit" && selectedAdmin
                        ? {
                            name: selectedAdmin.name,
                            email: selectedAdmin.email ?? "",
                            phone: selectedAdmin.phone ?? "",
                        }
                        : undefined
                }
                onSubmit={handleSubmit}
            />
        </div>
    );
}

export default AdminManagementLayout;
