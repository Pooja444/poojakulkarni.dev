export enum Viewport {
    xs = 1,
    sm,
    md,
    lg,
    xl
}

export async function getViewport(): Promise<Viewport> {
    const width = typeof window == 'object' ? Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    ) : 0
    if (width <= 576) return Viewport.xs
    if (width <= 768) return Viewport.sm
    if (width <= 992) return Viewport.md
    if (width <= 1200) return Viewport.lg
    return Viewport.xl
}