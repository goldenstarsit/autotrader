import type { LogEntry } from "./types.js";

export function formatLog(entry: LogEntry): string {
  const parts = [
    `[${entry.timestamp}]`,
    `[${entry.level.toUpperCase()}]`
  ];

  if (entry.context) {
    parts.push(`[${entry.context}]`);
  }

  parts.push(entry.message);

  if (entry.metadata) {
    parts.push(JSON.stringify(entry.metadata));
  }

  if (entry.error) {
    parts.push(entry.error.stack ?? entry.error.message);
  }

  return parts.join(" ");
}
