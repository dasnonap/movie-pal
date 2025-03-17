export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="this-is-the-auth-layout">
      <div>{children}</div>
    </div>
  );
}
