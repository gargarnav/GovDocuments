
import '../layout.css'; // Ensure styles are available

export function AdContainer({ format = 'banner', className = '' }) {
    return (
        <div className={`ad-container ad-${format} ${className}`}>
            <span className="ad-label">Advertisement</span>
            <div className="ad-placeholder-content">
                {format === 'sidebar-bottom' ? (
                    <span>Space for Ad</span>
                ) : (
                    <span>Banner Ad Space (728x90)</span>
                )}
            </div>
        </div>
    );
}
