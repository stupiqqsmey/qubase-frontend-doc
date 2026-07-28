export type RolePermission = {
  role: string;
  permissions: readonly string[];
};

export type RoleTableProps = {
  rows: readonly RolePermission[];
  caption?: string;
};

export function RoleTable({
  rows,
  caption = "Roles and permissions",
}: RoleTableProps) {
  return (
    <div className="docs-table-wrapper">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Permissions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ role, permissions }) => (
            <tr key={role}>
              <th scope="row">{role}</th>
              <td>{permissions.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
