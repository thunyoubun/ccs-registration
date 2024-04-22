import { createClient } from "@supabase/supabase-js";
import { NextRequest } from "next/server";

// ใส่ URL และ API Key ของ Supabase ที่คุณได้รับ
const supabase = createClient(
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
  `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
);

// อ่านข้อมูลจากฐานข้อมูล
export async function GET(request: NextRequest) {
  const { data, error } = await supabase.from("applicants").select("*");
  if (error) {
    return {
      status: 500,
      body: error.message,
    };
  }
  return {
    status: 200,
    body: data,
  };
}
