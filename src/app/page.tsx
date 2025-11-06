'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Toast, ToastProvider, useToast } from '@/components/ui/toast'

function ToastDemo() {
  const { addToast } = useToast()
  const [staticToasts, setStaticToasts] = React.useState({
    success: true,
    warning: true,
    information: true,
    error: true,
  })

  const handleShowToast = (variant: 'success' | 'warning' | 'information' | 'error') => {
    const toastMessages = {
      success: {
        title: 'Success!',
        description: 'Your changes have been saved successfully.',
      },
      warning: {
        title: 'Warning',
        description: 'Please review your input before proceeding.',
      },
      information: {
        title: 'Information',
        description: 'Your session will expire in 5 minutes.',
      },
      error: {
        title: 'Error',
        description: 'Something went wrong. Please try again.',
      },
    }

    addToast({
      variant,
      ...toastMessages[variant],
    })
  }

  const toggleStaticToast = (variant: 'success' | 'warning' | 'information' | 'error') => {
    setStaticToasts(prev => ({ ...prev, [variant]: !prev[variant] }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Component Library++
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Toast Notifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beautiful, animated toast notifications with multiple variants and smooth transitions.
            Built with Framer Motion and Tailwind CSS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Static Examples */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Static Examples</h3>
            
            <div className="space-y-4">
              {staticToasts.success && (
                <Toast
                  variant="success"
                  title="Success!"
                  description="Your changes have been saved successfully."
                  autoClose={false}
                  onClose={() => toggleStaticToast('success')}
                />
              )}
              
              {staticToasts.warning && (
                <Toast
                  variant="warning"
                  title="Warning"
                  description="Please review your input before proceeding."
                  autoClose={false}
                  onClose={() => toggleStaticToast('warning')}
                />
              )}
              
              {staticToasts.information && (
                <Toast
                  variant="information"
                  title="Information"
                  description="Your session will expire in 5 minutes."
                  autoClose={false}
                  onClose={() => toggleStaticToast('information')}
                />
              )}
              
              {staticToasts.error && (
                <Toast
                  variant="error"
                  title="Error"
                  description="Something went wrong. Please try again."
                  autoClose={false}
                  onClose={() => toggleStaticToast('error')}
                />
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.entries(staticToasts).map(([variant, isVisible]) => (
                <button
                  key={variant}
                  onClick={() => toggleStaticToast(variant as any)}
                  className={`px-3 py-1 text-sm rounded-md transition-colors ${
                    isVisible 
                      ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {isVisible ? `Hide ${variant}` : `Show ${variant}`}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Interactive Examples */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive Examples</h3>
            <p className="text-gray-600 mb-6">
              Click the buttons below to trigger auto-dismissing toasts in the top-right corner.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleShowToast('success')}
                className="p-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Success Toast
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleShowToast('warning')}
                className="p-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Warning Toast
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleShowToast('information')}
                className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Info Toast
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleShowToast('error')}
                className="p-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Error Toast
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Beautiful Design</h4>
              <p className="text-sm text-gray-600">Modern, clean aesthetics with subtle gradients</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Smooth Animations</h4>
              <p className="text-sm text-gray-600">Powered by Framer Motion for fluid transitions</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Fully Customizable</h4>
              <p className="text-sm text-gray-600">Easy to customize with variant props</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Accessible</h4>
              <p className="text-sm text-gray-600">Built with accessibility best practices</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  )
}
