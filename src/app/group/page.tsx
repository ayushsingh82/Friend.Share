'use client';

import React, { useState } from 'react';

interface Recipient {
  id: string;
  address: string;
  amount: number;
  description: string;
}

interface GroupDetails {
  id: string;
  totalAmount: number;
  status: 'pending' | 'paid' | 'completed';
  createdAt: Date;
  recipients: Recipient[];
}

const GroupPage = () => {
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [currentRecipient, setCurrentRecipient] = useState({
    address: '',
    amount: '',
    description: ''
  });

  // Mock group details - in real app this would come from props or API
  const [groupDetails] = useState<GroupDetails>({
    id: 'group-001',
    totalAmount: 0,
    status: 'pending',
    createdAt: new Date(),
    recipients: []
  });

  const addRecipient = () => {
    if (currentRecipient.address && currentRecipient.amount && currentRecipient.description) {
      const newRecipient: Recipient = {
        id: Date.now().toString(),
        address: currentRecipient.address,
        amount: parseFloat(currentRecipient.amount),
        description: currentRecipient.description
      };
      
      setRecipients([...recipients, newRecipient]);
      setCurrentRecipient({ address: '', amount: '', description: '' });
    }
  };

  const removeRecipient = (id: string) => {
    setRecipients(recipients.filter(recipient => recipient.id !== id));
  };

  const totalAmount = recipients.reduce((sum, recipient) => sum + recipient.amount, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'paid': return 'text-green-600 bg-green-100';
      case 'completed': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-white" style={{
            textShadow: '-4px 4px 0 #000000',
            WebkitTextStroke: '2px #000000'
          }}>
            GROUP
            <span className="text-yellow-400"> PAYMENT</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-bold max-w-3xl mx-auto">
            Create your payment group and manage recipients with ease
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-black mb-6 text-gray-800" style={{
              textShadow: '-2px 2px 0 #e5e7eb'
            }}>
              ADD RECIPIENTS
            </h2>
            
            {/* Form Fields */}
            <div className="space-y-6">
              {/* Recipient Address */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Recipient Address
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter wallet address or ENS name"
                    value={currentRecipient.address}
                    onChange={(e) => setCurrentRecipient({...currentRecipient, address: e.target.value})}
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-medium"
                  />
                  <button
                    onClick={addRecipient}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 font-bold shadow-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Amount (ETH)
                </label>
                <input
                  type="number"
                  step="0.001"
                  placeholder="0.0"
                  value={currentRecipient.amount}
                  onChange={(e) => setCurrentRecipient({...currentRecipient, amount: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-medium"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Description
                </label>
                <textarea
                  placeholder="What's this payment for?"
                  value={currentRecipient.description}
                  onChange={(e) => setCurrentRecipient({...currentRecipient, description: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none font-medium"
                />
              </div>
            </div>

            {/* Added Recipients List */}
            {recipients.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-black text-gray-800 mb-4 uppercase tracking-wide" style={{
                  textShadow: '-1px 1px 0 #e5e7eb'
                }}>
                  Added Recipients
                </h3>
                <div className="space-y-3">
                  {recipients.map((recipient) => (
                    <div key={recipient.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200 shadow-md">
                      <div className="flex-1">
                        <p className="font-bold text-gray-800">{recipient.address}</p>
                        <p className="text-sm text-gray-600 font-medium">{recipient.description}</p>
                        <p className="text-sm font-black text-red-600">{recipient.amount} ETH</p>
                      </div>
                      <button
                        onClick={() => removeRecipient(recipient.id)}
                        className="ml-4 px-3 py-1 text-red-600 hover:bg-red-100 rounded-md transition-colors font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Create Group Button */}
            <button className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 font-black text-xl shadow-2xl" style={{
              textShadow: '-2px 2px 0 #000000'
            }}>
              CREATE GROUP PAYMENT
            </button>
          </div>

          {/* Right Side - Group Details */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-black mb-6 text-gray-800" style={{
              textShadow: '-2px 2px 0 #e5e7eb'
            }}>
              GROUP DETAILS
            </h2>
            
            {/* Group Info */}
            <div className="space-y-6">
              {/* Group ID */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border border-gray-300 shadow-md">
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Group ID</span>
                <span className="text-sm font-mono font-bold text-gray-800">{groupDetails.id}</span>
              </div>

              {/* Total Amount */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-lg border border-green-300 shadow-md">
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Total Amount</span>
                <span className="text-xl font-black text-green-700">{totalAmount.toFixed(3)} ETH</span>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border border-gray-300 shadow-md">
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Status</span>
                <span className={`px-4 py-2 rounded-full text-xs font-black ${getStatusColor(groupDetails.status)} shadow-md`}>
                  {groupDetails.status.charAt(0).toUpperCase() + groupDetails.status.slice(1).toUpperCase()}
                </span>
              </div>

              {/* Created At */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border border-gray-300 shadow-md">
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Created</span>
                <span className="text-sm font-bold text-gray-800">
                  {groupDetails.createdAt.toLocaleDateString()} at {groupDetails.createdAt.toLocaleTimeString()}
                </span>
              </div>
            </div>

            {/* Recipients Summary */}
            <div className="mt-8">
              <h3 className="text-xl font-black text-gray-800 mb-4 uppercase tracking-wide" style={{
                textShadow: '-1px 1px 0 #e5e7eb'
              }}>
                Recipients ({recipients.length})
              </h3>
              {recipients.length === 0 ? (
                <div className="text-center py-8 text-gray-500 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-lg font-bold mb-2">No recipients added yet</p>
                  <p className="text-sm font-medium">Add recipients using the form on the left</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {recipients.map((recipient, index) => (
                    <div key={recipient.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200 shadow-md">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-sm font-black text-white">{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800 truncate max-w-32">
                            {recipient.address}
                          </p>
                          <p className="text-xs text-gray-600 truncate max-w-32 font-medium">
                            {recipient.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-black text-red-600">
                        {recipient.amount} ETH
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-3">
              <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 font-bold shadow-lg">
                Share Group Link
              </button>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 rounded-lg hover:from-gray-300 hover:to-gray-400 transition-all transform hover:scale-105 font-bold shadow-lg">
                Export Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;