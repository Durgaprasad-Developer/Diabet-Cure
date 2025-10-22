import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReport } from "../redux/reportSlice";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

export default function AIReport() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reportRef = useRef();

  const { data, loading, error, refreshTrigger } = useSelector(
    (state) => state.report
  );

  useEffect(() => {
    dispatch(fetchReport());
  }, [dispatch, refreshTrigger]);

  // ✅ FIXED: Multi-page PDF handling
const handleDownload = async () => {
  if (!reportRef.current) return;

  // Clone element for full capture
  const clone = reportRef.current.cloneNode(true);
  clone.style.position = "absolute";
  clone.style.left = "-9999px";
  clone.style.maxHeight = "none";
  clone.style.overflow = "visible";
  clone.style.background = "white";
  clone.style.padding = "20px";
  clone.style.width = "800px"; 
  document.body.appendChild(clone);

  try {
    // Wait for DOM paint
    await new Promise((r) => setTimeout(r, 300));

    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
    heightLeft -= pdfHeight;

    // Add extra pages if needed
    while (heightLeft > 0) {
      position -= pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save("Glucose_AI_Report.pdf");
  } catch (err) {
    console.error("PDF download failed:", err);
  } finally {
    document.body.removeChild(clone);
  }
};



  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-50 px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back
      </button>

      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          🧠 Glucose AI Report
        </h1>

        {/* States */}
        {loading && (
          <p className="text-gray-500 text-center animate-pulse">
            Generating your AI report...
          </p>
        )}
        {error && <p className="text-red-500 text-center font-medium">{error}</p>}
        {!loading && !error && !data && (
          <p className="text-gray-500 text-center">No report found.</p>
        )}

        {/* Report */}
        {data && (
          <div
            ref={reportRef}
            className="overflow-y-auto max-h-[70vh] p-4 border border-gray-200 rounded-lg bg-white prose prose-blue max-w-none text-black"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    className="text-2xl font-bold text-blue-600 mt-4 mb-2"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-xl font-semibold text-blue-600 mt-4 mb-2"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-lg font-semibold text-blue-600 mt-3 mb-1"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="text-blue-600 font-bold" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-black my-2" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-black ml-4 list-disc my-1" {...props} />
                ),
                table: ({ node, ...props }) => (
                  <table
                    className="table-auto border border-gray-300 w-full my-4"
                    {...props}
                  />
                ),
                th: ({ node, ...props }) => (
                  <th
                    className="border border-gray-300 px-2 py-1 text-left bg-blue-100"
                    {...props}
                  />
                ),
                td: ({ node, ...props }) => (
                  <td
                    className="border border-gray-300 px-2 py-1 text-left"
                    {...props}
                  />
                ),
                thead: ({ node, ...props }) => (
                  <thead className="bg-blue-200" {...props} />
                ),
                tbody: ({ node, ...props }) => <tbody {...props} />,
              }}
            >
              {data}
            </ReactMarkdown>
          </div>
        )}

        {data && (
          <button
            onClick={handleDownload}
            className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all"
          >
            📥 Download PDF
          </button>
        )}
      </div>
    </div>
  );
}
