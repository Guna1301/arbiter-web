import Card from "../components/Card";

const Overview = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Overview</h1>

      <div className="grid grid-cols-3 gap-6">
        <Card>
          <p className="text-zinc-400 text-sm">Total Requests</p>
          <p className="text-3xl font-bold mt-3">12,430</p>
        </Card>

        <Card>
          <p className="text-zinc-400 text-sm">Blocked Requests</p>
          <p className="text-3xl font-bold mt-3 text-red-500">1,240</p>
        </Card>

        <Card>
          <p className="text-zinc-400 text-sm">Active API Keys</p>
          <p className="text-3xl font-bold mt-3 text-blue-500">4</p>
        </Card>
      </div>
    </div>
  );
};

export default Overview;