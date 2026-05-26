import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProdutoPage from '../pages/ProdutoPage'
import SolucoesPage from '../pages/SolucoesPage'
import SegurancaPage from '../pages/SegurancaPage'
import EmpresaPage from '../pages/EmpresaPage'
import ContatoPage from '../pages/ContatoPage'
import PrivacidadePage from '../pages/PrivacidadePage'
import PrivacidadeExclusaoPage from '../pages/PrivacidadeExclusaoPage'
import PrivacidadeResumoPage from '../pages/PrivacidadeResumoPage'
import TermosPage from '../pages/TermosPage'
import CookiesPage from '../pages/CookiesPage'

const PlataformaPage = lazy(() => import('../pages/public/PlataformaPage'))

const fallback = (
  <div className="py-24 text-center text-sm text-text-muted">Carregando…</div>
)

export function publicRoutes() {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/produto" element={<ProdutoPage />} />
      <Route path="/solucoes" element={<SolucoesPage />} />
      <Route path="/seguranca" element={<SegurancaPage />} />
      <Route path="/empresa" element={<EmpresaPage />} />
      <Route path="/contato" element={<ContatoPage />} />
      <Route path="/privacidade" element={<PrivacidadePage />} />
      <Route path="/privacidade/exclusao-de-dados" element={<PrivacidadeExclusaoPage />} />
      <Route path="/privacidade/resumo" element={<PrivacidadeResumoPage />} />
      <Route path="/termos" element={<TermosPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
      <Route
        path="/plataforma"
        element={
          <Suspense fallback={fallback}>
            <PlataformaPage />
          </Suspense>
        }
      />
    </>
  )
}
