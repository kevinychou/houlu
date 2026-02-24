import { NextResponse } from "next/server";
import {
  isSupabaseConfigured,
  requiredSupabaseEnvVars,
  supabaseNotConfiguredMessage,
} from "@/lib/supabase";

export function requireSupabaseConfig(): NextResponse | null {
  if (isSupabaseConfigured) {
    return null;
  }

  return NextResponse.json(
    {
      success: false,
      error: supabaseNotConfiguredMessage,
      requiredEnvVars: requiredSupabaseEnvVars,
    },
    { status: 503 }
  );
}
