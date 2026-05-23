import Verify from "@/app/components/form/Verify";

interface Props {
  searchParams: {
    email: string;
  };
}

export default async function page({ searchParams }: Props) {
  const { email } = await searchParams;
  return <Verify email={email} />;
}
