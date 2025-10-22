import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReport } from "../redux/reportSlice";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-6 text-blue-600 hover:text-blue-800 transition-colors font-medium"
      >
        ← Back
      </button>

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 md:p-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          🧠 GlucoAI Health Report
        </h1>

        {/* States */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-600 animate-pulse">
            <div className="h-10 w-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p>Generating your AI report...</p>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center font-medium py-10">
            ⚠️ {error}
          </div>
        )}

        {!loading && !error && !data && (
          <div className="text-gray-500 text-center py-10">
            No report found. Add glucose readings to generate your first report.
          </div>
        )}

        {/* Report */}
        {data && (
          <div
            ref={reportRef}
            className="overflow-y-auto max-h-[70vh] p-4 border border-gray-200 rounded-lg bg-white shadow-inner prose prose-blue max-w-none text-black"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: (props) => (
                  <h1
                    className="text-2xl font-bold text-blue-600 mt-4 mb-2 border-b border-blue-200 pb-1"
                    {...props}
                  />
                ),
                h2: (props) => (
                  <h2
                    className="text-xl font-semibold text-blue-600 mt-4 mb-2"
                    {...props}
                  />
                ),
                h3: (props) => (
                  <h3
                    className="text-lg font-semibold text-blue-600 mt-3 mb-1"
                    {...props}
                  />
                ),
                strong: (props) => (
                  <strong className="text-blue-700 font-bold" {...props} />
                ),
                p: (props) => (
                  <p
                    className="text-gray-800 leading-relaxed my-2"
                    {...props}
                  />
                ),
                li: (props) => (
                  <li
                    className="text-gray-800 ml-5 list-disc my-1 leading-relaxed"
                    {...props}
                  />
                ),
                table: (props) => (
                  <table
                    className="table-auto border border-gray-300 w-full my-4 rounded-md overflow-hidden"
                    {...props}
                  />
                ),
                th: (props) => (
                  <th
                    className="border border-gray-300 px-3 py-2 text-left bg-blue-100 font-medium"
                    {...props}
                  />
                ),
                td: (props) => (
                  <td
                    className="border border-gray-300 px-3 py-2 text-left"
                    {...props}
                  />
                ),
                thead: (props) => (
                  <thead className="bg-blue-200 text-blue-800" {...props} />
                ),
              }}
            >
              {data}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
