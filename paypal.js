import React from "react";

// App.js
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
	"client-id": "AT0Zollq-O580vkMKLIT492DNsYmNHrbmKZw69ZclSgXAQ2z1YDmfvpv9frKw0uiEPUnUXDGyegmIltz",
	currency: "USD",
	intent: "capture",
	"data-client-token": "ELqmRDwaGbw7yEmn0o3X4kEdt--fOz7ss6gIfRos1K1nRtx1LyT4gmiuWE_Bf_MHfFcM3ERo-8KANMrC"
};

export default function App() {
	return (
		<PayPalScriptProvider options={{ initialOptions }}>
			<PayPalButtons style={{ layout: "horizontal" }} />
		</PayPalScriptProvider>
	);
}
