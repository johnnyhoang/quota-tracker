import { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

const TokenWallet = lazy(() => import('./pages/TokenWallet'));
const PaymentSchedule = lazy(() => import('./pages/PaymentSchedule'));

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Token Wallet - Default */}
            <Route
              index
              element={
                <ProtectedRoute requiredPermission="can_read_token_wallet">
                  <TokenWallet />
                </ProtectedRoute>
              }
            />
            <Route
              path="tokens"
              element={
                <ProtectedRoute requiredPermission="can_read_token_wallet">
                  <TokenWallet />
                </ProtectedRoute>
              }
            />
            <Route
              path="token-wallet"
              element={
                <ProtectedRoute requiredPermission="can_read_token_wallet">
                  <TokenWallet />
                </ProtectedRoute>
              }
            />

            {/* Subscriptions & Payment Schedule */}
            <Route
              path="subscriptions"
              element={
                <ProtectedRoute requiredPermission="can_read_payments">
                  <PaymentSchedule />
                </ProtectedRoute>
              }
            />
            <Route
              path="payments"
              element={
                <ProtectedRoute requiredPermission="can_read_payments">
                  <PaymentSchedule />
                </ProtectedRoute>
              }
            />
            <Route
              path="payment-schedule"
              element={
                <ProtectedRoute requiredPermission="can_read_payments">
                  <PaymentSchedule />
                </ProtectedRoute>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
