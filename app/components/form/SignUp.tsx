'use client';

import { FieldValues } from 'react-hook-form';
import Container from '../shared/Container';
import AppForm from './AppForm';
import TextInput from './input-fields/TextInput';
import { Lock, Mail, User } from 'lucide-react';
import Image from 'next/image';
import SocialLogin from '../utils/SocialLogin';
import SubmitButton from '../buttons/SubmitButton';
import logo from '@/public/auth/sign-in.jpg';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

export default function SignUp() {
  const onSubmit = async (values: FieldValues, reset: () => void) => {
    console.log(values);
    reset();
  };

  return (
    <Container>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
          {/* ================= LEFT IMAGE ================= */}
          <div className="hidden md:flex items-center justify-center">
            <Image
              src={logo}
              alt="signin"
              className="w-full h-full object-cover"
            />
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            {/* HEADER */}
            <div className="flex justify-center items-center flex-col gap-1 mb-8">
              <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-2">
                Crate your account
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                Create your account for secure, seamless ordering
              </p>
            </div>

            {/* SOCIAL LOGIN */}
            <div className="space-y-4">
              <SocialLogin />

              {/* DIVIDER */}
              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-200 flex-1" />
                <span className="text-xs text-gray-400 uppercase">or</span>
                <div className="h-px bg-gray-200 flex-1" />
              </div>
            </div>

            {/* FORM */}
            <AppForm
              onSubmit={onSubmit}
              defaultValues={{
                name: '',
                email: '',
                password: '',
              }}
            >
              <div className="space-y-5">
                <TextInput
                  icon={<User size={18} />}
                  label="Full Name"
                  name="name"
                  className="h-12"
                  placeholder="Enter full name"
                />

                <TextInput
                  icon={<Mail size={18} />}
                  label="Email"
                  name="email"
                  className="h-12"
                  placeholder="Enter email"
                />

                <TextInput
                  icon={<Lock size={18} />}
                  label="Password"
                  name="password"
                  type="password"
                  className="h-12"
                  placeholder="Enter password"
                />

                <div className="flex items-center gap-2 py-2">
                  <Checkbox />
                  <label className="text-xs text-gray-700" htmlFor="terms">
                    I agree to Tech Takes Terms of Service and Privacy Policy.
                  </label>
                </div>

                {/* SUBMIT */}
                <SubmitButton text="Sign Up" className="h-12 rounded-full" />
                <div>
                  <p className="text-xs text-gray-700 text-center">
                    Already have an account?{' '}
                    <Link
                      href="/sign-in"
                      className="text-primary font-semibold"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </AppForm>
          </div>
        </div>
      </div>
    </Container>
  );
}
