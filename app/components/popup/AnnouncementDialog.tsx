"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { closeAnnouncement } from "@/redux/features/popup/popup.slice";
import { popupStorage } from "@/lib/storage";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export function AnnouncementDialog() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.popup.announcementOpen);
  const [rememberMe, setRememberMe] = useState(false);

  const handleAccept = () => {
    if (rememberMe) {
      popupStorage.markSeen();
    }
    dispatch(closeAnnouncement());
  };

  const handleReject = () => {
    if (typeof window !== "undefined") {
      if (document.referrer) {
        window.location.href = document.referrer;
      } else {
        window.location.href = "https://www.google.com";
      }
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="max-w-md px-2 md:px-8  md:max-w-lg max-h-[90vh] overflow-y-auto [&>button]:hidden">
        <DialogHeader className="text-center space-y-4">
          <DialogTitle className="text-2xl font-bold tracking-tight text-center">
            Age Verification & Disclaimer
          </DialogTitle>

          <DialogDescription className="text-sm text-muted-foreground text-left bg-muted p-4 rounded-md max-h-48 overflow-y-auto border">
            <strong>Disclaimer:</strong> I certify that I am at least 21 years
            of age, possess the necessary qualifications and expertise to
            conduct scientific research, and understand the nature of the
            materials being purchased. I acknowledge and agree that all products
            are sold strictly for lawful Research Use Only and are not intended
            for human or animal consumption, clinical applications, diagnostic
            procedures, therapeutic purposes, or any other unauthorized use. I
            accept full responsibility for ensuring compliance with all
            applicable federal, state, and local laws, regulations, and
            guidelines governing the purchase, possession, handling, storage,
            and use of these materials. I further assume all risks and
            liabilities associated with the handling and use of research
            materials and release the seller from any liability arising from
            misuse, improper handling, or use contrary to stated restrictions.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 pt-4">
          <Button
            className="w-full bg-primary text-white rounded-full py-6 text-base font-semibold"
            onClick={handleAccept}
          >
            Yes, I'm 21 or older
          </Button>

          <Button
            variant="destructive"
            className="w-full bg-[#b24138] hover:bg-[#94342c] text-white rounded-full py-6 text-base font-semibold"
            onClick={handleReject}
          >
            No, I'm under 21
          </Button>

          <div className="flex items-center space-x-2 mt-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(!!checked)}
            />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Remember me
            </label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
