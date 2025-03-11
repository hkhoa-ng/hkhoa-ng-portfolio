export default function BasicCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 rounded-md border dark:border-white/[0.2] bg-transparent drop-shadow-md">
      {children}
    </div>
  );
}
