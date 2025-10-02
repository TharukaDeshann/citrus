import React from "react";
import { Link } from "react-router-dom";

// Mock data for a single tool (e.g., Drill)
const mockTool = {
  id: "drill-001",
  name: "Cordless Power Drill",
  brand: "DeWalt",
  model: "DCD791D2",
  category: "Drilling",
  serialNumber: "SN-DRL-2025-0001",
  condition: "Good",
  status: "Available",
  image:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  description:
    "A compact, lightweight 20V cordless drill with brushless motor, ideal for precise drilling and fastening.",
  specs: {
    voltage: "20V",
    speed: "0-550/0-2,000 RPM",
    chuck: "1/2 in. (13 mm)",
    weight: "1.6 kg",
    battery: "2x 2.0Ah Li-Ion",
  },
};

const borrowHistory = [
  {
    id: 1,
    borrower: "Alex Johnson",
    department: "Maintenance",
    borrowedOn: "2025-09-18",
    returnedOn: "2025-09-20",
    notes: "Used for HVAC panel mounting.",
  },
  {
    id: 2,
    borrower: "Priya Sharma",
    department: "Warehouse",
    borrowedOn: "2025-08-03",
    returnedOn: "2025-08-04",
    notes: "Shelf installation, no issues.",
  },
  {
    id: 3,
    borrower: "Miguel Torres",
    department: "Field Ops",
    borrowedOn: "2025-07-12",
    returnedOn: "2025-07-13",
    notes: "Battery swapped mid-shift.",
  },
];

const repairHistory = [
  {
    id: 1,
    date: "2025-06-15",
    issue: "Chuck slipping under load",
    action: "Chuck tightened and lubricated",
    cost: "$25",
    technician: "R. Kumar",
  },
  {
    id: 2,
    date: "2025-03-29",
    issue: "Battery not charging",
    action: "Replaced faulty battery pack",
    cost: "$45",
    technician: "Service Center",
  },
];

const InfoRow: React.FC<{ label: string; value?: React.ReactNode }> = ({
  label,
  value,
}) => (
  <div className="flex items-start justify-between py-2 border-b border-gray-200">
    <dt className="text-sm font-medium text-gray-600">{label}</dt>
    <dd className="text-sm text-gray-900 max-w-[60%] text-right">{value ?? "-"}</dd>
  </div>
);

const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="bg-white rounded-xl shadow-sm border border-gray-200">
    <div className="px-6 py-4 border-b border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    </div>
    <div className="p-6">{children}</div>
  </section>
);

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="list-reset flex text-gray-500">
            <li>
              <Link to="/" className="hover:text-gray-700">
                Dashboard
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li>
              <Link to="/tools" className="hover:text-gray-700">
                Tools
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li className="text-gray-900">{mockTool.name}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{mockTool.name}</h1>
          <p className="text-gray-600 mt-1">{mockTool.description}</p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Image & Specs */}
          <div className="lg:col-span-1 space-y-6">
            <SectionCard title="Tool">
              <div className="space-y-4">
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <img
                    src={mockTool.image}
                    alt={mockTool.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <dl className="divide-y divide-gray-100">
                  <InfoRow label="Brand" value={mockTool.brand} />
                  <InfoRow label="Model" value={mockTool.model} />
                  <InfoRow label="Category" value={mockTool.category} />
                  <InfoRow label="Serial No." value={mockTool.serialNumber} />
                  <InfoRow label="Condition" value={mockTool.condition} />
                  <InfoRow label="Status" value={mockTool.status} />
                </dl>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-gray-200 p-3 bg-gray-50">
                    <p className="text-xs text-gray-500">Voltage</p>
                    <p className="text-sm font-medium">{mockTool.specs.voltage}</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-3 bg-gray-50">
                    <p className="text-xs text-gray-500">Speed</p>
                    <p className="text-sm font-medium">{mockTool.specs.speed}</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-3 bg-gray-50">
                    <p className="text-xs text-gray-500">Chuck</p>
                    <p className="text-sm font-medium">{mockTool.specs.chuck}</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-3 bg-gray-50">
                    <p className="text-xs text-gray-500">Weight</p>
                    <p className="text-sm font-medium">{mockTool.specs.weight}</p>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* Right: Histories */}
          <div className="lg:col-span-2 space-y-6">
            <SectionCard title="Borrow History">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Borrower
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Borrowed On
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Returned On
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {borrowHistory.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-sm text-gray-900">{row.borrower}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{row.department}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{row.borrowedOn}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{row.returnedOn}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>

            <SectionCard title="Repair History">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Issue
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cost
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Technician
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {repairHistory.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-sm text-gray-900">{row.date}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{row.issue}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{row.action}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{row.cost}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{row.technician}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
