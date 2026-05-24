import Verify from "@/app/components/form/Verify";

interface Props {
  searchParams: {
    email: string;
    from: string;
  };
}

export default async function page({ searchParams }: Props) {
  const { email, from } = await searchParams;
  return <Verify email={email} from={from} />;
}
