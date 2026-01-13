import GstEntities from "./GstEntities";
import GSTSummary from "./GSTSummary";

export default function GSTInfoCard() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-5 w-full">
      <div className="w-full lg:w-[60%] space-y-6">
        <div className="w-full bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-5 relative">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-green-600 text-white flex items-center justify-center">
                <i className="ri-shopping-bag-3-line text-xl"></i>
              </div>
              <h2 className="font-semibold text-gray-800">
                Understanding GST Components
              </h2>
            </div>
            <button className="text-gray-400 hover:text-gray-600 text-xl self-start sm:self-auto">
              ✕
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <h3 className="font-semibold text-gray-800">CGST</h3>
              </div>
              <p className="text-sm text-gray-500">
                Central Goods and Services Tax collected by the Central Government.
                Applied on intra-state transactions.
              </p>
            </div>

            {/* SGST */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                <h3 className="font-semibold text-gray-800">SGST</h3>
              </div>
              <p className="text-sm text-gray-500">
                State Goods and Services Tax collected by the State Government.
                Applied on intra-state transactions.
              </p>
            </div>

            {/* IGST */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                <h3 className="font-semibold text-gray-800">IGST</h3>
              </div>
              <p className="text-sm text-gray-500">
                Integrated Goods and Services Tax applied on inter-state
                transactions. Collected by the Central Government.
              </p>
            </div>
          </div>

          {/* Tip */}
          <div className="bg-blue-100 border border-blue-200 text-sm rounded-lg p-3 text-blue-800">
            <b>Quick Tip:</b> For intra-state transactions, GST is split equally
            between CGST and SGST (e.g., 18% GST = 9% CGST + 9% SGST). For inter-state
            transactions, the full GST rate is charged as IGST.
          </div>
        </div>

        <GstEntities />
        <GSTSummary />
      </div>
      
      <div className="w-full lg:w-[40%]">
        <div className="bg-red-500 rounded-t-2xl shadow border border-gray-300 text-white p-4">
          <div className="flex items-center gap-2">
            <i className="ri-wallet-3-line text-xl"></i>
            <h2 className="font-semibold">Payment Summary</h2>
          </div>
          <p className="text-sm opacity-90">December 2024</p>
        </div>

        <div className="bg-white p-4 space-y-4 rounded-b-2xl border border-t-0 border-gray-300">
          <div>
            <p className="text-sm text-gray-500">Total GST Payable</p>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-xl font-bold text-red-600">₹0.00</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                No Payment Required
              </span>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg flex items-start gap-3">
            <i className="ri-calendar-line text-gray-500 mt-1"></i>
            <div>
              <p className="text-xs text-gray-500">Due Date</p>
              <p className="font-medium">20 Jan 2025</p>
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500">GSTIN</p>
            <p className="font-medium break-all">27AABCU9603R1ZM</p>
            <p className="text-xs text-gray-400">Read-only</p>
          </div>

          <div className="space-y-2">
            <button className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
              <i className="ri-download-2-line"></i>
              Download GST Summary (PDF)
            </button>

            <button className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
              <i className="ri-download-2-line"></i>
              Download GST Summary (Excel)
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-sm text-blue-700">
            <b>Important:</b> You will be redirected to the official GST portal to
            complete payment.
          </div>

          <div className="bg-purple-50 border border-purple-200 p-3 rounded-lg text-sm text-purple-700">
            <b>GST Filing:</b> GST filing will be handled by Bill Banao Admin after
            payment confirmation.
          </div>
        </div>
      </div>

    </div>
  );
}

