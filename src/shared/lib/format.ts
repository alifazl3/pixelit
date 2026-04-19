const numberFormatter = new Intl.NumberFormat("en", {
  maximumFractionDigits: 0,
});

const percentFormatter = new Intl.NumberFormat("en", {
  maximumFractionDigits: 0,
  style: "percent",
});

export function formatNumber(value: number) {
  return numberFormatter.format(value);
}

export function formatPercent(value: number) {
  return percentFormatter.format(value);
}

export function formatShortDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}
