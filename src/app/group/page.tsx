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
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formRecipientInputs, setFormRecipientInputs] = useState([
    { id: 1, address: '' }
  ]);

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

  const createGroup = () => {
    if (groupName && sharedDescription && sharedAmount) {
      console.log('Group created:', { groupName, sharedDescription, sharedAmount });
      setGroupName('');
      setSharedDescription('');
      setSharedAmount('');
      setFormRecipientInputs([{ id: 1, address: '' }]);
      setShowCreateForm(false);
    }
  };

  const addFormRecipient = (inputId: number) => {
    const input = formRecipientInputs.find(inp => inp.id === inputId);
    if (input && input.address && sharedAmount) {
      const newRecipient: Recipient = {
        id: Date.now().toString(),
        address: input.address,
        amount: parseFloat(sharedAmount),
        description: sharedDescription || 'Payment'
      };
      
      setRecipients([...recipients, newRecipient]);
      
      // Clear this input
      setFormRecipientInputs(prev => prev.map(inp => 
        inp.id === inputId 
          ? { ...inp, address: '' }
          : inp
      ));
      
      console.log('Recipient added successfully');
    }
  };

  const addNewFormInput = () => {
    const newId = Math.max(...formRecipientInputs.map(inp => inp.id)) + 1;
    setFormRecipientInputs([...formRecipientInputs, { id: newId, address: '' }]);
  };

  const removeFormInput = (inputId: number) => {
    if (formRecipientInputs.length > 1) {
      setFormRecipientInputs(prev => prev.filter(inp => inp.id !== inputId));
    }
  };

  const updateFormInput = (inputId: number, value: string) => {
    setFormRecipientInputs(prev => prev.map(inp => 
      inp.id === inputId ? { ...inp, address: value } : inp
    ));
  };

  // Sample group data
  const sampleGroup = {
    id: '1',
    name: 'Team Lunch Group',
    description: 'Monthly team lunch payments for the development team. Everyone contributes equally for our team bonding sessions.',
    totalRecipients: 8,
    createdDate: new Date('2024-07-01T10:00:00'),
    totalAmount: 2.5
  };

  const renderGroupCard = (group: any) => (
    <div className="bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded-2xl shadow-2xl p-6 border-t-2 border-l-2 border-r border-b-8 border-t-blue-200 border-l-blue-200 border-r-blue-200 border-b-black max-w-md mx-auto">
      {/* Group Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-black text-blue-900 mb-2" style={{
          textShadow: '-1px 1px 0 #ffffff'
        }}>
          {group.name}
        </h3>
        <p className="text-black font-medium">{group.description}</p>
      </div>

      {/* Group Details */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg border border-blue-300">
          <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">Total Recipients</span>
          <span className="text-sm font-bold text-blue-900">{group.totalRecipients}</span>
        </div>
      </div>

      {/* Created Date - Small */}
      <div className="text-xs text-black mb-4 text-center">
        Created: {group.createdDate.toLocaleDateString()} at {group.createdDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </div>

      {/* View Details Button */}
      <button
        onClick={() => console.log('View details for group:', group.id)}
        className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 font-bold shadow-lg border-2 border-green-400"
        style={{
          textShadow: '-1px 1px 0 #000000'
        }}
      >
        VIEW DETAILS
      </button>
    </div>
  );

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

        {/* Create Group Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setShowCreateForm(true)}
            className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 font-bold text-xl shadow-2xl"
            style={{
              textShadow: '-2px 2px 0 #000000'
            }}
          >
            + CREATE GROUP
          </button>
        </div>

        {/* Create Group Form */}
        {showCreateForm && (
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 border-blue-200 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-black text-gray-800" style={{
                textShadow: '-1px 1px 0 #e5e7eb'
              }}>
                CREATE GROUP
              </h2>
              <button
                onClick={() => setShowCreateForm(false)}
                className="text-gray-500 hover:text-red-600 text-xl font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4 font-medium">
              Fill in the group details to create your new payment group
            </p>

            <div className="space-y-4">
              {/* Group Name */}
              <div>
                <label className="block text-sm font-bold text-blue-700 mb-2 uppercase tracking-wide">
                  Group Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter group name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium text-gray-900 placeholder-gray-500 bg-white"
                />
              </div>

              {/* Group Description */}
              <div>
                <label className="block text-sm font-bold text-purple-700 mb-2 uppercase tracking-wide">
                  Group Description *
                </label>
                <textarea
                  placeholder="Describe your group"
                  value={sharedDescription}
                  onChange={(e) => setSharedDescription(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none font-medium text-gray-900 placeholder-gray-500 bg-white"
                />
              </div>

              {/* Shared Amount */}
              <div>
                <label className="block text-sm font-bold text-green-700 mb-2 uppercase tracking-wide">
                  Amount (ETH) *
                </label>
                <input
                  type="number"
                  step="0.001"
                  placeholder="0.0"
                  value={sharedAmount}
                  onChange={(e) => setSharedAmount(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-medium text-gray-900 placeholder-gray-500 bg-white"
                />
              </div>

              {/* Recipients Section */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-orange-700 mb-2 uppercase tracking-wide">
                  Recipients *
                </label>
                
                {formRecipientInputs.map((input, index) => (
                  <div key={input.id} className="p-3 border-2 border-orange-200 rounded-lg bg-orange-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-bold text-orange-800">Recipient {index + 1}</h4>
                      {formRecipientInputs.length > 1 && (
                        <button
                          onClick={() => removeFormInput(input.id)}
                          className="px-2 py-1 text-orange-600 hover:bg-orange-100 rounded-md transition-colors font-bold text-sm"
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
                        onChange={(e) => updateFormInput(input.id, e.target.value)}
                        className="flex-1 px-3 py-2 border-2 border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-medium text-gray-900 placeholder-gray-500 bg-white text-sm"
                      />
                      <button
                        onClick={() => addFormRecipient(input.id)}
                        disabled={!input.address || !sharedAmount}
                        className={`px-4 py-2 text-white rounded-lg transition-all transform hover:scale-105 font-bold shadow-lg text-sm ${
                          input.address && sharedAmount
                            ? 'bg-orange-500 hover:bg-orange-600'
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add New Recipient Button */}
                <button
                  onClick={addNewFormInput}
                  className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 font-bold shadow-lg text-sm"
                >
                  + ADD ANOTHER RECIPIENT
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={createGroup}
                  disabled={!groupName || !sharedDescription || !sharedAmount}
                  className={`flex-1 px-4 py-3 text-white rounded-lg transition-all transform hover:scale-105 font-bold shadow-lg ${
                    groupName && sharedDescription && sharedAmount
                      ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  style={{
                    textShadow: groupName && sharedDescription && sharedAmount ? '-1px 1px 0 #000000' : 'none'
                  }}
                >
                  CREATE GROUP
                </button>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 rounded-lg hover:from-gray-300 hover:to-gray-400 transition-all transform hover:scale-105 font-bold shadow-lg"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Single Group Display */}
        <div className="flex justify-center">
          {renderGroupCard(sampleGroup)}
        </div>
      </div>
    </div>
  );
};

export default GroupPage;