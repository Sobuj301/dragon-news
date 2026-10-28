
import { redirect } from "next/navigation";

//   const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
//   const data = await res.json()
//   return data.data;
// }
export default async function Home() {
  redirect('/category/0')
}
