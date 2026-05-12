'use client';
import Container from '../shared/Container';
import { ArrowLeft, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AppForm from './AppForm';
import SubmitButton from '../buttons/SubmitButton';
import { FieldValues } from 'react-hook-form';
import TextInput from './input-fields/TextInput';
import OtpInput from './input-fields/OtpInput';

export default function Verify() {
  const router = useRouter();
  const onSubmit = async (values: FieldValues, reset: () => void) => {};
  return (
    <Container>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="grid grid-cols-1 w-full max-w-lg bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
          <div className="pt-4 px-4">
            <button
              className="flex items-center gap-2 text-xs cursor-pointer  font-semibold text-gray-700"
              onClick={() => {
                router.push('/sign-in');
              }}
            >
              <ArrowLeft size={18} />
              Back
            </button>
          </div>
          {/* ================= RIGHT FORM ================= */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            {/* HEADER */}
            <div className="flex justify-center items-center flex-col gap-1 mb-8">
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-2">
                Please check your email!{' '}
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                We&apos;ve emailed a 6-digit confirmation code to acb@domain,
                please enter the code in below box to verify your email.
              </p>
            </div>

            {/* FORM */}
            <AppForm onSubmit={onSubmit}>
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <OtpInput name="otp" label="Enter 6-digit code" />
                </div>
                {/* SUBMIT */}
                <div className="pt-2">
                  <SubmitButton
                    text="Verify"
                    className="h-12 w-full rounded-full"
                  />
                </div>
                <div className="flex justify-center items-center gap-1">
                  <p className="text-xs text-gray-700">
                    Didn&apos;t receive a code?{' '}
                  </p>
                  <button
                    type="button"
                    className="text-xs font-semibold text-primary cursor-pointer"
                    onClick={() => {
                      console.log(' clicked');
                    }}
                  >
                    Resend code?
                  </button>
                </div>
              </div>
            </AppForm>
          </div>
        </div>
      </div>
    </Container>
  );
}
