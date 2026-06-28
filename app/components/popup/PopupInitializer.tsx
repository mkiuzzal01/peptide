"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openAnnouncement } from "@/redux/features/popup/popup.slice";
import { popupStorage } from "@/lib/storage";

export default function PopupInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!popupStorage.hasSeen()) {
      dispatch(openAnnouncement());
    }
  }, [dispatch]);

  return null;
}
