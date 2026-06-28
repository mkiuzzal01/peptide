import PopupInitializer from "../popup/PopupInitializer";
import { AnnouncementDialog } from "../popup/AnnouncementDialog";

type Props = {
  children: React.ReactNode;
};

export default function PopupProvider({ children }: Props) {
  return (
    <>
      <PopupInitializer />
      <AnnouncementDialog />
      {children}
    </>
  );
}
