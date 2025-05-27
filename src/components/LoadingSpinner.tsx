
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      </div>
      <div className="mt-4 text-blue-300 text-lg font-medium">
        Carregando frota...
      </div>
      <div className="text-blue-300/60 text-sm">
        Processando arquivos da pasta local
      </div>
    </div>
  );
};

export default LoadingSpinner;
