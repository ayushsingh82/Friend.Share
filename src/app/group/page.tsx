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
  const [recipientInputs, setRecipientInputs] = useState([
    { id: 1, address: '' }
  ]);
  const [groupName, setGroupName] = useState('');
  const [sharedAmount, setSharedAmount] = useState('');
  const [sharedDescription, setSharedDescription] = useState('');

  // Mock group details - in real app this would come from props or API
  const [groupDetails] = useState<GroupDetails>({
    id: 'group-001',
    totalAmount: 0,
    status: 'pending',
    createdAt: new Date(),
    recipients: []
  });

  const addRecipient = (inputId: number) => {
    const input = recipientInputs.find(inp => inp.id === inputId);
    if (input && input.address && sharedAmount) {
      const newRecipient: Recipient = {
        id: Date.now().toString(),
        address: input.address,
        amount: parseFloat(sharedAmount),
        description: sharedDescription || 'Payment'
      };
      
      setRecipients([...recipients, newRecipient]);
      
      // Clear this input
      setRecipientInputs(prev => prev.map(inp => 
        inp.id === inputId 
          ? { ...inp, address: '' }
          : inp
      ));
      
      console.log('Recipient added successfully');
    }
  };

  const addNewInput = () => {
    const newId = Math.max(...recipientInputs.map(inp => inp.id)) + 1;
    setRecipientInputs([...recipientInputs, { id: newId, address: '' }]);
  };

  const removeInput = (inputId: number) => {
    if (recipientInputs.length > 1) {
      setRecipientInputs(prev => prev.filter(inp => inp.id !== inputId));
    }
  };

  const updateInput = (inputId: number, value: string) => {
    setRecipientInputs(prev => prev.map(inp => 
      inp.id === inputId ? { ...inp, address: value } : inp
    ));
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
            <p className="text-sm text-gray-600 mb-6 font-medium">
              Add recipients one by one with individual amounts and descriptions
            </p>
            
            {/* Group Name */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Group Name *
              </label>
              <input
                type="text"
                placeholder="Enter group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-medium text-gray-900 placeholder-gray-500 bg-white"
              />
            </div>

            {/* Shared Amount and Description */}
            <div className="space-y-6 mb-8">
              {/* Shared Amount */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Amount (ETH) * 
                </label>
                <input
                  type="number"
                  step="0.001"
                  placeholder="0.0"
                  value={sharedAmount}
                  onChange={(e) => setSharedAmount(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-medium text-gray-900 placeholder-gray-500 bg-white"
                />
              </div>

              {/* Shared Description */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Description 
                </label>
                <textarea
                  placeholder="What's this payment for?"
                  value={sharedDescription}
                  onChange={(e) => setSharedDescription(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none font-medium text-gray-900 placeholder-gray-500 bg-white"
                />
              </div>
            </div>

            {/* Dynamic Recipient Address Fields */}
            <div className="space-y-4">
              {recipientInputs.map((input, index) => (
                <div key={input.id} className="p-4 border-2 border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">Recipient {index + 1}</h3>
                    {recipientInputs.length > 1 && (
                      <button
                        onClick={() => removeInput(input.id)}
                        className="px-3 py-1 text-red-600 hover:bg-red-100 rounded-md transition-colors font-bold"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  
                  {/* Recipient Address */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter wallet address or ENS name"
                      value={input.address}
                      onChange={(e) => updateInput(input.id, e.target.value)}
                      className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-medium text-gray-900 placeholder-gray-500 bg-white"
                    />
                    <button
                      onClick={() => addRecipient(input.id)}
                      disabled={!input.address || !sharedAmount}
                      className={`px-6 py-3 text-white rounded-lg transition-all transform hover:scale-105 font-bold shadow-lg ${
                        input.address && sharedAmount
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              {/* Add New Input Button */}
              <button
                onClick={addNewInput}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 font-bold shadow-lg"
              >
                + ADD ANOTHER RECIPIENT
              </button>
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
              {/* Group Name */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg border border-blue-300 shadow-md">
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Group Name</span>
                <span className="text-sm font-bold text-gray-800">{groupName || 'Unnamed Group'}</span>
              </div>

              {/* Total Recipients */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg border border-purple-300 shadow-md">
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Total Recipients</span>
                <span className="text-xl font-black text-purple-700">{recipients.length}</span>
              </div>

              {/* Total Amount */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-lg border border-green-300 shadow-md">
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Total Amount</span>
                <span className="text-xl font-black text-green-700">{totalAmount.toFixed(3)} ETH</span>
              </div>

              {/* Created At */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border border-gray-300 shadow-md">
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Created</span>
                <span className="text-sm font-bold text-gray-800">
                  {groupDetails.createdAt.toLocaleDateString()} at {groupDetails.createdAt.toLocaleTimeString()}
                </span>
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;