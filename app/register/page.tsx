import AuthLayout from "@/modules/auth/components/AuthLayout";
import RegisterForm from "@/modules/auth/components/RegisterForm";

function Page() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}

export default Page;
