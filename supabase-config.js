/* =========================================
   Supabase 接続設定ファイル
   ========================================= */

// Supabaseの接続情報
const SUPABASE_URL = "https://oigqxzmrurxywomdsyet.supabase.co";
const SUPABASE_KEY = "sb_publishable_6EGuWS6Lff0eWpTryKCZZw_Tr0LGoAr";

// Supabaseクライアントの初期化
if (typeof supabase !== 'undefined') {
  window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} else {
  console.error("Supabase CDNが読み込まれていません。");
}