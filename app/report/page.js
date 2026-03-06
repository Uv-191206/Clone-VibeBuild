'use client';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { GlassCard } from '@/components/UIComponents';

export default function ReportPage() {
    return (
        <div className="page-container" style={{ paddingTop: '8rem', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'relative' }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    padding: '0 1rem'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{
                            width: 50, height: 50, borderRadius: '15px',
                            background: 'var(--accent-blue-soft)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--accent-blue)',
                            boxShadow: 'var(--clay-shadow-inner)'
                        }}>
                            <FileText size={24} />
                        </div>
                        <h1 className="section-title" style={{ margin: 0, fontSize: '2rem' }}>Workshop Report</h1>
                    </div>

                    <a
                        href="/workshop_report.pdf"
                        download="Workshop_Report.pdf"
                        className="glow-btn"
                        style={{
                            padding: '10px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            textDecoration: 'none'
                        }}
                    >
                        <Download size={18} /> Download Report
                    </a>
                </div>

                <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                    Official documentation of the AI-Driven Solutions & VibeCoding Workshop
                </p>

                <GlassCard style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '1rem',
                    height: '80vh',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <iframe
                        src="/workshop_report.pdf#toolbar=0"
                        title="Workshop Report"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '16px',
                            border: 'none',
                            background: 'white'
                        }}
                    />
                </GlassCard>
            </motion.div>
        </div>
    );
}
