import React from 'react'
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
  return (
    <div>      <button
          type="button"
          onClick={() => navigate("/")} 
          className="absolute top-4 left-4 text-blue-500 font-bold flex items-center gap-1 hover:text-blue-700"
        >
          ← Back
        </button></div>
  )
}

export default BackButton