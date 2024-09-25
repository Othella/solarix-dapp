import { useContext } from "react";
import { GatewayApiContext } from "@/context/contexts";

export const useGatewayApi = () => useContext(GatewayApiContext);
