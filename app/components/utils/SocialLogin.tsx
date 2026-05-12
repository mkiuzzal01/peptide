import Action from '../buttons/Action';
import GoogleIcon from '../icons/GoogleIcon';

export default function SocialLogin() {
  return (
    <Action
      name="Continue with Google"
      icon={<GoogleIcon />}
      iconPosition="left"
      className="w-full bg-gray-100 border-gray-200 border text-gray-600 rounded-full h-12"
    />
  );
}
