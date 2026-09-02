import React from 'react'

const Loader = ({ 
  size = 'md', 
  color = 'blue', 
  text = 'Loading...',
  className = '' 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }
  
  const colors = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    green: 'border-green-600',
    red: 'border-red-600',
    yellow: 'border-yellow-600'
  }
  
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div 
        className={`
          ${sizes[size]} 
          border-4 
          border-t-transparent 
          rounded-full 
          animate-spin
          ${colors[color]}
        `}
      />
      {text && (
        <span className="mt-2 text-sm text-gray-600">{text}</span>
      )}
    </div>
  )
}

export default Loader
