export default function ConfigCodeBlock() {
  return (
    <div className="bg-[#0c0c0e] border border-zinc-800/60 rounded-xl overflow-hidden shadow-2xl">
      
      <div className="px-5 py-3 border-b border-zinc-800/60 flex justify-between items-center bg-zinc-900/30">
        <span className="text-xs font-mono text-zinc-400">server.js</span>
      </div>

      <div className="p-6 overflow-x-auto text-[13px] font-mono leading-relaxed text-zinc-300 whitespace-pre">

        <div>
          <span className="text-blue-400">import</span> {"{"} createArbiterClient {"}"}{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-green-300">"arbiter-sdk"</span>;
        </div>

        <br />

        <div>
          <span className="text-blue-400">const</span> arbiter ={" "}
          <span className="text-yellow-200">createArbiterClient</span>({"{"}
        </div>

        <div>
          {"  "}apiKey: <span className="text-green-300">"arb_live_your_api_key"</span>,
        </div>

        <div className="text-zinc-500">
          {"  "}// optional overrides 
        </div>

        <div>
          {"  "}rules: {"{"}
        </div>

        <div>
          {"    "}login: {"{"}
        </div>

        <div>
          {"      "}limit: <span className="text-orange-300">10</span>
        </div>

        <div>
          {"    "}{"}"}
        </div>

        <div>
          {"  "}{"}"}
        </div>

        <div>{"});"}</div>

        <br />

        <div>
          <span className="text-blue-400">await</span> arbiter.init();
        </div>

        <br />

        <div>
          <span className="text-blue-400">const</span> result ={" "}
          <span className="text-blue-400">await</span> arbiter.protect({"{"}
        </div>

        <div>
          {"  "}key: req.ip,
        </div>

        <div>
          {"  "}rule: <span className="text-green-300">"login"</span>
        </div>

        <div>{"});"}</div>

        <br />

        <div>
          <span className="text-blue-400">if</span> (!result.allowed) {"{"}
        </div>

        <div>
          {"  "}res.status(429).json({"{"} message:{" "}
          <span className="text-green-300">"Too many requests"</span> {"}"});
        </div>

        <div>{"}"}</div>

      </div>
    </div>
  );
}