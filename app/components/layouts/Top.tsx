import Container from '../shared/Container';

export default function Top() {
  return (
    <div className="bg-[var(--Primary-blue-50,#E6F2FF)]">
      <Container className="flex justify-center items-center min-h-10">
        <h3 className="text-xs font-semibold">
          Need help? Text us, and a team member will reply in mins{' '}
          <span className="text-xs font-semibold text-[#037FFF]">
            +1 (972) 919-0219
          </span>
        </h3>
      </Container>
    </div>
  );
}
