import { Suspense, useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import SettingsModal from './SettingsModal';
import { applyTheme } from '../utils/theme';
import { useAuth } from '../contexts/AuthContext';
import { WalletIcon, SettingsIcon, GoogleIcon } from './icons';

export default function Layout() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { user, isAdmin, permissions, signInWithGoogle, signOut, isAuthLoading } = useAuth();

  useEffect(() => {
    const savedTheme = localStorage.getItem('app_theme') || 'dark';
    applyTheme(savedTheme);
  }, []);

  const avatarLetter = user?.email?.charAt(0).toUpperCase() ?? '';
  const displayName = user?.user_metadata?.full_name ?? user?.email ?? '';

  return (
    <div className="app-wrapper">
      <header>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <WalletIcon />
            <span>QuotaTracker</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 500, padding: '0.2rem 0.55rem', borderRadius: '6px', background: 'rgba(99, 102, 241, 0.15)', color: 'var(--color-accent)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
              Subscriptions & Quota Hub
            </span>
          </h1>
          <div className="tabs">
            {permissions?.can_read_token_wallet && (
              <NavLink
                to="/"
                className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
                end
              >
                AI Quota & Tokens
              </NavLink>
            )}
            {permissions?.can_read_payments && (
              <NavLink
                to="/subscriptions"
                className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
              >
                Subscriptions & Chi Phí Gia Hạn
              </NavLink>
            )}
          </div>
        </div>
        <div className="header-actions">
          <button
            id="settings-btn"
            className="btn"
            onClick={() => setIsSettingsOpen(true)}
            title="Settings"
          >
            <SettingsIcon />
            Settings
          </button>

          {!isAuthLoading && (
            user ? (
              <div className="auth-user-chip">
                <div className="auth-avatar" title={displayName}>
                  {user.user_metadata?.avatar_url ? (
                    <img src={user.user_metadata.avatar_url} alt={avatarLetter} className="auth-avatar-img" />
                  ) : (
                    <span>{avatarLetter}</span>
                  )}
                  {isAdmin && <span className="auth-crown" title="Admin">👑</span>}
                </div>
                <span className="auth-name">{displayName}</span>
                <button className="btn btn-signout" onClick={signOut} title="Sign Out">
                  ↩
                </button>
              </div>
            ) : (
              <button className="btn btn-google-small" onClick={signInWithGoogle}>
                <GoogleIcon />
                Sign In
              </button>
            )
          )}
        </div>
      </header>

      <Suspense fallback={<div className="protected-spinner">Loading page...</div>}>
        <Outlet />
      </Suspense>

      {isSettingsOpen && <SettingsModal onClose={() => setIsSettingsOpen(false)} />}
    </div>
  );
}
