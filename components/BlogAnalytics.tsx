"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export default function BlogAnalytics({
  slug,
}: {
  slug: string;
}) {
  useEffect(() => {
    sendGAEvent("event", "view_blog", {
      slug,
    });
  }, [slug]);

  return null;
}