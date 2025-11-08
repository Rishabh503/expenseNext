"use client";

import { useState } from 'react';

const CodeEditor = ({ initialCode = '' }) => {
  const [code, setCode] = useState(initialCode || 
    `import {expense} from 'wallet'
import {cash}  as upi  from '@myVirtualWallet'

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([])
  const whatsNew=[
  {
     feature1:"Add Expense Track Expense",
     feature2:"Analayze and Categorize Using AI",
     feature3:"Get AI Generated Insights ",
     feature4:"Expense Wise Dashboard",
     feature5:"Monitor And Redifne the way you spend"
  }
  ]
  return (
    <div className="min-h-screen">
      <header className="p-6">
        <h1>Expense Tracker AI</h1>
      </header>
      
      <main className="hero-section">
        <h2>Track Your Finances</h2>
        <p>AI-powered insights</p>
      </main>
    </div>
  )
}`);

  return (
    <div className="w-full h-full bg-transparent flex flex-col overflow-hidden">
      {/* Tab Bar */}
      <div className="bg-gray-900 flex items-center px-4 py-3 border-b border-gray-700 rounded-t-xl">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded-t-lg text-sm font-medium border-b-2 border-indigo-500">
            HomePage.jsx
          </button>
          <button className="px-4 py-2 text-gray-400 rounded-t-lg text-sm font-medium hover:bg-gray-800/50 transition-colors">
            App.jsx
          </button>
        </div>
      </div>

      {/* Code Editor Area */}
      <div className="flex-1 bg-gray-900  rounded-b-xl shadow-2xl">
        <div className="h-full p-6">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full bg-transparent text-gray-100 font-mono text-sm leading-relaxed resize-none focus:outline-none"
            style={{ caretColor: '#10b981', tabSize: 2 }}
            spellCheck="false"
          />
        </div>
      </div>

      <style jsx>{`
        textarea {
          color: #e5e7eb;
        }
        textarea::selection {
          background-color: rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default CodeEditor;