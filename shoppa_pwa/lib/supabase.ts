export async function api(path: string, init?: RequestInit) {
  const base = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4101'
  const res = await fetch(`${base}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
      // Inject bearer from localStorage if present
    },
    credentials: 'include',
  })
  if (!res.ok) {
    let msg = 'Request failed'
    try {
      const j = await res.json()
      msg = j?.message || msg
    } catch (_) {}
    throw new Error(msg)
  }
  const text = await res.text()
  return text ? JSON.parse(text) : null
}
