const apiKey = process.env.API_KEY;

function apiKeyAuth(req, res, next) {
  const providedApiKey = req.header('x-api-key');

  if (!providedApiKey || providedApiKey !== apiKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
}

module.exports = apiKeyAuth;
