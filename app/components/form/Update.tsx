'use client';
import Container from '../shared/Container';
import AppForm from './AppForm';
import { FieldValues } from 'react-hook-form';
import TextInput from './input-fields/TextInput';
import { ArrowLeft, Lock } from 'lucide-react';
import SubmitButton from '../buttons/SubmitButton';
import { useRouter } from 'next/navigation';

export default function Update() {
  const router = useRouter();
  const onSubmit = async (values: FieldValues, reset: () => void) => {
    console.log(values);
    reset();
  };
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
                Enter your new password.{' '}
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                Secure Your Account with a New Password.
              </p>
            </div>

            {/* FORM */}
            <AppForm
              onSubmit={onSubmit}
              defaultValues={{
                email: '',
              }}
            >
              <div className="space-y-6">
                <TextInput
                  icon={<Lock size={18} />}
                  label="Password"
                  name="password"
                  type="password"
                  className="h-12"
                  placeholder="Enter password"
                />

                <TextInput
                  icon={<Lock size={18} />}
                  label="Confirm Password"
                  name="confirm-password"
                  type="password"
                  className="h-12"
                  placeholder="Enter confirm password"
                />

                {/* SUBMIT */}
                <div className="pt-2">
                  <SubmitButton
                    text="Update Password"
                    className="h-12 w-full rounded-full"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="text-xs font-semibold text-gray-700 cursor-pointer"
                    onClick={() => {
                      router.push('/sign-in');
                    }}
                  >
                    Back
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
