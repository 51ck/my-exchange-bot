import dotenv from 'dotenv';
import ccxt from 'ccxt';

dotenv.config();

(async () => {
	let exchange: ccxt.Exchange;
	try {
		exchange = new ccxt.binanceusdm({
			apiKey: process.env.BINANCE_API_KEY,
			secret: process.env.BINANCE_SECRET,
		});
	} catch (error) {
		console.error('Failed to authenticate');
		throw error;
	}

	const balance = await exchange.fetchBalance();
	console.log(balance);
})();
