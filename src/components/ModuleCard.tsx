interface Module {
  id: number;
  title: string;
  emoji: string;
  topics: any[];
}

interface ModuleCardProps {
  module: Module;
  isDarkMode: boolean;
  onClick: () => void;
}

export function ModuleCard({ module, isDarkMode, onClick }: ModuleCardProps) {
  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-2xl text-left transition-all transform hover:scale-105 hover:-translate-y-1 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-800 to-gray-700 hover:from-purple-900 hover:to-pink-900 border border-gray-600'
          : 'bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 border border-purple-200 shadow-lg hover:shadow-xl'
      }`}
    >
      <div className="text-5xl mb-3">{module.emoji}</div>
      <h3 className={`text-xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Module {module.id}
      </h3>
      <p className={`mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {module.title}
      </p>
      <div className={`inline-block px-3 py-1 rounded-full text-sm ${
        isDarkMode
          ? 'bg-purple-500/20 text-purple-300'
          : 'bg-purple-100 text-purple-700'
      }`}>
        {module.topics.length} Topics
      </div>
    </button>
  );
}
