function normalizeForValue(v) {
  return v
    ?.toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, ""); // remove any weird chars
}

function formatLabel(v) {
  if (!v && v !== 0) return "";
  const str = v.toString();
  // if already contains underscores (like "qa_engineer") split and capitalize
  if (str.includes("_")) {
    return str
      .split("_")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ");
  }
  // otherwise preserve original casing but ensure first letters are capitalized for words
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

function getUniqueOptions(data = [], key = "title") {
  // Use a Map keyed by normalized value to keep first occurrence
  const map = new Map();

  for (const item of data) {
    const raw = item && item[key] !== undefined ? item[key] : "";
    const normalized = normalizeForValue(raw);

    if (!map.has(normalized)) {
      map.set(normalized, {
        label: formatLabel(raw),
        value: normalized,
      });
    }
    // if already present, skip (keeps first seen)
  }

  return Array.from(map.values());
}

export default getUniqueOptions;
