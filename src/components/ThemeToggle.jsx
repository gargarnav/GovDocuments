
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark mode"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: '50%',
                transition: 'color 0.2s, background-color 0.2s',
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--color-primary)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--color-text-muted)';
                e.currentTarget.style.backgroundColor = 'transparent';
            }}
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}
