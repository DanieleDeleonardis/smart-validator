// src/middleware/auth.js

// 🔹 Simuliamo un piccolo database in memoria
const users = {
  "freeUserKey123": {
    plan: "free",
    limit: 2,    // max 2 richieste
    used: 0
  },
  "proUserKey999": {
    plan: "premium",
    limit: Infinity,
    used: 0
  }
};

export const rateLimiter = (req, res, next) => {
  const apiKey = req.header("X-API-Key");
  if (!apiKey || !users[apiKey]) {
    return res.status(401).json({ error: "Chiave API non valida" });
  }

  const user = users[apiKey];

  // 🔹 Se ha superato il limite
  if (user.used >= user.limit) {
    return res.status(429).json({
      error: `Limite di richieste raggiunto per il piano ${user.plan}`,
    });
  }

  // 🔹 Aggiorna contatore
  user.used += 1;
  console.log(`✅ ${apiKey} → ${user.used}/${user.limit} richieste usate`);

  next();
};
