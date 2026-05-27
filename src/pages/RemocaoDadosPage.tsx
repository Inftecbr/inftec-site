import PageMeta from '../components/PageMeta'
import { LegalLayout } from '../components/LegalLayout'
import { DataRemovalBody } from '../content/legal/dataRemovalSections'
import { COMPANY, PRODUCT } from '../lib/constants'

export default function RemocaoDadosPage() {
  return (
    <>
      <PageMeta
        title="Remoção de dados | INFTEC — LGPD e Salefast"
        description="Procedimento enterprise de remoção e exclusão de dados pessoais na INFTEC e no Salefast: titularidade, integrações Meta/WhatsApp, prazos e canais oficiais."
        path="/remocao-de-dados"
      />
      <LegalLayout title="Remoção de dados" updated="26 de maio de 2026">
        <p className="text-text-secondary leading-relaxed border-l-2 border-data/40 pl-4">
          Procedimento oficial de <strong className="text-text-primary">eliminação e anonimização</strong> de dados
          pessoais tratados por {COMPANY.legalName} no hub {COMPANY.siteUrl} e na plataforma {PRODUCT.name}. Compatível
          com solicitações de titulares, administradores de tenant e requisitos de transparência para integrações OAuth.
        </p>
        <DataRemovalBody />
      </LegalLayout>
    </>
  )
}
