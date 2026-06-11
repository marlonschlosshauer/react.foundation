import { AuthProvider } from "@/components/providers/auth-provider";
import { getServerAuthSession } from "@/lib/auth";

export default async function SessionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerAuthSession();
  return <AuthProvider session={session}>{children}</AuthProvider>;
}
