import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProdutosPage from '../pages/ProdutosPage'
import SegurancaPage from '../pages/SegurancaPage'
import EmpresaPage from '../pages/EmpresaPage'
import ContatoPage from '../pages/ContatoPage'
import PrivacidadePage from '../pages/PrivacidadePage'
import RemocaoDadosPage from '../pages/RemocaoDadosPage'
import PrivacidadeExclusaoRedirect from '../pages/PrivacidadeExclusaoPage'
import PrivacidadeResumoPage from '../pages/PrivacidadeResumoPage'
import TermosPage from '../pages/TermosPage'
import CookiesPage from '../pages/CookiesPage'
import LegacyRouteRedirect, { SolucoesLegacyRedirect } from '../pages/LegacyRouteRedirect'

const EcossistemaPage = lazy(() => import('../pages/public/EcossistemaPage'))

const fallback = (
  <div className="py-24 text-center text-sm text-text-muted">Carregando…</div>
)

export function publicRoutes() {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/produtos" element={<ProdutosPage />} />
      <Route path="/ecossistema" element={
        <Suspense fallback={fallback}>
          <EcossistemaPage />
        </Suspense>
      } />
      <Route path="/produto" element={<LegacyRouteRedirect kind="internal" to="/produtos" />} />
      <Route path="/plataforma" element={<LegacyRouteRedirect kind="internal" to="/ecossistema" />} />
      <Route path="/solucoes" element={<SolucoesLegacyRedirect />} />
      <Route path="/seguranca" element={<SegurancaPage />} />
      <Route path="/empresa" element={<EmpresaPage />} />
      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/privacidade" element={<PrivacidadePage />} />
      <Route path="/privacidade/exclusao-de-dados" element={<PrivacidadeExclusaoRedirect />} />
      <Route path="/privacidade/resumo" element={<PrivacidadeResumoPage />} />
      <Route path="/termos" element={<TermosPage />} />
      <Route path="/remocao-de-dados" element={<RemocaoDadosPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
    </>
  )
}
