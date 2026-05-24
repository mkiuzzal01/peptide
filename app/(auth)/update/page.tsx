import Update from "@/app/components/form/Update";

interface Props {
  searchParams: {
    t: string;
  };
}

export default async function page({ searchParams }: Props) {
  const { t: token } = await searchParams;

  return <Update token={token} />;
}
