// Formatação de períodos de experiência no estilo LinkedIn.
// Datas em formato ISO 'YYYY-MM'; end null/undefined significa "atual".

const MONTHS_PT = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

function parse(iso) {
  const [year, month] = iso.split('-').map(Number);
  return { year, month };
}

export function formatMonth(iso) {
  const { year, month } = parse(iso);
  return `${MONTHS_PT[month - 1]}/${year}`;
}

export function formatPeriod(start, end) {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : 'atual'}`;
}

// Duração inclusiva, como o LinkedIn conta (jan a jul = 7 meses)
export function formatDuration(start, end) {
  const s = parse(start);
  const now = new Date();
  const e = end ? parse(end) : { year: now.getFullYear(), month: now.getMonth() + 1 };

  let totalMonths = (e.year - s.year) * 12 + (e.month - s.month) + 1;
  if (totalMonths < 1) totalMonths = 1;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'ano' : 'anos'}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? 'mês' : 'meses'}`);
  return parts.join(' ');
}

// Período consolidado da empresa a partir dos cargos (menor início, maior fim)
export function companyRange(roles) {
  const starts = roles.map((r) => r.start).sort();
  const hasCurrent = roles.some((r) => !r.end);
  const ends = roles.map((r) => r.end).filter(Boolean).sort();
  return {
    start: starts[0],
    end: hasCurrent ? null : ends[ends.length - 1],
  };
}
