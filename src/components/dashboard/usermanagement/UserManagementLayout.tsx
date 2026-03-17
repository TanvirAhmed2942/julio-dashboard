"use client";

import { useState, useMemo } from "react";
import SmallPageInfo from "@/components/common/smallPageInfo/smallPageInfo";
import UserTable, { type UserTableRow } from "./UserTable";
import Pagination from "@/components/common/pagination/Pagination";
import { PAGINATION_LIMIT_OPTIONS } from "@/components/common/pagination/Pagination";
import Stats from "@/components/common/Stats/stats";
import { Users } from "lucide-react";

const DEFAULT_LIMIT = PAGINATION_LIMIT_OPTIONS[0];

const USER_DATA: UserTableRow[] = [
  { id: "C1001", name: "Sazzad Chowdhury", email: "sazzad.cse@gmail.com", phone: "01113337774", order: 25, status: "active" },
  { id: "C1002", name: "Robert Fox", email: "robert.fox@example.com", phone: "01113337775", order: 25, status: "inactive" },
  { id: "C1003", name: "Arlene McCoy", email: "arlene.mccoy@example.com", phone: "01113337776", order: 25, status: "suspended" },
  { id: "C1004", name: "Jane Cooper", email: "jane.cooper@example.com", phone: "01113337777", order: 25, status: "active" },
  { id: "C1005", name: "Darrell Steward", email: "darrell.steward@example.com", phone: "01113337778", order: 25, status: "active" },
  { id: "C1006", name: "Ralph Edwards", email: "ralph.edwards@example.com", phone: "01113337779", order: 25, status: "inactive" },
  { id: "C1007", name: "Cameron Williamson", email: "cameron.w@example.com", phone: "01113337780", order: 25, status: "active" },
  { id: "C1008", name: "Brooklyn Simmons", email: "brooklyn.s@example.com", phone: "01113337781", order: 25, status: "suspended" },
  { id: "C1009", name: "Leslie Alexander", email: "leslie.a@example.com", phone: "01113337782", order: 25, status: "active" },
  { id: "C1010", name: "Kristin Watson", email: "kristin.w@example.com", phone: "01113337783", order: 25, status: "inactive" },
];

function UserManagementLayout() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState<number>(DEFAULT_LIMIT);

  const total = USER_DATA.length;
  const totalPage = Math.max(1, Math.ceil(total / limit));
  const tableRows = useMemo(() => {
    const start = (page - 1) * limit;
    return USER_DATA.slice(start, start + limit);
  }, [page, limit]);

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  const items = [
    {
      label: "Total Users",
      value: "100",
      icon: <Users />,
      iconColor: "text-blue-500",
      iconBgColor: "bg-blue-100",
    },
    {
      label: "Active Users",
      value: "100",
      icon: <Users />,
      iconColor: "text-emerald-500",
      iconBgColor: "bg-emerald-100",
    },
    {
      label: "Inactive Users",
      value: "100",
      icon: <Users />,
      iconColor: "text-amber-500",
      iconBgColor: "bg-amber-100",
    },
    {
      label: "Suspended Users",
      value: "100",
      icon: <Users />,
      iconColor: "text-sky-500",
      iconBgColor: "bg-sky-100",
    },
  ];

  return (
    <div className="space-y-6">
      <SmallPageInfo
        title="User Management"
        description="Manage your users"
      />
      <Stats items={items} />
      <UserTable
        data={tableRows}
        onEdit={() => { }}
        onView={() => { }}
        onDelete={() => { }}
      />
      <Pagination
        page={page}
        totalPage={totalPage}
        total={total}
        limit={limit}
        onPageChange={setPage}
        onLimitChange={handleLimitChange}
        showSummary
      />
    </div>
  );
}

export default UserManagementLayout;
