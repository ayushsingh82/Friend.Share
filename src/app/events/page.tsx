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
      setShowCreateForm(false);
    }
  };

  const withdrawFromEvent = (eventId: string) => {
    // Handle withdrawal logic
    console.log('Withdrawing from event:', eventId);
  };

  const depositToEvent = (eventId: string) => {
    // Handle deposit logic
    console.log('Depositing to event:', eventId);
  };

  return (
    <div className="min-h-screen bg-yellow-400 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-gray-800" style={{
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

        {/* Create Event Form Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-black text-gray-800">CREATE EVENT</h2>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Event Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Event Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter event name"
                    value={newEvent.name}
                    onChange={(e) => setNewEvent({...newEvent, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-medium text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>

                {/* Event Description */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Event Description *
                  </label>
                  <textarea
                    placeholder="Describe your event"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none font-medium text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>

                {/* Active Until */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Time Till Event is Active *
                  </label>
                  <input
                    type="datetime-local"
                    value={newEvent.activeUntil}
                    onChange={(e) => setNewEvent({...newEvent, activeUntil: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-medium text-gray-900 bg-white"
                  />
                </div>

                {/* Wallet Address */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Wallet Address *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter wallet address"
                    value={newEvent.walletAddress}
                    onChange={(e) => setNewEvent({...newEvent, walletAddress: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-medium text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={createEvent}
                    disabled={!newEvent.name || !newEvent.description || !newEvent.activeUntil || !newEvent.walletAddress}
                    className={`flex-1 px-6 py-4 text-white rounded-lg transition-all transform hover:scale-105 font-bold shadow-lg ${
                      newEvent.name && newEvent.description && newEvent.activeUntil && newEvent.walletAddress
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    CREATE EVENT
                  </button>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="flex-1 px-6 py-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all transform hover:scale-105 font-bold shadow-lg"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              {/* Event Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-gray-800 mb-2">{event.name}</h3>
                <p className="text-gray-600 font-medium">{event.description}</p>
              </div>

              {/* Event Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Created</span>
                  <span className="text-sm font-bold text-gray-800">
                    {event.createdDate.toLocaleDateString()}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">End Date</span>
                  <span className="text-sm font-bold text-gray-800">
                    {event.endDate.toLocaleDateString()}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Name</span>
                  <span className="text-sm font-bold text-gray-800 truncate max-w-32">
                    {event.name}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Description</span>
                  <span className="text-sm font-bold text-gray-800 truncate max-w-32">
                    {event.description}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Balance</span>
                  <span className="text-lg font-black text-green-600">{event.balance.toFixed(3)} ETH</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => withdrawFromEvent(event.id)}
                  className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 font-bold shadow-lg"
                >
                  WITHDRAW
                </button>
                <button
                  onClick={() => depositToEvent(event.id)}
                  className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 font-bold shadow-lg"
                >
                  DEPOSIT
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {events.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🎉</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No Events Created Yet</h3>
            <p className="text-lg text-gray-600 mb-8">Create your first event to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;