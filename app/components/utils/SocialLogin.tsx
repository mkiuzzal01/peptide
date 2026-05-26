"use client";
import Action from "../buttons/Action";
import GoogleIcon from "../icons/GoogleIcon";
import { toast } from "react-toastify";
import { signInWithGoogle } from "../lib/auth";
import { useSocialLoginMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { setUser } from "@/redux/features/auth/auth.slice";

export default function SocialLogin() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [socialLogin, { isLoading }] = useSocialLoginMutation();

  const handleGoogleLogin = async () => {
    try {
      const google = await signInWithGoogle();
      const payload = {
        provider: "google",
        token: (await google?.getIdToken()) || "",
      };

      const res = await socialLogin(payload).unwrap();
      console.log(res);

      dispatch(
        setUser({
          user: {
            id: google?.uid,
            name: google?.displayName as any,
            email: google?.email as any,
            role: "user",
            avatar: google?.photoURL,
            time_zone: "Asia/Dhaka",
          },
          token: "",
        }),
      );
      router.push("/");
      toast.success(`Welcome ${google?.displayName || "User"}`);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Action
      onClick={handleGoogleLogin}
      name="Continue with Google"
      icon={<GoogleIcon />}
      iconPosition="left"
      className="w-full bg-gray-100 border-gray-200 border text-gray-600 rounded-full h-12 hover:bg-gray-200 transition"
    />
  );
}
