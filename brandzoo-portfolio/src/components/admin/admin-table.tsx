import { Badge } from "@/components/ui/badge";

type AdminTableProps = {
  rows: Array<Record<string, string | number>>;
};

export function AdminTable({ rows }: AdminTableProps) {
  const columns = rows[0] ? Object.keys(rows[0]) : [];

  return (
    <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.045]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-white/10 bg-white/[0.035] text-xs uppercase tracking-[0.16em] text-white/35">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-4 py-3 font-medium">
                  {column.replaceAll("_", " ")}
                </th>
              ))}
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((row, index) => (
              <tr key={index} className="text-white/68">
                {columns.map((column) => (
                  <td key={column} className="px-4 py-4">
                    {row[column]}
                  </td>
                ))}
                <td className="px-4 py-4">
                  <Badge className="rounded-md bg-lime-300/10 text-lime-100">Published</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
