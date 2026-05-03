import Link from "next/link";

type CTAButtonProps = {
    href: string;
    children: React.ReactNode;
    variant?: "dark" | "light" | "outline";
    external?: boolean;
};

export default function CTAButton({
                                      href,
                                      children,
                                      variant = "dark",
                                      external = false,
                                  }: CTAButtonProps) {
    const styles = {
        dark: "bg-stone-900 text-white hover:bg-rose-500",
        light: "bg-white text-stone-900 hover:bg-rose-500 hover:text-white",
        outline:
            "border border-white text-white hover:bg-white hover:text-stone-900",
    };

    const className = `rounded-full px-7 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${styles[variant]}`;

    if (external) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}