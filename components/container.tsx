export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="lg:max-w-5xl max-7-xl mx-auto">{children}</div>;
}
