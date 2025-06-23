import { createCoin, DeployCurrency, validateMetadataURIContent, getCoinCreateFromLogs } from "@zoralabs/coins-sdk";
import type { Address } from "viem";
import { createWalletClient, createPublicClient, http } from "viem";
import { baseSepolia } from "viem/chains";
import { useAccount } from "wagmi";
import React, { useState } from "react";

const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http("https://sepolia.base.org"),
});

export function CreateCoinComponent() {
  const { address } = useAccount();
  const [status, setStatus] = useState<"idle" | "creating" | "success" | "error">("idle");
  const [txHash, setTxHash] = useState<string | null>(null);
  const [coinAddress, setCoinAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Example params, replace with your form state
  const coinParams = {
    name: "My Awesome Coin",
    symbol: "MAC",
    uri: "", // Required by SDK, but left empty as per user request
    payoutRecipient: address as Address,
    // platformReferrer: "0xOptionalPlatformReferrerAddress" as Address, // Optional
    chainId: baseSepolia.id,
    currency: DeployCurrency.ZORA,
  };

  const handleCreateCoin = async () => {
    if (!address) {
      setError("Connect your wallet first.");
      return;
    }
    setStatus("creating");
    setError(null);
    try {
      // Removed validateMetadataURIContent and uri

      // Create wallet client with the connected address
      const walletClient = createWalletClient({
        account: address as Address,
        chain: baseSepolia,
        transport: http("https://sepolia.base.org"),
      });

      // Create the coin
      const result = await createCoin(coinParams, walletClient, publicClient, {
        gasMultiplier: 120,
      });

      setTxHash(result.hash ?? null);
      setCoinAddress(result.address ?? null);
      setStatus("success");
    } catch (err: any) {
      setError(err.message || "Error creating coin");
      setStatus("error");
    }
  };

  return (
    <div>
      <button
        disabled={status === "creating"}
        onClick={handleCreateCoin}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {status === "creating" ? "Creating..." : "Create Coin"}
      </button>
      {status === "success" && (
        <div>
          <div>Transaction hash: {txHash}</div>
          <div>Coin address: {coinAddress}</div>
        </div>
      )}
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}

export default CreateCoinComponent;