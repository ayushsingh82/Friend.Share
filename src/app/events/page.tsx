'use client';

import React, { useState } from 'react';

interface Event {
  id: string;
  name: string;
  description: string;
  activeUntil: Date;
  walletAddress: string;
  createdDate: Date;
  endDate: Date;
  balance: number;
}

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string>('');
  const [depositAmount, setDepositAmount] = useState('');
  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    activeUntil: '',
    walletAddress: ''
  });

  const createEvent = () => {
    if (newEvent.name && newEvent.description && newEvent.activeUntil && newEvent.walletAddress) {
      const event: Event = {
        id: Date.now().toString(),
        name: newEvent.name,
        description: newEvent.description,
        activeUntil: new Date(newEvent.activeUntil),
        walletAddress: newEvent.walletAddress,
        createdDate: new Date(),
        endDate: new Date(newEvent.activeUntil),
        balance: 0
      };
      
      setEvents([...events, event]);
      setNewEvent({ name: '', description: '', activeUntil: '', walletAddress: '' });
    }
  };

  const withdrawFromEvent = (eventId: string) => {
    // Handle withdrawal logic
    console.log('Withdrawing from event:', eventId);
  };

  const openDepositModal = (eventId: string) => {
    setSelectedEventId(eventId);
    setShowDepositModal(true);
    setDepositAmount('');
  };

  const handleDeposit = () => {
    if (depositAmount && parseFloat(depositAmount) > 0) {
      // Handle deposit logic here
      console.log('Depositing to event:', selectedEventId, 'Amount:', depositAmount);
      setShowDepositModal(false);
      setDepositAmount('');
      setSelectedEventId('');
    }
  };

  // Sample event data
  const sampleEvent: Event = {
    id: '1',
    name: 'Summer Beach Party',
    description: 'Join us for an amazing beach party with live music, food, and drinks. Perfect for celebrating summer!',
    activeUntil: new Date('2024-08-15T20:00:00'),
    walletAddress: '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
    createdDate: new Date('2024-07-01T10:00:00'),
    endDate: new Date('2024-08-15T20:00:00'),
    balance: 1250
  };

  const renderEventCard = (event: Event) => (
    <div className="bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 rounded-2xl shadow-2xl p-6 border-t-2 border-l-2 border-r border-b-8 border-t-blue-200 border-l-blue-200 border-r-blue-200 border-b-black max-w-md mx-auto">
      {/* Event Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-black text-blue-900 mb-2" style={{
          textShadow: '-1px 1px 0 #ffffff'
        }}>
          {event.name}
        </h3>
        <p className="text-black font-medium">{event.description}</p>
      </div>

      {/* Event Details */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg border border-blue-300">
          <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">End Date</span>
          <span className="text-sm font-bold text-blue-900">
            {event.endDate.toLocaleDateString()} {event.endDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </span>
        </div>
      </div>

      {/* Created Date - Small */}
      <div className="text-xs text-black mb-4 text-center">
        Created: {event.createdDate.toLocaleDateString()} at {event.createdDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => openDepositModal(event.id)}
          className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 font-bold shadow-lg border-2 border-green-400 text-sm"
          style={{
            textShadow: '-1px 1px 0 #000000'
          }}
        >
          DEPOSIT
        </button>
        <button
          onClick={() => console.log('View details for event:', event.id)}
          className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 font-bold shadow-lg border-2 border-blue-400 text-sm"
          style={{
            textShadow: '-1px 1px 0 #000000'
          }}
        >
          VIEW DETAILS
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-yellow-200 p-6 relative">
      {/* Noun Image - Top Left */}
      <div className="absolute top-8 left-8 w-48 h-48 opacity-80 z-10">
        <img
          src="https://noun.pics/1311.png"
          alt="NOUN 1311"
          className="w-full h-full object-contain drop-shadow-2xl rounded-full"
        />
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-red-600" style={{
            textShadow: '-4px 4px 0 #ffffff',
            WebkitTextStroke: '2px #ffffff'
          }}>
            EVENTS
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 font-bold max-w-3xl mx-auto">
            Create and manage your events with smart payment features
          </p>
        </div>

        {/* Create Event Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setShowCreateForm(true)}
            className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 font-bold text-xl shadow-2xl"
            style={{
              textShadow: '-2px 2px 0 #000000'
            }}
          >
            + CREATE EVENT
          </button>
        </div>

        {/* Create Event Form */}
        {showCreateForm && (
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 border-blue-200 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-black text-gray-800" style={{
                textShadow: '-1px 1px 0 #e5e7eb'
              }}>
                CREATE EVENT
              </h2>
              <button
                onClick={() => setShowCreateForm(false)}
                className="text-gray-500 hover:text-red-600 text-xl font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4 font-medium">
              Fill in the event details to create your new event
            </p>

            <div className="space-y-4">
              {/* Event Name */}
              <div>
                <label className="block text-sm font-bold text-blue-700 mb-2 uppercase tracking-wide">
                  Event Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter event name"
                  value={newEvent.name}
                  onChange={(e) => setNewEvent({...newEvent, name: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium text-gray-900 placeholder-gray-500 bg-white"
                />
              </div>

              {/* Event Description */}
              <div>
                <label className="block text-sm font-bold text-purple-700 mb-2 uppercase tracking-wide">
                  Event Description *
                </label>
                <textarea
                  placeholder="Describe your event"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none font-medium text-gray-900 placeholder-gray-500 bg-white"
                />
              </div>

              {/* Active Until */}
              <div>
                <label className="block text-sm font-bold text-green-700 mb-2 uppercase tracking-wide">
                  Time Till Event is Active *
                </label>
                <input
                  type="datetime-local"
                  value={newEvent.activeUntil}
                  onChange={(e) => setNewEvent({...newEvent, activeUntil: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-medium text-gray-900 bg-white"
                />
              </div>

              {/* Wallet Address */}
              <div>
                <label className="block text-sm font-bold text-orange-700 mb-2 uppercase tracking-wide">
                  Wallet Address *
                </label>
                <input
                  type="text"
                  placeholder="Enter wallet address"
                  value={newEvent.walletAddress}
                  onChange={(e) => setNewEvent({...newEvent, walletAddress: e.target.value})}
                  className="w-full px-3 py-2 border-2 border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-medium text-gray-900 placeholder-gray-500 bg-white"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={createEvent}
                  disabled={!newEvent.name || !newEvent.description || !newEvent.activeUntil || !newEvent.walletAddress}
                  className={`flex-1 px-4 py-3 text-white rounded-lg transition-all transform hover:scale-105 font-bold shadow-lg ${
                    newEvent.name && newEvent.description && newEvent.activeUntil && newEvent.walletAddress
                      ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  style={{
                    textShadow: newEvent.name && newEvent.description && newEvent.activeUntil && newEvent.walletAddress ? '-1px 1px 0 #000000' : 'none'
                  }}
                >
                  CREATE EVENT
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

        {/* Deposit Modal */}
        {showDepositModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pt-20">
            <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border-2 border-green-300 max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-black text-green-800" style={{
                  textShadow: '-1px 1px 0 #ffffff'
                }}>
                  DEPOSIT TO EVENT
                </h2>
                <button
                  onClick={() => setShowDepositModal(false)}
                  className="text-green-600 hover:text-red-600 text-xl font-bold transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-green-700 mb-4 font-medium">
                Enter the amount you want to deposit to this event
              </p>

              <div className="space-y-4">
                {/* Amount Input */}
                <div>
                  <label className="block text-sm font-bold text-green-700 mb-2 uppercase tracking-wide">
                    Amount (ETH) *
                  </label>
                  <input
                    type="number"
                    step="0.001"
                    placeholder="0.0"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent font-medium text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleDeposit}
                    disabled={!depositAmount || parseFloat(depositAmount) <= 0}
                    className={`flex-1 px-4 py-3 text-white rounded-lg transition-all transform hover:scale-105 font-bold shadow-lg ${
                      depositAmount && parseFloat(depositAmount) > 0
                        ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    style={{
                      textShadow: depositAmount && parseFloat(depositAmount) > 0 ? '-1px 1px 0 #000000' : 'none'
                    }}
                  >
                    DEPOSIT
                  </button>
                  <button
                    onClick={() => setShowDepositModal(false)}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 rounded-lg hover:from-gray-300 hover:to-gray-400 transition-all transform hover:scale-105 font-bold shadow-lg"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Single Event Display */}
        <div className="flex justify-center">
          {renderEventCard(sampleEvent)}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;