import { useEffect, useState } from "react";
import { Plus, Trash2, Key, ShieldAlert } from "lucide-react";
import { getApiKeys, revokeApiKey } from "../services/apikey.api";
import type { ApiKey } from "../types/apikey";
import CreateApiKeyModal from "./CreateApiKeyModal";

interface Props {
  projectId: string;
}

export default function ApiKeysTab({ projectId }: Props) {
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const fetchKeys = async () => {
    try {
      const data = await getApiKeys(projectId);
      console.log("Fetched API keys:", data);
      setKeys(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKeys();
  }, [projectId]);

  const handleRevoke = async (id: string) => {
    const prev = [...keys];
    setKeys(keys.map(k => k.id === id ? { ...k, status: "revoked" } : k));

    try {
      await revokeApiKey(id);
    } catch (err) {
      console.error(err);
      setKeys(prev); 
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 text-zinc-500 text-sm">
        Loading API keys...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">

      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-lg font-medium text-zinc-100">API Keys</h2>
          <p className="text-sm text-zinc-400 mt-1">
            Manage access and authentication for your project's endpoints.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus size={16} />
          Create Key
        </button>
      </div>

      {keys.length > 0 && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex gap-3 items-start">
          <ShieldAlert size={18} className="text-amber-500 mt-0.5 shrink-0" />
          <div className="text-sm text-amber-200/80">
            <p className="font-medium text-amber-500 mb-0.5">Security Notice</p>
            <p>
              For your protection, full API keys are only displayed once upon creation. 
              If you lose a key, you must revoke it and generate a new one.
            </p>
          </div>
        </div>
      )}

      {keys.length > 0 ? (
        <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-sm text-left text-zinc-400">
            <thead className="bg-zinc-900 border-b border-zinc-800/80 text-zinc-300">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Secret Key</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Created</th>
                <th className="px-6 py-4 font-medium">Last Used</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-800/50">
              {keys.map((k) => {
                const displayKey = (k as ApiKey).maskedKey || `${k.prefix || ''}••••••••••••••••`;

                return (
                  <tr key={k.id} className="hover:bg-zinc-800/20 transition-colors">
                    <td className="px-6 py-4 text-zinc-200 font-medium">{k.name}</td>

                    <td className="px-6 py-4">
                      <code className="font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded select-none">
                        {displayKey}
                      </code>
                    </td>

                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        k.status === "active"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}>
                        {k.status.charAt(0).toUpperCase() + k.status.slice(1)}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      {new Date(k.createdAt).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </td>

                    <td className="px-6 py-4 text-zinc-500">
                      {k.lastUsedAt
                        ? new Date(k.lastUsedAt).toLocaleDateString()
                        : "Never"}
                    </td>

                    <td className="px-6 py-4 flex justify-end">
                      <button
                        onClick={() => handleRevoke(k.id)}
                        disabled={k.status !== "active"}
                        className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Revoke Key"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center border-2 border-dashed border-zinc-800/60 rounded-xl bg-zinc-900/20">
          <div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-zinc-500">
            <Key size={24} />
          </div>
          <p className="text-zinc-200 text-sm font-medium mb-1">No API keys found</p>
          <p className="text-zinc-500 text-sm max-w-sm mb-6">
            You haven't generated any keys yet. Create one to authenticate your API requests.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Plus size={16} />
            Create First Key
          </button>
        </div>
      )}

      {showModal && (
        <CreateApiKeyModal
          projectId={projectId}
          onClose={() => setShowModal(false)}
          onCreated={fetchKeys}
        />
      )}
    </div>
  );
}