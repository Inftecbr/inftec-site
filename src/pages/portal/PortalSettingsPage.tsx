import { Link } from 'react-router-dom'

import { PortalDataCard, PortalPageHeader } from '../../components/portal/ui'

import { PortalField, PortalSelect } from '../../components/portal/forms/PortalFormFields'

import { usePortalToast } from '../../components/portal/feedback/PortalToastProvider'

import { useConsolePreferences } from '../../features/console-preferences/ConsolePreferencesContext'

import { CONSOLE_PREFS_STORAGE_KEY } from '../../features/console-preferences/consolePreferencesStorage'

import type { ConsoleDensity } from '../../features/console-preferences/consolePreferencesStorage'



const DENSITY_LABELS: Record<ConsoleDensity, string> = {

  compact: 'Compacta — mais dados na tela',

  comfortable: 'Confortável — padrão do console',

  expanded: 'Expandida — mais respiro visual',

}



export default function PortalSettingsPage() {

  const toast = usePortalToast()

  const { density, advancedTools, setDensity, setAdvancedTools, resetPreferences } = useConsolePreferences()



  function onDensityChange(value: string) {

    const next = value as ConsoleDensity

    setDensity(next)

    toast.success(`Densidade: ${DENSITY_LABELS[next]}.`)

  }



  function onAdvancedChange(value: string) {

    const enabled = value === '1'

    setAdvancedTools(enabled)

    toast.success(enabled ? 'Modo técnico ativado.' : 'Modo técnico desativado.')

  }



  function onReset() {

    resetPreferences()

    toast.success('Preferências do console restauradas ao padrão.')

  }



  return (

    <div className="portal-section-stack flex flex-col">

      <PortalPageHeader

        title="Preferências do Console"

        description="Comportamento da UI administrativa INFTEC — suporte, troubleshooting e operação interna. Alterações aplicam imediatamente neste navegador."

        kicker="Console interno"

      />



      <PortalDataCard title="Layout operacional">

        <div className="p-4 space-y-4 max-w-lg">

          <PortalField

            label="Densidade da interface"

            hint="Altera padding, tabelas, cards e formulários. Não recolhe nem oculta itens do menu lateral."

          >

            <PortalSelect

              value={density}

              onChange={(e) => onDensityChange(e.target.value)}

              options={[

                { value: 'comfortable', label: DENSITY_LABELS.comfortable },

                { value: 'compact', label: DENSITY_LABELS.compact },

                { value: 'expanded', label: DENSITY_LABELS.expanded },

              ]}

            />

          </PortalField>

        </div>

      </PortalDataCard>



      <PortalDataCard title="Modo técnico (Advanced Tools)">

        <div className="p-4 space-y-4 max-w-lg">

          <PortalField

            label="Ferramentas avançadas"

            hint="Controla painéis JSON, payloads brutos, IDs internos e detalhes técnicos em erros."

          >

            <PortalSelect

              value={advancedTools ? '1' : '0'}

              onChange={(e) => onAdvancedChange(e.target.value)}

              options={[

                { value: '0', label: 'Oculto — console enxuto' },

                { value: '1', label: 'Ativo — visão técnica completa' },

              ]}

            />

          </PortalField>

          <ul className="text-xs text-text-muted list-disc pl-5 space-y-1">

            <li>Formulários: painel JSON opcional para payloads customizados</li>

            <li>Listagens: IDs internos auxiliares</li>

            <li>Erros: stack/detalhe técnico quando disponível</li>

            <li>Billing/diagnóstico: blocos de resposta bruta</li>

          </ul>

        </div>

      </PortalDataCard>



      <PortalDataCard title="Persistência local">

        <div className="p-4 text-sm text-text-secondary space-y-2 max-w-2xl">

          <p>

            Nesta fase as preferências ficam em <span className="font-mono text-xs">{CONSOLE_PREFS_STORAGE_KEY}</span>{' '}

            (localStorage). Idioma do console: <strong>pt-BR fixo</strong> (sem i18n). Preferências legadas de idioma são removidas na migração. Console interno INFTEC — não substitui perfil de usuário nem configuração de cliente SaaS.

          </p>

          <button

            type="button"

            className="rounded-lg border border-border px-4 py-2 text-sm text-text-primary hover:bg-bg-secondary"

            onClick={onReset}

          >

            Restaurar padrão do console

          </button>

        </div>

      </PortalDataCard>



      <p className="text-sm text-text-secondary">

        Runtime, Auth0, API e health check:{' '}

        <Link to="/app/diagnostics" className="text-data hover:underline">

          Centro de diagnóstico

        </Link>

      </p>

    </div>

  )

}

