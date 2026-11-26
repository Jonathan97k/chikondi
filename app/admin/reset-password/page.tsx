import ResetPasswordForm from "./ResetPasswordForm";

export default async function AdminResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ userId?: string; secret?: string }>;
}) {
  const params = await searchParams;
  return <ResetPasswordForm userId={params.userId ?? ""} secret={params.secret ?? ""} />;
}
