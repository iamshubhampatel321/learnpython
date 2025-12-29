import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  isDarkMode: boolean;
}

export function CodeBlock({ code, isDarkMode }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className={`rounded-xl overflow-hidden border ${
        isDarkMode ? 'border-gray-600' : 'border-gray-300'
      }`}>
        <div className={`flex items-center justify-between px-4 py-2 ${
          isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
        }`}>
          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Python Code
          </span>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all ${
              copied
                ? isDarkMode
                  ? 'bg-green-900/50 text-green-400'
                  : 'bg-green-100 text-green-700'
                : isDarkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Code
              </>
            )}
          </button>
        </div>
        <div className={`p-4 overflow-x-auto ${
          isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
        }`}>
          <pre className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
