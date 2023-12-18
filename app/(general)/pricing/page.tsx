import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Francisco pricing Page',
    description: 'Generated by love',
}

export default function PricingPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <span className="text-6xl font-bold">
                Pricing
            </span>
        </main>
    )
}