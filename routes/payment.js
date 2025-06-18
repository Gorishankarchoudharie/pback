const express = require('express');
const router = express.Router();

// Simulate Pi transaction verification (Testnet)
router.post('/', (req, res) => {
  const { username, amount } = req.body;

  if (!username || !amount) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Simulate payment success
  return res.json({ success: true, txId: 'testnet_tx_' + Date.now() });
});

module.exports = router;
