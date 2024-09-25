import PropTypes from "prop-types";
import { GatewayApiContext } from "./contexts";
import { GatewayApiClient } from "@radixdlt/babylon-gateway-api-sdk";

export const GatewayApiProvider = ({
  value,
  children,
}: {
  value: GatewayApiClient | null;
  children: React.ReactNode;
}) => (
  <GatewayApiContext.Provider value={value}>
    {children}
  </GatewayApiContext.Provider>
);

GatewayApiProvider.propTypes = {
  value: PropTypes.any,
  children: PropTypes.node.isRequired,
};
