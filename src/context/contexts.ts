"use client"

import { GatewayApiClient } from "@radixdlt/babylon-gateway-api-sdk";
import { RadixDappToolkit } from "@radixdlt/radix-dapp-toolkit";
import { createContext } from "react";

export const RadixAccountContext = createContext<string | null>(null);
export const GatewayApiContext = createContext<GatewayApiClient | null>(null);
export const RadixDappToolkitContext = createContext<RadixDappToolkit | null>(null);