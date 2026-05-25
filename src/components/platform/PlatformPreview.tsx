import { motion } from 'framer-motion'

const leads = [
  {
    name: 'Marina Costa',
    channel: 'WhatsApp',
    unit: 'Torre Aurora · 3 dorm',
    score: 92,
    intent: 'Alta intenção',
    signal: 'Pediu tabela + visita sábado',
    time: '2 min',
    priority: 1,
  },
  {
    name: 'Grupo Invest SP',
    channel: 'Instagram',
    unit: 'Portfolio lançamento',
    score: 78,
    intent: 'Comparando opções',
    signal: 'Retorno após 48h sem resposta',
    time: '14 min',
    priority: 2,
  },
  {
    name: 'Ricardo Almeida',
    channel: 'WhatsApp',
    unit: 'Studio Moema',
    score: 61,
    intent: 'Aquecimento',
    signal: 'Perguntou financiamento',
    time: '38 min',
    priority: 3,
  },
]

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 85 ? 'text-success border-success/30 bg-success/10' : score >= 70 ? 'text-data border-data/30 bg-data/10' : 'text-warning border-warning/30 bg-warning/10'
  return (
    <span className={`font-mono text-xs px-2 py-0.5 rounded border ${color}`}>{score}</span>
  )
}

export default function PlatformPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
      <div className="rounded-2xl border border-border-strong bg-bg-secondary overflow-hidden shadow-2xl shadow-black/50">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-surface/80">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="font-mono text-[10px] sm:text-xs text-text-muted">app.salefast.com.br · operação</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Live
          </span>
        </div>

        <div className="grid lg:grid-cols-5 min-h-[320px] sm:min-h-[380px]">
          {/* Queue */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-3 sm:p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-medium text-text-secondary">Fila operacional</p>
              <span className="font-mono text-[10px] text-text-muted">12 ativos</span>
            </div>
            <ul className="space-y-2">
              {leads.map((lead) => (
                <li
                  key={lead.name}
                  className={`rounded-lg border p-2.5 sm:p-3 transition-colors ${
                    lead.priority === 1
                      ? 'border-accent/40 bg-accent/5'
                      : 'border-border bg-bg-primary/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{lead.name}</p>
                      <p className="text-[11px] text-text-muted truncate">{lead.unit}</p>
                    </div>
                    <ScoreBadge score={lead.score} />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-bg-elevated text-text-secondary">
                      {lead.channel}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-bg-elevated text-data">{lead.intent}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Detail + timeline */}
          <div className="lg:col-span-3 p-3 sm:p-4 flex flex-col">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <p className="text-sm font-semibold">Marina Costa</p>
                <p className="text-xs text-text-muted">Contexto omnichannel · Torre Aurora</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-secondary">Intenção</span>
                <ScoreBadge score={92} />
              </div>
            </div>

            <div className="rounded-lg border border-border bg-bg-primary/80 p-3 mb-3 flex-1">
              <p className="text-[10px] uppercase tracking-wider text-text-muted mb-2">Sinais de comportamento</p>
              <ul className="space-y-1.5 text-xs text-text-secondary">
                <li className="flex gap-2">
                  <span className="text-data font-mono shrink-0">→</span>
                  Retorno em &lt; 5 min após envio de material
                </li>
                <li className="flex gap-2">
                  <span className="text-data font-mono shrink-0">→</span>
                  {leads[0].signal}
                </li>
                <li className="flex gap-2">
                  <span className="text-data font-mono shrink-0">→</span>
                  Padrão compatível com fechamento em 7–14 dias
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-wider text-text-muted">Timeline</p>
              <div className="flex gap-2 text-[11px]">
                <span className="font-mono text-text-muted shrink-0">09:41</span>
                <span className="text-text-secondary">WhatsApp · &quot;Consegue visita sábado de manhã?&quot;</span>
              </div>
              <div className="flex gap-2 text-[11px]">
                <span className="font-mono text-text-muted shrink-0">09:38</span>
                <span className="text-text-secondary">E-mail · abriu tabela de preços (2x)</span>
              </div>
              <div className="flex gap-2 text-[11px]">
                <span className="font-mono text-text-muted shrink-0">Ontem</span>
                <span className="text-text-secondary">Instagram · respondeu story da unidade</span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
              <span className="text-xs text-accent font-medium">Prioridade #1 · agir agora</span>
              <span className="font-mono text-[10px] text-text-muted">atualizado há {leads[0].time}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
